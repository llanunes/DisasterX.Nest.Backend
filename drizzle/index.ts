// src/database/drizzle/index.ts
import { drizzle as DrizzlePostgres } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "src/utils/env";
import * as schema from "../src/drizzle/schema";

// Cria a conexão com PostgreSQL
export const pool = new Pool({
  max: env.DATABASE_MAX_CONNECTIONS,
  connectionString: env.DATABASE_URL,
});

// Drizzle principal (uso normal)
export const drizzle = DrizzlePostgres(pool, {
  schema,
  logger: env.DRIZZLE_LOGS, // true ou false dependendo da configuração
});

// Drizzle com logs sempre ativados
export const drizzleWithLogs = DrizzlePostgres(pool, {
  schema,
  logger: true,
});

// Tipo do Drizzle principal
export type Drizzle = typeof drizzle;

// Tipo para transações
export type DrizzleTransaction = Parameters<
  Parameters<typeof drizzle.transaction>[0]
>[0];
