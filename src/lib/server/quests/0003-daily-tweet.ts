import { and, eq, or, sql } from 'drizzle-orm';

import { OnError, Quest } from '$lib/quests';
import { db, points, tweets } from '$lib/server/db';
import { Memoize } from '$lib/utils/decorators';

export class Quest0003DailyTweet extends Quest {
  id = '0003-daily-tweet';
  component = 'Quest3';
  points = 0;
  title = 'Quest 3: daily tweet';

  override async complete() {
    return false;
  }

  override async getStatus() {
    return 'locked' as const;
  }

  async toJSON() {
    const meta = await super.toJSON();

    if (!this.userId) return meta;

    const userTweets = await db
      .select()
      .from(tweets)
      .where(eq(tweets.userId, this.userId));

    const tweetPoints = await db
      .select()
      .from(points)
      .where(
        or(
          ...userTweets.map(({ userId, createdAt }) =>
            and(
              eq(points.acquiredAt, createdAt),
              eq(points.questId, this.id),
              eq(points.userId, userId)
            )
          )
        )
      );

    return {
      ...meta,
      tweets: userTweets.map((tweet) => ({
        ...tweet,
        points: tweetPoints.find(
          ({ acquiredAt }) => acquiredAt.getTime() === tweet.createdAt.getTime()
        )?.points
      }))
    };
  }
}
