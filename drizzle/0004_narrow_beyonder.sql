DO $$ BEGIN
 CREATE TYPE "public"."character_s1" AS ENUM('normie', 'heftie');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tweets" (
	"id" bigint PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"full_text" text NOT NULL,
	"entities" json NOT NULL,
	"quoted_id" bigint,
	"reply_to_id" bigint,
	"retweeted_id" bigint,
	"favorite_count" integer,
	"quote_count" integer,
	"reply_count" integer,
	"retweet_count" integer,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
DROP INDEX IF EXISTS "user_idx";--> statement-breakpoint
DROP INDEX IF EXISTS "quest_idx";--> statement-breakpoint
DROP INDEX IF EXISTS "acquired_at_idx";--> statement-breakpoint
ALTER TABLE "points" ALTER COLUMN "quest_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "twitter_user_id" bigint;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "character_s1" "character_s1";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tweets" ADD CONSTRAINT "tweets_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tweets" ADD CONSTRAINT "tweets_quoted_id_tweets_id_fk" FOREIGN KEY ("quoted_id") REFERENCES "public"."tweets"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tweets" ADD CONSTRAINT "tweets_reply_to_id_tweets_id_fk" FOREIGN KEY ("reply_to_id") REFERENCES "public"."tweets"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tweets" ADD CONSTRAINT "tweets_retweeted_id_tweets_id_fk" FOREIGN KEY ("retweeted_id") REFERENCES "public"."tweets"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tweets_user_idx" ON "tweets" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tweets_quoted_id_idx" ON "tweets" USING btree ("quoted_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tweets_replied_to_id_idx" ON "tweets" USING btree ("reply_to_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tweets_retweeted_id_idx" ON "tweets" USING btree ("retweeted_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tweets_created_at_idx" ON "tweets" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "points_user_idx" ON "points" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "points_quest_idx" ON "points" USING btree ("quest_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "points_acquired_at_idx" ON "points" USING btree ("acquired_at");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "profiles_email_idx" ON "profiles" USING btree ("email");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "profiles_twitter_user_id_idx" ON "profiles" USING btree ("twitter_user_id");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "profiles_user_name_idx" ON "profiles" USING btree ("user_name");--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_name_unique" UNIQUE("user_name");--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_twitter_user_id_unique" UNIQUE("twitter_user_id");

-- Backfill twitter_user_id
UPDATE public.profiles AS profiles
  SET twitter_user_id = cast(users.raw_user_meta_data ->> 'provider_id' as bigint)
  FROM auth.users AS users
  WHERE profiles.id = users.id;

-- Update on_auth_user_created trigger handler to include provider_id
-- as the twitter_user_id from now on.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (
    id,
    avatar,
    display_name,
    email,
    twitter_user_id,
    user_name
  )
  values (
    new.id,
    new.raw_user_meta_data ->> 'avatar_url',
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'email',
    cast(new.raw_user_meta_data ->> 'provider_id' as bigint),
    new.raw_user_meta_data ->> 'user_name'
  );
  return new;
end;
$$;

-- After updating our current profiles we make this non nullable.
ALTER TABLE "profiles" ALTER COLUMN "twitter_user_id" SET NOT NULL;--> statement-breakpoint
