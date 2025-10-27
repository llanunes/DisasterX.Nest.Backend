import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { DisasterAlertsService } from "./disaster-alerts.service";
import { CreateDisasterAlertsInput, DisasterAlertsCustomModel, DisasterAlertsModel, UpdateDisasterAlertsInput } from "./disaster-alerts.entity";

@Resolver(() => DisasterAlertsModel)
export class DisasterAlertsResolver {
  constructor(
    private readonly service: DisasterAlertsService,
  ) {}

  @Query(() => [DisasterAlertsCustomModel])
  async disasterAlerts(): Promise<DisasterAlertsCustomModel[]> {
    return this.service.getDisasterAlerts();
  }

  @Mutation(() => DisasterAlertsModel)
  async createDisasterAlert(
    @Args("input") input: CreateDisasterAlertsInput,
  ): Promise<DisasterAlertsModel> {
    return this.service.createDisasterAlert(input);
  }

  @Mutation(() => DisasterAlertsModel, { nullable: true })
  async updateDisasterAlert(
    @Args("id") id: string,
    @Args("input") input: UpdateDisasterAlertsInput,
  ): Promise<DisasterAlertsModel | null> {
    return this.service.updateDisasterAlert(id, input);
  }

  @Query(() => DisasterAlertsCustomModel, { nullable: true })
  async lastAlert() {
    return this.service.getLastAlert();
  }

  @Query(() => DisasterAlertsCustomModel, { nullable: true })
  async neighborhoodWithMostAlerts() {
    return this.service.getNeighborhoodWithMostAlerts();
  }
}
