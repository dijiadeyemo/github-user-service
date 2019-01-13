import GitHubUser from "../models/GitHubUser";
import GitHubUserQuery from "../Models/GitHubUserQuery";

export default interface IGitHubUserService {
    
    search(query: GitHubUserQuery): Promise<GitHubUser[]>;

}
