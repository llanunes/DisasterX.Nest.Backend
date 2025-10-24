import { DisasterAlert } from "src/drizzle/disaster-alerts";
import { CreateDisasterAlertsInput, DisasterAlertsModel, UpdateDisasterAlertsInput } from "./disaster-alerts.entity";
export declare class DisasterAlertsService {
    private readonly table;
    constructor();
    getDisasterAlerts(): Promise<DisasterAlertsModel[]>;
    getDisasterAlertById(id: string): Promise<DisasterAlertsModel | null>;
    createDisasterAlert(input: CreateDisasterAlertsInput): Promise<DisasterAlert>;
    updateDisasterAlert(id: string, input: UpdateDisasterAlertsInput): Promise<DisasterAlert | null>;
    deleteDisasterAlert(id: string): Promise<boolean>;
}
