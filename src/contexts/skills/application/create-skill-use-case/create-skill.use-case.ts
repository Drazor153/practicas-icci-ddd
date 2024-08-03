import { PrimitiveSkill, Skill } from '@/skills/domain/skill';
import { SkillRepository } from '@/skills/domain/skill.repository';

import { CreateSkillDto } from './create-skill.dto';
import { Injectable } from '@/contexts/shared/dependency-injection';

@Injectable()
export class CreateSkillUseCase {
  constructor(private skillRepository: SkillRepository) {}
  async execute(dto: CreateSkillDto): Promise<{ skill: PrimitiveSkill }> {
    const skill = Skill.create({
      id: -1, // This is a temporary value
      topic: dto.topic,
      description: dto.description,
    });
    const newSkill = await this.skillRepository.create(skill);
    return { skill: newSkill.toValue() };
  }
}
