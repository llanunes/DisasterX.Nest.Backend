
import { Injectable } from "@nestjs/common";

import { eq } from 'drizzle-orm';
import { disasterCategoriesTable } from "src/drizzle/disaster-categories";
import { drizzle } from "drizzle";
import { CreateDisasterCategoriesInput, DisasterCategoriesModel, UpdateDisasterCategoriesInput } from "./disaster-category.entity";

@Injectable()
export class DisasterCategoriesService {
  private readonly table = disasterCategoriesTable;

  constructor() {
  }

  async getDisasterCategories(): Promise<DisasterCategoriesModel[]> {
    const categories = await drizzle.query.disasterCategoriesTable.findMany({
      columns: {
        id: true,
        name: true,
        iconUrl: true, 
        createdAt: true,
      },
    });

    return categories.map(category => ({
      ...category,
      iconUrl: category.iconUrl ?? "",
    }));
  }

  async createDisasterCategory(input: CreateDisasterCategoriesInput): Promise<DisasterCategoriesModel> {
    const [newCategory] = await drizzle
      .insert(this.table)
      .values({
        createdAt: new Date(),
        deletedAt: null,
        id: crypto.randomUUID(),
        updatedAt: new Date(),
        name: input.name,
        iconUrl: input.iconUrl ?? "",
      })
      .returning();

    return {
      ...newCategory,
      iconUrl: newCategory.iconUrl ?? "",
    };
  }

  async getDisasterCategoryById(id: string): Promise<DisasterCategoriesModel | null> {
    const category = await drizzle.query.disasterCategoriesTable.findFirst({
      where: eq(disasterCategoriesTable.id, id),
      columns: {
        id: true,
        name: true,
        iconUrl: true,
        createdAt: true,
      },
    });

    if (!category) {
      return null;
    }

    return {
      ...category,
      iconUrl: category.iconUrl ?? "",
    };
  }

  async updateDisasterCategory(id: string, input: UpdateDisasterCategoriesInput): Promise<DisasterCategoriesModel | null> {
    const [updatedCategory] = await drizzle
      .update(this.table)
      .set({
        name: input.name,
        iconUrl: input.iconUrl,
        updatedAt: new Date(),
      })
      .where(eq(disasterCategoriesTable.id, id))
      .returning();

    if (!updatedCategory) {
      return null;
    }

    return {
      ...updatedCategory,
      iconUrl: updatedCategory.iconUrl ?? "",
    };
  }

  async deleteDisasterCategory(id: string): Promise<boolean> {
    const result = await drizzle
      .update(this.table)
      .set({
        deletedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(disasterCategoriesTable.id, id))
      .returning();

    return result.length > 0;
  }
}