import { and, eq, sql } from 'drizzle-orm';

import { OnError, Quest } from '$lib/quests';
import { db, points } from '$lib/server/db';
import { Memoize } from '$lib/utils/decorators';
import { getDateIdIndex } from '$lib/utils/number';

export class Quest0002DailyLogin extends Quest {
  id = '0002-daily-login';
  component = 'Quest2';
  publicMethods = ['complete'];
  title = 'Quest 2: daily check-in';
  points = 0;
  spinningDivision = [10000, 30000, 40000, 50000, 60000, 70000, 80000, 100000];

  @OnError(false)
  override async complete() {
    if (!this.userId) return false;

    if (await this.isCompleted()) {
      console.log(`Quest (${this.id}): already completed.`);
      return false;
    }

    const [result] = await db
      .insert(points)
      .values({
        points:
          this.spinningDivision[
            getDateIdIndex(this.userId, this.spinningDivision.length)
          ],
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

  async toJSON() {
    const meta = await super.toJSON();

    if (!this.userId)
      return {
        ...meta,
        spinningDivision: this.spinningDivision
      };

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

    return {
      ...meta,
      points: result?.points || 0,
      spinPointsIdx: getDateIdIndex(this.userId, this.spinningDivision.length),
      spinningDivision: this.spinningDivision
    };
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
