import { Skill } from './skill';

export abstract class SkillRepository {
  abstract create(skill: Skill): Promise<Skill>;
  abstract getAll(): Promise<Skill[]>;
}
