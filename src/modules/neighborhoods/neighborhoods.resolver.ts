import { Resolver, Query } from "@nestjs/graphql";
import { NeighborhoodsModel, CreateNeighborhoodsInput, UpdateNeighborhoodsInput } from "./neighborhoods.entity";
import { NeighborhoodsService } from "./neighborhoods.service";

console.log("NeighborhoodsModel:", NeighborhoodsModel);
console.log("CreateNeighborhoodsInput:", CreateNeighborhoodsInput);
console.log("UpdateNeighborhoodsInput:", UpdateNeighborhoodsInput);

@Resolver(() => NeighborhoodsModel)
export class NeighborhoodsResolver {
  constructor(
    private readonly service: NeighborhoodsService,
  ) {}

  @Query(() => [NeighborhoodsModel])
  async neighborhoods(): Promise<NeighborhoodsModel[]> {
    return this.service.getNeighborhoods();
  }
}
