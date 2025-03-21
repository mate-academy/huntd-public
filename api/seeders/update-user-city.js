const COMPANY_NAME = 'TM';
const CITY = 'Kiew';
const QUERY = `SELECT id FROM recruiter_profiles WHERE company_name = :companyName LIMIT 1`;

module.exports = {
  up: async (queryInterface) => {
    const [user] = await queryInterface.sequelize.query(
      QUERY,
      { replacements: { companyName: COMPANY_NAME }, type: 'SELECT' },
    );

    if (user) {
      await queryInterface.bulkUpdate(
        'recruiter_profiles',
        { city: CITY },
        { id: user.id },
      );
    }
  },

  down: async (queryInterface) => {
    const [user] = await queryInterface.sequelize.query(
      QUERY,
      { replacements: { companyName: COMPANY_NAME }, type: 'SELECT' },
    );

    if (user) {
      await queryInterface.bulkUpdate(
        'recruiter_profiles',
        { city: null },
        { id: user.id },
      );
    }
  },
};
