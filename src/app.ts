import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import container from "./Config/installer";
import ServiceIdentifier from "./Constants/ServiceIdentifier";
import bodyParser = require("body-parser");
import GitHubUserController from "./Controllers/GitHubUserController";
import GitHubUserSearchValidator from "./Validators/GitHubUserSearchValidator";



const gitHubUserController: GitHubUserController = container.get(ServiceIdentifier.GitHubUserController);


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("port", process.env.PORT || 3000);

app.get("/github/users", GitHubUserSearchValidator, (request: Request, response: Response, next: NextFunction) => {
  gitHubUserController.listUsers(request, response, next);
});
app.use( (err: any, request: Request, response: Response, next: NextFunction) => {
  console.error("Internal error occured", err);
  response.status(500);
  response.json({ error: "Error has occured" });
});

export default app;