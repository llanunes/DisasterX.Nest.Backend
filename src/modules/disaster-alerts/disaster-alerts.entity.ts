
import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/drizzle/base-model";

@ObjectType()
export class DisasterAlertsModel extends BaseModel {

  @Field(() => String, { nullable: false })
  neighborhoodId!: string;

  @Field(() => String, { nullable: false })
  message!: string;

  @Field(() => String, { nullable: false })
  severityLevel!: string;

  @Field(() => Date, { nullable: false })
  eventDate!: Date;

  @Field(() => String, { nullable: false })
  categoryId!: string;
}

@InputType()
export class CreateDisasterAlertsInput {
  @Field(() => String, { nullable: false })
  neighborhoodId!: string;

  @Field(() => String, { nullable: false })
  message!: string;

  @Field(() => String, { nullable: false })
  severityLevel!: string;

  @Field(() => Date, { nullable: false })
  eventDate!: Date;

  @Field(() => String, { nullable: false })
  categoryId!: string;
}

@InputType()
export class UpdateDisasterAlertsInput extends CreateDisasterAlertsInput {
  @Field(() => String, { nullable: false })
  id!: string
}