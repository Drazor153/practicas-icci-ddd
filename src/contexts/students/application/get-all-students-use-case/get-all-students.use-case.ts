import { Injectable } from '@/shared/dependency-injection';

import { PrimitiveStudent } from '@/students/domain/student';
import { StudentRepository } from '@/students/domain/student.repository';

@Injectable()
export class GetAllStudentsUseCase {
  constructor(private studentRepository: StudentRepository) {}

  async execute(): Promise<{ students: PrimitiveStudent[] }> {
    const students = await this.studentRepository.getAll();

    return { students: students.map((student) => student.toValue()) };
  }
}
