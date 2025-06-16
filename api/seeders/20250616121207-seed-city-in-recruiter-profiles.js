'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Kyiv' }, // or any default/test value
      {} // update all
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      {}
    );
  }
};
