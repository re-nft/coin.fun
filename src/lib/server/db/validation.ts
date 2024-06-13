import { createInsertSchema } from 'drizzle-valibot';
import { minLength, parse, pipe, string } from 'valibot';

import { profiles } from './schema';

// TODO: either validate or remove
// since this is coming from web3Auth directly we probably don't need to validate?
export const profileInsertSchema = createInsertSchema(profiles, {
  userName: pipe(string(), minLength(2))
});
export const profileParse = (value: unknown) =>
  parse(profileInsertSchema, value);
