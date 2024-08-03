import { Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface SkillTable {
  id: Generated<number>;
  topic: string;
  description: string;
}

export type Skill = Selectable<SkillTable>;
export type NewSkill = Insertable<SkillTable>;
export type SkillUpdate = Updateable<SkillTable>;
