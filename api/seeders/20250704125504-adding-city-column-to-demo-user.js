'use strict';

module.exports = {
  up: async (queryInterface) => {
    const [results] = await queryInterface.sequelize.query(`SELECT id FROM users WHERE email = 'spental12345@gmail.com' LIMIT 1`);

    if (results.length === 0) {
      return;
    }

    const userId = results[0].id;

    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: 'Kyiv' },
      { user_id: userId },
    );
  },

  down: async (queryInterface) => {
    const [results] = await queryInterface.sequelize.query(`SELECT id FROM users WHERE email = 'spental12345@gmail.com' LIMIT 1`);

    if (results.length === 0) {
      return;
    }

    const userId = results[0].id;

    await queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: null },
      { user_id: userId },
    );
  },
};
