import { and, eq } from 'drizzle-orm';

import { db, points } from '$lib/server/db';

export const quest1 = {
  id: 'quest-1',
  points: 1000,

  async verify(userId: string) {
    const result = await db.query.points.findFirst({
      where: (points) =>
        and(eq(points.userId, userId), eq(points.questId, this.id))
    });

    return Boolean(result);
  },

  async complete(userId: string) {
    if (await this.verify(userId)) {
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
  }
};
