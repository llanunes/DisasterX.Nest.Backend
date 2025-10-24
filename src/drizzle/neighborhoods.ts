import { pgTable, uuid, varchar, numeric } from "drizzle-orm/pg-core";
import { commonFields } from "src/utils/common-fields";

export const neighborhoodsTable = pgTable("neighborhoods", {
  ...commonFields(),

  name: varchar("name", { length: 100 }).notNull(),
  latitude: numeric("latitude", { precision: 10, scale: 7 }).notNull(), 
  longitude: numeric("longitude", { precision: 10, scale: 7 }).notNull(),
});
