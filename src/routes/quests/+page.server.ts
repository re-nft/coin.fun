import { eq, sum } from 'drizzle-orm';

import { db, points } from '$lib/server/db';

export async function load({ locals: { safeGetSession } }) {
  const { user } = await safeGetSession();

  if (!user?.id) return { userData: undefined };

  const [userData, [{ userPoints }]] = await Promise.all([
    db.query.profiles.findFirst({
      where: (profiles) => eq(profiles.id, user.id)
    }),
    db
      .select({ userPoints: sum(points.points) })
      .from(points)
      .where(eq(points.userId, user.id))
      .limit(1)
  ]);

  return { userData, userPoints: Number(userPoints) };
}
