import GitHubUserQuery from "../Models/GitHubUserQuery";
import GitHubUserService from "./GitHubUserService";
import GitHub from "../Clients/GitHub";
import "reflect-metadata";

describe('GitHubUserService', () => {
    describe('search()', () => {
        test('should search github for matching users', async () => {
            const query: GitHubUserQuery = {
                name: 'dijiadeyemo',
                languages: ['javascript'],
            }
            const users = await new GitHubUserService(new GitHub()).search(query);
            expect(users).toMatchObject([{
                name: 'Diji Adeyemo',
                followers: 1,
                login: 'dijiadeyemo',
            }])
        });

        test('should retry is next language if a language is not found', async () => {
            const query: GitHubUserQuery = {
                name: 'dijiadeyemo',
                languages: ['java' ,'javascript'],
            }
            const users = await new GitHubUserService(new GitHub()).search(query);
            expect(users).toMatchObject([{
                name: 'Diji Adeyemo',
                followers: 1,
                login: 'dijiadeyemo',
            }])
        });
    });
});