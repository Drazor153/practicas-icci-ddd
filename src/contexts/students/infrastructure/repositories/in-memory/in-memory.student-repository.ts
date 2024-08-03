import { PrimitiveStudent, Student } from '@/students/domain/student';
import { StudentRepository } from '@/students/domain/student.repository';

export class InMemoryStudentRepository extends StudentRepository {
  private students: PrimitiveStudent[] = [];

  async create(student: Student): Promise<void> {
    this.students.push(student.toValue());
  }
  async getByRun(run: number): Promise<Student | null> {
    const student = this.students.find((student) => student.run === run);

    return student ? new Student(student) : null;
  }

  async getAll(): Promise<Student[]> {
    return this.students.map((student) => new Student(student));
  }
}
