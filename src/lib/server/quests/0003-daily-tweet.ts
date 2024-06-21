import { and, eq, sql } from 'drizzle-orm';

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
    return {
      ...meta,
      tweets: await db
        .select()
        .from(tweets)
        .where(eq(tweets.userId, this.userId))
    };
  }
}
