"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disasterCategoriesRelations = exports.disasterCategoriesTable = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const disaster_alerts_1 = require("./disaster-alerts");
const common_fields_1 = require("../utils/common-fields");
exports.disasterCategoriesTable = (0, pg_core_1.pgTable)("disaster_categories", {
    ...(0, common_fields_1.commonFields)(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }).notNull(),
    iconUrl: (0, pg_core_1.varchar)("icon_url", { length: 500 }),
});
exports.disasterCategoriesRelations = (0, drizzle_orm_1.relations)(exports.disasterCategoriesTable, ({ many }) => ({
    alerts: many(disaster_alerts_1.disasterAlertsTable),
}));
//# sourceMappingURL=disaster-categories.js.map