import {
  PrimitiveStudentSkill,
  StudentSkill,
} from '@/contexts/students/domain/student-skill';
import { Database } from '@/kysely/database';
import { Injectable } from '@/shared/dependency-injection';

import { Student } from '@/students/domain/student';
import { StudentRepository } from '@/students/domain/student.repository';

@Injectable()
export class SqliteStudentRepository implements StudentRepository {
  constructor(private db: Database) {}

  async create(student: Student): Promise<void> {
    const objValue = student.toValue();
    await this.db
      .insertInto('student')
      .values({
        run: objValue.run,
        names: objValue.names,
        lastnames: objValue.lastnames,
        cellphone: objValue.cellphone,
        email: objValue.email,
        birthdate: objValue.birthdate,
        entry_year: objValue.entry_year,
        graduation_year: objValue.graduation_year,
      })
      .returningAll()
      .executeTakeFirstOrThrow();
  }

  async getByRun(run: number): Promise<Student | null> {
    const studentSkillsRows = await this.db
      .selectFrom('student')
      .leftJoin('student_skill', 'student.run', 'student_skill.student_run')
      .leftJoin('skill', 'student_skill.skill_id', 'skill.id')
      .where('student.run', '=', run)
      .selectAll()
      .execute();

    if (studentSkillsRows.length < 1) return null;

    console.log(studentSkillsRows);
    const student = studentSkillsRows[0];
    const studentSkills = studentSkillsRows.reduce<PrimitiveStudentSkill[]>(
      (skills, row) => {
        if (!row.id) return skills;
        skills.push(
          new StudentSkill({
            id: row.id,
            skill: row.topic,
            level: row.level,
          }).toValue(),
        );
        return skills;
      },
      [],
    );

    return studentSkillsRows
      ? new Student({
          run: student.run,
          names: student.names,
          lastnames: student.lastnames,
          cellphone: student.cellphone,
          email: student.email,
          birthdate: student.birthdate,
          entry_year: student.entry_year,
          graduation_year: student.graduation_year,
          skills: studentSkills,
        })
      : null;
  }

  async getAll(): Promise<Student[]> {
    const studentsSkills = await this.db
      .selectFrom('student')
      .leftJoin('student_skill', 'student.run', 'student_skill.student_run')
      .leftJoin('skill', 'student_skill.skill_id', 'skill.id')
      .selectAll()
      .execute();
    console.log(studentsSkills);
    // studentsSkills.reduce((result, row) => {
    //   result[row.run] = result[row.run] ||
    // }, {})
    return [];
  }
}
