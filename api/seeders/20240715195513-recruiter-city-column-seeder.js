'use strict';

const cities = [
  'Kyiv', 'Kharkiv', 'Odessa', 'Dnipro', 'Donetsk',
  'Zaporizhzhia', 'Lviv', 'Mykolaiv', 'Luhansk', 'Vinnytsia',
  'Simferopol', 'Kherson', 'Poltava', 'Chernihiv', 'Cherkasy',
  'Sumy', 'Zhytomyr', 'Chernivtsi', 'Ivano-Frankivsk', 'Khmelnytskyi',
  'Kropyvnytskyi', 'Rivne', 'Ternopil', 'Uzhhorod'
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const sequelize = queryInterface.sequelize;

    await sequelize.transaction(async (t) => {
      const profiles = await queryInterface.sequelize.query(
        'SELECT id FROM recruiter_profiles',
        { type: queryInterface.sequelize.QueryTypes.SELECT, transaction: t }
      );

      const bulkUpdateQuery = profiles.map(profile => {
        const city = cities[Math.floor(Math.random() * cities.length)];
        return `UPDATE recruiter_profiles SET city = '${city}' WHERE id = ${profile.id}`;
      }).join('; ');

      await sequelize.query(bulkUpdateQuery, { transaction: t });
    });
  },

  async down(queryInterface, Sequelize) {
    const sequelize = queryInterface.sequelize;

    await sequelize.transaction(async (t) => {
      await queryInterface.bulkUpdate(
        'recruiter_profiles',
        { city: null },
        {},
        { transaction: t }
      );
    });
  }
};
