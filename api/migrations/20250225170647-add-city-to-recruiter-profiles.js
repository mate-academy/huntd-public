'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('recruiter_profiles', 'city', {
        type: Sequelize.STRING(255),
        allowNull: true,
      });
    } catch (error) {
      throw new Error(`Failed to add column 'city': ${error}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('recruiter_profiles', 'city');
    } catch (error) {
      throw new Error(`Failed to remove column 'city': ${error}`);
    }
  }
};
