import { Module } from '@nestjs/common';

import { StudentRepository } from '@/students/domain/student.repository';

// import { CreateStudentUseCase } from '@/students/application/create-student-use-case/create-student.use-case';
// import { FindStudentByRunUseCase } from '@/students/application/find-student-by-run-use-case/find-student-by-run.use-case';
// import { GetAllStudentsUseCase } from '@/students/application/get-all-students-use-case/get-all-students.use-case';
import {
  CreateStudentUseCase,
  FindStudentByRunUseCase,
  GetAllStudentsUseCase,
} from '@/students/application';

// import { CreateStudentController } from './http/create-student/create-student.controller';
// import { FindStudentByRunController } from './http/find-student-by-run/find-student-by-run.controller';
// import { GetAllStudentsController } from './http/get-all-students/get-all-students.controller';
import {
  CreateStudentController,
  FindStudentByRunController,
  GetAllStudentsController,
} from '@/students/infrastructure/http';

import { SqliteModule } from './repositories/sqlite/sqlite-database.module';
import { InMemoryModule } from './repositories/in-memory/in-memory.module';

@Module({
  imports: [SqliteModule],
  controllers: [
    CreateStudentController,
    FindStudentByRunController,
    GetAllStudentsController,
  ],
  providers: [
    CreateStudentUseCase,
    FindStudentByRunUseCase,
    GetAllStudentsUseCase,
  ],
  exports: [
    CreateStudentUseCase,
    FindStudentByRunUseCase,
    GetAllStudentsUseCase,
  ],
})
export class StudentModule {}
