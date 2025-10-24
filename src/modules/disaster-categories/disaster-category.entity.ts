
import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/drizzle/base-model";

@ObjectType()
export class DisasterCategoriesModel extends BaseModel {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  iconUrl!: string;
}

@InputType()
export class CreateDisasterCategoriesInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  iconUrl?: string;
}

@InputType()
export class UpdateDisasterCategoriesInput extends CreateDisasterCategoriesInput {
  @Field(() => String, { nullable: false })
  id!: string;
}