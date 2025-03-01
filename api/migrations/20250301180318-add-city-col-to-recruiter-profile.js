module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('recruiter_profiles', 'city', {
        type: Sequelize.STRING(255),
        allowNull: true,
      });
    } catch (error) {
      throw new Error(`Error while adding city column to recruiter profile: ${error}`);
    }
  },

  down: async (queryInterface) => {
    try {
      await queryInterface.removeColumn('recruiter_profiles', 'city');
    } catch (error) {
      throw new Error(`Error while removing city column from recruiter profile: ${error}`);
    }
  },
};
