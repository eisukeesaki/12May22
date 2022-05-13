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
    res.json({ message: "CREATEd new user", user: db.Table_Users[idNewUser] });
  },

  deleteUserById(req, res, next) {
    const idUserDel = req.params.id;
    // check existence of user in table
    if (!db.Table_Users[idUserDel]) {
      return res.status(400).send("requested user does not match any of the records in db");
    }
    db.Table_Users.splice(idUserDel, 1);
    res.json({ message: `DELETED user with an id of ${idUserDel}` });
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

    splice(start, deleteCount)

*/

