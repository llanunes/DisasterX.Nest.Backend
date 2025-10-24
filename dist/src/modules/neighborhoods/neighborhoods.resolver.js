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
exports.NeighborhoodsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const neighborhoods_entity_1 = require("./neighborhoods.entity");
const neighborhoods_service_1 = require("./neighborhoods.service");
console.log("NeighborhoodsModel:", neighborhoods_entity_1.NeighborhoodsModel);
console.log("CreateNeighborhoodsInput:", neighborhoods_entity_1.CreateNeighborhoodsInput);
console.log("UpdateNeighborhoodsInput:", neighborhoods_entity_1.UpdateNeighborhoodsInput);
let NeighborhoodsResolver = class NeighborhoodsResolver {
    service;
    constructor(service) {
        this.service = service;
    }
    async neighborhoods() {
        return this.service.getNeighborhoods();
    }
};
exports.NeighborhoodsResolver = NeighborhoodsResolver;
__decorate([
    (0, graphql_1.Query)(() => [neighborhoods_entity_1.NeighborhoodsModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NeighborhoodsResolver.prototype, "neighborhoods", null);
exports.NeighborhoodsResolver = NeighborhoodsResolver = __decorate([
    (0, graphql_1.Resolver)(() => neighborhoods_entity_1.NeighborhoodsModel),
    __metadata("design:paramtypes", [neighborhoods_service_1.NeighborhoodsService])
], NeighborhoodsResolver);
//# sourceMappingURL=neighborhoods.resolver.js.map