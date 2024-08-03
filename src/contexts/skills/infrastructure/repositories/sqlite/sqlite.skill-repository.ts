import { Skill } from '@/contexts/skills/domain/skill';
import { SkillRepository } from '@/contexts/skills/domain/skill.repository';
import { Database } from '@/kysely/database';
import { Injectable } from '@/shared/dependency-injection';

@Injectable()
export class SqliteSkillRepository implements SkillRepository {
  constructor(private db: Database) {}

  async create(skill: Skill): Promise<Skill> {
    const valueObj = skill.toValue();

    const newSkill = await this.db
      .insertInto('skill')
      .values({
        topic: valueObj.topic,
        description: valueObj.description,
      })
      .returningAll()
      .executeTakeFirstOrThrow();

    return new Skill(newSkill);
  }
  async getAll(): Promise<Skill[]> {
    const result = await this.db.selectFrom('skill').selectAll().execute();

    return result.map((skill) => new Skill(skill));
  }
}
