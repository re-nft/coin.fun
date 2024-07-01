import {
  createBrowserClient,
  createServerClient,
  isBrowser,
  parse
} from '@supabase/ssr';

import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL
} from '$env/static/public';
import { parseLocale } from '$lib/utils/locale';

export async function load({ data, depends, fetch }) {
  depends('supabase:auth');

  const supabase =
    isBrowser() ?
      createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: { fetch },
        cookies: {
          get(key) {
            return parse(document.cookie)[key];
          }
        }
      })
    : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: { fetch },
        cookies: {
          get() {
            return JSON.stringify(data.session);
          }
        }
      });

  const locale = parseLocale(globalThis?.navigator?.language);

  return {
    ...data,
    locale: locale || data.locale,
    supabase
  };
}
