import { Injectable } from '@/contexts/shared/dependency-injection';
import { PrimitiveSkill, Skill } from '@/skills/domain/skill';
import { SkillRepository } from '@/skills/domain/skill.repository';

@Injectable()
export class GetAllSkillsUseCase {
  constructor(private skillRepository: SkillRepository) {}

  async execute(): Promise<{ skills: PrimitiveSkill[] }> {
    const result = await this.skillRepository.getAll();
    return { skills: result.map((skill) => skill.toValue()) };
  }
}
