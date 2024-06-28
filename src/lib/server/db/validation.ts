import { createInsertSchema } from 'drizzle-valibot';
import * as v from 'valibot';

import { coins } from './schema';

export const CoinInsertSchema = createInsertSchema(coins, {
  id: v.uuid(),
  address: v.string(),
  createdBy: v.uuid(),
  description: v.pipe(v.string(), v.nonEmpty()),
  media: v.string(),
  name: v.pipe(v.string(), v.nonEmpty()),
  symbol: v.pipe(
    v.string(),
    v.nonEmpty(),
    v.regex(/[a-zA-Z]+/),
    v.toUpperCase()
  ),
  telegram: v.nullish(v.pipe(v.string(), v.nonEmpty())),
  twitter: v.nullish(v.pipe(v.string(), v.nonEmpty())),
  website: v.nullish(v.pipe(v.string(), v.nonEmpty()))
});
