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
exports.UpdateDisasterCategoriesInput = exports.CreateDisasterCategoriesInput = exports.DisasterCategoriesModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const base_model_1 = require("../../drizzle/base-model");
let DisasterCategoriesModel = class DisasterCategoriesModel extends base_model_1.BaseModel {
    name;
    iconUrl;
};
exports.DisasterCategoriesModel = DisasterCategoriesModel;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DisasterCategoriesModel.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DisasterCategoriesModel.prototype, "iconUrl", void 0);
exports.DisasterCategoriesModel = DisasterCategoriesModel = __decorate([
    (0, graphql_1.ObjectType)()
], DisasterCategoriesModel);
let CreateDisasterCategoriesInput = class CreateDisasterCategoriesInput {
    name;
    iconUrl;
};
exports.CreateDisasterCategoriesInput = CreateDisasterCategoriesInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CreateDisasterCategoriesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateDisasterCategoriesInput.prototype, "iconUrl", void 0);
exports.CreateDisasterCategoriesInput = CreateDisasterCategoriesInput = __decorate([
    (0, graphql_1.InputType)()
], CreateDisasterCategoriesInput);
let UpdateDisasterCategoriesInput = class UpdateDisasterCategoriesInput extends CreateDisasterCategoriesInput {
    id;
};
exports.UpdateDisasterCategoriesInput = UpdateDisasterCategoriesInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UpdateDisasterCategoriesInput.prototype, "id", void 0);
exports.UpdateDisasterCategoriesInput = UpdateDisasterCategoriesInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateDisasterCategoriesInput);
//# sourceMappingURL=disaster-category.entity.js.map