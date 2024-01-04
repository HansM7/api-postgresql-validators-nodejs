import { Request, Response } from "express";
import { taskQuery } from "../querys/task.query";
import { responseService } from "../services/response.service";
import { userCreateDTO } from "../models/dto/create-user.dto";
import { userEditDTO } from "../models/dto/edit-user.dto";
import { userService } from "../services/user.service";
import { CreateUserDTO } from "../models/validators/create-user.validator";
import { validate, validateOrReject } from "class-validator";
import { plainToClass } from "class-transformer";

class UserController {
  async findUsers(req: Request, res: Response) {
    const response = await userService.findUsers();
    res.status(response.code).json(response.data);
  }

  async findUser(req: Request, res: Response) {
    const id = req.params.id;
    const response = await userService.findUser(id);
    res.status(response.code).json(response.data);
  }

  async createUser(req: Request, res: Response) {
    const data: userCreateDTO = req.body;
    const response = await userService.createUser(data);
    res.status(response.code).json(response.data);
  }

  async updateUser(req: Request, res: Response) {
    const id = req.params.id;
    const data: userCreateDTO = req.body;
    const response = await userService.updateUser(data, id);
    res.status(response.code).json(response.data);
  }

  async deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    const response = await userService.deleteUser(id);
    res.status(response.code).json(response.data);
  }
}

export const userController = new UserController();
