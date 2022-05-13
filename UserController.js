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
      return res.status(404).send({ message: "user not found"});
    }
    res.json(user);
  }

}

