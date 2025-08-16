import { Sequelize } from 'sequelize-typescript';
import { AccessToken } from '@/models/AccessToken';
import { rootLogger } from '@/modules/logger';
import { User } from '@/models/User';
import { Translate } from '@/models/Translate';
import { OAuthToken } from '@/models/OAuthToken';
import { CandidateProfile } from '@/models/CandidateProfile';
import { RecruiterProfile } from '@/models/RecruiterProfile';
import { ServiceAccessToken } from '@/models/ServiceAccessToken';
import { ProfileConnection } from '@/models/ProfileConnection';
import { ChatMessage } from '@/models/ChatMessage';
import { Technology } from '@/models/Technology';
import { CandidateProfileTechnology } from '@/models/CandidateProfileTechnology';
import { Specialization } from '@/models/Specialization';
import { CandidateProfileEmploymentType } from '@/models/CandidateProfileEmploymentType';
import { EmploymentType } from '@/models/EmploymentType';
import { EnglishLevel } from '@/models/EnglishLevel';
import { JobExperience } from '@/models/JobExperience';
import { CandidateProfileCity } from '@/models/CandidateProfileCity';
import { ProfileConnectionUserMeta } from '@/models/ProfileConnectionUserMeta';
import { EmploymentLocation } from '@/models/EmploymentLocation';
import { CandidateProfileEmploymentLocation } from '@/models/CandidateProfileEmploymentLocation';
import { UploadFile } from '@/models/UploadFile';
import { UploadFileMorph } from '@/models/UploadFileMorph';
import { UserMessagesTemplate } from '@/models/UserMessagesTemplate';
import { UsersSearchSubscription } from '@/models/UsersSearchSubscription';
import { Feature } from '@/models/Feature';
import { DeviceToken } from '@/models/DeviceToken';
import { Vacancy } from '@/models/Vacancy';
import { VacancySpecialization } from '@/models/VacancySpecialization';
import { VacancyTechnology } from '@/models/VacancyTechnology';
import { UserSettings } from '@/models/UserSettings';
import { AdminSettings } from '@/models/AdminSettings';
import { VacanciesSource } from '@/models/VacanciesSource';
import { CandidateProfileSpecialization } from '@/models/CandidateProfileSpecialization';
import { CandidateProfileWorkPlace } from '@/models/CandidateProfileWorkPlace';
import { Nft } from '@/models/Nft';
import { Post } from '@/models/Post';

export const models = {
  User,
  AccessToken,
  Translate,
  OAuthToken,
  CandidateProfile,
  RecruiterProfile,
  ServiceAccessToken,
  ProfileConnection,
  ChatMessage,
  Technology,
  CandidateProfileTechnology,
  Specialization,
  CandidateProfileEmploymentType,
  EmploymentType,
  EnglishLevel,
  JobExperience,
  CandidateProfileCity,
  ProfileConnectionUserMeta,
  EmploymentLocation,
  CandidateProfileEmploymentLocation,
  UploadFile,
  UploadFileMorph,
  UserMessagesTemplate,
  UsersSearchSubscription,
  Feature,
  DeviceToken,
  Vacancy,
  VacancyTechnology,
  VacancySpecialization,
  UserSettings,
  AdminSettings,
  VacanciesSource,
  CandidateProfileSpecialization,
  CandidateProfileWorkPlace,
  Nft,
  Post,
};

export type Models = typeof models;

const config = require('../../config/config')[
  process.env.NODE_ENV
];

const initDb = async (): Promise<Sequelize> => {
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      ...config,
      models: Object.values(models),
    },
  );

  try {
    await sequelize.authenticate();
    rootLogger.info('Connection has been established successfully.');
  } catch (err) {
    rootLogger.error('Unable to connect to the database:', err.stack);
  }

  return sequelize;
};

export {
  initDb,
};
