'use strict';

const email = 'vadim.pavlyk2002@gmail.com';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      `UPDATE recruiter_profiles
      SET city = 'Kyiv'
      WHERE user_id = (SELECT id FROM users WHERE email = :email)`,
      {
        replacements: {
          email
        },
        type: Sequelize.QueryTypes.UPDATE,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      `UPDATE recruiter_profiles
      SET city = NULL
      WHERE user_id = (SELECT id FROM users WHERE email = :email)`,
      {
        replacements: {
          email
        },
        type: Sequelize.QueryTypes.UPDATE,
      }
    );
  }
};
