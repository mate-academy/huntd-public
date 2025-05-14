module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = 'Kyiv'
      WHERE user_id = (SELECT id FROM users WHERE email = 'tsurya.oleg@gmail.com')
      `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = NULL
      WHERE user_id = (SELECT id FROM users WHERE email = 'tsurya.oleg@gmail.com')
      `);
  },
};
