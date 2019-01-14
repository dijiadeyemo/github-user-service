import axios from "axios";
import IGitHubClient from "./IGitHubClient";
import { injectable } from "inversify";

const baseUrl = "https://api.github.com";

@injectable()
export default class GitHubClient implements IGitHubClient {

    async findUsersByNameAndLanguage(name: string, language: string): Promise<object[]> {
        const url = `${baseUrl}/search/users?q=user:${name}+language:${language}`;
        const {items} = await this.getContent(url);
        const resolveUsers = items.map((resultItem: any) => this.getContent(resultItem.url));
        return Promise.all(resolveUsers);
    }

    private async getContent(url: string): Promise<any> {
        const headers = { "User-Agent": "User Search Service" };
        const result = await axios.get(url, { headers });
        return result.data;
    }

}
