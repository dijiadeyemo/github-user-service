import { query } from "express-validator/check";

const GitHubUserSearchValidator = [
    query("name")
        .not().isEmpty(),
    query("language")
        .not().isEmpty()
];

export default GitHubUserSearchValidator;