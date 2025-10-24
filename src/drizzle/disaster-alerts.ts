import { relations } from "drizzle-orm";
import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { disasterCategoriesTable } from "./disaster-categories";
import { neighborhoodsTable } from "./neighborhoods";
import { commonFields } from "src/utils/common-fields";


export const disasterAlertsTable = pgTable("disaster_alerts", {
  ...commonFields(),

  categoryId: uuid("category_id")
    .notNull()
    .references(() => disasterCategoriesTable.id, { onDelete: "cascade" }),

  neighborhoodId: uuid("neighborhood_id")
    .notNull()
    .references(() => neighborhoodsTable.id, { onDelete: "restrict" }),

  message: text("message").notNull(),

  severityLevel: varchar("severity_level", { length: 20 }).notNull(),

  eventDate: timestamp("event_date", { withTimezone: true }).notNull(),
});

export const disasterAlertsRelations = relations(disasterAlertsTable, ({ one }) => ({
  category: one(disasterCategoriesTable, {
    fields: [disasterAlertsTable.categoryId],
    references: [disasterCategoriesTable.id],
  }),
}));

export type DisasterAlert = typeof disasterAlertsTable.$inferSelect;
export type NewDisasterAlert = typeof disasterAlertsTable.$inferInsert;
