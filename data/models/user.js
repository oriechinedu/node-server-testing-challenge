const db = require("./dbConfig");
const {ErrorHandler} = require("express-error-bouncer");

const getAllUsers = async () => await db("users");

const find = async (userData) => {

    const [key] = Object.keys(userData);
    const [value] = Object.values(userData);
    const user = await db("users").
        where({[key]: value}).
        select("id", "username", "department").
        first();
    return user;

};

const create = async (userData) => {

    try {

        const user = await db("users").insert(userData);

        if (user) {

            return find({"id": user[0]});

        }
        throw new ErrorHandler(500, "Internal server error");

    } catch (error) {

        throw new ErrorHandler(500, error.message);

    }

};

const remove = async (id) => {
  try {
    return await db('users').where({id}).del();
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
}

module.exports = {
    create,
    getAllUsers,
    remove,
    find
};
