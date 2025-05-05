const yourUserId = 774;
const cityValue = 'Kyiv';

module.exports = {
  up: (queryInterface) => queryInterface.bulkUpdate(
    'recruiter_profiles',
    {
      city: cityValue,
    },
    {
      user_id: yourUserId,
    },
  ),

  down: (queryInterface) => queryInterface.bulkUpdate(
    'recruiter_profiles',
    {
      city: null,
    },
    {
      user_id: yourUserId,
    },
  ),
};
