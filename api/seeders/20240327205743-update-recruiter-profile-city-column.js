module.exports = {
  up: async (queryInterface) => {
    const userEmail = 'artemmalikov742@gmail.com';
    const city = 'Kharkiv';

    const sqlQuery = `
      UPDATE recruiter_profiles
      SET city = '${city}'
      WHERE user_id = (
        SELECT id FROM users WHERE email = '${userEmail}'
      );
    `;

    await queryInterface.sequelize.query(sqlQuery);
  },

  down: async (queryInterface) => {
    const userEmail = 'artemmalikov742@gmail.com';

    const sqlQuery = `
      UPDATE recruiter_profiles
      SET city = null
      WHERE user_id = (
        SELECT id FROM users WHERE email = '${userEmail}'
      );
    `;

    await queryInterface.sequelize.query(sqlQuery);
  },
};
