import express from "express";
import "dotenv/config";
import routerTask from "./routes/task.route";
import routeUser from "./routes/user.route";

const app = express();

app.use(express.json());

const globalPrefix = "/api";

app.use(globalPrefix, routerTask);

app.use(globalPrefix, routeUser);

app.listen(process.env.port);
