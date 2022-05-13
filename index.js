const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

const UserController = require("./UserController");

var Table_Users = [
    {
      id: 0,
      username: "Rei",
    },
    {
      id: 1,
      username: "Shinji",
    },
    {
      id: 2,
      username: "Asuka",
    }
];

app.get("/users", UserController.getAllUsers);

app.listen(4242, console.log("server up"));
