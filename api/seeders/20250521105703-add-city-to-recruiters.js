module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = 'Kyiv'
      WHERE city IS NULL
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = NULL
    `);
  },
};
