import { IsString, IsEmail, IsInt, IsOptional } from "class-validator";

export class EditUserDTO {
  @IsString({ message: "The name field must be a string" })
  @IsOptional()
  name: string;

  @IsEmail({}, { message: "The email field must be a valid email" })
  @IsOptional()
  email: string;

  @IsInt({ message: "The age field must be a number" })
  @IsOptional()
  age: number;
}
