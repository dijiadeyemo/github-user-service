import "reflect-metadata";
import GitHubUserQuery from "../Models/GitHubUserQuery";
import GitHubUserService from "./GitHubUserService";
import GitHubClient from "../Clients/GithubClient";

describe("GitHubUserService", () => {
    describe("search()", () => {
        test("should search github for matching users", async () => {
            const query: GitHubUserQuery = {
                name: "dijiadeyemo",
                languages: ["javascript"],
            };
            const users = await new GitHubUserService(new GitHubClient()).search(query);
            expect(users).toMatchObject([{
                name: "Diji Adeyemo",
                followers: 1,
                login: "dijiadeyemo",
            }]);
        });

        test("should retry with next language if a language is not found", async () => {
            const query: GitHubUserQuery = {
                name: "dijiadeyemo",
                languages: ["java", "javascript"],
            };
            const users = await new GitHubUserService(new GitHubClient()).search(query);
            expect(users).toMatchObject([{
                name: "Diji Adeyemo",
                followers: 1,
                login: "dijiadeyemo",
            }]);
        });

        test("should retry with next language if a timeout error occured", async () => {
            const query: GitHubUserQuery = {
                name: "dijiadeyemo",
                languages: ["ruby", "javascript", "java"],
            };
            const githubClient = new GitHubClient();
            const spy = jest.spyOn(githubClient, "findUsersByNameAndLanguage");
            
            const users = await new GitHubUserService(githubClient).search(query);

            expect(spy).toBeCalledTimes(2);
            expect(spy).toBeCalledWith("dijiadeyemo", "ruby");
            expect(spy).toBeCalledWith("dijiadeyemo", "javascript");
            expect(users).toMatchObject([{
                name: "Diji Adeyemo",
                followers: 1,
                login: "dijiadeyemo",
            }]);
        });

    });
});