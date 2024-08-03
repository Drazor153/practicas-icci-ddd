import { KyselyModule } from '@/kysely/kysely.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { EnvironmentVariables } from '@/interfaces/environmentVariables';

import { StudentRepository } from '@/students/domain/student.repository';
import { SqliteStudentRepository } from '@/students/infrastructure/repositories/sqlite/sqlite.student-repository';

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
      provide: StudentRepository,
      useClass: SqliteStudentRepository,
    },
  ],
  exports: [StudentRepository],
})
export class SqliteModule {}
