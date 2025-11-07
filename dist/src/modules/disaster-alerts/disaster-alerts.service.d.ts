import { DisasterAlert } from "src/drizzle/disaster-alerts";
import { CreateDisasterAlertsInput, DisasterAlertsCustomModel, DisasterAlertsListResponse, DisasterAlertsModel, UpdateDisasterAlertsInput } from "./disaster-alerts.entity";
import { PaginationInput } from "../utils/Pagination.definitions";
export declare class DisasterAlertsService {
    private readonly table;
    constructor();
    getDisasterAlerts(pagination: PaginationInput): Promise<DisasterAlertsListResponse>;
    getDisasterAlertById(id: string): Promise<DisasterAlertsModel | null>;
    createDisasterAlert(input: CreateDisasterAlertsInput): Promise<DisasterAlert>;
    updateDisasterAlert(id: string, input: UpdateDisasterAlertsInput): Promise<DisasterAlert | null>;
    deleteDisasterAlert(id: string): Promise<boolean>;
    getLastAlert(): Promise<DisasterAlertsCustomModel | null>;
    getNeighborhoodWithMostAlerts(): Promise<DisasterAlertsCustomModel | null>;
}
