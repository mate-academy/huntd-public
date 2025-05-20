'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles SET city = 'Kyiv' WHERE id = 455;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles SET city = NULL WHERE id = 455;
    `);
  }
};
