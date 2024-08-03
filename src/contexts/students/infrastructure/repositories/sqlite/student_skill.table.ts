import { Selectable } from 'kysely';

export interface StudentSkillTable {
  student_run: number;
  skill_id: number;
  level: number;
}

export type StudentSkill = Selectable<StudentSkillTable>;
