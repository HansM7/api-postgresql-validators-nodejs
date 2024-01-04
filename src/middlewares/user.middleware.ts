import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { CreateUserDTO } from "../models/validators/create-user.validator";
import { EditUserDTO } from "../models/validators/edit-user.validator";

class UserMiddleware {
  async createUser(req: Request, res: Response, next: NextFunction) {
    const userDto = plainToClass(CreateUserDTO, req.body);
    const validationErrors = await validate(userDto, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (validationErrors.length > 0) {
      return res.status(400).json({
        errors: validationErrors.map((error: any) =>
          Object.values(error.constraints)
        ),
      });
    } else {
      next();
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    const userDto = plainToClass(EditUserDTO, req.body);
    const validationErrors = await validate(userDto, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (validationErrors.length > 0) {
      return res.status(400).json({
        errors: validationErrors.map((error: any) =>
          Object.values(error.constraints)
        ),
      });
    } else {
      next();
    }
  }
}

export const userMiddleware = new UserMiddleware();
