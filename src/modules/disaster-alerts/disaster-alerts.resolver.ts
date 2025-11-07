import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { DisasterAlertsService } from "./disaster-alerts.service";
import { CreateDisasterAlertsInput, DisasterAlertsCustomModel, DisasterAlertsListResponse, DisasterAlertsModel, UpdateDisasterAlertsInput } from "./disaster-alerts.entity";
import { PaginationInput } from "../utils/Pagination.definitions";

@Resolver(() => DisasterAlertsModel)
export class DisasterAlertsResolver {
  constructor(
    private readonly service: DisasterAlertsService,
  ) {}

  @Query(() => DisasterAlertsListResponse)
  async disasterAlerts(
    @Args("pagination", { nullable: false }) pagination: PaginationInput,
  ): Promise<DisasterAlertsListResponse> {
    return this.service.getDisasterAlerts(pagination);
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
