import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-valibot';
import { minLength, parse, string } from 'valibot';

export const user = pgTable('user', {
  id: serial('id'),
  name: text('name').notNull(),
  email: text('email').notNull(),
  profileImage: text('profileImage').notNull(),
  typeOfLogin: text('typeOfLogin').notNull(),
  aggregateVerifier: text('aggregateVerifier').notNull(),
  verifier: text('verifier').notNull(),
  verifierId: text('verifierId').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
});

// TODO: either validate or remove
// since this is coming from web3Auth directly we probably don't need to validate?
export const userInsertSchema = createInsertSchema(user, {
  name: string([minLength(2)])
});
export const userParse = (value: unknown) => parse(userInsertSchema, value);
