module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('recruiter_profiles',
      { city: 'Kyiv' },
      { id: 455 });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('recruiter_profiles',
      { city: 'Kyiv' },
      { id: 455 });
  }
};
