import { Student } from './student';

export abstract class StudentRepository {
  abstract create(student: Student): Promise<void>;
  abstract getByRun(run: number): Promise<Student | null>;
  abstract getAll(): Promise<Student[]>;
}
