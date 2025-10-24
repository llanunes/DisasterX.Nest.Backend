import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { DisasterAlertsService } from "./disaster-alerts.service";
import { CreateDisasterCategoriesInput, DisasterCategoriesModel, UpdateDisasterCategoriesInput } from "../disaster-categories/disaster-category.entity";
import { DisasterAlertsModel } from "./disaster-alerts.entity";

@Resolver(() => DisasterAlertsModel)
export class DisasterAlertsResolver {
  constructor(
    private readonly service: DisasterAlertsService,
  ) {}

  @Query(() => [DisasterAlertsModel])
  async disasterAlerts(): Promise<DisasterAlertsModel[]> {
    return this.service.getDisasterAlerts();
  }
  
}
