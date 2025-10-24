import { DisasterAlertsService } from "./disaster-alerts.service";
import { DisasterAlertsModel } from "./disaster-alerts.entity";
export declare class DisasterAlertsResolver {
    private readonly service;
    constructor(service: DisasterAlertsService);
    disasterAlerts(): Promise<DisasterAlertsModel[]>;
}
