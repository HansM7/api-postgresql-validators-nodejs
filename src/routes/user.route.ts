import express from "express";
import { userController } from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const routeUser = express.Router();

const prefix = "/users";

routeUser.get(`${prefix}`, userController.findUsers);

routeUser.get(`${prefix}/:id`, userController.findUser);

routeUser.post(
  `${prefix}`,
  userMiddleware.createUser,
  userController.createUser
);

routeUser.patch(
  `${prefix}/:id`,
  userMiddleware.updateUser,
  userController.updateUser
);

routeUser.delete(`${prefix}/:id`, userController.deleteUser);

export default routeUser;
