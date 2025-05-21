'use strict';

const USER_EMAIL = 'taniaudod28@gmail.com';
const TARGET_CITY = 'Kyiv';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.sequelize.query(
        `
        UPDATE "recruiter_profiles"
        SET city = :city
        WHERE "user_id" IN (
          SELECT id FROM "users" WHERE email = :email
        )
        `,
        {
          replacements: { city: TARGET_CITY, email: USER_EMAIL },
          type: Sequelize.QueryTypes.UPDATE,
        }
      );
    } catch (error) {
      throw new Error(`Migration up failed: ${error}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.sequelize.query(
        `
        UPDATE "recruiter_profiles"
        SET city = NULL
        WHERE "user_id" IN (
          SELECT id FROM "users" WHERE email = :email
        )
        `,
        {
          replacements: { email: USER_EMAIL },
          type: Sequelize.QueryTypes.UPDATE,
        }
      );
    } catch (error) {
      throw new Error(`Migration down failed: ${error}`);
    }
  }
};
