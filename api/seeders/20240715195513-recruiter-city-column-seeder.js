'use strict';

// random set of cities to add, just for diversity
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

      for (const profile of profiles) {
        const city = cities[Math.floor(Math.random() * cities.length)];
        await queryInterface.bulkUpdate(
          'recruiter_profiles',
          { city },           // what we will add
          { id: profile.id }, // where we will add  (to user with id equal to profile.id)
          { transaction: t }  // transaction
        );
      }
    });
  },

  async down (queryInterface, Sequelize) {
    const sequelize = queryInterface.sequelize;

    await sequelize.transaction(async (t) => {
      await queryInterface.bulkUpdate(
        'recruiter_profiles',
        { city: null },     // what value will we set
        {},                 // this parameter has to be passed to add third parameter
        { transaction: t }  // transaction
      );
    });
  }
};

// this seeder could be easily done without transaction
// but it still has sense to be here, to limit result to two scenarios
// 1. every row would be filled
// 2. none will be filled, if error will occur in the process
