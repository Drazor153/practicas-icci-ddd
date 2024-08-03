import { Body, Controller, Post } from '@nestjs/common';

import { PrimitiveStudent } from '@/students/domain/student';
import { CreateStudentUseCase } from '@/students/application/create-student-use-case/create-student.use-case';

import { CreateStudentHttpDTO } from './create-student.http-dto';

@Controller('students')
export class CreateStudentController {
  constructor(private createStudentUseCase: CreateStudentUseCase) {}

  @Post()
  async run(
    @Body() createStudentHttpDTO: CreateStudentHttpDTO,
  ): Promise<{ student: PrimitiveStudent }> {
    // return this.createStudentUseCase.execute(createStudentHttpDTO);
    return this.createStudentUseCase.execute({
      run: createStudentHttpDTO.run,
      names: createStudentHttpDTO.names,
      lastnames: createStudentHttpDTO.lastnames,
      cellphone: createStudentHttpDTO.cellphone,
      email: createStudentHttpDTO.email,
      birthdate: createStudentHttpDTO.birthdate,
      entry_year: createStudentHttpDTO.entry_year,
    });
  }
}
