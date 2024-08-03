import { Controller, Get } from '@nestjs/common';

import { GetAllStudentsUseCase } from '@/students/application/get-all-students-use-case/get-all-students.use-case';
import { PrimitiveStudent } from '@/contexts/students/domain/student';

@Controller('students')
export class GetAllStudentsController {
  constructor(private getAllStudentsUseCase: GetAllStudentsUseCase) {}

  @Get()
  async run(): Promise<{ students: PrimitiveStudent[] }> {
    return this.getAllStudentsUseCase.execute();
  }
}
