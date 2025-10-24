import { Injectable } from "@nestjs/common";
import { drizzle } from "drizzle";
import { eq } from "drizzle-orm";
import { DisasterAlert, disasterAlertsTable } from "src/drizzle/disaster-alerts";
import { CreateDisasterAlertsInput, DisasterAlertsModel, UpdateDisasterAlertsInput } from "./disaster-alerts.entity";

@Injectable()
export class DisasterAlertsService {
  private readonly table = disasterAlertsTable;

  constructor() {}

  async getDisasterAlerts(): Promise<DisasterAlertsModel[]> {
    return drizzle.query.disasterAlertsTable.findMany({
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
}
