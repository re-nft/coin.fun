CREATE TABLE IF NOT EXISTS "tweet_indexer_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"completed_at" timestamp DEFAULT now() NOT NULL,
	"data" jsonb,
	"eligible_count" integer DEFAULT 0,
	"quote_count" integer DEFAULT 0,
	"tweet_count" integer DEFAULT 0
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tweet_indexer_logs_completed_at_idx" ON "tweet_indexer_logs" USING btree ("completed_at");
