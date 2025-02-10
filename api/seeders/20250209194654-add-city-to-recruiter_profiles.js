module.exports = {
  up: async (queryInterface) => queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = 'Kyiv'
      FROM users
      WHERE recruiter_profiles.user_id = users.id
      AND users.email = 'test121@gmail.com';
    `),

  down: async (queryInterface) => queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = NULL
      FROM users
      WHERE recruiter_profiles.user_id = users.id
      AND users.email = 'test121@gmail.com';
    `),
};
