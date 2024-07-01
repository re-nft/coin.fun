import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

import { coins, db } from '$lib/server/db';

export async function load({ params }) {
  const [coin] = await db
    .select()
    .from(coins)
    .where(eq(coins.address, params.address))
    .limit(1);

  if (!coin) {
    return error(404, `Coin ${params.address} not found.`);
  }

  return { coin };
}
