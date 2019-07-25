const request = require("supertest");
const server = require("../../api/server");

const db = require("../../data/models/dbConfig");

beforeAll(async () => {

    await db("users").truncate();

});

describe("users endpoint", () => {

    it("should return empty array initially", async () => {

        const users = request(server).get("/api/users");

        expect(users).toEqual([]);

    });
    it("should create new user", async () => {

        const userData = {
            "username": "ned",
            "password": "hjdgjghklhlkjjlkds",
            "department": "ICT"
        };
        const user = await request(server).
            post("/api/register").
            send(userData);

        expect(user).toHaveProperty("username", "ned");

    });

    it("should delete a user", async () => {

        const deleted = await request(server).delete("/api/users/1");

        expect(deleted).toBeTruthy();

    });

});
