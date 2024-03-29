'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      UPDATE "recruiter_profiles"
      SET city = 'Kharkiv'
      WHERE "user_id" IN (
        SELECT id FROM "users" WHERE email = 'yasik2255@gmail.com'
      )
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      UPDATE "recruiter_profiles"
      SET city = NULL
      WHERE "user_id" IN (
        SELECT id FROM "users" WHERE email = 'yasik2255@gmail.com'
      )
    `);
  }
};
