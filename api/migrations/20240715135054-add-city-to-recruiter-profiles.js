'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'recruiter_profiles',   // table where we will add column
      'city',                 // column to be added
      {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('recruiter_profiles', 'city');
  }
};
