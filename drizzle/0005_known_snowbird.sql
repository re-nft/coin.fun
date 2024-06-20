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


-- Enable `pg_net` for HTTP calls to our application webhooks
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Add a function which calls our indexer webhook
CREATE OR REPLACE FUNCTION public.request_twitter_aggregation()
RETURNS VOID
AS $$
DECLARE
  BASE_URL text;
  SOCIALDATA_API_KEY text;
BEGIN
  SELECT decrypted_secret INTO BASE_URL
    FROM vault.decrypted_secrets
    WHERE name = 'BASE_URL'
    LIMIT 1;
  SELECT decrypted_secret INTO SOCIALDATA_API_KEY
    FROM vault.decrypted_secrets
    WHERE name = 'SOCIALDATA_API_KEY'
    LIMIT 1;
  PERFORM net.http_get(
    url:=BASE_URL || '/webhooks/twitter-aggregate',
    headers:=jsonb_build_object('Authorization', 'Bearer ' || SOCIALDATA_API_KEY),
    timeout_milliseconds:=600000
  );
END;
$$ LANGUAGE plpgsql;

-- Run above function every hour
SELECT cron.schedule(
  '0003-tweets',
  '0 * * * *',
  'SELECT public.request_twitter_aggregation()'
);
