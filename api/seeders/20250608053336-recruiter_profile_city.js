'use strict';

const email = 'test44@mailinator.com';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const users = await queryInterface.sequelize.query(
      `SELECT id FROM users WHERE email = '${email}'`, 
      { type: Sequelize.QueryTypes.SELECT }
    );

    console.log('users', users);

    if (users[0]) {
      await queryInterface.bulkUpdate('recruiter_profiles', 
        {city: 'Kyiv'}, { user_id: users[0].id },
      ); 
    }
  },

  down: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
      `SELECT id FROM users WHERE email = '${email}'`, 
      { type: Sequelize.QueryTypes.SELECT }
    );
  
    if (users) {
      await queryInterface.bulkUpdate('recruiter_profiles', 
        {city: null}, { user_id: users[0].id },
      ); 
    }
  }
};
