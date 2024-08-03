import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { PrimitiveStudent } from '@/students/domain/student';
import { StudentNotFound } from '@/students/domain/student-not-found';
import { FindStudentByRunUseCase } from '@/students/application/find-student-by-run-use-case/find-student-by-run.use-case';

import { FindStudentByRunHttpDTO } from './find-student-by-run.http-dto';

@Controller('students')
export class FindStudentByRunController {
  constructor(private findStudentByRunUseCase: FindStudentByRunUseCase) {}

  @Get(':run')
  async run(
    @Param() params: FindStudentByRunHttpDTO,
  ): Promise<{ student: PrimitiveStudent }> {
    try {
      return await this.findStudentByRunUseCase.execute({
        run: parseInt(params.run),
      });
    } catch (error) {
      if (error instanceof StudentNotFound) {
        throw new NotFoundException(error.message);
      }

      throw error;
    }
  }
}
