'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Lviv' },     
      { user_id: 42 }          
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },         
      { user_id: 42 }          
    );
  }
};
