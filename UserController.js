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
    const idNewUser = db.Table_Users.length;
    const newUser = {
      id: idNewUser,
      username: req.body.username
    };
    db.Table_Users.push(newUser);
    res.json(db.Table_Users[idNewUser]);
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

