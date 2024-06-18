import {
  type AnyPgColumn,
  bigint,
  index,
  integer,
  json,
  pgSchema,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar
} from 'drizzle-orm/pg-core';

const authSchema = pgSchema('auth');

const users = authSchema.table('users', {
  id: uuid('id').primaryKey()
});

export const profiles = pgTable(
  'profiles',
  {
    id: uuid('id')
      .primaryKey()
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),

    avatar: text('avatar'),
    email: text('email').unique().notNull(),
    userName: text('user_name').unique().notNull(),
    displayName: text('display_name'),

    // TODO notNull()
    twitterUserId: varchar('twitter_user_id').unique(),

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
  },
  (table) => {
    return {
      emailIdx: uniqueIndex('profiles_email_idx').on(table.email),
      twitterUserIdIdx: uniqueIndex('profiles_twitter_user_id_idx').on(
        table.twitterUserId
      ),
      userNameIdx: uniqueIndex('profiles_user_name_idx').on(table.userName)
    };
  }
);

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
      userIdx: index('points_user_idx').on(table.userId),
      questIdx: index('points_quest_idx').on(table.questId),
      acquiredAtIdx: index('points_acquired_at_idx').on(table.acquiredAt),
      pk: primaryKey({
        columns: [table.userId, table.questId, table.acquiredAt]
      })
    };
  }
);

export const tweets = pgTable(
  'tweets',
  {
    id: bigint('id', { mode: 'bigint' }).primaryKey(),
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),

    fullText: text('full_text').notNull(),
    entities: json('entities').notNull(),

    quotedId: bigint('quoted_id', { mode: 'bigint' }).references(
      (): AnyPgColumn => tweets.id
    ),
    repliedToId: bigint('reply_to_id', { mode: 'bigint' }).references(
      (): AnyPgColumn => tweets.id
    ),
    retweetedId: bigint('retweeted_id', { mode: 'bigint' }).references(
      (): AnyPgColumn => tweets.id
    ),

    favoriteCount: integer('favorite_count'),
    quoteCount: integer('quote_count'),
    replyCount: integer('reply_count'),
    retweetCount: integer('retweet_count'),

    createdAt: timestamp('created_at').notNull()
  },
  (table) => {
    return {
      userIdx: index('tweets_user_idx').on(table.userId),
      quotedIdIdx: index('tweets_quoted_id_idx').on(table.quotedId),
      repliedToIdIdx: index('tweets_replied_to_id_idx').on(table.repliedToId),
      retweetedIdIdx: index('tweets_retweeted_id_idx').on(table.retweetedId),
      createdAtIdx: index('tweets_created_at_idx').on(table.createdAt)
    };
  }
);
