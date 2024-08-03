import { type Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('skill')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('topic', 'varchar', (col) => col.notNull())
    .addColumn('description', 'varchar', (col) => col.notNull())
    .execute();

  await db.schema
    .createTable('student_skill')
    .addColumn('student_run', 'integer', (col) =>
      col.references('student.run').notNull(),
    )
    .addColumn('skill_id', 'integer', (col) =>
      col.references('skill.id').notNull(),
    )
    .addColumn('level', 'integer', (col) => col.notNull())
    .addPrimaryKeyConstraint('primary_key', ['student_run', 'skill_id'])
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('skill').execute();
  await db.schema.dropTable('student_skill').execute();
}
