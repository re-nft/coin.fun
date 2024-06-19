import { desc, or } from 'drizzle-orm';

import { env } from '$env/dynamic/private';
import { db, profiles, tweets } from '$lib/server/db';
import { fetchSocialData, type TwitterStatus } from '$lib/server/twitter';

// Our launching tweet: https://x.com/coindotfun/status/1791164388579119340
const FIRST_COINDOTFUN_TWEET_ID = 1791164388579119340n;
const TWEETS_QUERY = '(@coindotfun) -from:coindotfun include:nativeretweets';
const QUOTE_TWEETS_MAX_QUERY_CHARS = 456;

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

  const untilTweetId =
    tweetsIndexed.length ? tweetsIndexed[0].id : FIRST_COINDOTFUN_TWEET_ID;

  const tweetsToIndex: TwitterStatus[] = [];

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

  const searchUrl = new URL('https://api.socialdata.tools/twitter/search');
  searchUrl.searchParams.set('type', 'Latest');
  searchUrl.searchParams.set(
    'query',
    `${TWEETS_QUERY} since_id:${untilTweetId}`
  );

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const res = await fetchSocialData<{
      next_cursor: string;
      tweets: TwitterStatus[];
    }>(searchUrl);

    // We're assuming that paging through results is done after we
    // stop
    if (!res.tweets.length) break;

    const maxTweetId = res.tweets.at(-1)?.id ?? untilTweetId;
    searchUrl.searchParams.set(
      'query',
      `${TWEETS_QUERY} since_id:${untilTweetId} max_id:${maxTweetId}`
    );

    for (const status of res.tweets) tweetsToIndex.push(status);
  }

  // 2. Second pass is grabbing all retweeted and quoted tweets from
  //    the batch retrieved in #1, filtered by accounts with >5k followers.
  //
  //    What we need to do here is end up with a list of tweet ids we need
  //    to loop over to check whether they've been quoted by a heftie.
  const quotedTweetIds = tweetsToIndex.reduce<bigint[]>(
    (quotedTweetIds, status) => {
      // Only add a pointer when we have a tweet that's been quoted.
      if (status.quote_count) {
        quotedTweetIds.push(BigInt(status.id));
      }
      return quotedTweetIds;
    },
    []
  );

  // Create batches of search requests for quoted_tweet_id:[id] so
  // it doens't make the query parameter larger than 457 chars which
  // equates to `512 - ' since_id:[id] max_id:[id]'.length. See:
  // https://developer.x.com/en/docs/twitter-api/tweets/search/integrate/build-a-query#limits
  // This should allow us to process 12 tweets per request while
  // still being able to tack on the poor-man's pagination.
  const batchedQuoteSearches = quotedTweetIds.reduce<string[]>(
    (batchedQuoteSearches, id) => {
      const prevStr = batchedQuoteSearches.at(-1) ?? '';
      const currStr = `quoted_tweet_id:${id}`;
      const nextStr = `${prevStr} ${currStr}`;

      if (nextStr.length > QUOTE_TWEETS_MAX_QUERY_CHARS) {
        batchedQuoteSearches.push(currStr);
      } else {
        batchedQuoteSearches[batchedQuoteSearches.length - 1] = nextStr;
      }

      return batchedQuoteSearches;
    },
    []
  );

  for (const query of batchedQuoteSearches) {
    searchUrl.searchParams.set('query', `${query} since_id:${sinceTweetId}`);
    const res = await fetchSocialData;
  }

  return new Response(null, { status: 204 });
}
