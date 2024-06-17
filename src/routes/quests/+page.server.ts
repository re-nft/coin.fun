import { eq, sum } from 'drizzle-orm';

import type { QuestStatus } from '$lib/quests';
import { db, points } from '$lib/server/db';
import * as Quests from '$lib/server/quests';
import { getUTCDate, getUTCDayStart } from '$lib/utils/date';

export async function load({ locals: { safeGetSession } }) {
  const { session, user } = await safeGetSession();

  const userData =
    user?.id ?
      await db.query.profiles.findFirst({
        where: (profiles) => eq(profiles.id, user.id)
      })
    : undefined;

  // NOTE: in some cases `Quest.onLoad()` contains DB writes so we want to make
  // sure these are resolved before we read the user's points.
  const quests = await Promise.all(
    Array.from(Object.values(Quests)).map(async (quest) => {
      try {
        if (quest?.onLoad) await quest.onLoad(user?.id);
      } catch (error) {
        console.error(`Error in Quest(${quest.id}).onLoad:`, error);
      }

      let status: QuestStatus | undefined;
      try {
        status = await quest.getStatus(user?.id);
      } catch (error) {
        status = 'error';
        console.error(`Error in Quest(${quest.id}).getStatus:`, error);
      }

      return {
        id: quest.id,
        component: quest.component,
        points: quest.points,
        status,
        title: quest.title,
        session,
        userData
      };
    })
  );

  const [{ userPoints }] =
    user?.id ?
      await db
        .select({ userPoints: sum(points.points) })
        .from(points)
        .where(eq(points.userId, user.id))
        .limit(1)
    : [{ userPoints: undefined }];

  // Constant flow points. IG this is actually a part of quest 1?
  const virtualPoints =
    userPoints && userData ?
      Number(userPoints) +
      Math.floor(
        (getUTCDate().getTime() -
          Math.max(userData.createdAt.getTime(), getUTCDayStart().getTime())) /
          1000
      )
    : 0;

  return { quests, userData, userPoints: virtualPoints };
}
