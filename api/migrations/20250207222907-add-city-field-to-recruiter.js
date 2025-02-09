module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'recruiter_profiles',
    'city',
    {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: true,
    },
  ),
  down: (queryInterface) => queryInterface.removeColumn('recruiter_profiles', 'city'),
};
