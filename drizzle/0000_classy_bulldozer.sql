CREATE TABLE "disaster_alerts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT (now() at time zone 'utc') NOT NULL,
	"updated_at" timestamp DEFAULT (now() at time zone 'utc') NOT NULL,
	"deleted_at" timestamp,
	"category_id" uuid NOT NULL,
	"neighborhood_id" uuid NOT NULL,
	"message" text NOT NULL,
	"severity_level" varchar(20) NOT NULL,
	"event_date" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "disaster_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT (now() at time zone 'utc') NOT NULL,
	"updated_at" timestamp DEFAULT (now() at time zone 'utc') NOT NULL,
	"deleted_at" timestamp,
	"name" varchar(255) NOT NULL,
	"icon_url" varchar(500)
);
--> statement-breakpoint
CREATE TABLE "neighborhoods" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT (now() at time zone 'utc') NOT NULL,
	"updated_at" timestamp DEFAULT (now() at time zone 'utc') NOT NULL,
	"deleted_at" timestamp,
	"name" varchar(100) NOT NULL,
	"latitude" numeric(10, 7) NOT NULL,
	"longitude" numeric(10, 7) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "disaster_alerts" ADD CONSTRAINT "disaster_alerts_category_id_disaster_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."disaster_categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "disaster_alerts" ADD CONSTRAINT "disaster_alerts_neighborhood_id_neighborhoods_id_fk" FOREIGN KEY ("neighborhood_id") REFERENCES "public"."neighborhoods"("id") ON DELETE restrict ON UPDATE no action;