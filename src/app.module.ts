import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { StudentModule } from '@/students/infrastructure/student.module';
import { SkillModule } from '@/skills/infrastructure/skill.module';

@Module({
  imports: [ConfigModule.forRoot(), StudentModule, SkillModule],
})
export class AppModule {}
