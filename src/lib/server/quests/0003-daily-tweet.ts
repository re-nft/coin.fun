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

    const data = await db
      .select({
        id: tweets.id,
        fullText: tweets.fullText,
        createdAt: tweets.createdAt,
        points: points.points
      })
      .from(tweets)
      .leftJoin(
        points,
        and(
          eq(points.acquiredAt, tweets.createdAt),
          eq(points.questId, this.id),
          eq(points.userId, tweets.userId)
        )
      )
      .where(eq(tweets.userId, this.userId));

    return { ...meta, tweets: data };
  }
}

export type Pretty<T> = {
  [Key in keyof T]: T[Key];
};
export type QuestData = Pretty<
  Awaited<ReturnType<Quest0003DailyTweet['toJSON']>>
>;
