const request = require("supertest");
const server = require("../../api/server");

const db = require("../../data/models/dbConfig");

beforeAll(async () => {

    await db("users").truncate();

});

describe("users endpoint", () => {

    it("should return empty array initially", async () => {

        const res = await request(server).get("/api/users");

        expect(res.statusCode).toEqual(200);
        expect(res.body.users).toEqual([]);

    });
    it("should create new user", async () => {

        const userData = {
            "username": "ned",
            "password": "hjdgjghklhlkjjlkds",
            "department": "ICT"
        };
        const {statusCode, body} = await request(server).
            post("/api/register").
            send(userData);

        expect(statusCode).toEqual(201);
        expect(body.user).toHaveProperty("username", "ned");

    });

    it("should delete a user", async () => {

        const deleted = await request(server).delete("/api/users/1");

        expect(deleted).toBeTruthy();

    });

});
