const User = require("../db/models/user");

module.exports = {

  async getAllUsers(req, res) {
    const users = await User.findAll();
    if (!users) {
      return res.status(404).send({ message: "users not found" });
    }
    res.json(users);
  },

  async getUserById(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }
    res.json(user);
  },

  async createUser(req, res) {
    if (!req.body.username) {
      return res.status(400).send({ message: "username not provided" });
    }
    const duplicate = await User.findOne({ where: { username: req.body.username }});
    if (duplicate !== null) {
      return res.status(500).send("username taken");
    }

    const createdUser = await User.create({
      username: req.body.username
    });
    if (!createdUser) {
      console.log(`User.create() returned a non-1 value`);
      return res.sendStatus(500);
    }
    res.json(this.createUser);
  },

  async deleteUserById(req, res) {
    const found = await User.findOne({ where: { id: req.params.id }});
    if (!found) {
      return res.status(400).send("requested user does not match any of the records in db");
    }

    const isDestroyed = await User.destroy({ where: { id: req.params.id }});
    if (!isDestroyed) {
      console.log(`User.destroy returned a non-1 value`);
      return res.sendStatus(500);
    }
    res.end();
  },

  async updateUserById(req, res) {
    if (!req.body.username) {
      return res.status(400).send({ message: "username not provided" });
    }
    const found = await User.findOne({ where: { id: req.params.id }});
    // console.log(`found.dataValues.username:${found.dataValues.username}`);
    if (!found) {
      return res.status(400).send("requested user does not match any of the records in db");
    } else if (found.dataValues.username == req.body.username) {
      return res.status(200).send("requested resource is identical to our records. did not update timestamps.");
    }  

    const isUpdated = await User.update({ username: req.body.username }, { where: { id: req.params.id}});
    if (!isUpdated) {
      return console.log("Model.delete() returned a non-1 value");
    }
    res.end();
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

