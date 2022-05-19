const { Router } = require("express");
const routes = Router();

const UserController = require("./controllers/UserController");

routes.get("/v0/users", UserController.getAllUsers);
routes.get("/v0/users/:id", UserController.getUserById);
routes.post("/v0/users", UserController.createUser);
routes.put("/v0/users/:id", UserController.updateUserById);
routes.delete("/v0/users/:id", UserController.deleteUserById);

module.exports = routes;

