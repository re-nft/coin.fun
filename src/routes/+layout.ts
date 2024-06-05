import type { SolanaStore } from '$lib/solana';
import { connection } from '$vendor/solana';

export async function load({ data }) {
  const solana: SolanaStore = {
    block: await connection.getBlockHeight()
  };

  return { ...data, solana };
}
