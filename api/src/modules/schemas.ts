import gql from 'graphql-tag';
import { UserSchema } from '@/modules/user/user.schema';
import { OAuthSchema } from '@/modules/oauth/oauth.schema';
import { CandidateProfileSchema } from '@/modules/candidateProfile/candidateProfile.schema';
import { RecruiterProfileSchema } from '@/modules/recruiterProfile/recruiterProfile.schema';
import { ProfileConnectionSchema } from '@/modules/profileConnection/profileConnection.schema';
import { ChatMessageSchema } from '@/modules/chatMessage/chatMessage.schema';
import { TechnologySchema } from '@/modules/technology/technology.schema';
import { SpecializationSchema } from '@/modules/specialization/specialization.schema';
import { EmploymentTypeSchema } from '@/modules/employmentType/employmentType.schema';
import { JobExperienceSchema } from '@/modules/jobExperience/jobExperience.schema';
import { EnglishLevelSchema } from '@/modules/englishLevel/englishLevel.schema';
import { DateSchema } from '@/modules/date/date.schema';
import { CandidateProfileCitySchema } from '@/modules/candidateProfileCity/candidateProfileCity.schema';
import { ProfileConnectionUserMetaSchema } from '@/modules/profileConnectionUserMeta/profileConnectionUserMeta.schema';
import { EmploymentLocationSchema } from '@/modules/employmentLocation/employmentLocation.schema';
import { UploadFileSchema } from '@/modules/uploadFile/uploadFile.schema';
import { UserMessagesTemplateSchema } from '@/modules/userMessagesTemplate/userMessagesTemplate.schema';
import { UsersSearchSubscriptionSchema } from '@/modules/usersSearchSubscription/UsersSearchSubscription.schema';
import { FeatureSchema } from '@/modules/feature/feature.schema';
import { DeviceTokenSchema } from '@/modules/deviceToken/deviceToken.schema';
import { VacancySchema } from '@/modules/vacancy/vacancy.schema';
import { UserSettingsSchema } from '@/modules/userSettings/userSettings.schema';
import { AdminSettingsSchema } from '@/modules/adminSettings/adminSettings.schema';
import { NotificationsSchema } from '@/modules/notifications/notifications.schema';
import { VacanciesSourceSchema } from '@/modules/vacanciesSource/vacanciesSource.schema';
import { FeedbacksSchema } from '@/modules/feedbacks/feedbacks.schema';
import { WorkPlaceSchema } from '@/modules/workPlace/workPlace.schema';
import { PaymentsSchema } from '@/modules/payments/payments.schema';
import { NFTSchema } from '@/modules/nft/nft.schema';
import { RecruiterPostSchema } from '@/modules/post/post.schema';

const ModulesSchemas = [
  DateSchema,
  UserSchema,
  OAuthSchema,
  CandidateProfileSchema,
  RecruiterProfileSchema,
  RecruiterPostSchema,
  ProfileConnectionSchema,
  ChatMessageSchema,
  TechnologySchema,
  SpecializationSchema,
  EmploymentTypeSchema,
  JobExperienceSchema,
  EnglishLevelSchema,
  CandidateProfileCitySchema,
  ProfileConnectionUserMetaSchema,
  EmploymentLocationSchema,
  UploadFileSchema,
  UserMessagesTemplateSchema,
  UsersSearchSubscriptionSchema,
  FeatureSchema,
  DeviceTokenSchema,
  VacancySchema,
  UserSettingsSchema,
  AdminSettingsSchema,
  VacanciesSourceSchema,
  NotificationsSchema,
  FeedbacksSchema,
  WorkPlaceSchema,
  PaymentsSchema,
  NFTSchema,
];

const LinkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export const schemas = [LinkSchema, ...ModulesSchemas];
