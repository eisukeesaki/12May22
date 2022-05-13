const db = require("./db");

module.exports = {

  getAllUsers(req, res, next) {
    res.json(db.Table_Users);
  }

}
