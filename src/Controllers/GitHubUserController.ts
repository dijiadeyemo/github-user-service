import { Request, Response, NextFunction } from "express";
import GitHubUserRequestAdapter from "../Adapters/GitHubUserRequestAdapter";
import IGitHubUserService from "../Services/IGitHubUserService";
import { injectable, inject } from "inversify";
import ServiceIdentifier from "../Constants/ServiceIdentifier";

@injectable()
export default class GitHubUserController {
    constructor(@inject(ServiceIdentifier.IGitHubUserService) private githubUserService: IGitHubUserService) { }

    async listUsers(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const gitHubUserQuery = GitHubUserRequestAdapter.toGitHubUserQuery(request.query);
            const users = await this.githubUserService.search(gitHubUserQuery);
            response.json(users);
        } catch (e) {
            return next(e);
        }
    }
}