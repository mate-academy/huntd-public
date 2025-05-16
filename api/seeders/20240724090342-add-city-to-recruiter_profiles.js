module.exports = {
  up: async (queryInterface) => {
    const city = 'Odesa';
    const email = 'mykyta.ganzha@gmail.com';

    try {
      await queryInterface.sequelize.query(`
        UPDATE "recruiter_profiles"
        SET city = :city
        WHERE "user_id" IN (
          SELECT id FROM "users" WHERE email = :email
        )
      `, {
        replacements: { city, email },
      });
    } catch (err) {
      throw new Error(`Error updating recruiter profiles: ${err.message}`);
    }
  },

  down: async (queryInterface) => {
    const email = 'mykyta.ganzha@gmail.com';

    try {
      await queryInterface.sequelize.query(`
        UPDATE "recruiter_profiles"
        SET city = NULL
        WHERE "user_id" IN (
          SELECT id FROM "users" WHERE email = :email
        )
      `, {
        replacements: { email },
      });
    } catch (err) {
      throw new Error(`Error reverting recruiter profiles: ${err.message}`);
    }
  },
};
