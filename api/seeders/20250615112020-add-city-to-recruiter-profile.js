module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Kyiv' },
      { user_id: 774 },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      { user_id: 774 },
    );
  },
};
