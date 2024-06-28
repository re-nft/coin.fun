import { createInsertSchema } from 'drizzle-valibot';
import * as v from 'valibot';

import { coins } from './schema';

export const CoinInsertSchema = createInsertSchema(coins, {
  id: v.uuid(),
  address: v.string(),
  createdBy: v.uuid(),
  description: v.pipe(
    v.string(),
    v.nonEmpty('Description cannot be empty. You need to really sell it.')
  ),
  media: v.string(),
  name: v.pipe(v.string(), v.nonEmpty('Name cannot be empty.')),
  symbol: v.pipe(
    v.string(),
    v.nonEmpty('Ticker cannot be empty.'),
    v.regex(/[a-zA-Z]+/, 'Ticker cannot contain numbers or symbols.'),
    v.toUpperCase()
  ),
  telegram: v.nullish(
    v.pipe(v.string(), v.url('Telegram must be a valid URL.'))
  ),
  twitter: v.nullish(v.pipe(v.string(), v.url('Twitter must be a valid URL.'))),
  website: v.nullish(v.pipe(v.string(), v.url('Webiste must be a valid URL.')))
});
