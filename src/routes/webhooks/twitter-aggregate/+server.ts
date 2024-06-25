import { type Config } from '@sveltejs/adapter-vercel';
import { desc, eq, or } from 'drizzle-orm';

import { env } from '$env/dynamic/private';
import {
  db,
  profiles,
  tweetIndexerLogs,
  type TweetInsert,
  tweets,
  tweetToInsert
} from '$lib/server/db';
import { getQuoted, getSearch } from '$lib/server/twitter';

// Our launching tweet: https://x.com/coindotfun/status/1791164388579119340
const COINDOTFUN_FIRST_TWEET_DATE = new Date('2024-05-16T17:50:43.000Z');

export const config: Config = {
  maxDuration: 300
};

export async function GET({ request }) {
  if (!env.SOCIALDATA_API_KEY)
    return new Response('No "SOCIALDATA_API_KEY" found.', { status: 401 });

  const socialDataApiKey = request.headers
    .get('Authorization')
    ?.replace(/\s*bearer\s+(\S+)\s*/gi, '$1');

  if (env.SOCIALDATA_API_KEY !== socialDataApiKey)
    return new Response('Invalid "SOCIALDATA_API_KEY".', { status: 401 });

  const lastLog = await db
    .select()
    .from(tweetIndexerLogs)
    .where(eq(tweetIndexerLogs.status, 'succeeded'))
    .orderBy(desc(tweetIndexerLogs.completedAt))
    .limit(1);

  const sinceTime = Math.floor(
    (lastLog.at(0)?.completedAt ?? COINDOTFUN_FIRST_TWEET_DATE).getTime() / 1000
  );

  console.debug(`Twitter aggregation: starting from epoch ${sinceTime}`);

  // 1. First pass gets all tweets mentioning @coindotfun, but not from
  //    @coindotfun. We include replies because tweets starting with
  //    @coindotfun will be marked as a reply in the twitter search API even
  //    when there's no specific tweet being relpied to.
  //
  //    We also include `nativeretweets` so we'll already have the batch
  //    of replied tweets by possible hefties.
  //
  //    What we should end up with is a list of newly generated memes
  //    and retweeted memes. Quoted tweets are still missing which is
  //    why we need a second pass.
  const tweetsToIndex = await getSearch(
    '(@coindotfun) -from:coindotfun include:nativeretweets',
    { sinceTime }
  );

  console.debug(`Twitter aggregation: found ${tweetsToIndex.length} tweets`);

  // 2. Second pass is grabbing all retweeted and quoted tweets from
  //    the batch retrieved in #1, filtered by accounts with >5k followers.
  const quotesToIndex = await getQuoted(tweetsToIndex, { sinceTime });

  console.debug(`Twitter aggregation: found ${quotesToIndex.length} quoted`);

  const allToIndex = [tweetsToIndex, quotesToIndex].flat();

  console.debug(`Twitter aggregation: found ${allToIndex.length} total`);

  const profilesInTweets = await db
    .select({ id: profiles.id, twitterUserId: profiles.twitterUserId })
    .from(profiles)
    .where(
      or(
        ...allToIndex.map((status) =>
          eq(profiles.twitterUserId, status.user.id_str)
        )
      )
    );

  const values = allToIndex.reduce<TweetInsert[]>((values, status) => {
    const profile = profilesInTweets.find(
      (profile) => profile.twitterUserId === status.user.id_str
    );

    if (profile) values.push(tweetToInsert({ profile, status }));

    return values;
  }, []);

  console.debug(`Twitter aggregation: found ${values.length} eligible`);

  let status = 'none';

  try {
    if (values.length)
      await db.insert(tweets).values(values).onConflictDoNothing();
    status = 'succeeded';
  } catch (error) {
    console.error(`Twitter aggregation: failed`, error);
    status = 'failed';
  }

  if (allToIndex.length)
    await db
      .insert(tweetIndexerLogs)
      .values({
        data: allToIndex,
        eligibleCount: values.length,
        quoteCount: quotesToIndex.length,
        status,
        tweetCount: tweetsToIndex.length
      })
      .onConflictDoNothing();

  console.debug('Twitter aggregation: done');

  return new Response(null, { status: 204 });
}
