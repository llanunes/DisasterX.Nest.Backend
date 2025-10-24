import { Pool } from "pg";
import * as schema from "../src/drizzle/schema";
export declare const pool: any;
export declare const drizzle: import("drizzle-orm/node-postgres").NodePgDatabase<typeof schema> & {
    $client: import("drizzle-orm/node-postgres").NodePgClient extends TClient ? Pool : TClient;
};
export declare const drizzleWithLogs: import("drizzle-orm/node-postgres").NodePgDatabase<typeof schema> & {
    $client: import("drizzle-orm/node-postgres").NodePgClient extends TClient ? Pool : TClient;
};
export type Drizzle = typeof drizzle;
export type DrizzleTransaction = Parameters<Parameters<typeof drizzle.transaction>[0]>[0];
