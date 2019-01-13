import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import container from "./Config/installer";
import ServiceIdentifier from "./Constants/ServiceIdentifier";
import bodyParser = require("body-parser");
import GitHubUserController from "./Controllers/GitHubUserController";


const gitHubUserController: GitHubUserController = container.get(ServiceIdentifier.GitHubUserController);


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("port", process.env.PORT || 3000);

app.get("/github/users", (request: Request, response: Response) => {
  gitHubUserController.listUsers(request, response);
});

export default app;