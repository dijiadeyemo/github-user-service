import IGitHubUserService from "./IGitHubUserService";
import GitHubUserQuery from "../Models/GitHubUserQuery";
import GitHubUser from "../Models/GitHubUser";
import GitHub from "../Clients/GithubClient";
import Retry from "../Lib/Retry";
import { injectable, inject } from "inversify";
import ServiceIdentifier from "../Constants/ServiceIdentifier";

@injectable()
export default class GitHubUserService implements IGitHubUserService {

    constructor(
        @inject(ServiceIdentifier.IGitHubClient) private githubClient: GitHub
    ) { }

    async search(query: GitHubUserQuery): Promise<GitHubUser[]> {
        const { name, languages } = query;
        const action = async () => this.githubClient.findUsersByNameAndLanguage(name, languages.shift());
        const shouldRetryOnResult = (data: any) => data.length === 0 && languages.length > 0;
        const shouldRetryOnError = (error: any) => error.code === "ECONNABORTED";
        const retries = languages.length;

        const retry = new Retry({ action, shouldRetryOnError, shouldRetryOnResult, retries });
        const users = await retry.execute();
        return users;
    }
}