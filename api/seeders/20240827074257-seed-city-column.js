// 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cities = [
      'Kyiv',
      'Lviv',
      'Odessa',
      'Kharkiv',
      'Dnipro',
      'Zaporizhzhia',
      'Ivano-Frankivsk',
      'Vinnytsia',
      'Chernihiv',
      'Uzhhorod',
      'Ternopil',
      'Kherson',
      'Rivne',
      'Poltava',
      'Cherkasy',
      'Zhytomyr',
      'Sumy',
      'Chernivtsi',
      'Lutsk',
      'Mykolaiv',
    ];

    const profiles = await queryInterface.sequelize.query(
      'SELECT id FROM recruiter_profiles',
      { type: Sequelize.QueryTypes.SELECT },
    );

    const updates = profiles.map((profile) => queryInterface.bulkUpdate(
      'recruiter_profiles',
      { city: cities[Math.floor(Math.random() * cities.length)] },
      { id: profile.id },
    ));

    await Promise.all(updates);
  },

  down: async (queryInterface) => queryInterface.bulkUpdate('recruiter_profiles', { city: null }, {}),
};
