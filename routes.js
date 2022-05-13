const { Router } = require("express");
const routes = Router();

const UserController = require("./UserController");

routes.get("/users", UserController.getAllUsers);
routes.get("/users/:id", UserController.getUserById);
routes.post("/users", UserController.createUser);
routes.put("/users/:id", UserController.updateUserById);
routes.delete("/users/:id", UserController.deleteUserById);

module.exports = routes;
