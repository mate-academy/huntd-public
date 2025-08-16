module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn(
    'recruiter_profiles',
    'city',
    {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
  ),

  down: async (queryInterface) => queryInterface.removeColumn('recruiter_profiles', 'city'),
};
