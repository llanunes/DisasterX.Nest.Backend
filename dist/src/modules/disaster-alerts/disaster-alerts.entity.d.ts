import { BaseModel } from "src/drizzle/base-model";
export declare class DisasterAlertsModel extends BaseModel {
    neighborhoodId: string;
    message: string;
    severityLevel: string;
    eventDate: Date;
    categoryId: string;
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
