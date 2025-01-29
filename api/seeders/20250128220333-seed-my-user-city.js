'use strict';

const MY_RECRUITER_PROFILE_ID = 455;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkUpdate('recruiter_profiles', { city: 'Lviv' }, { id: MY_RECRUITER_PROFILE_ID });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkUpdate('recruiter_profiles', { city: null }, { id: MY_RECRUITER_PROFILE_ID });
  },
};
