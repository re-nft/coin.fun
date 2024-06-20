ALTER TABLE "tweets" DROP CONSTRAINT "tweets_quoted_id_tweets_id_fk";
--> statement-breakpoint
ALTER TABLE "tweets" DROP CONSTRAINT "tweets_reply_to_id_tweets_id_fk";
--> statement-breakpoint
ALTER TABLE "tweets" DROP CONSTRAINT "tweets_retweeted_id_tweets_id_fk";
