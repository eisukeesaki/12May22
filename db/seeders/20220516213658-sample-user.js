'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Users", [
      {
        username: "Rei",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Shinji",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Asuka",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Kaoru",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Mari",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.buldDelete("Users", null, {});
  }
};

