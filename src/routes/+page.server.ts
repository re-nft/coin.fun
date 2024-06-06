import { db, profiles } from '$lib/server/db';

export async function load() {
  // this is `export let data` on a +page.svelte
  return {
    users: await db.select().from(profiles)
  };
}
