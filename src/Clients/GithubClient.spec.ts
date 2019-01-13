import "reflect-metadata";
import GitHubClient from "./GithubClient";
import axios from "axios";


describe("GitHub", () => {
    describe("findUsersByNameAndLanguage()", () => {
        test("should make a call to github search endpoint", async () => {
            const client = new GitHubClient();
            await client.findUsersByNameAndLanguage("dijiadeyemo", "javascript");
            expect(axios.get).toBeCalledWith(
                "https://api.github.com/search/users?q=user:dijiadeyemo+language:javascript",
                expect.any(Object)
            );
        });

        test("should get search result", async () => {
            const client = new GitHubClient();
            const users = await client.findUsersByNameAndLanguage("dijiadeyemo", "javascript");
            expect(users).toMatchObject([{
                name: "Diji Adeyemo",
                avatar_url: "https://avatars2.githubusercontent.com/u/3319406?v=4",
                followers: 1,
                login: "dijiadeyemo",
            }]);
        });
    });
});