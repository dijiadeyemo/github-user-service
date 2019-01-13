import GitHubUserQuery from "../Models/GitHubUserQuery";

export default class GitHubUserRequestAdapter {

    static toGitHubUserQuery(requestParams: any): GitHubUserQuery {
        const { name, language } = requestParams;
        const languages = language.split(",");
        return { name, languages };
    }
}