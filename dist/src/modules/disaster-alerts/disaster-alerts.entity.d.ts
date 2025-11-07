import { BaseModel } from "src/drizzle/base-model";
import { Pagination } from "../utils/Pagination.definitions";
export declare class DisasterAlertsModel extends BaseModel {
    neighborhoodId: string;
    message: string;
    severityLevel: string;
    eventDate: Date;
    categoryId: string;
}
export declare class DisasterAlertsCustomModel extends DisasterAlertsModel {
    neighborhoodName: string;
    categoryName: string;
    latitude: number;
    longitude: number;
}
export declare class DisasterAlertsListResponse {
    data: DisasterAlertsCustomModel[];
    pagination: Pagination;
}
export declare class CreateDisasterAlertsInput {
    neighborhoodId: string;
    message: string;
    severityLevel: string;
    eventDate: Date;
    categoryId: string;
}
export declare class UpdateDisasterAlertsInput extends CreateDisasterAlertsInput {
    id: string;
}
