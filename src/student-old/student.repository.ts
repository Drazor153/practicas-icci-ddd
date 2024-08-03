import { Injectable } from '@nestjs/common';
import { BaseKyselyRepository } from 'src/interfaces/baseRepository';
import { Database } from '@/kysely/database';
import { NewStudent, Student, StudentTable } from './student.entity';

@Injectable()
export class StudentRepository implements BaseKyselyRepository<StudentTable> {
  constructor(private database: Database) {}

  find(): Promise<Student[]> {
    return this.database.selectFrom('student').selectAll().execute();
  }

  findBy(criteria: Partial<Student>): Promise<Student[]> {
    let query = this.database.selectFrom('student');

    if (criteria.run) {
      query = query.where('run', '=', criteria.run);
    }
    if (criteria.names) {
      query = query.where('names', '=', criteria.names);
    }
    if (criteria.lastnames) {
      query = query.where('lastnames', '=', criteria.lastnames);
    }
    if (criteria.cellphone) {
      query = query.where('cellphone', '=', criteria.cellphone);
    }
    if (criteria.email) {
      query = query.where('email', '=', criteria.email);
    }
    if (criteria.birthdate) {
      query = query.where('birthdate', '=', criteria.birthdate);
    }
    if (criteria.entry_year) {
      query = query.where('entry_year', '=', criteria.entry_year);
    }
    if (criteria.graduation_year !== undefined) {
      query = query.where(
        'graduation_year',
        criteria.graduation_year === null ? 'is' : '=',
        criteria.graduation_year,
      );
    }

    return query.selectAll().execute();
  }

  findByRun(run: number): Promise<Student> {
    return this.database
      .selectFrom('student')
      .where('run', '=', run)
      .selectAll()
      .executeTakeFirst();
  }

  save(data: NewStudent): Promise<Student> {
    return this.database
      .insertInto('student')
      .values(data)
      .returningAll()
      .executeTakeFirstOrThrow();
  }
}
