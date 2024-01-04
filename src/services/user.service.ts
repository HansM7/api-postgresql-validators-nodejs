import { userCreateDTO } from "../models/dto/create-user.dto";
import { userEditDTO } from "../models/dto/edit-user.dto";
import { taskQuery } from "../querys/task.query";
import { userQuery } from "../querys/user.query";
import { responseService } from "./response.service";

class UserService {
  async findUsers() {
    try {
      const response = await userQuery.selectUsers();
      return responseService.http200(response);
    } catch (error) {
      return responseService.http500(error);
    }
  }

  async findUser(id: string) {
    try {
      const response = await userQuery.selectUser(id);
      return responseService.http200(response);
    } catch (error) {
      return responseService.http500(error);
    }
  }

  async createUser(data: userCreateDTO) {
    try {
      await userQuery.createUser(data);
      return responseService.http201();
    } catch (error) {
      return responseService.http500(error);
    }
  }

  async updateUser(data: userEditDTO, id: string) {
    try {
      await userQuery.updateUser(data, id);
      return responseService.http200();
    } catch (error) {
      return responseService.http500(error);
    }
  }

  async deleteUser(id: string) {
    try {
      await userQuery.deleteUser(id);
      return responseService.http200();
    } catch (error) {
      return responseService.http500(error);
    }
  }
}

export const userService = new UserService();
