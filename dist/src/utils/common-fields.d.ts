export declare const commonFields: () => {
    id: import("drizzle-orm").HasDefault<import("drizzle-orm").IsPrimaryKey<import("drizzle-orm").NotNull<import("drizzle-orm/pg-core").PgUUIDBuilderInitial<"id">>>>;
    createdAt: import("drizzle-orm").NotNull<import("drizzle-orm").HasRuntimeDefault<import("drizzle-orm").HasDefault<import("drizzle-orm").HasDefault<import("drizzle-orm/pg-core").PgTimestampBuilderInitial<"created_at">>>>>;
    updatedAt: import("drizzle-orm").NotNull<import("drizzle-orm").HasRuntimeDefault<import("drizzle-orm").HasDefault<import("drizzle-orm").HasDefault<import("drizzle-orm/pg-core").PgTimestampBuilderInitial<"updated_at">>>>>;
    deletedAt: import("drizzle-orm/pg-core").PgTimestampBuilderInitial<"deleted_at">;
};
