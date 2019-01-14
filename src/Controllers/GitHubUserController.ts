import { Request, Response, NextFunction } from "express";
import GitHubUserRequestAdapter from "../Adapters/GitHubUserRequestAdapter";
import IGitHubUserService from "../Services/IGitHubUserService";
import { injectable, inject } from "inversify";
import ServiceIdentifier from "../Constants/ServiceIdentifier";
import { validationResult } from "express-validator/check";

@injectable()
export default class GitHubUserController {
    constructor(@inject(ServiceIdentifier.IGitHubUserService) private githubUserService: IGitHubUserService) { }

    async listUsers(request: Request, response: Response, next: NextFunction): Promise<any> {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(422).json({ errors: errors.array() });
            }
            const gitHubUserQuery = GitHubUserRequestAdapter.toGitHubUserQuery(request.query);
            const users = await this.githubUserService.search(gitHubUserQuery);
            response.json(users);
        } catch (e) {
            return next(e);
        }
    }
}