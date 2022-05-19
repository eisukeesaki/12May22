//---------------------------------------------- debug
// const stringify = require("json-stringify-safe");
// const fs = require("fs");
//---------------------------------------------- /debug

const dbConfig = require("../db/config/db-config");
const Sequelize = require("sequelize");
const connection = new Sequelize(dbConfig);

//---------------------------------------------- debug
// fs.writeFile(__rootDir + "/debug/connection", stringify(connection, null, 2), (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("saved ./connection");
// });
//---------------------------------------------- /debug

const User = require("./models/user");
User.init(connection);
(async function testConn() {
  try {
    await connection.authenticate();
    console.log("connected to db - /db/index.js");
  } catch (err) {
    console.error("failed to connect to db - /db/index.js", err);
  }
})();

module.exports = connection;

