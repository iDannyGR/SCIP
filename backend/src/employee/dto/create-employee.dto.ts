import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { $Enums } from '@prisma/client';


export class CreateEmployeeDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty({ message: 'please enter a complete name of area' })
    email: String
    
    @IsString()
    @IsEmail()
    @IsNotEmpty({ message: 'please enter your first name' })
    firstName:String

    @IsString()
    @IsNotEmpty({ message: 'please enter your last name' })
    lastName:String
    
    @IsNumber()
    @IsNotEmpty({ message: 'Select a Position' })
    positionId:Number
    
    @IsNumber()
    @IsNotEmpty({ message: 'Select Area' })
    areaId:Number

    role: $Enums.Roles
}
