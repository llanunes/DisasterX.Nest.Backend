"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = exports.env = void 0;
const zod_1 = __importDefault(require("zod"));
require("./load-env");
const chalk_1 = __importDefault(require("chalk"));
const booleanSchema = zod_1.default
    .string()
    .optional()
    .transform(value => value === "true");
const envSchema = zod_1.default.object({
    DATABASE_URL: zod_1.default.string().url(),
    DATABASE_MAX_CONNECTIONS: zod_1.default.coerce.number().int().optional(),
    DRIZZLE_LOGS: booleanSchema,
});
exports.envSchema = envSchema;
const parsedEnv = envSchema.safeParse(process.env);
if (!parsedEnv.success) {
    console.error(chalk_1.default.red("Invalid environment variables"), parsedEnv.error.flatten().fieldErrors);
    throw new Error("Invalid environment variables");
}
const env = parsedEnv.data;
exports.env = env;
//# sourceMappingURL=env.js.map