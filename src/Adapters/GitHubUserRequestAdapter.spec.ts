import GitHubUserRequestAdapter from "./GitHubUserRequestAdapter";

describe("GitHubUserRequestAdapter", () => {
    describe("", () => {
        test("should get a GitHubUserQuery object from a request query object", () => {
            const request = {
                name: "diji",
                language: "java, javascript"
            };
            const gitHubUserQuery = GitHubUserRequestAdapter.toGitHubUserQuery(request);
            expect(gitHubUserQuery).toEqual({
                name: "diji",
                languages: ["java", "javascript"]
            });
        });
    });
});