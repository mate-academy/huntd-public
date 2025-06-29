module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = 'Kyiv';
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      UPDATE recruiter_profiles
      SET city = NULL;
    `);
  },
};
