import { DisasterAlertsService } from "./disaster-alerts.service";
import { CreateDisasterAlertsInput, DisasterAlertsCustomModel, DisasterAlertsListResponse, DisasterAlertsModel, UpdateDisasterAlertsInput } from "./disaster-alerts.entity";
import { PaginationInput } from "../utils/Pagination.definitions";
export declare class DisasterAlertsResolver {
    private readonly service;
    constructor(service: DisasterAlertsService);
    disasterAlerts(pagination: PaginationInput): Promise<DisasterAlertsListResponse>;
    createDisasterAlert(input: CreateDisasterAlertsInput): Promise<DisasterAlertsModel>;
    updateDisasterAlert(id: string, input: UpdateDisasterAlertsInput): Promise<DisasterAlertsModel | null>;
    lastAlert(): Promise<DisasterAlertsCustomModel | null>;
    neighborhoodWithMostAlerts(): Promise<DisasterAlertsCustomModel | null>;
}
