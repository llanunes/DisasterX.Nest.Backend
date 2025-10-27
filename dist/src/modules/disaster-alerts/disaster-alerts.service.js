"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisasterAlertsService = void 0;
const common_1 = require("@nestjs/common");
const drizzle_1 = require("../../../drizzle");
const drizzle_orm_1 = require("drizzle-orm");
const disaster_alerts_1 = require("../../drizzle/disaster-alerts");
const disaster_categories_1 = require("../../drizzle/disaster-categories");
const neighborhoods_1 = require("../../drizzle/neighborhoods");
let DisasterAlertsService = class DisasterAlertsService {
    table = disaster_alerts_1.disasterAlertsTable;
    constructor() { }
    async getDisasterAlerts() {
        const alerts = await drizzle_1.drizzle
            .select({
            id: disaster_alerts_1.disasterAlertsTable.id,
            categoryId: disaster_alerts_1.disasterAlertsTable.categoryId,
            categoryName: disaster_categories_1.disasterCategoriesTable.name ?? "Não informado",
            neighborhoodId: disaster_alerts_1.disasterAlertsTable.neighborhoodId,
            neighborhoodName: neighborhoods_1.neighborhoodsTable.name ?? "Não informado",
            latitude: neighborhoods_1.neighborhoodsTable.latitude,
            longitude: neighborhoods_1.neighborhoodsTable.longitude,
            message: disaster_alerts_1.disasterAlertsTable.message,
            severityLevel: disaster_alerts_1.disasterAlertsTable.severityLevel,
            eventDate: disaster_alerts_1.disasterAlertsTable.eventDate,
            createdAt: disaster_alerts_1.disasterAlertsTable.createdAt,
            updatedAt: disaster_alerts_1.disasterAlertsTable.updatedAt,
        })
            .from(disaster_alerts_1.disasterAlertsTable)
            .innerJoin(disaster_categories_1.disasterCategoriesTable, (0, drizzle_orm_1.eq)(disaster_alerts_1.disasterAlertsTable.categoryId, disaster_categories_1.disasterCategoriesTable.id))
            .innerJoin(neighborhoods_1.neighborhoodsTable, (0, drizzle_orm_1.eq)(disaster_alerts_1.disasterAlertsTable.neighborhoodId, neighborhoods_1.neighborhoodsTable.id))
            .execute();
        return alerts.map(alert => ({
            ...alert,
            latitude: Number(alert.latitude),
            longitude: Number(alert.longitude),
        }));
    }
    async getDisasterAlertById(id) {
        const alert = await drizzle_1.drizzle.query.disasterAlertsTable.findFirst({
            where: (0, drizzle_orm_1.eq)(disaster_alerts_1.disasterAlertsTable.id, id),
            columns: {
                id: true,
                categoryId: true,
                neighborhoodId: true,
                message: true,
                severityLevel: true,
                eventDate: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return alert ?? null;
    }
    async createDisasterAlert(input) {
        const [newAlert] = await drizzle_1.drizzle.insert(this.table).values({
            id: crypto.randomUUID(),
            categoryId: input.categoryId,
            neighborhoodId: input.neighborhoodId,
            message: input.message,
            severityLevel: input.severityLevel,
            eventDate: input.eventDate,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
        }).returning();
        return newAlert;
    }
    async updateDisasterAlert(id, input) {
        const [updatedAlert] = await drizzle_1.drizzle.update(this.table)
            .set({
            ...input,
            updatedAt: new Date(),
        })
            .where((0, drizzle_orm_1.eq)(disaster_alerts_1.disasterAlertsTable.id, id))
            .returning();
        return updatedAlert ?? null;
    }
    async deleteDisasterAlert(id) {
        const result = await drizzle_1.drizzle.update(this.table)
            .set({
            deletedAt: new Date(),
            updatedAt: new Date(),
        })
            .where((0, drizzle_orm_1.eq)(disaster_alerts_1.disasterAlertsTable.id, id))
            .returning();
        return result.length > 0;
    }
};
exports.DisasterAlertsService = DisasterAlertsService;
exports.DisasterAlertsService = DisasterAlertsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DisasterAlertsService);
//# sourceMappingURL=disaster-alerts.service.js.map