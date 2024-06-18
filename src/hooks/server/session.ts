import type { Handle } from '@sveltejs/kit';

export const sessionHandle: Handle = async ({ event, resolve }) => {
  const { session, user } = await event.locals.safeGetSession();

  event.locals.session = session;
  event.locals.user = user;

  return resolve(event);
};
