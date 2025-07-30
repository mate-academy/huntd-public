module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'recruiter_profiles',
      'city',
      {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('recruiter_profiles', 'city');
  },
};
