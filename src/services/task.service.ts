import { taskCreateDTO } from "../models/dto/create-task.dto";
import { taskQuery } from "../querys/task.query";
import { userQuery } from "../querys/user.query";
import { responseService } from "./response.service";

class TaskService {
  async findTasks() {
    try {
      const response = await taskQuery.selectTasks();
      return responseService.http200(response);
    } catch (error) {
      return responseService.http500(error);
    }
  }

  async findTask(id: string) {
    try {
      const response = await taskQuery.selectTask(id);
      if (!response) return responseService.http400("task not found!");
      return responseService.http200(response);
    } catch (error) {
      console.log(error);
      return responseService.http500(error);
    }
  }

  async createTask(data: taskCreateDTO) {
    try {
      const user = await userQuery.selectUser(data.user_id);
      if (!user) return responseService.http400("User not found");
      const response = await taskQuery.createTask(data);
      return responseService.http200(response);
    } catch (error) {
      console.log(error);
      return responseService.http500(error);
    }
  }

  async updateTask(data: taskCreateDTO, id: string) {
    try {
      const task = await this.findTask(id);
      if (!task.success) return task;

      const response = await taskQuery.updateTask(data, id);
      return responseService.http200(response);
    } catch (error) {
      console.log(error);
      return responseService.http500(error);
    }
  }

  async deleteTask(id: string) {
    try {
      const task = await this.findTask(id);
      if (!task.success) return task;
      const response = await taskQuery.deleteTask(id);
      return responseService.http200(response);
    } catch (error) {
      console.log(error);
      return responseService.http500(error);
    }
  }
}

export const taskService = new TaskService();
