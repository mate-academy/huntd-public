'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    return queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = 'Kyiv'
      FROM users
      WHERE recruiter_profiles.user_id = users.id
      AND users.email = 'antonyupkodm@gmail.com';
    `);
  },

  down: async (queryInterface) => {
    return queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = NULL
      FROM users
      WHERE recruiter_profiles.user_id = users.id
      AND users.email = 'antonyupkodm@gmail.com';
    `);
  }
};
