// import { createClient } from '@supabase/supabase-js';
import type { Handle } from '@sveltejs/kit';
// import {
//   PUBLIC_SUPABASE_PROJECT_ID,
//   PUBLIC_SUPABASE_ANON_KEY
// } from '$env/static/public';
//
// const supabase = createClient(`https://${PUBLIC_SUPABASE_PROJECT_ID}.supabase.co`, PUBLIC_SUPABASE_ANON_KEY);

import { supabaseClient } from "$lib/supabase";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = supabaseClient;
  return resolve(event);
};
