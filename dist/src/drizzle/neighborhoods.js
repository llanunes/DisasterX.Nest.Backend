"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.neighborhoodsTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const common_fields_1 = require("../utils/common-fields");
exports.neighborhoodsTable = (0, pg_core_1.pgTable)("neighborhoods", {
    ...(0, common_fields_1.commonFields)(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }).notNull(),
    latitude: (0, pg_core_1.numeric)("latitude", { precision: 10, scale: 7 }).notNull(),
    longitude: (0, pg_core_1.numeric)("longitude", { precision: 10, scale: 7 }).notNull(),
});
//# sourceMappingURL=neighborhoods.js.map