'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Kyiv' },
      { id: 455 }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      { id: 455 }
    )
  }
};
