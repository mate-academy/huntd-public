module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addColumn(
        'recruiter_profiles',
        'city',
        {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        { transaction: t },
      );
    });
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeColumn(
        'recruiter_profiles',
        'city',
        { transaction: t },
      );
    });
  },
};
