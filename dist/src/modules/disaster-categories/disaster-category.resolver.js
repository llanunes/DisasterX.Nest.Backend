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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisasterCategoriesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const disaster_category_service_1 = require("./disaster-category.service");
const disaster_category_entity_1 = require("./disaster-category.entity");
let DisasterCategoriesResolver = class DisasterCategoriesResolver {
    service;
    constructor(service) {
        this.service = service;
    }
    async disasterCategories() {
        return this.service.getDisasterCategories();
    }
    async disasterCategory(id) {
        return this.service.getDisasterCategoryById(id);
    }
    async createDisasterCategory(input) {
        return this.service.createDisasterCategory(input);
    }
    async updateDisasterCategory(id, input) {
        return this.service.updateDisasterCategory(id, input);
    }
    async deleteDisasterCategory(id) {
        return this.service.deleteDisasterCategory(id);
    }
};
exports.DisasterCategoriesResolver = DisasterCategoriesResolver;
__decorate([
    (0, graphql_1.Query)(() => [disaster_category_entity_1.DisasterCategoriesModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DisasterCategoriesResolver.prototype, "disasterCategories", null);
__decorate([
    (0, graphql_1.Query)(() => disaster_category_entity_1.DisasterCategoriesModel, { nullable: true }),
    __param(0, (0, graphql_1.Args)("id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DisasterCategoriesResolver.prototype, "disasterCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => disaster_category_entity_1.DisasterCategoriesModel),
    __param(0, (0, graphql_1.Args)("input", { type: () => disaster_category_entity_1.CreateDisasterCategoriesInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [disaster_category_entity_1.CreateDisasterCategoriesInput]),
    __metadata("design:returntype", Promise)
], DisasterCategoriesResolver.prototype, "createDisasterCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => disaster_category_entity_1.DisasterCategoriesModel, { nullable: true }),
    __param(0, (0, graphql_1.Args)("id", { type: () => String })),
    __param(1, (0, graphql_1.Args)("input", { type: () => disaster_category_entity_1.UpdateDisasterCategoriesInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, disaster_category_entity_1.UpdateDisasterCategoriesInput]),
    __metadata("design:returntype", Promise)
], DisasterCategoriesResolver.prototype, "updateDisasterCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)("id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DisasterCategoriesResolver.prototype, "deleteDisasterCategory", null);
exports.DisasterCategoriesResolver = DisasterCategoriesResolver = __decorate([
    (0, graphql_1.Resolver)(() => disaster_category_entity_1.DisasterCategoriesModel),
    __metadata("design:paramtypes", [disaster_category_service_1.DisasterCategoriesService])
], DisasterCategoriesResolver);
//# sourceMappingURL=disaster-category.resolver.js.map