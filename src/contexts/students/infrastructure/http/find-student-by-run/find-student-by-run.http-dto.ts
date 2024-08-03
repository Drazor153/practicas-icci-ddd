import { IsNotEmpty, IsNumberString } from 'class-validator';

export class FindStudentByRunHttpDTO {
  @IsNotEmpty()
  @IsNumberString()
  run: string;
}
