const email = 'yurii.choboda@gmail.com';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = :city
      FROM users
      WHERE recruiter_profiles.user_id = users.id
      AND users.email = :email
      `, {
      replacements: {
        city: 'Ivano-Frankivsk',
        email,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = NULL
      FROM users
      WHERE recruiter_profiles.user_id = users.id
      AND users.email = :email
      `, {
      replacements: {
        email,
      },
    });
  },
};
