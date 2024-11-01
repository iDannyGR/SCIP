import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAreaDto {
  @IsString()
  @Length(4, 32)
  @IsNotEmpty({ message: 'please enter a complete name of area' })
  name: string;

  @IsString()
  @IsNotEmpty()
  code?: string;
}
