import { eq } from 'drizzle-orm';

import { db } from '$lib/server/db';
import { profiles } from '$lib/server/db';

export async function load({ locals: { safeGetSession } }) {
  const { user } = await safeGetSession();

  if (!user?.id) return { userData: undefined };

  const [userData] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.id, user.id))
    .limit(1);

  return { userData };
}
