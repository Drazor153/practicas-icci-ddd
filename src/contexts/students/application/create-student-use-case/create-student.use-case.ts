import { Injectable } from '@/shared/dependency-injection';

import { StudentRepository } from '@/students/domain/student.repository';
import { PrimitiveStudent, Student } from '@/students/domain/student';

import { CreateStudentDTO } from './create-student.dto';

@Injectable()
export class CreateStudentUseCase {
  constructor(private studentRepository: StudentRepository) {}

  async execute(dto: CreateStudentDTO): Promise<{ student: PrimitiveStudent }> {
    const student = Student.create({
      ...dto,
      skills: [],
      graduation_year: null,
    });

    await this.studentRepository.create(student);
    return { student: student.toValue() };
  }
}
