'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('recruiter_profiles', 'city', {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('recruiter_profiles', 'city');
  }
};
// used this one