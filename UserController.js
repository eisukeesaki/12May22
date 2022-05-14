const db = require("./db");

module.exports = {

  getAllUsers(req, res) {
    const users = db.Table_Users;
    if (!users) {
      return res.status(404).send({ message: "users not found" });
    }
    res.json(users);
  },

  getUserById(req, res) {
    const user = db.Table_Users[req.params.id];
    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }
    res.json(user);
  },

  createUser(req, res) {
    if (!req.body.username) {
      return res.status(400).send({ message: "username not provided" });
    }
    // verify uniqueness of requested username
    if (db.Table_Users.find(user => user.username == req.body.username)) {
      return res.status(500).send("provided username is taken");
    }
    const newUser = {
      id: db.Table_Users.length,
      username: req.body.username
    };
    db.Table_Users.push(newUser);
    res.json(req.body);
  },

  deleteUserById(req, res) {
    const idUserDel = req.params.id;
    if (!db.Table_Users[idUserDel]) {
      return res.status(400).send("requested user does not match any of the records in db");
    }
    db.Table_Users.splice(idUserDel, 1);
    res.end();
  },

  updateUserById(req, res) {
    if (!req.body.username) {
      return res.status(400).send({ message: "username not provided" });
    }
    const idUserUpd = req.params.id;
    if (!db.Table_Users[idUserUpd]) {
      return res.status(400).send("requested user does not match any of the records in db");
    }
    db.Table_Users[idUserUpd] = req.body;
    res.json(db.Table_Users[idUserUpd]);
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

