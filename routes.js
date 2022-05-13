const { Router } = require("express");
const routes = Router();

const UserController = require("./UserController");

routes.get("/users", UserController.getAllUsers);
routes.get("/users/:id", UserController.getUserById);

module.exports = routes;
