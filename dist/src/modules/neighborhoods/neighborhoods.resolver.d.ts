import { NeighborhoodsModel } from "./neighborhoods.entity";
import { NeighborhoodsService } from "./neighborhoods.service";
export declare class NeighborhoodsResolver {
    private readonly service;
    constructor(service: NeighborhoodsService);
    neighborhoods(): Promise<NeighborhoodsModel[]>;
}
