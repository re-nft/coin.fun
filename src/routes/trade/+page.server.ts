import { desc } from 'drizzle-orm';

import { coins, db } from '$lib/server/db';

export async function load() {
  const rows = await db.select().from(coins).orderBy(desc(coins.createdAt));

  return { coins: rows };
}
