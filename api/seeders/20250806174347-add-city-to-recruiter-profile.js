'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('recruiter_profiles', 
      { city: 'Kyiv' }, 
      { id: 142 }      
    );
  },

  down: async (queryInterface, Sequelize) => {
   
    return queryInterface.bulkUpdate('recruiter_profiles',
      { city: null },
      { id: 142 }
    );
  }
};
