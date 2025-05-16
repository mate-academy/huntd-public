/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const userEmail = 'dudlavasil@gmail.com';
    const userCity = 'Tiachiv';

    try {
      await queryInterface.sequelize.query(`
        UPDATE recruiter_profiles
        SET city = '${userCity}'
        WHERE user_id = (SELECT id FROM users WHERE email = '${userEmail}')
    `);
    } catch (error) {
      throw new Error(`Failed to update user ${error}`);
    }
  },
};
