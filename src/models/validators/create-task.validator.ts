import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsNumber,
  IsInt,
} from "class-validator";

export class CreateTaskDTO {
  @IsString({ message: "The title field must be a string" })
  @IsNotEmpty({ message: "The title field is required" })
  title: string;

  @IsNotEmpty({ message: "The description field is required" })
  @MinLength(5, { message: "The field description required a min length (5)" })
  @MaxLength(200, {
    message: "The field description required a max length (200)",
  })
  description: string;

  @IsInt({ message: "The field user_id mus be a number" })
  @IsNotEmpty({ message: "The user_id field is required" })
  user_id: number;
}
