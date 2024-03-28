module.exports = {
  up:
    async (queryInterface, Sequelize) => Promise.all([queryInterface.addColumn(
      'recruiter_profiles',
      'city',
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    ),
    ]),

  down:
  async (queryInterface) => Promise.all([queryInterface.removeColumn(
    'recruiter_profiles',
    'city',
  ),
  ]),
};
