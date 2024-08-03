import { Kysely } from 'kysely';

import { StudentTable } from '@/students/infrastructure/repositories/sqlite/student.table';
import { StudentSkillTable } from '@/students/infrastructure/repositories/sqlite/student_skill.table';

import { SkillTable } from '@/skills/infrastructure/repositories/sqlite/skill.table';

export interface Tables {
  student: StudentTable;
  skill: SkillTable;
  student_skill: StudentSkillTable;
}

export class Database extends Kysely<Tables> {}
