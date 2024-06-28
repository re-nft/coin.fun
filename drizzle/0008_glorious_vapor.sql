CREATE TABLE IF NOT EXISTS "coins" (
	"id" uuid PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"created_by" uuid NOT NULL,
	"address" text,
	"description" text,
	"media" text,
	"name" text,
	"symbol" text,
	"telegram" text,
	"twitter" text,
	"website" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "coins" ADD CONSTRAINT "coins_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
