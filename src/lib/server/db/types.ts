import { type InferSelectModel } from 'drizzle-orm';

import { type profiles } from './schema';

export type Profile = InferSelectModel<typeof profiles>;
