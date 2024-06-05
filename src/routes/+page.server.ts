import { db } from '$lib/server/db';
import { profiles } from '$lib/server/schema';

export async function load() {
  // this is `export let data` on a +page.svelte
  return {
    users: await db.select().from(profiles)
  };
}
