import { Module } from '@nestjs/common';

import { CreateSkillUseCase } from '@/skills/application/create-skill-use-case/create-skill.use-case';
import { GetAllSkillsUseCase } from '@/skills/application/get-all-skills-use-case/get-all-skills.use-case';

import { SkillController } from './http/skill.controller';
import { SqliteModule } from './repositories/sqlite/sqlite-database.module';

@Module({
  imports: [SqliteModule],
  controllers: [SkillController],
  providers: [CreateSkillUseCase, GetAllSkillsUseCase],
  exports: [CreateSkillUseCase, GetAllSkillsUseCase],
})
export class SkillModule {}
