//---------------------------------------------- debug
// const stringify = require("json-stringify-safe");
// const fs = require("fs");
//---------------------------------------------- /debug

"use strict";

const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {

    //---------------------------------------------- debug
    // fs.writeFile(__rootDir + "/debug/connectionPassed", stringify(connection, null, 2), (err) => {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   console.log("saved ./connectionPassed");
    // });
    //---------------------------------------------- /debug

    super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }
      },
      {
        sequelize
      });
  }
}

module.exports = User;

// module.exports = (sequelize, Sequelize, DataTypes) => {
//   const User = sequelize.define("User", {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     }
//   });
//   return User;
// }

// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model { }
//   // await User.sync({ alter: true });
//   User.init({
//     username: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   }, {
//     sequelize
//   });
//   return User;
// };

