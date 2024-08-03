import type { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  // up migration code goes here...
  // note: up migrations are mandatory. you must implement this function.
  // For more info, see: https://kysely.dev/docs/migrations
  await db.schema
    .createTable('student')
    .addColumn('run', 'integer', (col) => col.primaryKey())
    .addColumn('names', 'varchar', (col) => col.notNull())
    .addColumn('lastnames', 'varchar', (col) => col.notNull())
    .addColumn('cellphone', 'integer', (col) => col.notNull())
    .addColumn('email', 'varchar', (col) => col.notNull())
    .addColumn('birthdate', 'date', (col) => col.notNull())
    .addColumn('entry_year', 'integer', (col) => col.notNull())
    .addColumn('graduation_year', 'integer')
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  // down migration code goes here...
  // note: down migrations are optional. you can safely delete this function.
  // For more info, see: https://kysely.dev/docs/migrations
  await db.schema.dropTable('student').execute();
}
