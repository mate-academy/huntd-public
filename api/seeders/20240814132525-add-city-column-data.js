'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      UPDATE "recruiter_profiles"
      SET city = 'Kyiv'
      WHERE "user_id" IN (
        SELECT id FROM "users" WHERE email = 'ivarubbish@gmail.com'
      )
    `)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      UPDATE "recruiter_profiles"
      SET city = NULL
      WHERE "user_id" IN (
        SELECT id FROM "users" WHERE email = 'ivarubbish@gmail.com'
      )
    `)
  }
};
