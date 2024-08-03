import { Module } from '@nestjs/common';

import { StudentRepository } from '@/students/domain/student.repository';

import { InMemoryStudentRepository } from './in-memory.student-repository';

@Module({
  providers: [
    {
      provide: StudentRepository,
      useClass: InMemoryStudentRepository,
    },
  ],
  exports: [StudentRepository],
})
export class InMemoryModule {}
