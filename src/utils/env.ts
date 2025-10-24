
import z from "zod";
import "./load-env";
import chalk from "chalk";

const booleanSchema = z
  .string()
  .optional()
  .transform(value => value === "true");


const envSchema = z.object({

DATABASE_URL: z.string().url(),
DATABASE_MAX_CONNECTIONS: z.coerce.number().int().optional(),
DRIZZLE_LOGS: booleanSchema,
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    chalk.red("Invalid environment variables"),
    parsedEnv.error.flatten().fieldErrors,
  );

  throw new Error("Invalid environment variables");
}

const env = parsedEnv.data;
export { env, envSchema };
