const User = require("./user");

beforeAll(async () => {

    await db("users").truncate();

});

describe("User Model", () => {

    it("returns empty array initially", async () => {

        const users = await User.getAllUsers();

        expect(users).toBe([]);

    });

    it("should create a new user", async () => {

        const userData = {
            "username": "ned",
            "password": "hjdgjghklhlkjjlkds",
            "department": "ICT"
        };
        const [id] = await User.create(userData);
        const newUser = await User.find({id});

        expect(newUser).toHaveProperty("username", "ned");

    });

    it("should remove a user", async () => {
      const deleted = await User.remove(1);
  
      expect(deleted).toBeTruthy();

  });

});
