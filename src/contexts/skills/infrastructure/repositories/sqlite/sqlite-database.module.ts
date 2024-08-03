import { KyselyModule } from '@/kysely/kysely.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { EnvironmentVariables } from '@/interfaces/environmentVariables';

import { SkillRepository } from '@/skills/domain/skill.repository';
import { SqliteSkillRepository } from '@/skills/infrastructure/repositories/sqlite/sqlite.skill-repository';

@Module({
  imports: [
    KyselyModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<EnvironmentVariables>) => ({
        filename: configService.get('filename'),
      }),
    }),
  ],

  providers: [
    {
      provide: SkillRepository,
      useClass: SqliteSkillRepository,
    },
  ],
  exports: [SkillRepository],
})
export class SqliteModule {}
