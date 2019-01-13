export default interface IGitHubClient {
    findUsersByNameAndLanguage(name: string, language: string): Promise<object[]>;
}