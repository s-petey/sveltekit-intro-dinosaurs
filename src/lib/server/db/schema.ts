import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
  id: integer('id').primaryKey(),
  name: text('name'),
});

export const dinosaur = sqliteTable('dinosaur', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
});

export type Dinosaur = typeof dinosaur.$inferSelect;
export type DinosaurInsert = typeof dinosaur.$inferInsert;
export type User = typeof user.$inferSelect;
