'use strict';

const EMAIL = 'skuratovetspolina@gmail.com';
const CITY = 'Pavlohrad';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const result = await queryInterface.sequelize.query(`
        UPDATE recruiter_profiles
        SET city = :city
        FROM users
        WHERE recruiter_profiles.user_id = users.id
        AND users.email = :email
        RETURNING recruiter_profiles.id
      `, {
        replacements: {
          city: CITY,
          email: EMAIL,
        },
        type: Sequelize.QueryTypes.UPDATE,
      });

      const updatedRows = result[1];
      if (updatedRows === 0) {
        console.log(`No recruiter profile found for email: ${EMAIL}`);
      } else {
        console.log(`Successfully updated city to ${CITY} for user: ${EMAIL}`);
      }
    } catch (error) {
      console.error('Migration failed:', error.message);
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      const result = await queryInterface.sequelize.query(`
        UPDATE recruiter_profiles
        SET city = NULL
        FROM users
        WHERE recruiter_profiles.user_id = users.id
        AND users.email = :email
        RETURNING recruiter_profiles.id
      `, {
        replacements: {
          email: EMAIL,
        },
        type: Sequelize.QueryTypes.UPDATE,
      });

      const updatedRows = result[1];
      if (updatedRows === 0) {
        console.log(`No recruiter profile found for email: ${EMAIL}`);
      } else {
        console.log(`Successfully reset city for user: ${EMAIL}`);
      }
    } catch (error) {
      console.error('Rollback failed:', error.message);
      throw error;
    }
  }
};
