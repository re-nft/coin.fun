import type { Handle } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

import { db, type Profile, profiles } from '$lib/server/db';
import * as Quests from '$lib/server/quests';

export const questsHandle: Handle = async ({ event, resolve }) => {
  const { session, user } = event.locals;

  let profile: Profile | null = null;

  if (user?.id) {
    const result = await db
      .select()
      .from(profiles)
      .where(eq(profiles.id, user.id))
      .limit(1);

    profile = result.at(0) ?? null;
  }

  const quests = await Promise.all(
    Array.from(Object.values(Quests)).map(async (Quest) => {
      const quest = new Quest({ profile, session, user });
      await quest.init?.();
      return quest;
    })
  );

  event.locals.quests = quests;

  return resolve(event);
};
