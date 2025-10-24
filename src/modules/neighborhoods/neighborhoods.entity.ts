import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/drizzle/base-model";


@ObjectType()
export class NeighborhoodsModel extends BaseModel {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Number, { nullable: false })
  latitude!: number;

  @Field(() => Number, { nullable: false })
  longitude!: number;
}

@InputType()
export class CreateNeighborhoodsInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Number, { nullable: false })
  latitude!: number;

  @Field(() => Number, { nullable: false })
  longitude!: number;
}

@InputType()
export class UpdateNeighborhoodsInput extends CreateNeighborhoodsInput {
  @Field(() => String, { nullable: false })
  id!: string;
}