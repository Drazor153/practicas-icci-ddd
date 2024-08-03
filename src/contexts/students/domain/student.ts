import { PrimitiveStudentSkill } from '@/students/domain/student-skill';

export interface PrimitiveStudent {
  run: number;
  names: string;
  lastnames: string;
  cellphone: number;
  email: string;
  birthdate: Date;
  entry_year: number;
  graduation_year: number | null;
  skills: PrimitiveStudentSkill[];
}

export class Student {
  constructor(private attributes: PrimitiveStudent) {}

  static create(createStudent: PrimitiveStudent): Student {
    return new Student(createStudent);
  }

  toValue(): PrimitiveStudent {
    return this.attributes;
  }
}
