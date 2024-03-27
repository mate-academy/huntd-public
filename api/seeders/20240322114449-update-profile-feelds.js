'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const userEmail = 'dmytrokrasnoholovenko@gmail.com';
      const newCity = 'Kyiv';
      
      const sqlQuery = `
        UPDATE recruiter_profiles
        SET city = '${newCity}'
        WHERE user_id = (
          SELECT id FROM users WHERE email = '${userEmail}'
        )
      `;

      await queryInterface.sequelize.query(sqlQuery);
    } catch (error) {
      console.error('Error when updating recruiter profile data:', error);
    }
  },
};
