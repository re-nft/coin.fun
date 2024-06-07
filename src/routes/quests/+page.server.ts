import { eq, sum } from 'drizzle-orm';

import { db, points } from '$lib/server/db';
import * as Quests from '$lib/server/quests';

export async function load({ locals: { safeGetSession } }) {
  const { session, user } = await safeGetSession();

  const [userData, [{ userPoints }]] = await Promise.all(
    user?.id ?
      [
        db.query.profiles.findFirst({
          where: (profiles) => eq(profiles.id, user.id)
        }) ?? undefined,
        db
          .select({ userPoints: sum(points.points) })
          .from(points)
          .where(eq(points.userId, user.id))
          .limit(1)
      ]
    : [undefined, [{ userPoints: 0 }]]
  );

  const quests = await Promise.all(
    Array.from(Object.values(Quests)).map(async (quest) => {
      if (quest?.onLoad) await quest.onLoad(user?.id);
      return {
        id: quest.id,
        component: quest.component,
        points: quest.points,
        status: await quest.getStatus(user?.id),
        session,
        userData
      };
    })
  );

  return { quests, userData, userPoints: Number(userPoints) };
}
