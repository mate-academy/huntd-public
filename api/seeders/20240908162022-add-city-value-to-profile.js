const email = 'maxbobryk.dev@gmail.com';
const city = 'Kyiv';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city =:city
      WHERE user_id = (
        SELECT id FROM Users WHERE email = :email
      );
    `, {
      replacements: {
        city,
        email,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = NULL
      WHERE user_id = (
        SELECT id FROM Users WHERE email = 'maxbobryk.dev@gmail.com'
      );
    `, {
      replacements: {
        email,
      },
    });
  },
};
