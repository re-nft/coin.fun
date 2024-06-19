import { desc, eq, or } from 'drizzle-orm';

import { env } from '$env/dynamic/private';
import { db, profiles, type TweetInsert, tweets } from '$lib/server/db';
import { getQuoted, getSearch } from '$lib/server/twitter';

// Our launching tweet: https://x.com/coindotfun/status/1791164388579119340
const FIRST_COINDOTFUN_TWEET_ID = 1791164388579119340n;

export async function POST({ request }) {
  if (!env.SOCIALDATA_API_KEY)
    return new Response('No "SOCIALDATA_API_KEY" found.', { status: 401 });

  const tweetsIndexed = await db
    .select({
      id: tweets.id
    })
    .from(tweets)
    .orderBy(desc(tweets.createdAt))
    .limit(1);

  const minId = tweetsIndexed.at(0)?.id ?? FIRST_COINDOTFUN_TWEET_ID;

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
    { minId }
  );

  // 2. Second pass is grabbing all retweeted and quoted tweets from
  //    the batch retrieved in #1, filtered by accounts with >5k followers.
  //
  //    What we need to do here is end up with a list of tweet ids we need
  //    to loop over to check whether they've been quoted by a heftie.
  for (const status of await getQuoted(tweetsToIndex, { minId }))
    tweetsToIndex.push(status);

  const profilesInTweets = await db
    .select({ id: profiles.id, twitterUserId: profiles.twitterUserId })
    .from(profiles)
    .where(
      or(
        ...tweetsToIndex.map((status) =>
          eq(profiles.twitterUserId, BigInt(status.user.id))
        )
      )
    );

  const values = tweetsToIndex.reduce<TweetInsert[]>((values, status) => {
    const profile = profilesInTweets.find(
      (profile) => profile.twitterUserId === BigInt(status.user.id)
    );

    if (profile) {
      values.push({
        createdAt: new Date(status.tweet_created_at),
        entities: status.entities,
        fullText: status.full_text,
        id: BigInt(status.id),
        userId: profile.id,
        favoriteCount: status.favourite_count,
        quoteCount: status.quote_count,
        quotedId:
          status.quoted_status?.id ? BigInt(status.quoted_status.id) : null,
        repliedToId:
          status.in_reply_to_status_id ?
            BigInt(status.in_reply_to_status_id)
          : null,
        replyCount: status.reply_count,
        retweetCount: status.retweet_count,
        retweetedId:
          status.retweeted_status?.id ?
            BigInt(status.retweeted_status.id)
          : null
      });
    }

    return values;
  }, []);

  await db.insert(tweets).values(values);

  return new Response(null, { status: 204 });
}
