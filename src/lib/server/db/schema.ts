import {
  bigint,
  index,
  pgSchema,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
  varchar
} from 'drizzle-orm/pg-core';

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

export const points = pgTable(
  'points',
  {
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    questId: varchar('quest_id').notNull(),
    points: bigint('points', { mode: 'number' }),
    acquiredAt: timestamp('acquired_at').notNull().defaultNow()
  },
  (table) => {
    return {
      userIdx: index('user_idx').on(table.userId),
      questIdx: index('quest_idx').on(table.questId),
      acquiredAtIdx: index('acquired_at_idx').on(table.acquiredAt),
      pk: primaryKey({
        columns: [table.userId, table.questId, table.acquiredAt]
      })
    };
  }
);