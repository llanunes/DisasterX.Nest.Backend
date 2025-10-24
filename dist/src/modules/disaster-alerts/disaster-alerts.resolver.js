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
exports.DisasterAlertsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const disaster_alerts_service_1 = require("./disaster-alerts.service");
const disaster_alerts_entity_1 = require("./disaster-alerts.entity");
let DisasterAlertsResolver = class DisasterAlertsResolver {
    service;
    constructor(service) {
        this.service = service;
    }
    async disasterAlerts() {
        return this.service.getDisasterAlerts();
    }
};
exports.DisasterAlertsResolver = DisasterAlertsResolver;
__decorate([
    (0, graphql_1.Query)(() => [disaster_alerts_entity_1.DisasterAlertsModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DisasterAlertsResolver.prototype, "disasterAlerts", null);
exports.DisasterAlertsResolver = DisasterAlertsResolver = __decorate([
    (0, graphql_1.Resolver)(() => disaster_alerts_entity_1.DisasterAlertsModel),
    __metadata("design:paramtypes", [disaster_alerts_service_1.DisasterAlertsService])
], DisasterAlertsResolver);
//# sourceMappingURL=disaster-alerts.resolver.js.map