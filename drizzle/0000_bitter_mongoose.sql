-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "t3-next-approuter_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "t3-next-approuter_post" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp,
	"id_author" integer NOT NULL,
	"description" varchar(2048)
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "t3-next-approuter_post" ("name");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "t3-next-approuter_post" ADD CONSTRAINT "t3-next-approuter_post_id_author_t3-next-approuter_user_id_fk" FOREIGN KEY ("id_author") REFERENCES "public"."t3-next-approuter_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/