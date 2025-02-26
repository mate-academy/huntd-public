module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('recruiter_profiles', [{
      user_id: 112,
      position: 'Tech Rec',
      company_name: 'Mate',
      city1: 'Kyiv',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
