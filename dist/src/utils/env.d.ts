import z from "zod";
import "./load-env";
declare const envSchema: z.ZodObject<{
    DATABASE_URL: z.ZodString;
    DATABASE_MAX_CONNECTIONS: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    DRIZZLE_LOGS: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<boolean, string | undefined>>;
}, z.core.$strip>;
declare const env: {
    DATABASE_URL: string;
    DRIZZLE_LOGS: boolean;
    DATABASE_MAX_CONNECTIONS?: number | undefined;
};
export { env, envSchema };
