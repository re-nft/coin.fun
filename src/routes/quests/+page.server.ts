import { eq, sum } from 'drizzle-orm';

import { db, points } from '$lib/server/db';
import { getUTCDate, getUTCDayStart } from '$lib/utils/date';

export async function load({ locals: { quests, user } }) {
  let profile = undefined;
  let profilePoints = 0;

  if (user) {
    profile = await db.query.profiles.findFirst({
      where: (profiles) => eq(profiles.id, user?.id)
    });
  }

  if (profile) {
    const [{ total }] = await db
      .select({ total: sum(points.points) })
      .from(points)
      .where(eq(points.userId, profile.id))
      .limit(1);

    // Constant flow points. IG this is actually a part of quest 1?
    profilePoints =
      Number(total) +
      Math.floor(
        (getUTCDate().getTime() -
          Math.max(profile.createdAt.getTime(), getUTCDayStart().getTime())) /
          1000
      );
  }

  // NOTE: in some cases `Quest.onLoad()` contains DB writes so we want to make
  // sure these are resolved before we read the user's points.
  const questsData = await Promise.all(quests.map((quest) => quest.data));

  return { profile, profilePoints, quests: questsData };
}
