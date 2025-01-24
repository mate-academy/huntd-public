'use strict';

const { QueryTypes } = require('sequelize');

const email = 'stashohulia@gmail.com';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
      'SELECT * FROM "users" WHERE "email" = :email',
      {
        replacements: { email },
        type: QueryTypes.SELECT
      }
    );

    if (!users.length) {
      throw new Error(`User with email "${email}" not found`);
    }

    await queryInterface.bulkUpdate(
      "recruiter_profiles",
      { city: 'Kyiv', position: 'Full-stack dev', company_name: 'Mate academy' },
      { user_id: users[0].id }
    );
  },

  down: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
      'SELECT * FROM "users" WHERE "email" = :email',
      {
        replacements: { email },
        type: QueryTypes.SELECT
      }
    );

    if (!users.length) {
      throw new Error(`User with email "${email}" not found`);
    }

    await queryInterface.bulkUpdate(
      "recruiter_profiles",
      { city: null, position: 'Recruiter', company_name: 'TestCompany' },
      { user_id: users[0].id }
    );
  }
};
