import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-valibot';
import { minLength, parse, string } from 'valibot';

export const user = pgTable('user', {
  id: serial('id'),
  name: text('name').notNull(),
  email: text('email'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
});

export const userInsertSchema = createInsertSchema(user, {
  name: string([minLength(2)])
});
export const userParse = (value: unknown) => parse(userInsertSchema, value);
