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
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
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
