import { Injectable } from '@nestjs/common';

import { drizzle } from "drizzle";
import { eq, desc, sql } from "drizzle-orm";
import { DisasterAlert, disasterAlertsTable } from "src/drizzle/disaster-alerts";
import { CreateDisasterAlertsInput, DisasterAlertsCustomModel, DisasterAlertsListResponse, DisasterAlertsModel, UpdateDisasterAlertsInput } from "./disaster-alerts.entity";
import { disasterCategoriesTable } from "src/drizzle/disaster-categories";
import { neighborhoodsTable } from "src/drizzle/neighborhoods";
import { getPaginationOffset, getPaginationResponse, PaginationInput } from "../utils/Pagination.definitions";

@Injectable()
export class DisasterAlertsService {
  private readonly table = disasterAlertsTable;

  constructor() {}

async getDisasterAlerts(pagination: PaginationInput): Promise<DisasterAlertsListResponse> {
  const [data, [{ totalCount }]] = await Promise.all([
    drizzle
      .select({
        id: disasterAlertsTable.id,
        categoryId: disasterAlertsTable.categoryId,
        categoryName: disasterCategoriesTable.name ?? "Não informado",
        neighborhoodId: disasterAlertsTable.neighborhoodId,
        neighborhoodName: neighborhoodsTable.name ?? "Não informado",
        latitude: neighborhoodsTable.latitude,
        longitude: neighborhoodsTable.longitude,
        message: disasterAlertsTable.message,
        severityLevel: disasterAlertsTable.severityLevel,
        eventDate: disasterAlertsTable.eventDate,
        createdAt: disasterAlertsTable.createdAt,
        updatedAt: disasterAlertsTable.updatedAt,
      })
      .from(disasterAlertsTable)
      .innerJoin(
        disasterCategoriesTable,
        eq(disasterAlertsTable.categoryId, disasterCategoriesTable.id),
      )
      .innerJoin(
        neighborhoodsTable,
        eq(disasterAlertsTable.neighborhoodId, neighborhoodsTable.id),
      )
      .limit(pagination.pageSize)
      .offset(getPaginationOffset(pagination))
      .execute(),

    drizzle
      .select({
        totalCount: sql<number>`COUNT(*)`.as("total_count"),
      })
      .from(disasterAlertsTable)
      .execute(),
  ]);

  return {
    data: data.map(alert => ({
      ...alert,
      latitude: Number(alert.latitude),
      longitude: Number(alert.longitude),
    })),
    pagination: getPaginationResponse(totalCount, pagination),
  };
}


  async getDisasterAlertById(id: string): Promise<DisasterAlertsModel | null> {
    const alert = await drizzle.query.disasterAlertsTable.findFirst({
      where: eq(disasterAlertsTable.id, id),
      columns: {
        id: true,
        categoryId: true,
        neighborhoodId: true,
        message: true,
        severityLevel: true,
        eventDate: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return alert ?? null;
  }

  async createDisasterAlert(input: CreateDisasterAlertsInput): Promise<DisasterAlert> {
    const [newAlert] = await drizzle.insert(this.table).values({
      id: crypto.randomUUID(),
      categoryId: input.categoryId,
      neighborhoodId: input.neighborhoodId,
      message: input.message,
      severityLevel: input.severityLevel,
      eventDate: input.eventDate,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    }).returning();

    return newAlert;
  }

  async updateDisasterAlert(id: string, input: UpdateDisasterAlertsInput): Promise<DisasterAlert | null> {
    const [updatedAlert] = await drizzle.update(this.table)
      .set({
        ...input,
        updatedAt: new Date(),
      })
      .where(eq(disasterAlertsTable.id, id))
      .returning();

    return updatedAlert ?? null;
  }

  async deleteDisasterAlert(id: string): Promise<boolean> {
    const result = await drizzle.update(this.table)
      .set({
        deletedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(disasterAlertsTable.id, id))
      .returning();

    return result.length > 0;
  }

  async getLastAlert(): Promise<DisasterAlertsCustomModel | null> {
    const [alert] = await drizzle
      .select({
        id: disasterAlertsTable.id,
        categoryId: disasterAlertsTable.categoryId,
        categoryName: disasterCategoriesTable.name,
        neighborhoodId: disasterAlertsTable.neighborhoodId,
        neighborhoodName: neighborhoodsTable.name,
        latitude: neighborhoodsTable.latitude,
        longitude: neighborhoodsTable.longitude,
        message: disasterAlertsTable.message,
        severityLevel: disasterAlertsTable.severityLevel,
        eventDate: disasterAlertsTable.eventDate,
        createdAt: disasterAlertsTable.createdAt,
        updatedAt: disasterAlertsTable.updatedAt,
      })
      .from(disasterAlertsTable)
      .innerJoin(
        disasterCategoriesTable,
        eq(disasterAlertsTable.categoryId, disasterCategoriesTable.id)
      )
      .innerJoin(
        neighborhoodsTable,
        eq(disasterAlertsTable.neighborhoodId, neighborhoodsTable.id)
      )
      .orderBy(desc(disasterAlertsTable.eventDate))
      .limit(1)
      .execute();

    if (!alert) return null;

    return {
      ...alert,
      latitude: Number(alert.latitude),
      longitude: Number(alert.longitude),
    };
  }

  async getNeighborhoodWithMostAlerts(): Promise<DisasterAlertsCustomModel | null> {
    const [alert] = await drizzle
      .select({
        id: disasterAlertsTable.id,
        categoryId: disasterAlertsTable.categoryId,
        categoryName: disasterCategoriesTable.name,
        neighborhoodId: disasterAlertsTable.neighborhoodId,
        neighborhoodName: neighborhoodsTable.name,
        latitude: neighborhoodsTable.latitude,
        longitude: neighborhoodsTable.longitude,
        message: disasterAlertsTable.message,
        severityLevel: disasterAlertsTable.severityLevel,
        eventDate: disasterAlertsTable.eventDate,
        createdAt: disasterAlertsTable.createdAt,
        updatedAt: disasterAlertsTable.updatedAt,
        count: sql`COUNT(${disasterAlertsTable.id}) OVER (PARTITION BY ${disasterAlertsTable.neighborhoodId})`,
      })
      .from(disasterAlertsTable)
      .innerJoin(
        disasterCategoriesTable,
        eq(disasterAlertsTable.categoryId, disasterCategoriesTable.id)
      )
      .innerJoin(
        neighborhoodsTable,
        eq(disasterAlertsTable.neighborhoodId, neighborhoodsTable.id)
      )
      .orderBy(sql`count DESC`)
      .limit(1)
      .execute();

    if (!alert) return null;

    return {
      ...alert,
      latitude: Number(alert.latitude),
      longitude: Number(alert.longitude),
    };
  }
}
