import { DisasterCategoriesService } from "./disaster-category.service";
import { CreateDisasterCategoriesInput, DisasterCategoriesModel, UpdateDisasterCategoriesInput } from "./disaster-category.entity";
export declare class DisasterCategoriesResolver {
    private readonly service;
    constructor(service: DisasterCategoriesService);
    disasterCategories(): Promise<DisasterCategoriesModel[]>;
    disasterCategory(id: string): Promise<DisasterCategoriesModel | null>;
    createDisasterCategory(input: CreateDisasterCategoriesInput): Promise<DisasterCategoriesModel>;
    updateDisasterCategory(id: string, input: UpdateDisasterCategoriesInput): Promise<DisasterCategoriesModel | null>;
    deleteDisasterCategory(id: string): Promise<boolean>;
}
