module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('recruiter_profiles', 'city', { type: Sequelize.STRING }),

  down: async (queryInterface) => queryInterface.removeColumn('recruiter_profiles', 'city'),
};
