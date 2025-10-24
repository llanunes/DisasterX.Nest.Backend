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
exports.UpdateNeighborhoodsInput = exports.CreateNeighborhoodsInput = exports.NeighborhoodsModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const base_model_1 = require("../../drizzle/base-model");
let NeighborhoodsModel = class NeighborhoodsModel extends base_model_1.BaseModel {
    name;
    latitude;
    longitude;
};
exports.NeighborhoodsModel = NeighborhoodsModel;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], NeighborhoodsModel.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: false }),
    __metadata("design:type", Number)
], NeighborhoodsModel.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: false }),
    __metadata("design:type", Number)
], NeighborhoodsModel.prototype, "longitude", void 0);
exports.NeighborhoodsModel = NeighborhoodsModel = __decorate([
    (0, graphql_1.ObjectType)()
], NeighborhoodsModel);
let CreateNeighborhoodsInput = class CreateNeighborhoodsInput {
    name;
    latitude;
    longitude;
};
exports.CreateNeighborhoodsInput = CreateNeighborhoodsInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CreateNeighborhoodsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: false }),
    __metadata("design:type", Number)
], CreateNeighborhoodsInput.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: false }),
    __metadata("design:type", Number)
], CreateNeighborhoodsInput.prototype, "longitude", void 0);
exports.CreateNeighborhoodsInput = CreateNeighborhoodsInput = __decorate([
    (0, graphql_1.InputType)()
], CreateNeighborhoodsInput);
let UpdateNeighborhoodsInput = class UpdateNeighborhoodsInput extends CreateNeighborhoodsInput {
    id;
};
exports.UpdateNeighborhoodsInput = UpdateNeighborhoodsInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UpdateNeighborhoodsInput.prototype, "id", void 0);
exports.UpdateNeighborhoodsInput = UpdateNeighborhoodsInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateNeighborhoodsInput);
//# sourceMappingURL=neighborhoods.entity.js.map