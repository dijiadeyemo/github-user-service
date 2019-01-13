import "reflect-metadata";
import { Container } from "inversify";
import IGitHubUserService from "../Services/IGitHubUserService";
import ServiceIdentifier from "../Constants/ServiceIdentifier";
import GitHubUserService from "../Services/GitHubUserService";
import GitHubUserController from "../Controllers/GitHubUserController";
import IGitHubClient from "../Clients/IGitHubClient";
import GitHubClient from "../Clients/GithubClient";


const container = new Container();

container.bind<IGitHubUserService>(ServiceIdentifier.IGitHubUserService).to(GitHubUserService);
container.bind<GitHubUserController>(ServiceIdentifier.GitHubUserController).to(GitHubUserController);
container.bind<IGitHubClient>(ServiceIdentifier.IGitHubClient).to(GitHubClient);
export default container;