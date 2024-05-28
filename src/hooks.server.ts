import type { Handle } from '@sveltejs/kit';
import { supabaseClient } from "$lib/supabase";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = supabaseClient;
  return resolve(event);
};
