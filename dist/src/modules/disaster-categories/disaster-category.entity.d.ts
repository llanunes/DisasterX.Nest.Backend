import { BaseModel } from "src/drizzle/base-model";
export declare class DisasterCategoriesModel extends BaseModel {
    name: string;
    iconUrl: string;
}
export declare class CreateDisasterCategoriesInput {
    name: string;
    iconUrl?: string;
}
export declare class UpdateDisasterCategoriesInput extends CreateDisasterCategoriesInput {
    id: string;
}
