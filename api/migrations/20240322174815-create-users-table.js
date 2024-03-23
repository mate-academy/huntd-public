'use strict';

const TABLE_NAME = 'users';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      lastActionTime: {
        type: Sequelize.DATE,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      resetPasswordToken: {
        type: Sequelize.STRING,
        unique: true,
      },
      confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      confirmEmailToken: {
        type: Sequelize.STRING,
        unique: true,
      },
      blocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      inactive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      phone: {
        type: Sequelize.STRING,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      ethWalletAddress: {
        type: Sequelize.STRING,
        unique: true,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      userRole: {
        type: Sequelize.ENUM('USER', 'ADMIN'),
      },
      fvType: {
        type: Sequelize.STRING,
      },
      fvSource: {
        type: Sequelize.STRING,
      },
      fvMedium: {
        type: Sequelize.STRING,
      },
      fvCampaign: {
        type: Sequelize.STRING,
      },
      fvContent: {
        type: Sequelize.STRING,
      },
      fvTerm: {
        type: Sequelize.STRING,
      },
      lvType: {
        type: Sequelize.STRING,
      },
      lvSource: {
        type: Sequelize.STRING,
      },
      lvMedium: {
        type: Sequelize.STRING,
      },
      lvCampaign: {
        type: Sequelize.STRING,
      },
      lvContent: {
        type: Sequelize.STRING,
      },
      lvTerm: {
        type: Sequelize.STRING,
      },
      gClientid: {
        type: Sequelize.STRING,
      },
      gIp: {
        type: Sequelize.STRING,
      },
      gAgent: {
        type: Sequelize.STRING,
      },
      gclid: {
        type: Sequelize.STRING,
      },
      linkedinUrl: {
        type: Sequelize.STRING,
      },
      behanceUrl: {
        type: Sequelize.STRING,
      },
      githubUrl: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
