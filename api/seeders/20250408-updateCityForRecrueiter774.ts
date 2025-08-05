module.exports = {
  up: async (queryInterface, Sequelize) => {
    const result = await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Skadovsk' },
      { user_id: 774 }
    );
  },

  down: async (queryInterface, Sequelize) => {
    const result = await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      { user_id: 774 }
    );
  },
};
