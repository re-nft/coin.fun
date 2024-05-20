import type { SolanaStore } from '$lib/solana';
import { connection } from '$vendor/solana';

export async function load({ url }) {
  const solana: SolanaStore = {
    block: await connection.getBlockHeight()
  };

  return { solana, url };
}
