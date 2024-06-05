import { pgSchema, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-valibot';
import { minLength, parse, string } from 'valibot';

const authSchema = pgSchema('auth');

const users = authSchema.table('users', {
  id: uuid('id').primaryKey()
});

export const profiles = pgTable('profiles', {
  id: uuid('id')
    .primaryKey()
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),

  avatar: text('avatar'),
  email: text('email').notNull(),
  userName: text('user_name').notNull(),
  displayName: text('display_name'),

  // name: text('name').notNull(),
  // typeOfLogin: text('typeOfLogin').notNull(),
  // aggregateVerifier: text('aggregateVerifier').notNull(),
  // verifier: text('verifier').notNull(),
  // verifierId: text('verifier_id'),

  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
});

// export const quests = pgTable('quests', {});

// TODO: either validate or remove
// since this is coming from web3Auth directly we probably don't need to validate?
export const profileInsertSchema = createInsertSchema(profiles, {
  userName: string([minLength(2)])
});
export const profileParse = (value: unknown) =>
  parse(profileInsertSchema, value);
