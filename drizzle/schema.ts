// import { pgTable, serial, varchar, timestamp, index, foreignKey, integer } from "drizzle-orm/pg-core"
//   import { sql } from "drizzle-orm"



// export const t3NextApprouterUser = pgTable("t3-next-approuter_user", {
// 	id: serial("id").primaryKey().notNull(),
// 	name: varchar("name", { length: 256 }),
// 	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
// 	updatedAt: timestamp("updatedAt", { mode: 'string' }),
// });

// export const t3NextApprouterPost = pgTable("t3-next-approuter_post", {
// 	id: serial("id").primaryKey().notNull(),
// 	name: varchar("name", { length: 256 }),
// 	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
// 	updatedAt: timestamp("updatedAt", { mode: 'string' }),
// 	idAuthor: integer("id_author").notNull().references(() => t3NextApprouterUser.id),
// 	description: varchar("description", { length: 2048 }),
// },
// (table) => {
// 	return {
// 		nameIdx: index("name_idx").on(table.name),
// 	}
// });