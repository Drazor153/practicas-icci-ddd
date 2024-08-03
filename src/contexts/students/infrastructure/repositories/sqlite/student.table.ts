import { Insertable, Selectable, Updateable } from 'kysely';

export interface StudentTable {
  run: number;
  names: string;
  lastnames: string;
  cellphone: number;
  email: string;
  birthdate: Date;
  entry_year: number;
  graduation_year: number | null;
}

export type Student = Selectable<StudentTable>;
export type NewStudent = Insertable<StudentTable>;
export type StudentUpdate = Updateable<StudentTable>;
