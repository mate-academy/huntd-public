const CITY = 'Kyiv';
const USER_ID = 456;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkUpdate('recruiter_profiles', {
      city: CITY,
    }, {
      id: USER_ID,
    });
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface) => {
    await queryInterface.bulkUpdate('recruiter_profiles', { city: null }, { id: USER_ID });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
