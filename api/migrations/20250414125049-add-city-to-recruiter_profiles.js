const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.addColumn('recruiter_profiles', 'city', {
      type: DataTypes.STRING(255),
      allowNull: true,
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn('recruiter_profiles', 'city');
  },
};
