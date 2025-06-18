'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `UPDATE recruiter_profiles
       SET city = 'Kyiv' -- Change 'New York' to your desired city
       WHERE user_id = (
          SELECT id FROM users WHERE email = 'sanix.to@gmail.com'
       );`
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `UPDATE recruiter_profiles
       SET city = NULL
       WHERE user_id = (
          SELECT id FROM users WHERE email = 'sanix.to@gmail.com'
       );`
    );
  }
};
