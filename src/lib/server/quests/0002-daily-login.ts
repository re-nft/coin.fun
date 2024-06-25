import { and, eq, sql } from 'drizzle-orm';

import { OnError, Quest } from '$lib/quests';
import { db, points } from '$lib/server/db';
import { Memoize } from '$lib/utils/decorators';

export class Quest0002DailyLogin extends Quest {
  id = '0002-daily-login';
  component = 'Quest2';
  publicMethods = ['complete'];
  title = 'Quest 2: daily check-in';
  points = 0;

  @OnError(false)
  override async complete(i: number) {
    if (!this.userId) return false;
    if (await this.isCompleted()) {
      console.log(`Quest (${this.id}): already completed.`);
      return false;
    }

    const [result] = await db
      .insert(points)
      .values({
        points: i,
        questId: this.id,
        userId: this.userId
      })
      .returning();

    return Boolean(result);
  }

  override async getStatus() {
    if (!this.userId) return 'locked';
    if (await this.isCompleted()) return 'done';
    return 'available';
  }

  @OnError(false)
  @Memoize
  async isCompleted() {
    if (!this.userId) return false;

    const [result] = await db
      .select()
      .from(points)
      .where(
        and(
          eq(points.userId, this.userId),
          eq(points.questId, this.id),
          sql`${points.acquiredAt} > now() - INTERVAL '24 hours'`
        )
      )
      .limit(1);

    return Boolean(result);
  }
}
