module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkUpdate('recruiter_profiles',
      { city: 'Kyiv' },
      {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkUpdate('recruiter_profiles',
      { city: null },
      {});
  },
};
