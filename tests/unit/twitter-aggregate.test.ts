import { describe, expect, it } from 'vitest';

import { tweets } from './fixtures/tweets.json';

it('indexes tweets', () => {
  console.log({ tweets });

  expect(tweets).toHaveLength(10);

  const normieTweets = [];

  for (const tweet of tweets) {
    if (tweet.user.followers_count > 5000) continue;
    normieTweets.push(tweet);
  }

  expect(normieTweets).toHaveLength(7);
});
