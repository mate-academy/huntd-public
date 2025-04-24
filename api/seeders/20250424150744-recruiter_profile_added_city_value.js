/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkUpdate(
    'recruiter_profiles',
    { city: 'Kyiv' }, { id: 455 },
  ),

  down: (queryInterface) => queryInterface.bulkUpdate(
    'recruiter_profiles',
    { city: null }, { id: 455 },
  ),
};
