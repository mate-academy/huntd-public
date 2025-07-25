'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      {
        city: 'Kyiv'
      },
      {
        id: {
          [Sequelize.Op.gte]: 1
        }
      },
      {
        limit: 1
      }
    );
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      {
        city: null
      },
      {
        id: {
          [Sequelize.Op.gte]: 1
        }
      }
    );
  },
};