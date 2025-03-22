const { Sequelize } = require('sequelize');

const TABLE_NAME = 'recruiter_profiles';
const COLUMN_NAME = 'city';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(
      TABLE_NAME,
      COLUMN_NAME,
      {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(TABLE_NAME, COLUMN_NAME);
  },
};
