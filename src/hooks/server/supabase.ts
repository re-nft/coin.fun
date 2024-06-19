import { createServerClient } from '@supabase/ssr';
import type { Handle } from '@sveltejs/kit';

import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL
} from '$env/static/public';

export const supabaseHandle: Handle = async ({ event, resolve }) => {
  const supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(key) {
          return event.cookies.get(key);
        },
        remove(key, options) {
          event.cookies.delete(key, { ...options, path: '/' });
        },
        set(key, value, options) {
          event.cookies.set(key, value, { ...options, path: '/' });
        }
      }
    }
  );

  async function safeGetSession() {
    const {
      data: { session }
    } = await supabase.auth.refreshSession();

    if (!session) return { session: null, user: null };

    const {
      data: { user },
      error
    } = await supabase.auth.getUser();

    if (error) return { session: null, user: null };

    return { session, user };
  }

  event.locals.supabase = supabase;
  event.locals.safeGetSession = safeGetSession;

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return ['content-range', 'x-supabase-api-version'].includes(name);
    }
  });
};
