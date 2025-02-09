module.exports = {
  up: (queryInterface) => queryInterface.bulkUpdate('recruiter_profiles',
    {
      city: 'Rivne',
    },
    { id: 455 }),

  down: (queryInterface) => queryInterface.bulkUpdate(
    'recruiter_profiles',
    { city: null },
    { id: 455 },
  ),
};
