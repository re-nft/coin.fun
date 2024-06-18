import type { Handle } from '@sveltejs/kit';

import * as Quests from '$lib/server/quests';

export const questsHandle: Handle = async ({ event, resolve }) => {
  const { session, user } = event.locals;

  const quests = await Promise.all(
    Array.from(Object.values(Quests)).map(async (Quest) => {
      const quest = new Quest({ session, user });
      await quest.init?.();
      return quest;
    })
  );

  event.locals.quests = quests;

  return resolve(event);
};
