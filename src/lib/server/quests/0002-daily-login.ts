import { and, eq, sql } from 'drizzle-orm';

import { Memoize, QuestV2 } from '$lib/quests';
import { db, points } from '$lib/server/db';

export class Quest0002DailyLogin extends QuestV2 {
  id = '0002-daily-login';
  component = 'Quest2';
  points = 100000;
  title = 'Quest 2: daily check-in';

  override async complete() {
    if (!this.user?.id) return false;
    if (await this.isCompleted()) {
      console.log(`Quest (${this.id}): already completed.`);
      return false;
    }

    try {
      const [result] = await db
        .insert(points)
        .values({
          points: this.points,
          questId: this.id,
          userId: this.user.id
        })
        .returning();

      return Boolean(result);
    } catch (error) {
      console.error(`Could complete Quest "${this.id}":`, error);
      return false;
    }
  }

  override async getStatus() {
    if (!this.user?.id) return 'locked';
    if (await this.isCompleted()) return 'done';
    if (await this.isAvailable()) return 'available';
    return 'locked';
  }

  @Memoize
  override async isAvailable() {
    if (!this.user?.id) return false;

    try {
      const [result] = await db
        .select()
        .from(points)
        .where(
          and(
            eq(points.userId, this.user.id),
            eq(points.questId, this.id),
            sql`${points.acquiredAt} > now() - INTERVAL '24 hours'`
          )
        )
        .limit(1);

      return !result;
    } catch (error) {
      console.error(
        `Could determine availability for Quest "${this.id}":`,
        error
      );
      return false;
    }
  }

  @Memoize
  override async isCompleted() {
    if (!this.user?.id) return false;

    try {
      const [result] = await db
        .select()
        .from(points)
        .where(
          and(
            eq(points.userId, this.user.id),
            eq(points.questId, this.id),
            sql`${points.acquiredAt} > now() - INTERVAL '24 hours'`
          )
        )
        .limit(1);

      return Boolean(result);
    } catch (error) {
      console.error(
        `Could determine completion for Quest "${this.id}":`,
        error
      );
      return false;
    }
  }
}
