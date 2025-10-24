import { NeighborhoodsModel } from "./neighborhoods.entity";
export declare class NeighborhoodsService {
    private readonly table;
    constructor();
    getNeighborhoods(): Promise<NeighborhoodsModel[]>;
}
