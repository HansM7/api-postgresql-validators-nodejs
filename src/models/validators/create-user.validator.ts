import { IsString, IsEmail, IsInt, IsNotEmpty } from "class-validator";

export class CreateUserDTO {
  @IsString({ message: "The name field must be a string" })
  @IsNotEmpty({ message: "The name field is required" })
  name: string;

  @IsEmail({}, { message: "The email field must be a valid email" })
  @IsNotEmpty({ message: "The email field is required" })
  email: string;

  @IsInt({ message: "The age field must be a number" })
  @IsNotEmpty({ message: "The age field is required" })
  age: number;
}
