import express from "express";
import { taskController } from "../controllers/task.controller";
import { taskMiddleware } from "../middlewares/task.middleware";

const routerTask = express.Router();

const prefix = "/tasks";

routerTask.get(`${prefix}`, taskController.findTasks);

routerTask.get(`${prefix}/:id`, taskController.findTask);

routerTask.post(
  `${prefix}`,
  taskMiddleware.createTask,
  taskController.createTask
);

routerTask.patch(
  `${prefix}/:id`,
  taskMiddleware.updateTask,
  taskController.updateTask
);

routerTask.delete(`${prefix}/:id`, taskController.findTask);

export default routerTask;
