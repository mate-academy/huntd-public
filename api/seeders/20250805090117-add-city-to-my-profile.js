'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate('recruiter_profiles', 
      { city:'Kyiv' }, 
      { user_id: 3 }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate('recruiter_profiles', 
      { city: null }, 
      { user_id: 3 }
    );
  }
};
