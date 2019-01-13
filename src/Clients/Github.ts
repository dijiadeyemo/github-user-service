import axios from 'axios';

import GitHubUser from '../Models/GitHubUser';

const baseUrl = 'https://api.github.com';

class GitHub {

    async findUsersByNameAndLanguage(name: string, language: string): Promise<object[]> {
        const url = `${baseUrl}/search/users?q=user:${name}+language:${language}`;
        const { items } = await this._getContent(url)
        const resolveUsers  = items.map((resultItem: any) => this._getContent(resultItem.url))
        return Promise.all(resolveUsers)
    }

    async _getContent(url: string): Promise<any> {
        const headers = { 'User-Agent': 'User Search Service' };
        return axios.get(url, { headers });
    }

}

export default GitHub;