import { IsString, IsInt, IsEmail } from 'class-validator';

export class CreateDogDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsEmail()
  email: string;
}
