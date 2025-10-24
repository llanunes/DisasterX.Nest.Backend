import { BaseModel } from "src/drizzle/base-model";
export declare class NeighborhoodsModel extends BaseModel {
    name: string;
    latitude: number;
    longitude: number;
}
export declare class CreateNeighborhoodsInput {
    name: string;
    latitude: number;
    longitude: number;
}
export declare class UpdateNeighborhoodsInput extends CreateNeighborhoodsInput {
    id: string;
}
