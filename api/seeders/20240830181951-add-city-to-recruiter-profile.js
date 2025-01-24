const EMAIL_TO_UPDATE = 'sergeymih098123@gmail.com';
const CITY_TO_SET = 'Kyiv';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.sequelize.query(`
        UPDATE "recruiter_profiles"
        SET city = :city
        WHERE "user_id" IN (
          SELECT id FROM "users" WHERE email = :email
        )`,
      {
        replacements: {
          email: EMAIL_TO_UPDATE,
          city: CITY_TO_SET,
        },
        type: Sequelize.QueryTypes.UPDATE,
      });
    } catch (error) {
      throw new Error(`Error during recruiter_profiles seeding UP: ${error}`);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.sequelize.query(`
        UPDATE "recruiter_profiles"
        SET city = NULL
        WHERE "user_id" IN (
          SELECT id FROM "users" WHERE email = :email
        )`,
      {
        replacements: {
          email: EMAIL_TO_UPDATE,
        },
        type: Sequelize.QueryTypes.UPDATE,
      });
    } catch (error) {
      throw new Error(`Error during recruiter_profiles seeding DOWN: ${error}`);
    }
  },
};
