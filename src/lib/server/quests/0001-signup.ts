import { and, eq } from 'drizzle-orm';

import { makeQuest } from '$lib/quests';
import { db, points } from '$lib/server/db';

export const quest1 = makeQuest({
  id: '0001-signup',
  component: 'Quest1',
  points: 1000,
  title: 'Quest 1',

  async complete(userId: string) {
    if (await this.isCompleted?.(userId)) {
      console.log(`Quest (${this.id}): already completed.`);
      return;
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
    if (!userId) return 'available';
    if (await this.isCompleted?.(userId)) return 'done';
    return 'available';
  },

  async isCompleted(userId: string) {
    const result = await db.query.points.findFirst({
      where: (points) =>
        and(eq(points.userId, userId), eq(points.questId, this.id))
    });

    return Boolean(result);
  }
});
