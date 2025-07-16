module.exports = {
  up: async (queryInterface) => queryInterface.bulkUpdate(
    'recruiter_profiles',
    { city: 'Kyiv' },
    { slug: 'hr-at-mate-academy-0863d' },
  ),

  down: async (queryInterface) => queryInterface.bulkUpdate(
    'recruiter_profiles',
    { city: null },
    { slug: 'hr-at-mate-academy-0863d' },
  ),
};
