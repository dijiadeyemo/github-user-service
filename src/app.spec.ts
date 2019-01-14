import request from "supertest";
import app from "./app";

describe("Integration Tests", () => {


    describe("GET /api/v1/notexisting", () => {
        test("shuold return a 404 error", (done) => {
            request(app)
                .get("/api/v1/notexisting")
                .expect(404, done);
        });
    });

    describe("GET /api/v1/users", () => {
        test("should return a 422 error if no parameter are provided", (done) => {
            request(app)
                .get("/api/v1/users")
                .expect(422, done);
        });
    });

    describe("GET /api/v1/users", () => {
        test("should return a OK response for a valid request", (done) => {
            request(app)
                .get("/api/v1/users?name=dijiadeyemo&language=javascript")
                .expect("Content-Type", /json/)
                .expect(200, done);
        });
    });

});