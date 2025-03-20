'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = await queryInterface.sequelize.query(
      `SELECT id FROM "users" WHERE email = 'zincenkonasta6@gmail.com';`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (user.length > 0) {
      const userId = user[0].id;

      return await queryInterface.sequelize.query(
        `UPDATE recruiter_profiles SET city = 'Kyiv', updated_at = :updated_at WHERE user_id = :user_id`,
        {
          replacements: { updated_at: new Date(), user_id: userId },
          type: Sequelize.QueryTypes.UPDATE
        }
      );
    }

    return null; 
  },

  down: async (queryInterface, Sequelize) => {
    const user = await queryInterface.sequelize.query(
      `SELECT id FROM "users" WHERE email = 'zincenkonasta6@gmail.com';`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (user.length > 0) {
      const userId = user[0].id;

      return await queryInterface.sequelize.query(
        `UPDATE recruiter_profiles SET city = null, updated_at = :updated_at WHERE user_id = :user_id`,
        {
          replacements: { updated_at: new Date(), user_id: userId },
          type: Sequelize.QueryTypes.UPDATE
        }
      );
    }

    return null;
  }
};
