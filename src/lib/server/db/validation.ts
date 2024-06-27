import { createInsertSchema } from 'drizzle-valibot';
import {
  never,
  nonEmpty,
  nullish,
  object,
  pipe,
  regex,
  string,
  toUpperCase,
  uuid
} from 'valibot';

import { coins } from './schema';

// TODO: either validate or remove
// since this is coming from web3Auth directly we probably don't need to validate?
export const CoinInsertSchema = createInsertSchema(coins, {
  id: nullish(never()), // 🤯
  address: string(),
  createdBy: uuid(),
  description: pipe(string(), nonEmpty()),
  media: string(),
  meta: nullish(
    object({
      website: nullish(pipe(string(), nonEmpty())),
      twitter: nullish(pipe(string(), nonEmpty())),
      telegram: nullish(pipe(string(), nonEmpty()))
    })
  ),
  name: pipe(string(), nonEmpty()),
  symbol: pipe(string(), nonEmpty(), regex(/[a-zA-Z]+/), toUpperCase())
});
