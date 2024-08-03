import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateStudentHttpDTO {
  @IsNumber()
  @IsNotEmpty()
  run: number;

  @IsString()
  @IsNotEmpty()
  names: string;

  @IsString()
  @IsNotEmpty()
  lastnames: string;

  @IsNumber()
  @IsNotEmpty()
  cellphone: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsDateString()
  @IsNotEmpty()
  birthdate: Date;

  @IsNumber()
  @IsNotEmpty()
  entry_year: number;

  //   @IsOptional()
  //   @IsNumber()
  //   graduation_year?: number;
}
