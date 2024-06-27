CREATE TABLE IF NOT EXISTS "coins" (
	"id" uuid PRIMARY KEY NOT NULL,
	"address" text,
	"name" text,
	"symbol" text,
	"description" text,
	"media" text,
	"created_by" uuid NOT NULL,
	"meta" json
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "coins" ADD CONSTRAINT "coins_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
