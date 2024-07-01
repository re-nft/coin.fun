import { type Readable, readable } from 'svelte/store';

import { browser } from '$app/environment';
import { connection } from '$vendor/solana';

const TICK_TIMEOUT = 5_000;

export interface SolanaStore {
  block?: number;
}

export type SolanaContext = Readable<SolanaStore>;

export function createStore(init: SolanaStore = {}) {
  return readable(init, (_, update) => {
    tick();

    async function tick() {
      const block = await connection.getBlockHeight();
      update((store) => ({ ...store, block }));
      // Only update block height on client.
      if (browser) setTimeout(tick, TICK_TIMEOUT);
    }
  });
}
