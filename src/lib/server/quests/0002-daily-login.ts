import { and, eq, sql } from 'drizzle-orm';

import { makeQuest } from '$lib/quests';
import { db, points } from '$lib/server/db';

export const quest2 = makeQuest({
  id: '0002-daily-login',
  component: 'Quest2',
  points: 1000,
  title: 'Quest 2: daily check-in',

  async complete(userId: string) {
    if (await this.isCompleted?.(userId)) {
      console.log(`Quest (${this.id}): already completed.`);
      return false;
    }

    const [result] = await db
      .insert(points)
      .values({
        points: this.points,
        questId: this.id,
        userId
      })
      .returning();

    return Boolean(result);
  },

  async getStatus(userId?: string) {
    if (!userId) return 'locked';
    if (await this.isCompleted?.(userId)) return 'done';
    if (await this.isAvailable?.(userId)) return 'available';
    return 'locked';
  },

  async isAvailable(userId: string) {
    const result = await db.query.points.findFirst({
      where: (points) =>
        and(
          eq(points.userId, userId),
          eq(points.questId, this.id),
          sql`${points.acquiredAt} > now() - INTERVAL '24 hours'`
        )
    });

    return !result;
  },

  async isCompleted(userId: string) {
    const result = await db.query.points.findFirst({
      where: (points) =>
        and(
          eq(points.userId, userId),
          eq(points.questId, this.id),
          sql`${points.acquiredAt} > now() - INTERVAL '24 hours'`
        )
    });

    return Boolean(result);
  }
});
