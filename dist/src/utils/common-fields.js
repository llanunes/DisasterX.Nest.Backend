"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonFields = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const commonFields = () => ({
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    createdAt: (0, pg_core_1.timestamp)("created_at")
        .default((0, drizzle_orm_1.sql) `(now() at time zone 'utc')`)
        .$defaultFn(() => new Date())
        .notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at")
        .default((0, drizzle_orm_1.sql) `(now() at time zone 'utc')`)
        .$defaultFn(() => new Date())
        .notNull(),
    deletedAt: (0, pg_core_1.timestamp)("deleted_at"),
});
exports.commonFields = commonFields;
//# sourceMappingURL=common-fields.js.map