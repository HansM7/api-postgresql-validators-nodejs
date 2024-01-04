import {
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
  IsNotEmpty,
  IsInt,
} from "class-validator";

export class EditTaskDTO {
  @IsString({ message: "The title field must be a string" })
  @IsOptional()
  title: string;

  @IsOptional()
  @MinLength(5, { message: "The field description required a min length (5)" })
  @MaxLength(200, {
    message: "The field description required a max length (200)",
  })
  description: string;
}
