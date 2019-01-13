import request from "supertest";
import app from "./app";

describe("app", () => {

    test("GET /users", (done) => {
        request(app)
            .get("/github")
            .expect(404, done);
    });

    describe("GET /github/users", () => {
        test("should return a 500 error if no parameter are provided", (done) => {
            request(app)
                .get("/github/users")
                .expect(500, done);
        });
    });

    describe("GET /github/users", () => {
        test("should return a OK response for a valid request", (done) => {
            request(app)
                .get("/github/users?name=dijiadeyemo&language=javascript")
                .expect("Content-Type", /json/)
                .expect(200, done);
        });
    });

});