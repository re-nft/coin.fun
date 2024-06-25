import type { TwitterStatus } from '$lib/server/twitter';

import type { Profile, TweetInsert } from './types';

export function tweetToInsert({
  profile,
  status
}: {
  profile: Pick<Profile, 'id' | 'twitterUserId'>;
  status: TwitterStatus;
}): TweetInsert {
  return {
    createdAt: new Date(status.tweet_created_at),
    entities: status.entities,
    fullText: status.full_text,
    id: status.id_str,
    userId: profile.id,
    favoriteCount: status.favorite_count,
    quoteCount: status.quote_count,
    quotedId: status.quoted_status?.id_str,
    repliedToId: status.in_reply_to_status_id_str,
    replyCount: status.reply_count,
    retweetCount: status.retweet_count,
    retweetedId: status.retweeted_status?.id_str
  };
}
