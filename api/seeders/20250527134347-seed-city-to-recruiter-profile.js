const profileId = 455;
const city = 'Kharkiv';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkUpdate('recruiter_profiles', { city }, { id: profileId });
  },
  down: async (queryInterface) => {
    await queryInterface.bulkUpdate('recruiter_profiles', { city: null }, { id: profileId });
  },
};
