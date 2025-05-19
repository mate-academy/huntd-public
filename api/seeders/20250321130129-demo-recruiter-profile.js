// file: seeders/20250321-demo-recruiter-profile.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('recruiter_profiles', [{
      user_id: 1,
      position: 'Recruiter',
      company_name: 'Mate',
      slug: 'recruiter-profile-slug-2',
      status: 'DRAFT',
      created_at: new Date(),
      updated_at: new Date(),
      city: 'KYIV',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('recruiter_profiles', null, {});
  }
};
