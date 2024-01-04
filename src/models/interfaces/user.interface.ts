import { userCreateDTO } from "../dto/create-user.dto";

export interface IUser extends userCreateDTO {
  id: string;
  created: string;
}
