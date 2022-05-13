const db = require("./db");

module.exports = {

  getAllUsers(req, res, next) {
    const users = db.Table_Users;
    if (!users) {
      return res.status(404).send({ message: "users not found" });
    }
    res.json(users);
  },

  getUserById(req, res, next) {
    const user = db.Table_Users[req.params.id];
    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }
    res.json(user);
  },

  createUser(req, res, next) {
    const idNewUser = db.Table_Users.length;
    const newUser = {
      id: idNewUser,
      username: req.body.username
    };
    db.Table_Users.push(newUser);
    res.json({ message: "created new user", user: db.Table_Users[idNewUser] });
  }

}

/*
    res.send([body])
        send HTTP response
        body = Buffer || String || object || Boolean || Array
        automatically assigns Content-Length

    res.json([body])
        send JSON response
        body = any JSON type
*/

