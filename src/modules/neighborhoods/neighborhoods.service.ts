import { Injectable } from "@nestjs/common";
import { NeighborhoodsModel } from "./neighborhoods.entity";
import { neighborhoodsTable } from "src/drizzle/neighborhoods";
import { drizzle } from "drizzle";

@Injectable()
export class NeighborhoodsService {
   private readonly table = neighborhoodsTable;

   constructor() {
   }

   async getNeighborhoods(): Promise<NeighborhoodsModel[]> {
     const neighborhoods = await drizzle.query.neighborhoodsTable.findMany({
       columns: {
         id: true,
         name: true,
         latitude: true,
         longitude: true,
         createdAt: true,
       },
     });

     return neighborhoods.map(neighborhood => ({
       ...neighborhood,
       latitude: Number(neighborhood.latitude),
       longitude: Number(neighborhood.longitude),
     }));
   }
}

