import { type profiles, type tweets } from './schema';

export type Profile = typeof profiles.$inferSelect;

export type TweetInsert = typeof tweets.$inferInsert;
