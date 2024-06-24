import { and, eq, or, sql } from 'drizzle-orm';

import { OnError, Quest } from '$lib/quests';
import { db, points, tweets } from '$lib/server/db';
import { getTweet } from '$lib/server/twitter';
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

  async registerTweet(urlStr: string) {
    if (!this.userId) throw new Error('Not signed in.');

    try {
      const url = new URL(urlStr);
      const [, , id] = url.pathname.split('/');

      if (!id) throw new Error(`No valid id: ${id}`);

      const [{ existingId = undefined }] = await db
        .select({ existingId: tweets.id })
        .from(tweets)
        .where(and(eq(tweets.id, id)))
        .limit(1);

      if (existingId) throw new Error(`We already have this tweet.`);

      const status = await getTweet(id);

      // TODO: save in DB

      return { id };
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new Error(`Not a valid URL.`);
    }
  }
}

export type Pretty<T> = {
  [Key in keyof T]: T[Key];
};
export type QuestData = Pretty<
  Awaited<ReturnType<Quest0003DailyTweet['toJSON']>>
>;
