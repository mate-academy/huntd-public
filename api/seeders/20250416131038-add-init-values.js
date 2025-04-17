module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`update recruiter_profiles set city = 'Kyiv' where user_id = (select id from users where email = 'after@d.co')`);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`update recruiter_profiles set city = null where user_id = (select id from users where email = 'after@d.co')`);
  },
};
