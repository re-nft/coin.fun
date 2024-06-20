import {
  type AnyPgColumn,
  bigint,
  index,
  integer,
  json,
  jsonb,
  pgEnum,
  pgSchema,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  uniqueIndex,
  uuid
} from 'drizzle-orm/pg-core';

const authSchema = pgSchema('auth');

const users = authSchema.table('users', {
  id: uuid('id').primaryKey()
});

export const characterS1 = pgEnum('character_s1', ['normie', 'heftie']);

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

    twitterUserId: text('twitter_user_id').unique().notNull(),

    // Lets just add columns here for each season?
    characterS1: characterS1('character_s1'),

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
    questId: text('quest_id').notNull(),
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
    id: text('id').primaryKey(),
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),

    fullText: text('full_text').notNull(),
    entities: json('entities').notNull(),

    quotedId: text('quoted_id'),
    repliedToId: text('reply_to_id'),
    retweetedId: text('retweeted_id'),

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

export const tweetIndexerLogs = pgTable(
  'tweet_indexer_logs',
  {
    id: serial('id').primaryKey(),
    completedAt: timestamp('completed_at').notNull().defaultNow(),
    data: jsonb('data'),
    eligibleCount: integer('eligible_count').default(0),
    quoteCount: integer('quote_count').default(0),
    tweetCount: integer('tweet_count').default(0)
  },
  (table) => {
    return {
      completedAtIdx: index('tweet_indexer_logs_completed_at_idx').on(
        table.completedAt
      )
    };
  }
);
