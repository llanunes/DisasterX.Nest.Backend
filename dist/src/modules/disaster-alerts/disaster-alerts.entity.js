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
exports.UpdateDisasterAlertsInput = exports.CreateDisasterAlertsInput = exports.DisasterAlertsListResponse = exports.DisasterAlertsCustomModel = exports.DisasterAlertsModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const base_model_1 = require("../../drizzle/base-model");
const Pagination_definitions_1 = require("../utils/Pagination.definitions");
let DisasterAlertsModel = class DisasterAlertsModel extends base_model_1.BaseModel {
    neighborhoodId;
    message;
    severityLevel;
    eventDate;
    categoryId;
};
exports.DisasterAlertsModel = DisasterAlertsModel;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DisasterAlertsModel.prototype, "neighborhoodId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DisasterAlertsModel.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DisasterAlertsModel.prototype, "severityLevel", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], DisasterAlertsModel.prototype, "eventDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DisasterAlertsModel.prototype, "categoryId", void 0);
exports.DisasterAlertsModel = DisasterAlertsModel = __decorate([
    (0, graphql_1.ObjectType)()
], DisasterAlertsModel);
let DisasterAlertsCustomModel = class DisasterAlertsCustomModel extends DisasterAlertsModel {
    neighborhoodName;
    categoryName;
    latitude;
    longitude;
};
exports.DisasterAlertsCustomModel = DisasterAlertsCustomModel;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DisasterAlertsCustomModel.prototype, "neighborhoodName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DisasterAlertsCustomModel.prototype, "categoryName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: false }),
    __metadata("design:type", Number)
], DisasterAlertsCustomModel.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: false }),
    __metadata("design:type", Number)
], DisasterAlertsCustomModel.prototype, "longitude", void 0);
exports.DisasterAlertsCustomModel = DisasterAlertsCustomModel = __decorate([
    (0, graphql_1.ObjectType)()
], DisasterAlertsCustomModel);
let DisasterAlertsListResponse = class DisasterAlertsListResponse {
    data;
    pagination;
};
exports.DisasterAlertsListResponse = DisasterAlertsListResponse;
__decorate([
    (0, graphql_1.Field)(() => [DisasterAlertsCustomModel]),
    __metadata("design:type", Array)
], DisasterAlertsListResponse.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Pagination_definitions_1.Pagination),
    __metadata("design:type", Pagination_definitions_1.Pagination)
], DisasterAlertsListResponse.prototype, "pagination", void 0);
exports.DisasterAlertsListResponse = DisasterAlertsListResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DisasterAlertsListResponse);
let CreateDisasterAlertsInput = class CreateDisasterAlertsInput {
    neighborhoodId;
    message;
    severityLevel;
    eventDate;
    categoryId;
};
exports.CreateDisasterAlertsInput = CreateDisasterAlertsInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CreateDisasterAlertsInput.prototype, "neighborhoodId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CreateDisasterAlertsInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CreateDisasterAlertsInput.prototype, "severityLevel", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], CreateDisasterAlertsInput.prototype, "eventDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CreateDisasterAlertsInput.prototype, "categoryId", void 0);
exports.CreateDisasterAlertsInput = CreateDisasterAlertsInput = __decorate([
    (0, graphql_1.InputType)()
], CreateDisasterAlertsInput);
let UpdateDisasterAlertsInput = class UpdateDisasterAlertsInput extends CreateDisasterAlertsInput {
    id;
};
exports.UpdateDisasterAlertsInput = UpdateDisasterAlertsInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UpdateDisasterAlertsInput.prototype, "id", void 0);
exports.UpdateDisasterAlertsInput = UpdateDisasterAlertsInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateDisasterAlertsInput);
//# sourceMappingURL=disaster-alerts.entity.js.map