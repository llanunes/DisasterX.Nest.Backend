import { DisasterAlertsService } from "./disaster-alerts.service";
import { CreateDisasterAlertsInput, DisasterAlertsCustomModel, DisasterAlertsModel, UpdateDisasterAlertsInput } from "./disaster-alerts.entity";
export declare class DisasterAlertsResolver {
    private readonly service;
    constructor(service: DisasterAlertsService);
    disasterAlerts(): Promise<DisasterAlertsCustomModel[]>;
    createDisasterAlert(input: CreateDisasterAlertsInput): Promise<DisasterAlertsModel>;
    updateDisasterAlert(id: string, input: UpdateDisasterAlertsInput): Promise<DisasterAlertsModel | null>;
}
