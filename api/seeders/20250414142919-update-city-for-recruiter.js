/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Poltava' },
      { id: 455 },
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      { id: 455 },
    );
  },
};
