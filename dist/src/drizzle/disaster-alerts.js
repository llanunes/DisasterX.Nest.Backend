"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disasterAlertsRelations = exports.disasterAlertsTable = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const disaster_categories_1 = require("./disaster-categories");
const neighborhoods_1 = require("./neighborhoods");
const common_fields_1 = require("../utils/common-fields");
exports.disasterAlertsTable = (0, pg_core_1.pgTable)("disaster_alerts", {
    ...(0, common_fields_1.commonFields)(),
    categoryId: (0, pg_core_1.uuid)("category_id")
        .notNull()
        .references(() => disaster_categories_1.disasterCategoriesTable.id, { onDelete: "cascade" }),
    neighborhoodId: (0, pg_core_1.uuid)("neighborhood_id")
        .notNull()
        .references(() => neighborhoods_1.neighborhoodsTable.id, { onDelete: "restrict" }),
    message: (0, pg_core_1.text)("message").notNull(),
    severityLevel: (0, pg_core_1.varchar)("severity_level", { length: 20 }).notNull(),
    eventDate: (0, pg_core_1.timestamp)("event_date", { withTimezone: true }).notNull(),
});
exports.disasterAlertsRelations = (0, drizzle_orm_1.relations)(exports.disasterAlertsTable, ({ one }) => ({
    category: one(disaster_categories_1.disasterCategoriesTable, {
        fields: [exports.disasterAlertsTable.categoryId],
        references: [disaster_categories_1.disasterCategoriesTable.id],
    }),
}));
//# sourceMappingURL=disaster-alerts.js.map