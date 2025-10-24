import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { DisasterCategoriesService } from "./disaster-category.service";
import { CreateDisasterCategoriesInput, DisasterCategoriesModel, UpdateDisasterCategoriesInput } from "./disaster-category.entity";



@Resolver(() => DisasterCategoriesModel)
export class DisasterCategoriesResolver {
  constructor(
    private readonly service: DisasterCategoriesService,
  ) {}

  @Query(() => [DisasterCategoriesModel])
  async disasterCategories(): Promise<DisasterCategoriesModel[]> {
    return this.service.getDisasterCategories();
  }
  
  @Query(() => DisasterCategoriesModel, { nullable: true })
  async disasterCategory(
    @Args("id", { type: () => String }) id: string,
  ): Promise<DisasterCategoriesModel | null> {
    return this.service.getDisasterCategoryById(id);
  }

  @Mutation(() => DisasterCategoriesModel)
  async createDisasterCategory(
    @Args("input", { type: () => CreateDisasterCategoriesInput }) 
    input: CreateDisasterCategoriesInput,
  ): Promise<DisasterCategoriesModel> {
    return this.service.createDisasterCategory(input);
  }

  @Mutation(() => DisasterCategoriesModel, { nullable: true })
  async updateDisasterCategory(
    @Args("id", { type: () => String }) id: string,
    @Args("input", { type: () => UpdateDisasterCategoriesInput })
    input: UpdateDisasterCategoriesInput,
  ): Promise<DisasterCategoriesModel | null> {
    return this.service.updateDisasterCategory(id, input);
  }

  @Mutation(() => Boolean)
  async deleteDisasterCategory(
    @Args("id", { type: () => String }) id: string,
  ): Promise<boolean> {
    return this.service.deleteDisasterCategory(id);
  }
}
