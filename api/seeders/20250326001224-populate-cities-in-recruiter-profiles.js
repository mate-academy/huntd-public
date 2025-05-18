'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Fetch all recruiter profiles
    const profiles = await queryInterface.sequelize.query(
      `SELECT id FROM recruiter_profiles;`, { type: Sequelize.QueryTypes.SELECT }
    );

    // Generate an array of update operations
    const updates = profiles.map(profile => ({
      id: profile.id,
      city: faker.address.city(), // Generate a random city name
    }));

    // Apply updates
    for (const update of updates) {
      await queryInterface.bulkUpdate(
        'recruiter_profiles',
        { city: update.city },
        { id: update.id },
      );
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the changes by setting city back to NULL
    return queryInterface.bulkUpdate('recruiter_profiles', { city: null }, {});
  }
};
