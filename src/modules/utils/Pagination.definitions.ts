import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

@ObjectType()
export class Pagination {
  @Field(() => Int, { nullable: false })
  totalCount: number;

  @Field(() => Int, { nullable: false })
  pageCount: number;

  @Field(() => Boolean, { nullable: false })
  hasMore: boolean;
}

@InputType()
export class PaginationInput {
  @Field(() => Int, { nullable: false })
  @Min(1, { message: "A página de paginação deve ser no mínimo 1." })
  readonly page: number;

  @Field(() => Int, { nullable: false })
  @Min(1, {
    message: "A quantidade por página de paginação deve ser no mínimo 1.",
  })
  @Max(200, {
    message: "A quantidade por página de paginação deve ser no máximo 200.",
  })
  readonly pageSize: number;
}

export function getPaginationResponse(
  totalCount: number,
  paginationInput?: PaginationInput | null,
): Pagination {
  const pageCount = paginationInput
    ? Math.max(Math.ceil(totalCount / paginationInput.pageSize), 1)
    : 1;

  const page = paginationInput?.page ?? 1;

  return {
    pageCount,
    totalCount,
    hasMore: page < pageCount,
  };
}


export function getPaginationOffset(pagination: PaginationInput): number;
export function getPaginationOffset(
  pagination?: PaginationInput | null,
): number | undefined;

export function getPaginationOffset(
  pagination?: PaginationInput | null,
): number | undefined {
  if (!pagination) {
    return undefined;
  }

  return Math.max((pagination.page - 1) * pagination.pageSize, 0);
}