const User = require("./user");
const db = require('./dbConfig')
beforeAll(async () => {

  await db("users").truncate();

});

describe("User Model", () => {

    it("returns empty array initially", async () => {

        const users = await User.getAllUsers();

        expect(users).toEqual([]);

    });

    it("should create a new user", async () => {

        const userData = {
            "username": "ned",
            "password": "hjdgjghklhlkjjlkds",
            "department": "ICT"
        };
        const user = await User.create(userData);

        expect(user).toHaveProperty("username", "ned");

    });

    it("should remove a user", async () => {
      const deleted = await User.remove(1);
  
      expect(deleted).toBeTruthy();

  });

});
