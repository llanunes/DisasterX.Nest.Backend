import { CreateDisasterCategoriesInput, DisasterCategoriesModel, UpdateDisasterCategoriesInput } from "./disaster-category.entity";
export declare class DisasterCategoriesService {
    private readonly table;
    constructor();
    getDisasterCategories(): Promise<DisasterCategoriesModel[]>;
    createDisasterCategory(input: CreateDisasterCategoriesInput): Promise<DisasterCategoriesModel>;
    getDisasterCategoryById(id: string): Promise<DisasterCategoriesModel | null>;
    updateDisasterCategory(id: string, input: UpdateDisasterCategoriesInput): Promise<DisasterCategoriesModel | null>;
    deleteDisasterCategory(id: string): Promise<boolean>;
}
