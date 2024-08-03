import { Injectable } from '@/shared/dependency-injection';

import { PrimitiveStudent } from '@/students/domain/student';
import { StudentNotFound } from '@/students/domain/student-not-found';
import { StudentRepository } from '@/students/domain/student.repository';

import { FindStudentByRunDTO } from './find-student-by-run.dto';

@Injectable()
export class FindStudentByRunUseCase {
  constructor(private studentRepository: StudentRepository) {}

  async execute(
    findStudentByRunDTO: FindStudentByRunDTO,
  ): Promise<{ student: PrimitiveStudent }> {
    const student = await this.studentRepository.getByRun(
      findStudentByRunDTO.run,
    );

    if (!student) {
      throw new StudentNotFound(findStudentByRunDTO.run);
    }

    return { student: student.toValue() };
  }
}
