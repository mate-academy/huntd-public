'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Kyiv' },
      { user_id: 774 }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      { user_id: 774 }
    );
  }
};
