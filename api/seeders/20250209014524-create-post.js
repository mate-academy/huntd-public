module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Posts',
    [{
      title: 'test title',
      description: 'test description',
      short_description: 'test short description',
      recruiter_id: 455,
      created_at: new Date(),
      updated_at: new Date(),
    }]),

  down: (queryInterface) => queryInterface.bulkUpdate(
    'Posts',
    null,
  ),
};
