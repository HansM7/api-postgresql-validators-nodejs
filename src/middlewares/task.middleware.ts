import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { CreateTaskDTO } from "../models/validators/create-task.validator";
import { EditTaskDTO } from "../models/validators/edit-task.validator";

class TaskMiddleware {
  async createTask(req: Request, res: Response, next: NextFunction) {
    const taskDTO = plainToClass(CreateTaskDTO, req.body);
    const validationErrors = await validate(taskDTO, {
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

  async updateTask(req: Request, res: Response, next: NextFunction) {
    const taskDTO = plainToClass(EditTaskDTO, req.body);
    const validationErrors = await validate(taskDTO, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    console.log(validationErrors);

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

export const taskMiddleware = new TaskMiddleware();
