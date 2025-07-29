const id = 455;
const city = 'Kyiv';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city },
      { id },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      { id },
    );
  },
};
