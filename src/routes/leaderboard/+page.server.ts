import { desc, eq, sum } from 'drizzle-orm';

import { db, points, profiles } from '$lib/server/db';
import { getUTCDate, getUTCDayStart } from '$lib/utils/date';

export async function load() {
  const rows = await db
    .select({
      avatar: profiles.avatar,
      createdAt: profiles.createdAt,
      displayName: profiles.displayName,
      total: sum(points.points),
      userId: points.userId,
      userName: profiles.userName
    })
    .from(points)
    .leftJoin(profiles, eq(points.userId, profiles.id))
    .groupBy(
      points.userId,
      profiles.avatar,
      profiles.createdAt,
      profiles.displayName,
      profiles.userName
    )
    .orderBy((select) => desc(select.total))
    .limit(1000);

  const rankings = rows.map((user) =>
    Object.assign(user, {
      total:
        Number(user.total) +
        Math.floor(
          (getUTCDate().getTime() -
            Math.max(
              user.createdAt?.getTime() ?? 0,
              getUTCDayStart().getTime()
            )) /
            1000
        )
    })
  );

  return { rankings };
}
