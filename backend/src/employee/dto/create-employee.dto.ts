import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { $Enums } from '@prisma/client';


export class CreateEmployeeDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'please enter a complete name of area' })
  email: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'please enter your first name' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'please enter your last name' })
  lastName: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Select a Position' })
  positionId: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Select Area' })
  areaId: number;
  
  @IsNotEmpty()
  @IsString()
  role: $Enums.Roles;

  @IsNotEmpty()
  @IsString()
  password: string
}
