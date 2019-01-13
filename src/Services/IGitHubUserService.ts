import GitHubUser from "../Models/GitHubUser";
import GitHubUserQuery from "../Models/GitHubUserQuery";

export default interface IGitHubUserService {
    search(query: GitHubUserQuery): Promise<GitHubUser[]>;
}
