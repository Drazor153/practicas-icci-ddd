import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateSkillUseCase } from '@/skills/application/create-skill-use-case/create-skill.use-case';
import { GetAllSkillsUseCase } from '@/skills/application/get-all-skills-use-case/get-all-skills.use-case';

import { PrimitiveSkill } from '@/skills/domain/skill';

import { CreateSkillDto } from './skill.http-dto';

@Controller('skills')
export class SkillController {
  constructor(
    private getAllSkillsUseCase: GetAllSkillsUseCase,
    private createSkillUseCase: CreateSkillUseCase,
  ) {}

  @Get()
  async getAll(): Promise<{ skills: PrimitiveSkill[] }> {
    return await this.getAllSkillsUseCase.execute();
  }

  @Post()
  async create(
    @Body() dto: CreateSkillDto,
  ): Promise<{ skill: PrimitiveSkill }> {
    return await this.createSkillUseCase.execute(dto);
  }
}
