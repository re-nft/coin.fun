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
import type { SolanaStore } from '$lib/solana';
import { connection } from '$vendor/solana';

export async function load({ data, depends, fetch }) {
  depends('supabase:auth');

  const solana: SolanaStore = {
    block: await connection.getBlockHeight()
  };

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

  return {
    ...data,
    locale: globalThis?.navigator?.language.split(',').at(0) ?? data.locale,
    solana,
    supabase
  };
}
