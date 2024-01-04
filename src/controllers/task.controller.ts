import { Request, Response } from "express";
import { taskService } from "../services/task.service";
import { taskCreateDTO } from "../models/dto/create-task.dto";

class TaskController {
  async findTasks(req: Request, res: Response) {
    const response = await taskService.findTasks();
    return res.status(response.code).json(response.data);
  }

  async findTask(req: Request, res: Response) {
    const id = req.params.id;
    const response = await taskService.findTask(id);
    res.status(response.code).json(response.data);
  }

  async createTask(req: Request, res: Response) {
    const data: taskCreateDTO = req.body;
    const response = await taskService.createTask(data);
    res.status(response.code).json(response.data);
  }

  async updateTask(req: Request, res: Response) {
    const id = req.params.id;
    const data: taskCreateDTO = req.body;
    const response = await taskService.updateTask(data, id);
    res.status(response.code).json(response.data);
  }

  async deleteTask(req: Request, res: Response) {
    const id = req.params.id;
    const response = await taskService.deleteTask(id);
    res.status(response.code).json(response.data);
  }
}

export const taskController = new TaskController();
