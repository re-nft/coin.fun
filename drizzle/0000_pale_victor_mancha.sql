CREATE TABLE IF NOT EXISTS "user" (
	"id" serial NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"profileImage" text NOT NULL,
	"typeOfLogin" text NOT NULL,
	"aggregateVerifier" text NOT NULL,
	"verifier" text NOT NULL,
	"verifierId" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
