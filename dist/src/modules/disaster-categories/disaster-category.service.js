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
exports.DisasterCategoriesService = void 0;
const common_1 = require("@nestjs/common");
const drizzle_orm_1 = require("drizzle-orm");
const disaster_categories_1 = require("../../drizzle/disaster-categories");
const drizzle_1 = require("../../../drizzle");
let DisasterCategoriesService = class DisasterCategoriesService {
    table = disaster_categories_1.disasterCategoriesTable;
    constructor() {
    }
    async getDisasterCategories() {
        const categories = await drizzle_1.drizzle.query.disasterCategoriesTable.findMany({
            columns: {
                id: true,
                name: true,
                iconUrl: true,
                createdAt: true,
            },
        });
        return categories.map(category => ({
            ...category,
            iconUrl: category.iconUrl ?? "",
        }));
    }
    async createDisasterCategory(input) {
        const [newCategory] = await drizzle_1.drizzle
            .insert(this.table)
            .values({
            createdAt: new Date(),
            deletedAt: null,
            id: crypto.randomUUID(),
            updatedAt: new Date(),
            name: input.name,
            iconUrl: input.iconUrl ?? "",
        })
            .returning();
        return {
            ...newCategory,
            iconUrl: newCategory.iconUrl ?? "",
        };
    }
    async getDisasterCategoryById(id) {
        const category = await drizzle_1.drizzle.query.disasterCategoriesTable.findFirst({
            where: (0, drizzle_orm_1.eq)(disaster_categories_1.disasterCategoriesTable.id, id),
            columns: {
                id: true,
                name: true,
                iconUrl: true,
                createdAt: true,
            },
        });
        if (!category) {
            return null;
        }
        return {
            ...category,
            iconUrl: category.iconUrl ?? "",
        };
    }
    async updateDisasterCategory(id, input) {
        const [updatedCategory] = await drizzle_1.drizzle
            .update(this.table)
            .set({
            name: input.name,
            iconUrl: input.iconUrl,
            updatedAt: new Date(),
        })
            .where((0, drizzle_orm_1.eq)(disaster_categories_1.disasterCategoriesTable.id, id))
            .returning();
        if (!updatedCategory) {
            return null;
        }
        return {
            ...updatedCategory,
            iconUrl: updatedCategory.iconUrl ?? "",
        };
    }
    async deleteDisasterCategory(id) {
        const result = await drizzle_1.drizzle
            .update(this.table)
            .set({
            deletedAt: new Date(),
            updatedAt: new Date(),
        })
            .where((0, drizzle_orm_1.eq)(disaster_categories_1.disasterCategoriesTable.id, id))
            .returning();
        return result.length > 0;
    }
};
exports.DisasterCategoriesService = DisasterCategoriesService;
exports.DisasterCategoriesService = DisasterCategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DisasterCategoriesService);
//# sourceMappingURL=disaster-category.service.js.map