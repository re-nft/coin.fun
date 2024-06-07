CREATE TABLE IF NOT EXISTS "points" (
	"user_id" uuid NOT NULL,
	"quest_id" varchar NOT NULL,
	"points" bigint,
	"acquired_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "points_user_id_quest_id_acquired_at_pk" PRIMARY KEY("user_id","quest_id","acquired_at")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"avatar" text,
	"email" text NOT NULL,
	"user_name" text NOT NULL,
	"display_name" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "points" ADD CONSTRAINT "points_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_idx" ON "points" ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "quest_idx" ON "points" ("quest_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "acquired_at_idx" ON "points" ("acquired_at");
--> statement-breakpoint
create function public.handle_new_user()
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
    user_name
  )
  values (
    new.id,
    new.raw_user_meta_data ->> 'avatar_url',
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'email',
    new.raw_user_meta_data ->> 'user_name'
  );
  return new;
end;
$$;
--> statement-breakpoint
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();