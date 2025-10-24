import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
import { disasterAlertsTable } from "./disaster-alerts";
import { commonFields } from "src/utils/common-fields";

export const disasterCategoriesTable = pgTable("disaster_categories", {
  ...commonFields(),

  name: varchar("name", { length: 255 }).notNull(), 
  iconUrl: varchar("icon_url", { length: 500 }),  
});

export const disasterCategoriesRelations = relations(disasterCategoriesTable, ({ many }) => ({
  alerts: many(disasterAlertsTable),
}));

export type DisasterCategory = typeof disasterCategoriesTable.$inferSelect;
export type NewDisasterCategory = typeof disasterCategoriesTable.$inferInsert;
