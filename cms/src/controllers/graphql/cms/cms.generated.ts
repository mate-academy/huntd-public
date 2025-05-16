import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export enum Enum_Candidateprofiles_Status {
  Draft = 'DRAFT',
  OnReview = 'ON_REVIEW',
  Rejected = 'REJECTED',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type CandidateProfiles = {
  __typename?: 'CandidateProfiles';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  status: Enum_Candidateprofiles_Status;
  position?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Float']>;
  candidate_description?: Maybe<Scalars['String']>;
  experience_description?: Maybe<Scalars['String']>;
  reject_reason?: Maybe<Scalars['String']>;
  user_id?: Maybe<HuntdUsers>;
  achievements?: Maybe<Scalars['String']>;
  profile_connections?: Maybe<Array<Maybe<ProfileConnections>>>;
};


export type CandidateProfilesProfile_ConnectionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CandidateProfilesConnection = {
  __typename?: 'CandidateProfilesConnection';
  values?: Maybe<Array<Maybe<CandidateProfiles>>>;
  groupBy?: Maybe<CandidateProfilesGroupBy>;
  aggregate?: Maybe<CandidateProfilesAggregator>;
};

export type CandidateProfilesAggregator = {
  __typename?: 'CandidateProfilesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<CandidateProfilesAggregatorSum>;
  avg?: Maybe<CandidateProfilesAggregatorAvg>;
  min?: Maybe<CandidateProfilesAggregatorMin>;
  max?: Maybe<CandidateProfilesAggregatorMax>;
};

export type CandidateProfilesAggregatorSum = {
  __typename?: 'CandidateProfilesAggregatorSum';
  salary?: Maybe<Scalars['Float']>;
};

export type CandidateProfilesAggregatorAvg = {
  __typename?: 'CandidateProfilesAggregatorAvg';
  salary?: Maybe<Scalars['Float']>;
};

export type CandidateProfilesAggregatorMin = {
  __typename?: 'CandidateProfilesAggregatorMin';
  salary?: Maybe<Scalars['Float']>;
};

export type CandidateProfilesAggregatorMax = {
  __typename?: 'CandidateProfilesAggregatorMax';
  salary?: Maybe<Scalars['Float']>;
};

export type CandidateProfilesGroupBy = {
  __typename?: 'CandidateProfilesGroupBy';
  id?: Maybe<Array<Maybe<CandidateProfilesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CandidateProfilesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CandidateProfilesConnectionUpdated_At>>>;
  status?: Maybe<Array<Maybe<CandidateProfilesConnectionStatus>>>;
  position?: Maybe<Array<Maybe<CandidateProfilesConnectionPosition>>>;
  salary?: Maybe<Array<Maybe<CandidateProfilesConnectionSalary>>>;
  candidate_description?: Maybe<Array<Maybe<CandidateProfilesConnectionCandidate_Description>>>;
  experience_description?: Maybe<Array<Maybe<CandidateProfilesConnectionExperience_Description>>>;
  reject_reason?: Maybe<Array<Maybe<CandidateProfilesConnectionReject_Reason>>>;
  user_id?: Maybe<Array<Maybe<CandidateProfilesConnectionUser_Id>>>;
  achievements?: Maybe<Array<Maybe<CandidateProfilesConnectionAchievements>>>;
};

export type CandidateProfilesConnectionId = {
  __typename?: 'CandidateProfilesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfilesConnectionCreated_At = {
  __typename?: 'CandidateProfilesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfilesConnectionUpdated_At = {
  __typename?: 'CandidateProfilesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfilesConnectionStatus = {
  __typename?: 'CandidateProfilesConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfilesConnectionPosition = {
  __typename?: 'CandidateProfilesConnectionPosition';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfilesConnectionSalary = {
  __typename?: 'CandidateProfilesConnectionSalary';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfilesConnectionCandidate_Description = {
  __typename?: 'CandidateProfilesConnectionCandidate_description';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfilesConnectionExperience_Description = {
  __typename?: 'CandidateProfilesConnectionExperience_description';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfilesConnectionReject_Reason = {
  __typename?: 'CandidateProfilesConnectionReject_reason';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfilesConnectionUser_Id = {
  __typename?: 'CandidateProfilesConnectionUser_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfilesConnectionAchievements = {
  __typename?: 'CandidateProfilesConnectionAchievements';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfileInput = {
  status?: Maybe<Enum_Candidateprofiles_Status>;
  position?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Float']>;
  candidate_description?: Maybe<Scalars['String']>;
  experience_description?: Maybe<Scalars['String']>;
  reject_reason?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  profile_connections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  achievements?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCandidateProfileInput = {
  status?: Maybe<Enum_Candidateprofiles_Status>;
  position?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Float']>;
  candidate_description?: Maybe<Scalars['String']>;
  experience_description?: Maybe<Scalars['String']>;
  reject_reason?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  profile_connections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  achievements?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCandidateProfileInput = {
  data?: Maybe<CandidateProfileInput>;
};

export type CreateCandidateProfilePayload = {
  __typename?: 'createCandidateProfilePayload';
  candidateProfile?: Maybe<CandidateProfiles>;
};

export type UpdateCandidateProfileInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCandidateProfileInput>;
};

export type UpdateCandidateProfilePayload = {
  __typename?: 'updateCandidateProfilePayload';
  candidateProfile?: Maybe<CandidateProfiles>;
};

export type DeleteCandidateProfileInput = {
  where?: Maybe<InputId>;
};

export type DeleteCandidateProfilePayload = {
  __typename?: 'deleteCandidateProfilePayload';
  candidateProfile?: Maybe<CandidateProfiles>;
};

export enum Enum_Devicetokens_Device_Platform {
  Ios = 'IOS',
  Android = 'ANDROID'
}

export type DeviceTokens = {
  __typename?: 'DeviceTokens';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  token?: Maybe<Scalars['String']>;
  device_name?: Maybe<Scalars['String']>;
  device_platform?: Maybe<Enum_Devicetokens_Device_Platform>;
  system_version?: Maybe<Scalars['String']>;
  device_year?: Maybe<Scalars['String']>;
  user_id?: Maybe<HuntdUsers>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type DeviceTokensConnection = {
  __typename?: 'DeviceTokensConnection';
  values?: Maybe<Array<Maybe<DeviceTokens>>>;
  groupBy?: Maybe<DeviceTokensGroupBy>;
  aggregate?: Maybe<DeviceTokensAggregator>;
};

export type DeviceTokensAggregator = {
  __typename?: 'DeviceTokensAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DeviceTokensGroupBy = {
  __typename?: 'DeviceTokensGroupBy';
  id?: Maybe<Array<Maybe<DeviceTokensConnectionId>>>;
  created_at?: Maybe<Array<Maybe<DeviceTokensConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<DeviceTokensConnectionUpdated_At>>>;
  token?: Maybe<Array<Maybe<DeviceTokensConnectionToken>>>;
  device_name?: Maybe<Array<Maybe<DeviceTokensConnectionDevice_Name>>>;
  device_platform?: Maybe<Array<Maybe<DeviceTokensConnectionDevice_Platform>>>;
  system_version?: Maybe<Array<Maybe<DeviceTokensConnectionSystem_Version>>>;
  device_year?: Maybe<Array<Maybe<DeviceTokensConnectionDevice_Year>>>;
  user_id?: Maybe<Array<Maybe<DeviceTokensConnectionUser_Id>>>;
  published_at?: Maybe<Array<Maybe<DeviceTokensConnectionPublished_At>>>;
};

export type DeviceTokensConnectionId = {
  __typename?: 'DeviceTokensConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DeviceTokensConnection>;
};

export type DeviceTokensConnectionCreated_At = {
  __typename?: 'DeviceTokensConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DeviceTokensConnection>;
};

export type DeviceTokensConnectionUpdated_At = {
  __typename?: 'DeviceTokensConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DeviceTokensConnection>;
};

export type DeviceTokensConnectionToken = {
  __typename?: 'DeviceTokensConnectionToken';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DeviceTokensConnection>;
};

export type DeviceTokensConnectionDevice_Name = {
  __typename?: 'DeviceTokensConnectionDevice_name';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DeviceTokensConnection>;
};

export type DeviceTokensConnectionDevice_Platform = {
  __typename?: 'DeviceTokensConnectionDevice_platform';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DeviceTokensConnection>;
};

export type DeviceTokensConnectionSystem_Version = {
  __typename?: 'DeviceTokensConnectionSystem_version';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DeviceTokensConnection>;
};

export type DeviceTokensConnectionDevice_Year = {
  __typename?: 'DeviceTokensConnectionDevice_year';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DeviceTokensConnection>;
};

export type DeviceTokensConnectionUser_Id = {
  __typename?: 'DeviceTokensConnectionUser_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DeviceTokensConnection>;
};

export type DeviceTokensConnectionPublished_At = {
  __typename?: 'DeviceTokensConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DeviceTokensConnection>;
};

export type DeviceTokenInput = {
  token?: Maybe<Scalars['String']>;
  device_name?: Maybe<Scalars['String']>;
  device_platform?: Maybe<Enum_Devicetokens_Device_Platform>;
  system_version?: Maybe<Scalars['String']>;
  device_year?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditDeviceTokenInput = {
  token?: Maybe<Scalars['String']>;
  device_name?: Maybe<Scalars['String']>;
  device_platform?: Maybe<Enum_Devicetokens_Device_Platform>;
  system_version?: Maybe<Scalars['String']>;
  device_year?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateDeviceTokenInput = {
  data?: Maybe<DeviceTokenInput>;
};

export type CreateDeviceTokenPayload = {
  __typename?: 'createDeviceTokenPayload';
  deviceToken?: Maybe<DeviceTokens>;
};

export type UpdateDeviceTokenInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditDeviceTokenInput>;
};

export type UpdateDeviceTokenPayload = {
  __typename?: 'updateDeviceTokenPayload';
  deviceToken?: Maybe<DeviceTokens>;
};

export type DeleteDeviceTokenInput = {
  where?: Maybe<InputId>;
};

export type DeleteDeviceTokenPayload = {
  __typename?: 'deleteDeviceTokenPayload';
  deviceToken?: Maybe<DeviceTokens>;
};

export type EnglishLevel = {
  __typename?: 'EnglishLevel';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type EnglishLevelConnection = {
  __typename?: 'EnglishLevelConnection';
  values?: Maybe<Array<Maybe<EnglishLevel>>>;
  groupBy?: Maybe<EnglishLevelGroupBy>;
  aggregate?: Maybe<EnglishLevelAggregator>;
};

export type EnglishLevelAggregator = {
  __typename?: 'EnglishLevelAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EnglishLevelGroupBy = {
  __typename?: 'EnglishLevelGroupBy';
  id?: Maybe<Array<Maybe<EnglishLevelConnectionId>>>;
  created_at?: Maybe<Array<Maybe<EnglishLevelConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<EnglishLevelConnectionUpdated_At>>>;
  slug?: Maybe<Array<Maybe<EnglishLevelConnectionSlug>>>;
  published_at?: Maybe<Array<Maybe<EnglishLevelConnectionPublished_At>>>;
};

export type EnglishLevelConnectionId = {
  __typename?: 'EnglishLevelConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EnglishLevelConnection>;
};

export type EnglishLevelConnectionCreated_At = {
  __typename?: 'EnglishLevelConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EnglishLevelConnection>;
};

export type EnglishLevelConnectionUpdated_At = {
  __typename?: 'EnglishLevelConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EnglishLevelConnection>;
};

export type EnglishLevelConnectionSlug = {
  __typename?: 'EnglishLevelConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EnglishLevelConnection>;
};

export type EnglishLevelConnectionPublished_At = {
  __typename?: 'EnglishLevelConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EnglishLevelConnection>;
};

export type EnglishLevelInput = {
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditEnglishLevelInput = {
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateEnglishLevelInput = {
  data?: Maybe<EnglishLevelInput>;
};

export type CreateEnglishLevelPayload = {
  __typename?: 'createEnglishLevelPayload';
  englishLevel?: Maybe<EnglishLevel>;
};

export type UpdateEnglishLevelInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditEnglishLevelInput>;
};

export type UpdateEnglishLevelPayload = {
  __typename?: 'updateEnglishLevelPayload';
  englishLevel?: Maybe<EnglishLevel>;
};

export type DeleteEnglishLevelInput = {
  where?: Maybe<InputId>;
};

export type DeleteEnglishLevelPayload = {
  __typename?: 'deleteEnglishLevelPayload';
  englishLevel?: Maybe<EnglishLevel>;
};

export enum Enum_Features_Status {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED'
}

export type Features = {
  __typename?: 'Features';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Features_Status>;
};

export type FeaturesConnection = {
  __typename?: 'FeaturesConnection';
  values?: Maybe<Array<Maybe<Features>>>;
  groupBy?: Maybe<FeaturesGroupBy>;
  aggregate?: Maybe<FeaturesAggregator>;
};

export type FeaturesAggregator = {
  __typename?: 'FeaturesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FeaturesGroupBy = {
  __typename?: 'FeaturesGroupBy';
  id?: Maybe<Array<Maybe<FeaturesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<FeaturesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<FeaturesConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<FeaturesConnectionName>>>;
  description?: Maybe<Array<Maybe<FeaturesConnectionDescription>>>;
  status?: Maybe<Array<Maybe<FeaturesConnectionStatus>>>;
};

export type FeaturesConnectionId = {
  __typename?: 'FeaturesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FeaturesConnection>;
};

export type FeaturesConnectionCreated_At = {
  __typename?: 'FeaturesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FeaturesConnection>;
};

export type FeaturesConnectionUpdated_At = {
  __typename?: 'FeaturesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FeaturesConnection>;
};

export type FeaturesConnectionName = {
  __typename?: 'FeaturesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FeaturesConnection>;
};

export type FeaturesConnectionDescription = {
  __typename?: 'FeaturesConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FeaturesConnection>;
};

export type FeaturesConnectionStatus = {
  __typename?: 'FeaturesConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FeaturesConnection>;
};

export type FeatureInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Features_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFeatureInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Features_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateFeatureInput = {
  data?: Maybe<FeatureInput>;
};

export type CreateFeaturePayload = {
  __typename?: 'createFeaturePayload';
  feature?: Maybe<Features>;
};

export type UpdateFeatureInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditFeatureInput>;
};

export type UpdateFeaturePayload = {
  __typename?: 'updateFeaturePayload';
  feature?: Maybe<Features>;
};

export type DeleteFeatureInput = {
  where?: Maybe<InputId>;
};

export type DeleteFeaturePayload = {
  __typename?: 'deleteFeaturePayload';
  feature?: Maybe<Features>;
};

export type HuntdUsers = {
  __typename?: 'HuntdUsers';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  cv?: Maybe<UploadFile>;
  recruiter_profiles?: Maybe<Array<Maybe<RecruiterProfiles>>>;
  candidate_profiles?: Maybe<Array<Maybe<CandidateProfiles>>>;
  vacancies_sources?: Maybe<Array<Maybe<VacanciesSources>>>;
};


export type HuntdUsersRecruiter_ProfilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type HuntdUsersCandidate_ProfilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type HuntdUsersVacancies_SourcesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type HuntdUsersConnection = {
  __typename?: 'HuntdUsersConnection';
  values?: Maybe<Array<Maybe<HuntdUsers>>>;
  groupBy?: Maybe<HuntdUsersGroupBy>;
  aggregate?: Maybe<HuntdUsersAggregator>;
};

export type HuntdUsersAggregator = {
  __typename?: 'HuntdUsersAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HuntdUsersGroupBy = {
  __typename?: 'HuntdUsersGroupBy';
  id?: Maybe<Array<Maybe<HuntdUsersConnectionId>>>;
  created_at?: Maybe<Array<Maybe<HuntdUsersConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<HuntdUsersConnectionUpdated_At>>>;
  email?: Maybe<Array<Maybe<HuntdUsersConnectionEmail>>>;
  first_name?: Maybe<Array<Maybe<HuntdUsersConnectionFirst_Name>>>;
  last_name?: Maybe<Array<Maybe<HuntdUsersConnectionLast_Name>>>;
  cv?: Maybe<Array<Maybe<HuntdUsersConnectionCv>>>;
};

export type HuntdUsersConnectionId = {
  __typename?: 'HuntdUsersConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HuntdUsersConnection>;
};

export type HuntdUsersConnectionCreated_At = {
  __typename?: 'HuntdUsersConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HuntdUsersConnection>;
};

export type HuntdUsersConnectionUpdated_At = {
  __typename?: 'HuntdUsersConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HuntdUsersConnection>;
};

export type HuntdUsersConnectionEmail = {
  __typename?: 'HuntdUsersConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HuntdUsersConnection>;
};

export type HuntdUsersConnectionFirst_Name = {
  __typename?: 'HuntdUsersConnectionFirst_name';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HuntdUsersConnection>;
};

export type HuntdUsersConnectionLast_Name = {
  __typename?: 'HuntdUsersConnectionLast_name';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HuntdUsersConnection>;
};

export type HuntdUsersConnectionCv = {
  __typename?: 'HuntdUsersConnectionCv';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HuntdUsersConnection>;
};

export type HuntdUserInput = {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  recruiter_profiles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  candidate_profiles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cv?: Maybe<Scalars['ID']>;
  vacancies_sources?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHuntdUserInput = {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  recruiter_profiles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  candidate_profiles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cv?: Maybe<Scalars['ID']>;
  vacancies_sources?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateHuntdUserInput = {
  data?: Maybe<HuntdUserInput>;
};

export type CreateHuntdUserPayload = {
  __typename?: 'createHuntdUserPayload';
  huntdUser?: Maybe<HuntdUsers>;
};

export type UpdateHuntdUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditHuntdUserInput>;
};

export type UpdateHuntdUserPayload = {
  __typename?: 'updateHuntdUserPayload';
  huntdUser?: Maybe<HuntdUsers>;
};

export type DeleteHuntdUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteHuntdUserPayload = {
  __typename?: 'deleteHuntdUserPayload';
  huntdUser?: Maybe<HuntdUsers>;
};

export type JobExperience = {
  __typename?: 'JobExperience';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type JobExperienceConnection = {
  __typename?: 'JobExperienceConnection';
  values?: Maybe<Array<Maybe<JobExperience>>>;
  groupBy?: Maybe<JobExperienceGroupBy>;
  aggregate?: Maybe<JobExperienceAggregator>;
};

export type JobExperienceAggregator = {
  __typename?: 'JobExperienceAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type JobExperienceGroupBy = {
  __typename?: 'JobExperienceGroupBy';
  id?: Maybe<Array<Maybe<JobExperienceConnectionId>>>;
  created_at?: Maybe<Array<Maybe<JobExperienceConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<JobExperienceConnectionUpdated_At>>>;
  slug?: Maybe<Array<Maybe<JobExperienceConnectionSlug>>>;
  published_at?: Maybe<Array<Maybe<JobExperienceConnectionPublished_At>>>;
};

export type JobExperienceConnectionId = {
  __typename?: 'JobExperienceConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<JobExperienceConnection>;
};

export type JobExperienceConnectionCreated_At = {
  __typename?: 'JobExperienceConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<JobExperienceConnection>;
};

export type JobExperienceConnectionUpdated_At = {
  __typename?: 'JobExperienceConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<JobExperienceConnection>;
};

export type JobExperienceConnectionSlug = {
  __typename?: 'JobExperienceConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobExperienceConnection>;
};

export type JobExperienceConnectionPublished_At = {
  __typename?: 'JobExperienceConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<JobExperienceConnection>;
};

export type JobExperienceInput = {
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditJobExperienceInput = {
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateJobExperienceInput = {
  data?: Maybe<JobExperienceInput>;
};

export type CreateJobExperiencePayload = {
  __typename?: 'createJobExperiencePayload';
  jobExperience?: Maybe<JobExperience>;
};

export type UpdateJobExperienceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditJobExperienceInput>;
};

export type UpdateJobExperiencePayload = {
  __typename?: 'updateJobExperiencePayload';
  jobExperience?: Maybe<JobExperience>;
};

export type DeleteJobExperienceInput = {
  where?: Maybe<InputId>;
};

export type DeleteJobExperiencePayload = {
  __typename?: 'deleteJobExperiencePayload';
  jobExperience?: Maybe<JobExperience>;
};

export enum Enum_Profileconnections_Status {
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  Pending = 'PENDING'
}

export type ProfileConnections = {
  __typename?: 'ProfileConnections';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  paid_at?: Maybe<Scalars['DateTime']>;
  candidate_profile_id?: Maybe<CandidateProfiles>;
  recruiter_profile_id?: Maybe<RecruiterProfiles>;
  status?: Maybe<Enum_Profileconnections_Status>;
  is_payment_requested?: Maybe<Scalars['Boolean']>;
  recruiter_user_id?: Maybe<HuntdUsers>;
};

export type ProfileConnectionsConnection = {
  __typename?: 'ProfileConnectionsConnection';
  values?: Maybe<Array<Maybe<ProfileConnections>>>;
  groupBy?: Maybe<ProfileConnectionsGroupBy>;
  aggregate?: Maybe<ProfileConnectionsAggregator>;
};

export type ProfileConnectionsAggregator = {
  __typename?: 'ProfileConnectionsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProfileConnectionsGroupBy = {
  __typename?: 'ProfileConnectionsGroupBy';
  id?: Maybe<Array<Maybe<ProfileConnectionsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProfileConnectionsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProfileConnectionsConnectionUpdated_At>>>;
  paid_at?: Maybe<Array<Maybe<ProfileConnectionsConnectionPaid_At>>>;
  candidate_profile_id?: Maybe<Array<Maybe<ProfileConnectionsConnectionCandidate_Profile_Id>>>;
  recruiter_profile_id?: Maybe<Array<Maybe<ProfileConnectionsConnectionRecruiter_Profile_Id>>>;
  status?: Maybe<Array<Maybe<ProfileConnectionsConnectionStatus>>>;
  is_payment_requested?: Maybe<Array<Maybe<ProfileConnectionsConnectionIs_Payment_Requested>>>;
  recruiter_user_id?: Maybe<Array<Maybe<ProfileConnectionsConnectionRecruiter_User_Id>>>;
};

export type ProfileConnectionsConnectionId = {
  __typename?: 'ProfileConnectionsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfileConnectionsConnection>;
};

export type ProfileConnectionsConnectionCreated_At = {
  __typename?: 'ProfileConnectionsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProfileConnectionsConnection>;
};

export type ProfileConnectionsConnectionUpdated_At = {
  __typename?: 'ProfileConnectionsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProfileConnectionsConnection>;
};

export type ProfileConnectionsConnectionPaid_At = {
  __typename?: 'ProfileConnectionsConnectionPaid_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProfileConnectionsConnection>;
};

export type ProfileConnectionsConnectionCandidate_Profile_Id = {
  __typename?: 'ProfileConnectionsConnectionCandidate_profile_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfileConnectionsConnection>;
};

export type ProfileConnectionsConnectionRecruiter_Profile_Id = {
  __typename?: 'ProfileConnectionsConnectionRecruiter_profile_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfileConnectionsConnection>;
};

export type ProfileConnectionsConnectionStatus = {
  __typename?: 'ProfileConnectionsConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProfileConnectionsConnection>;
};

export type ProfileConnectionsConnectionIs_Payment_Requested = {
  __typename?: 'ProfileConnectionsConnectionIs_payment_requested';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ProfileConnectionsConnection>;
};

export type ProfileConnectionsConnectionRecruiter_User_Id = {
  __typename?: 'ProfileConnectionsConnectionRecruiter_user_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfileConnectionsConnection>;
};

export type ProfileConnectionInput = {
  paid_at?: Maybe<Scalars['DateTime']>;
  candidate_profile_id?: Maybe<Scalars['ID']>;
  recruiter_profile_id?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Profileconnections_Status>;
  is_payment_requested?: Maybe<Scalars['Boolean']>;
  recruiter_user_id?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProfileConnectionInput = {
  paid_at?: Maybe<Scalars['DateTime']>;
  candidate_profile_id?: Maybe<Scalars['ID']>;
  recruiter_profile_id?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Profileconnections_Status>;
  is_payment_requested?: Maybe<Scalars['Boolean']>;
  recruiter_user_id?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateProfileConnectionInput = {
  data?: Maybe<ProfileConnectionInput>;
};

export type CreateProfileConnectionPayload = {
  __typename?: 'createProfileConnectionPayload';
  profileConnection?: Maybe<ProfileConnections>;
};

export type UpdateProfileConnectionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProfileConnectionInput>;
};

export type UpdateProfileConnectionPayload = {
  __typename?: 'updateProfileConnectionPayload';
  profileConnection?: Maybe<ProfileConnections>;
};

export type DeleteProfileConnectionInput = {
  where?: Maybe<InputId>;
};

export type DeleteProfileConnectionPayload = {
  __typename?: 'deleteProfileConnectionPayload';
  profileConnection?: Maybe<ProfileConnections>;
};

export enum Enum_Recruiterprofiles_Status {
  Draft = 'DRAFT',
  OnReview = 'ON_REVIEW',
  Rejected = 'REJECTED',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type RecruiterProfiles = {
  __typename?: 'RecruiterProfiles';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  status: Enum_Recruiterprofiles_Status;
  position?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<HuntdUsers>;
  reject_reason?: Maybe<Scalars['String']>;
  profile_connections?: Maybe<Array<Maybe<ProfileConnections>>>;
};


export type RecruiterProfilesProfile_ConnectionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RecruiterProfilesConnection = {
  __typename?: 'RecruiterProfilesConnection';
  values?: Maybe<Array<Maybe<RecruiterProfiles>>>;
  groupBy?: Maybe<RecruiterProfilesGroupBy>;
  aggregate?: Maybe<RecruiterProfilesAggregator>;
};

export type RecruiterProfilesAggregator = {
  __typename?: 'RecruiterProfilesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type RecruiterProfilesGroupBy = {
  __typename?: 'RecruiterProfilesGroupBy';
  id?: Maybe<Array<Maybe<RecruiterProfilesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<RecruiterProfilesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<RecruiterProfilesConnectionUpdated_At>>>;
  status?: Maybe<Array<Maybe<RecruiterProfilesConnectionStatus>>>;
  position?: Maybe<Array<Maybe<RecruiterProfilesConnectionPosition>>>;
  company_name?: Maybe<Array<Maybe<RecruiterProfilesConnectionCompany_Name>>>;
  user_id?: Maybe<Array<Maybe<RecruiterProfilesConnectionUser_Id>>>;
  reject_reason?: Maybe<Array<Maybe<RecruiterProfilesConnectionReject_Reason>>>;
};

export type RecruiterProfilesConnectionId = {
  __typename?: 'RecruiterProfilesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RecruiterProfilesConnection>;
};

export type RecruiterProfilesConnectionCreated_At = {
  __typename?: 'RecruiterProfilesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RecruiterProfilesConnection>;
};

export type RecruiterProfilesConnectionUpdated_At = {
  __typename?: 'RecruiterProfilesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RecruiterProfilesConnection>;
};

export type RecruiterProfilesConnectionStatus = {
  __typename?: 'RecruiterProfilesConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RecruiterProfilesConnection>;
};

export type RecruiterProfilesConnectionPosition = {
  __typename?: 'RecruiterProfilesConnectionPosition';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RecruiterProfilesConnection>;
};

export type RecruiterProfilesConnectionCompany_Name = {
  __typename?: 'RecruiterProfilesConnectionCompany_name';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RecruiterProfilesConnection>;
};

export type RecruiterProfilesConnectionUser_Id = {
  __typename?: 'RecruiterProfilesConnectionUser_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RecruiterProfilesConnection>;
};

export type RecruiterProfilesConnectionReject_Reason = {
  __typename?: 'RecruiterProfilesConnectionReject_reason';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RecruiterProfilesConnection>;
};

export type RecruiterProfileInput = {
  status?: Maybe<Enum_Recruiterprofiles_Status>;
  position?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  reject_reason?: Maybe<Scalars['String']>;
  profile_connections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRecruiterProfileInput = {
  status?: Maybe<Enum_Recruiterprofiles_Status>;
  position?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  reject_reason?: Maybe<Scalars['String']>;
  profile_connections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRecruiterProfileInput = {
  data?: Maybe<RecruiterProfileInput>;
};

export type CreateRecruiterProfilePayload = {
  __typename?: 'createRecruiterProfilePayload';
  recruiterProfile?: Maybe<RecruiterProfiles>;
};

export type UpdateRecruiterProfileInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRecruiterProfileInput>;
};

export type UpdateRecruiterProfilePayload = {
  __typename?: 'updateRecruiterProfilePayload';
  recruiterProfile?: Maybe<RecruiterProfiles>;
};

export type DeleteRecruiterProfileInput = {
  where?: Maybe<InputId>;
};

export type DeleteRecruiterProfilePayload = {
  __typename?: 'deleteRecruiterProfilePayload';
  recruiterProfile?: Maybe<RecruiterProfiles>;
};

export type ServiceAccessTokens = {
  __typename?: 'ServiceAccessTokens';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  token: Scalars['String'];
  user_id?: Maybe<HuntdUsers>;
};

export type ServiceAccessTokensConnection = {
  __typename?: 'ServiceAccessTokensConnection';
  values?: Maybe<Array<Maybe<ServiceAccessTokens>>>;
  groupBy?: Maybe<ServiceAccessTokensGroupBy>;
  aggregate?: Maybe<ServiceAccessTokensAggregator>;
};

export type ServiceAccessTokensAggregator = {
  __typename?: 'ServiceAccessTokensAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ServiceAccessTokensGroupBy = {
  __typename?: 'ServiceAccessTokensGroupBy';
  id?: Maybe<Array<Maybe<ServiceAccessTokensConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ServiceAccessTokensConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ServiceAccessTokensConnectionUpdated_At>>>;
  token?: Maybe<Array<Maybe<ServiceAccessTokensConnectionToken>>>;
  user_id?: Maybe<Array<Maybe<ServiceAccessTokensConnectionUser_Id>>>;
};

export type ServiceAccessTokensConnectionId = {
  __typename?: 'ServiceAccessTokensConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServiceAccessTokensConnection>;
};

export type ServiceAccessTokensConnectionCreated_At = {
  __typename?: 'ServiceAccessTokensConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServiceAccessTokensConnection>;
};

export type ServiceAccessTokensConnectionUpdated_At = {
  __typename?: 'ServiceAccessTokensConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServiceAccessTokensConnection>;
};

export type ServiceAccessTokensConnectionToken = {
  __typename?: 'ServiceAccessTokensConnectionToken';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServiceAccessTokensConnection>;
};

export type ServiceAccessTokensConnectionUser_Id = {
  __typename?: 'ServiceAccessTokensConnectionUser_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServiceAccessTokensConnection>;
};

export type ServiceAccessTokenInput = {
  token: Scalars['String'];
  user_id?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditServiceAccessTokenInput = {
  token?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateServiceAccessTokenInput = {
  data?: Maybe<ServiceAccessTokenInput>;
};

export type CreateServiceAccessTokenPayload = {
  __typename?: 'createServiceAccessTokenPayload';
  serviceAccessToken?: Maybe<ServiceAccessTokens>;
};

export type UpdateServiceAccessTokenInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditServiceAccessTokenInput>;
};

export type UpdateServiceAccessTokenPayload = {
  __typename?: 'updateServiceAccessTokenPayload';
  serviceAccessToken?: Maybe<ServiceAccessTokens>;
};

export type DeleteServiceAccessTokenInput = {
  where?: Maybe<InputId>;
};

export type DeleteServiceAccessTokenPayload = {
  __typename?: 'deleteServiceAccessTokenPayload';
  serviceAccessToken?: Maybe<ServiceAccessTokens>;
};

export type Settings = {
  __typename?: 'Settings';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  api_graphql_endpoint: Scalars['String'];
  api_graphql_token: Scalars['String'];
};

export type SettingInput = {
  api_graphql_endpoint: Scalars['String'];
  api_graphql_token: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSettingInput = {
  api_graphql_endpoint?: Maybe<Scalars['String']>;
  api_graphql_token?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateSettingInput = {
  data?: Maybe<EditSettingInput>;
};

export type UpdateSettingPayload = {
  __typename?: 'updateSettingPayload';
  setting?: Maybe<Settings>;
};

export type DeleteSettingPayload = {
  __typename?: 'deleteSettingPayload';
  setting?: Maybe<Settings>;
};

export type Specializations = {
  __typename?: 'Specializations';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
};

export type SpecializationsConnection = {
  __typename?: 'SpecializationsConnection';
  values?: Maybe<Array<Maybe<Specializations>>>;
  groupBy?: Maybe<SpecializationsGroupBy>;
  aggregate?: Maybe<SpecializationsAggregator>;
};

export type SpecializationsAggregator = {
  __typename?: 'SpecializationsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SpecializationsGroupBy = {
  __typename?: 'SpecializationsGroupBy';
  id?: Maybe<Array<Maybe<SpecializationsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<SpecializationsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<SpecializationsConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<SpecializationsConnectionName>>>;
};

export type SpecializationsConnectionId = {
  __typename?: 'SpecializationsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SpecializationsConnection>;
};

export type SpecializationsConnectionCreated_At = {
  __typename?: 'SpecializationsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SpecializationsConnection>;
};

export type SpecializationsConnectionUpdated_At = {
  __typename?: 'SpecializationsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SpecializationsConnection>;
};

export type SpecializationsConnectionName = {
  __typename?: 'SpecializationsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SpecializationsConnection>;
};

export type SpecializationInput = {
  name?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSpecializationInput = {
  name?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateSpecializationInput = {
  data?: Maybe<SpecializationInput>;
};

export type CreateSpecializationPayload = {
  __typename?: 'createSpecializationPayload';
  specialization?: Maybe<Specializations>;
};

export type UpdateSpecializationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSpecializationInput>;
};

export type UpdateSpecializationPayload = {
  __typename?: 'updateSpecializationPayload';
  specialization?: Maybe<Specializations>;
};

export type DeleteSpecializationInput = {
  where?: Maybe<InputId>;
};

export type DeleteSpecializationPayload = {
  __typename?: 'deleteSpecializationPayload';
  specialization?: Maybe<Specializations>;
};

export type Technologies = {
  __typename?: 'Technologies';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TechnologiesConnection = {
  __typename?: 'TechnologiesConnection';
  values?: Maybe<Array<Maybe<Technologies>>>;
  groupBy?: Maybe<TechnologiesGroupBy>;
  aggregate?: Maybe<TechnologiesAggregator>;
};

export type TechnologiesAggregator = {
  __typename?: 'TechnologiesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TechnologiesGroupBy = {
  __typename?: 'TechnologiesGroupBy';
  id?: Maybe<Array<Maybe<TechnologiesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TechnologiesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TechnologiesConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<TechnologiesConnectionName>>>;
  published_at?: Maybe<Array<Maybe<TechnologiesConnectionPublished_At>>>;
};

export type TechnologiesConnectionId = {
  __typename?: 'TechnologiesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TechnologiesConnection>;
};

export type TechnologiesConnectionCreated_At = {
  __typename?: 'TechnologiesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TechnologiesConnection>;
};

export type TechnologiesConnectionUpdated_At = {
  __typename?: 'TechnologiesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TechnologiesConnection>;
};

export type TechnologiesConnectionName = {
  __typename?: 'TechnologiesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TechnologiesConnection>;
};

export type TechnologiesConnectionPublished_At = {
  __typename?: 'TechnologiesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TechnologiesConnection>;
};

export type TechnologyInput = {
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTechnologyInput = {
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateTechnologyInput = {
  data?: Maybe<TechnologyInput>;
};

export type CreateTechnologyPayload = {
  __typename?: 'createTechnologyPayload';
  technology?: Maybe<Technologies>;
};

export type UpdateTechnologyInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTechnologyInput>;
};

export type UpdateTechnologyPayload = {
  __typename?: 'updateTechnologyPayload';
  technology?: Maybe<Technologies>;
};

export type DeleteTechnologyInput = {
  where?: Maybe<InputId>;
};

export type DeleteTechnologyPayload = {
  __typename?: 'deleteTechnologyPayload';
  technology?: Maybe<Technologies>;
};

export type Translates = {
  __typename?: 'Translates';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  code: Scalars['String'];
  namespace: Scalars['String'];
  language: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type TranslatesConnection = {
  __typename?: 'TranslatesConnection';
  values?: Maybe<Array<Maybe<Translates>>>;
  groupBy?: Maybe<TranslatesGroupBy>;
  aggregate?: Maybe<TranslatesAggregator>;
};

export type TranslatesAggregator = {
  __typename?: 'TranslatesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TranslatesGroupBy = {
  __typename?: 'TranslatesGroupBy';
  id?: Maybe<Array<Maybe<TranslatesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TranslatesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TranslatesConnectionUpdated_At>>>;
  code?: Maybe<Array<Maybe<TranslatesConnectionCode>>>;
  namespace?: Maybe<Array<Maybe<TranslatesConnectionNamespace>>>;
  language?: Maybe<Array<Maybe<TranslatesConnectionLanguage>>>;
  value?: Maybe<Array<Maybe<TranslatesConnectionValue>>>;
};

export type TranslatesConnectionId = {
  __typename?: 'TranslatesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TranslatesConnection>;
};

export type TranslatesConnectionCreated_At = {
  __typename?: 'TranslatesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TranslatesConnection>;
};

export type TranslatesConnectionUpdated_At = {
  __typename?: 'TranslatesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TranslatesConnection>;
};

export type TranslatesConnectionCode = {
  __typename?: 'TranslatesConnectionCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TranslatesConnection>;
};

export type TranslatesConnectionNamespace = {
  __typename?: 'TranslatesConnectionNamespace';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TranslatesConnection>;
};

export type TranslatesConnectionLanguage = {
  __typename?: 'TranslatesConnectionLanguage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TranslatesConnection>;
};

export type TranslatesConnectionValue = {
  __typename?: 'TranslatesConnectionValue';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TranslatesConnection>;
};

export type TranslateInput = {
  code: Scalars['String'];
  namespace: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTranslateInput = {
  code?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateTranslateInput = {
  data?: Maybe<TranslateInput>;
};

export type CreateTranslatePayload = {
  __typename?: 'createTranslatePayload';
  translate?: Maybe<Translates>;
};

export type UpdateTranslateInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTranslateInput>;
};

export type UpdateTranslatePayload = {
  __typename?: 'updateTranslatePayload';
  translate?: Maybe<Translates>;
};

export type DeleteTranslateInput = {
  where?: Maybe<InputId>;
};

export type DeleteTranslatePayload = {
  __typename?: 'deleteTranslatePayload';
  translate?: Maybe<Translates>;
};

export type VacanciesSources = {
  __typename?: 'VacanciesSources';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  user_id?: Maybe<HuntdUsers>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type VacanciesSourcesConnection = {
  __typename?: 'VacanciesSourcesConnection';
  values?: Maybe<Array<Maybe<VacanciesSources>>>;
  groupBy?: Maybe<VacanciesSourcesGroupBy>;
  aggregate?: Maybe<VacanciesSourcesAggregator>;
};

export type VacanciesSourcesAggregator = {
  __typename?: 'VacanciesSourcesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VacanciesSourcesGroupBy = {
  __typename?: 'VacanciesSourcesGroupBy';
  id?: Maybe<Array<Maybe<VacanciesSourcesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<VacanciesSourcesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<VacanciesSourcesConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<VacanciesSourcesConnectionUrl>>>;
  user_id?: Maybe<Array<Maybe<VacanciesSourcesConnectionUser_Id>>>;
  published_at?: Maybe<Array<Maybe<VacanciesSourcesConnectionPublished_At>>>;
};

export type VacanciesSourcesConnectionId = {
  __typename?: 'VacanciesSourcesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacanciesSourcesConnection>;
};

export type VacanciesSourcesConnectionCreated_At = {
  __typename?: 'VacanciesSourcesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacanciesSourcesConnection>;
};

export type VacanciesSourcesConnectionUpdated_At = {
  __typename?: 'VacanciesSourcesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacanciesSourcesConnection>;
};

export type VacanciesSourcesConnectionUrl = {
  __typename?: 'VacanciesSourcesConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VacanciesSourcesConnection>;
};

export type VacanciesSourcesConnectionUser_Id = {
  __typename?: 'VacanciesSourcesConnectionUser_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacanciesSourcesConnection>;
};

export type VacanciesSourcesConnectionPublished_At = {
  __typename?: 'VacanciesSourcesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacanciesSourcesConnection>;
};

export type VacanciesSourceInput = {
  url: Scalars['String'];
  user_id?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditVacanciesSourceInput = {
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateVacanciesSourceInput = {
  data?: Maybe<VacanciesSourceInput>;
};

export type CreateVacanciesSourcePayload = {
  __typename?: 'createVacanciesSourcePayload';
  vacanciesSource?: Maybe<VacanciesSources>;
};

export type UpdateVacanciesSourceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditVacanciesSourceInput>;
};

export type UpdateVacanciesSourcePayload = {
  __typename?: 'updateVacanciesSourcePayload';
  vacanciesSource?: Maybe<VacanciesSources>;
};

export type DeleteVacanciesSourceInput = {
  where?: Maybe<InputId>;
};

export type DeleteVacanciesSourcePayload = {
  __typename?: 'deleteVacanciesSourcePayload';
  vacanciesSource?: Maybe<VacanciesSources>;
};

export enum Enum_Vacancies_Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum Enum_Vacancies_Job_Type {
  FullTime = 'FULL_TIME',
  PartTime = 'PART_TIME'
}

export enum Enum_Vacancies_Job_Category {
  UsOnly = 'US_ONLY',
  EuropeOnly = 'EUROPE_ONLY',
  Worldwide = 'WORLDWIDE'
}

export type Vacancies = {
  __typename?: 'Vacancies';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  job_title: Scalars['String'];
  company_name: Scalars['String'];
  english_level_id?: Maybe<EnglishLevel>;
  job_experience_id?: Maybe<JobExperience>;
  status: Enum_Vacancies_Status;
  job_type: Enum_Vacancies_Job_Type;
  job_category: Enum_Vacancies_Job_Category;
  job_description?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFile>;
  salary_from?: Maybe<Scalars['Float']>;
  salary_to?: Maybe<Scalars['Float']>;
  is_top?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  vacancy_technologies?: Maybe<Array<Maybe<VacancyTechnologies>>>;
  vacancy_specializations?: Maybe<Array<Maybe<VacancySpecializations>>>;
};


export type VacanciesVacancy_TechnologiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type VacanciesVacancy_SpecializationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type VacanciesConnection = {
  __typename?: 'VacanciesConnection';
  values?: Maybe<Array<Maybe<Vacancies>>>;
  groupBy?: Maybe<VacanciesGroupBy>;
  aggregate?: Maybe<VacanciesAggregator>;
};

export type VacanciesAggregator = {
  __typename?: 'VacanciesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<VacanciesAggregatorSum>;
  avg?: Maybe<VacanciesAggregatorAvg>;
  min?: Maybe<VacanciesAggregatorMin>;
  max?: Maybe<VacanciesAggregatorMax>;
};

export type VacanciesAggregatorSum = {
  __typename?: 'VacanciesAggregatorSum';
  salary_from?: Maybe<Scalars['Float']>;
  salary_to?: Maybe<Scalars['Float']>;
};

export type VacanciesAggregatorAvg = {
  __typename?: 'VacanciesAggregatorAvg';
  salary_from?: Maybe<Scalars['Float']>;
  salary_to?: Maybe<Scalars['Float']>;
};

export type VacanciesAggregatorMin = {
  __typename?: 'VacanciesAggregatorMin';
  salary_from?: Maybe<Scalars['Float']>;
  salary_to?: Maybe<Scalars['Float']>;
};

export type VacanciesAggregatorMax = {
  __typename?: 'VacanciesAggregatorMax';
  salary_from?: Maybe<Scalars['Float']>;
  salary_to?: Maybe<Scalars['Float']>;
};

export type VacanciesGroupBy = {
  __typename?: 'VacanciesGroupBy';
  id?: Maybe<Array<Maybe<VacanciesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<VacanciesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<VacanciesConnectionUpdated_At>>>;
  job_title?: Maybe<Array<Maybe<VacanciesConnectionJob_Title>>>;
  company_name?: Maybe<Array<Maybe<VacanciesConnectionCompany_Name>>>;
  english_level_id?: Maybe<Array<Maybe<VacanciesConnectionEnglish_Level_Id>>>;
  job_experience_id?: Maybe<Array<Maybe<VacanciesConnectionJob_Experience_Id>>>;
  status?: Maybe<Array<Maybe<VacanciesConnectionStatus>>>;
  job_type?: Maybe<Array<Maybe<VacanciesConnectionJob_Type>>>;
  job_category?: Maybe<Array<Maybe<VacanciesConnectionJob_Category>>>;
  job_description?: Maybe<Array<Maybe<VacanciesConnectionJob_Description>>>;
  logo?: Maybe<Array<Maybe<VacanciesConnectionLogo>>>;
  salary_from?: Maybe<Array<Maybe<VacanciesConnectionSalary_From>>>;
  salary_to?: Maybe<Array<Maybe<VacanciesConnectionSalary_To>>>;
  is_top?: Maybe<Array<Maybe<VacanciesConnectionIs_Top>>>;
  published_at?: Maybe<Array<Maybe<VacanciesConnectionPublished_At>>>;
};

export type VacanciesConnectionId = {
  __typename?: 'VacanciesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionCreated_At = {
  __typename?: 'VacanciesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionUpdated_At = {
  __typename?: 'VacanciesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionJob_Title = {
  __typename?: 'VacanciesConnectionJob_title';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionCompany_Name = {
  __typename?: 'VacanciesConnectionCompany_name';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionEnglish_Level_Id = {
  __typename?: 'VacanciesConnectionEnglish_level_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionJob_Experience_Id = {
  __typename?: 'VacanciesConnectionJob_experience_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionStatus = {
  __typename?: 'VacanciesConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionJob_Type = {
  __typename?: 'VacanciesConnectionJob_type';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionJob_Category = {
  __typename?: 'VacanciesConnectionJob_category';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionJob_Description = {
  __typename?: 'VacanciesConnectionJob_description';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionLogo = {
  __typename?: 'VacanciesConnectionLogo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionSalary_From = {
  __typename?: 'VacanciesConnectionSalary_from';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionSalary_To = {
  __typename?: 'VacanciesConnectionSalary_to';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionIs_Top = {
  __typename?: 'VacanciesConnectionIs_top';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacanciesConnectionPublished_At = {
  __typename?: 'VacanciesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacanciesConnection>;
};

export type VacancyInput = {
  job_title: Scalars['String'];
  company_name: Scalars['String'];
  vacancy_technologies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  vacancy_specializations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  english_level_id?: Maybe<Scalars['ID']>;
  job_experience_id?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Vacancies_Status>;
  job_type: Enum_Vacancies_Job_Type;
  job_category: Enum_Vacancies_Job_Category;
  job_description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  salary_from?: Maybe<Scalars['Float']>;
  salary_to?: Maybe<Scalars['Float']>;
  is_top?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditVacancyInput = {
  job_title?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  vacancy_technologies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  vacancy_specializations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  english_level_id?: Maybe<Scalars['ID']>;
  job_experience_id?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Vacancies_Status>;
  job_type?: Maybe<Enum_Vacancies_Job_Type>;
  job_category?: Maybe<Enum_Vacancies_Job_Category>;
  job_description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  salary_from?: Maybe<Scalars['Float']>;
  salary_to?: Maybe<Scalars['Float']>;
  is_top?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateVacancyInput = {
  data?: Maybe<VacancyInput>;
};

export type CreateVacancyPayload = {
  __typename?: 'createVacancyPayload';
  vacancy?: Maybe<Vacancies>;
};

export type UpdateVacancyInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditVacancyInput>;
};

export type UpdateVacancyPayload = {
  __typename?: 'updateVacancyPayload';
  vacancy?: Maybe<Vacancies>;
};

export type DeleteVacancyInput = {
  where?: Maybe<InputId>;
};

export type DeleteVacancyPayload = {
  __typename?: 'deleteVacancyPayload';
  vacancy?: Maybe<Vacancies>;
};

export type VacancySpecializations = {
  __typename?: 'VacancySpecializations';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  specialization_id?: Maybe<Specializations>;
  vacancy_id?: Maybe<Vacancies>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type VacancySpecializationsConnection = {
  __typename?: 'VacancySpecializationsConnection';
  values?: Maybe<Array<Maybe<VacancySpecializations>>>;
  groupBy?: Maybe<VacancySpecializationsGroupBy>;
  aggregate?: Maybe<VacancySpecializationsAggregator>;
};

export type VacancySpecializationsAggregator = {
  __typename?: 'VacancySpecializationsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VacancySpecializationsGroupBy = {
  __typename?: 'VacancySpecializationsGroupBy';
  id?: Maybe<Array<Maybe<VacancySpecializationsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<VacancySpecializationsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<VacancySpecializationsConnectionUpdated_At>>>;
  specialization_id?: Maybe<Array<Maybe<VacancySpecializationsConnectionSpecialization_Id>>>;
  vacancy_id?: Maybe<Array<Maybe<VacancySpecializationsConnectionVacancy_Id>>>;
  published_at?: Maybe<Array<Maybe<VacancySpecializationsConnectionPublished_At>>>;
};

export type VacancySpecializationsConnectionId = {
  __typename?: 'VacancySpecializationsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacancySpecializationsConnection>;
};

export type VacancySpecializationsConnectionCreated_At = {
  __typename?: 'VacancySpecializationsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacancySpecializationsConnection>;
};

export type VacancySpecializationsConnectionUpdated_At = {
  __typename?: 'VacancySpecializationsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacancySpecializationsConnection>;
};

export type VacancySpecializationsConnectionSpecialization_Id = {
  __typename?: 'VacancySpecializationsConnectionSpecialization_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacancySpecializationsConnection>;
};

export type VacancySpecializationsConnectionVacancy_Id = {
  __typename?: 'VacancySpecializationsConnectionVacancy_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacancySpecializationsConnection>;
};

export type VacancySpecializationsConnectionPublished_At = {
  __typename?: 'VacancySpecializationsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacancySpecializationsConnection>;
};

export type VacancySpecializationInput = {
  specialization_id?: Maybe<Scalars['ID']>;
  vacancy_id?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditVacancySpecializationInput = {
  specialization_id?: Maybe<Scalars['ID']>;
  vacancy_id?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateVacancySpecializationInput = {
  data?: Maybe<VacancySpecializationInput>;
};

export type CreateVacancySpecializationPayload = {
  __typename?: 'createVacancySpecializationPayload';
  vacancySpecialization?: Maybe<VacancySpecializations>;
};

export type UpdateVacancySpecializationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditVacancySpecializationInput>;
};

export type UpdateVacancySpecializationPayload = {
  __typename?: 'updateVacancySpecializationPayload';
  vacancySpecialization?: Maybe<VacancySpecializations>;
};

export type DeleteVacancySpecializationInput = {
  where?: Maybe<InputId>;
};

export type DeleteVacancySpecializationPayload = {
  __typename?: 'deleteVacancySpecializationPayload';
  vacancySpecialization?: Maybe<VacancySpecializations>;
};

export type VacancyTechnologies = {
  __typename?: 'VacancyTechnologies';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  technology_id?: Maybe<Technologies>;
  vacancy_id?: Maybe<Vacancies>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type VacancyTechnologiesConnection = {
  __typename?: 'VacancyTechnologiesConnection';
  values?: Maybe<Array<Maybe<VacancyTechnologies>>>;
  groupBy?: Maybe<VacancyTechnologiesGroupBy>;
  aggregate?: Maybe<VacancyTechnologiesAggregator>;
};

export type VacancyTechnologiesAggregator = {
  __typename?: 'VacancyTechnologiesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VacancyTechnologiesGroupBy = {
  __typename?: 'VacancyTechnologiesGroupBy';
  id?: Maybe<Array<Maybe<VacancyTechnologiesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<VacancyTechnologiesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<VacancyTechnologiesConnectionUpdated_At>>>;
  technology_id?: Maybe<Array<Maybe<VacancyTechnologiesConnectionTechnology_Id>>>;
  vacancy_id?: Maybe<Array<Maybe<VacancyTechnologiesConnectionVacancy_Id>>>;
  published_at?: Maybe<Array<Maybe<VacancyTechnologiesConnectionPublished_At>>>;
};

export type VacancyTechnologiesConnectionId = {
  __typename?: 'VacancyTechnologiesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacancyTechnologiesConnection>;
};

export type VacancyTechnologiesConnectionCreated_At = {
  __typename?: 'VacancyTechnologiesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacancyTechnologiesConnection>;
};

export type VacancyTechnologiesConnectionUpdated_At = {
  __typename?: 'VacancyTechnologiesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacancyTechnologiesConnection>;
};

export type VacancyTechnologiesConnectionTechnology_Id = {
  __typename?: 'VacancyTechnologiesConnectionTechnology_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacancyTechnologiesConnection>;
};

export type VacancyTechnologiesConnectionVacancy_Id = {
  __typename?: 'VacancyTechnologiesConnectionVacancy_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VacancyTechnologiesConnection>;
};

export type VacancyTechnologiesConnectionPublished_At = {
  __typename?: 'VacancyTechnologiesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VacancyTechnologiesConnection>;
};

export type VacancyTechnologyInput = {
  technology_id?: Maybe<Scalars['ID']>;
  vacancy_id?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditVacancyTechnologyInput = {
  technology_id?: Maybe<Scalars['ID']>;
  vacancy_id?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateVacancyTechnologyInput = {
  data?: Maybe<VacancyTechnologyInput>;
};

export type CreateVacancyTechnologyPayload = {
  __typename?: 'createVacancyTechnologyPayload';
  vacancyTechnology?: Maybe<VacancyTechnologies>;
};

export type UpdateVacancyTechnologyInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditVacancyTechnologyInput>;
};

export type UpdateVacancyTechnologyPayload = {
  __typename?: 'updateVacancyTechnologyPayload';
  vacancyTechnology?: Maybe<VacancyTechnologies>;
};

export type DeleteVacancyTechnologyInput = {
  where?: Maybe<InputId>;
};

export type DeleteVacancyTechnologyPayload = {
  __typename?: 'deleteVacancyTechnologyPayload';
  vacancyTechnology?: Maybe<VacancyTechnologies>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  confirmationToken?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  confirmationToken?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | CandidateProfiles | CandidateProfilesConnection | CandidateProfilesAggregator | CandidateProfilesAggregatorSum | CandidateProfilesAggregatorAvg | CandidateProfilesAggregatorMin | CandidateProfilesAggregatorMax | CandidateProfilesGroupBy | CandidateProfilesConnectionId | CandidateProfilesConnectionCreated_At | CandidateProfilesConnectionUpdated_At | CandidateProfilesConnectionStatus | CandidateProfilesConnectionPosition | CandidateProfilesConnectionSalary | CandidateProfilesConnectionCandidate_Description | CandidateProfilesConnectionExperience_Description | CandidateProfilesConnectionReject_Reason | CandidateProfilesConnectionUser_Id | CandidateProfilesConnectionAchievements | CreateCandidateProfilePayload | UpdateCandidateProfilePayload | DeleteCandidateProfilePayload | DeviceTokens | DeviceTokensConnection | DeviceTokensAggregator | DeviceTokensGroupBy | DeviceTokensConnectionId | DeviceTokensConnectionCreated_At | DeviceTokensConnectionUpdated_At | DeviceTokensConnectionToken | DeviceTokensConnectionDevice_Name | DeviceTokensConnectionDevice_Platform | DeviceTokensConnectionSystem_Version | DeviceTokensConnectionDevice_Year | DeviceTokensConnectionUser_Id | DeviceTokensConnectionPublished_At | CreateDeviceTokenPayload | UpdateDeviceTokenPayload | DeleteDeviceTokenPayload | EnglishLevel | EnglishLevelConnection | EnglishLevelAggregator | EnglishLevelGroupBy | EnglishLevelConnectionId | EnglishLevelConnectionCreated_At | EnglishLevelConnectionUpdated_At | EnglishLevelConnectionSlug | EnglishLevelConnectionPublished_At | CreateEnglishLevelPayload | UpdateEnglishLevelPayload | DeleteEnglishLevelPayload | Features | FeaturesConnection | FeaturesAggregator | FeaturesGroupBy | FeaturesConnectionId | FeaturesConnectionCreated_At | FeaturesConnectionUpdated_At | FeaturesConnectionName | FeaturesConnectionDescription | FeaturesConnectionStatus | CreateFeaturePayload | UpdateFeaturePayload | DeleteFeaturePayload | HuntdUsers | HuntdUsersConnection | HuntdUsersAggregator | HuntdUsersGroupBy | HuntdUsersConnectionId | HuntdUsersConnectionCreated_At | HuntdUsersConnectionUpdated_At | HuntdUsersConnectionEmail | HuntdUsersConnectionFirst_Name | HuntdUsersConnectionLast_Name | HuntdUsersConnectionCv | CreateHuntdUserPayload | UpdateHuntdUserPayload | DeleteHuntdUserPayload | JobExperience | JobExperienceConnection | JobExperienceAggregator | JobExperienceGroupBy | JobExperienceConnectionId | JobExperienceConnectionCreated_At | JobExperienceConnectionUpdated_At | JobExperienceConnectionSlug | JobExperienceConnectionPublished_At | CreateJobExperiencePayload | UpdateJobExperiencePayload | DeleteJobExperiencePayload | ProfileConnections | ProfileConnectionsConnection | ProfileConnectionsAggregator | ProfileConnectionsGroupBy | ProfileConnectionsConnectionId | ProfileConnectionsConnectionCreated_At | ProfileConnectionsConnectionUpdated_At | ProfileConnectionsConnectionPaid_At | ProfileConnectionsConnectionCandidate_Profile_Id | ProfileConnectionsConnectionRecruiter_Profile_Id | ProfileConnectionsConnectionStatus | ProfileConnectionsConnectionIs_Payment_Requested | ProfileConnectionsConnectionRecruiter_User_Id | CreateProfileConnectionPayload | UpdateProfileConnectionPayload | DeleteProfileConnectionPayload | RecruiterProfiles | RecruiterProfilesConnection | RecruiterProfilesAggregator | RecruiterProfilesGroupBy | RecruiterProfilesConnectionId | RecruiterProfilesConnectionCreated_At | RecruiterProfilesConnectionUpdated_At | RecruiterProfilesConnectionStatus | RecruiterProfilesConnectionPosition | RecruiterProfilesConnectionCompany_Name | RecruiterProfilesConnectionUser_Id | RecruiterProfilesConnectionReject_Reason | CreateRecruiterProfilePayload | UpdateRecruiterProfilePayload | DeleteRecruiterProfilePayload | ServiceAccessTokens | ServiceAccessTokensConnection | ServiceAccessTokensAggregator | ServiceAccessTokensGroupBy | ServiceAccessTokensConnectionId | ServiceAccessTokensConnectionCreated_At | ServiceAccessTokensConnectionUpdated_At | ServiceAccessTokensConnectionToken | ServiceAccessTokensConnectionUser_Id | CreateServiceAccessTokenPayload | UpdateServiceAccessTokenPayload | DeleteServiceAccessTokenPayload | Settings | UpdateSettingPayload | DeleteSettingPayload | Specializations | SpecializationsConnection | SpecializationsAggregator | SpecializationsGroupBy | SpecializationsConnectionId | SpecializationsConnectionCreated_At | SpecializationsConnectionUpdated_At | SpecializationsConnectionName | CreateSpecializationPayload | UpdateSpecializationPayload | DeleteSpecializationPayload | Technologies | TechnologiesConnection | TechnologiesAggregator | TechnologiesGroupBy | TechnologiesConnectionId | TechnologiesConnectionCreated_At | TechnologiesConnectionUpdated_At | TechnologiesConnectionName | TechnologiesConnectionPublished_At | CreateTechnologyPayload | UpdateTechnologyPayload | DeleteTechnologyPayload | Translates | TranslatesConnection | TranslatesAggregator | TranslatesGroupBy | TranslatesConnectionId | TranslatesConnectionCreated_At | TranslatesConnectionUpdated_At | TranslatesConnectionCode | TranslatesConnectionNamespace | TranslatesConnectionLanguage | TranslatesConnectionValue | CreateTranslatePayload | UpdateTranslatePayload | DeleteTranslatePayload | VacanciesSources | VacanciesSourcesConnection | VacanciesSourcesAggregator | VacanciesSourcesGroupBy | VacanciesSourcesConnectionId | VacanciesSourcesConnectionCreated_At | VacanciesSourcesConnectionUpdated_At | VacanciesSourcesConnectionUrl | VacanciesSourcesConnectionUser_Id | VacanciesSourcesConnectionPublished_At | CreateVacanciesSourcePayload | UpdateVacanciesSourcePayload | DeleteVacanciesSourcePayload | Vacancies | VacanciesConnection | VacanciesAggregator | VacanciesAggregatorSum | VacanciesAggregatorAvg | VacanciesAggregatorMin | VacanciesAggregatorMax | VacanciesGroupBy | VacanciesConnectionId | VacanciesConnectionCreated_At | VacanciesConnectionUpdated_At | VacanciesConnectionJob_Title | VacanciesConnectionCompany_Name | VacanciesConnectionEnglish_Level_Id | VacanciesConnectionJob_Experience_Id | VacanciesConnectionStatus | VacanciesConnectionJob_Type | VacanciesConnectionJob_Category | VacanciesConnectionJob_Description | VacanciesConnectionLogo | VacanciesConnectionSalary_From | VacanciesConnectionSalary_To | VacanciesConnectionIs_Top | VacanciesConnectionPublished_At | CreateVacancyPayload | UpdateVacancyPayload | DeleteVacancyPayload | VacancySpecializations | VacancySpecializationsConnection | VacancySpecializationsAggregator | VacancySpecializationsGroupBy | VacancySpecializationsConnectionId | VacancySpecializationsConnectionCreated_At | VacancySpecializationsConnectionUpdated_At | VacancySpecializationsConnectionSpecialization_Id | VacancySpecializationsConnectionVacancy_Id | VacancySpecializationsConnectionPublished_At | CreateVacancySpecializationPayload | UpdateVacancySpecializationPayload | DeleteVacancySpecializationPayload | VacancyTechnologies | VacancyTechnologiesConnection | VacancyTechnologiesAggregator | VacancyTechnologiesGroupBy | VacancyTechnologiesConnectionId | VacancyTechnologiesConnectionCreated_At | VacancyTechnologiesConnectionUpdated_At | VacancyTechnologiesConnectionTechnology_Id | VacancyTechnologiesConnectionVacancy_Id | VacancyTechnologiesConnectionPublished_At | CreateVacancyTechnologyPayload | UpdateVacancyTechnologyPayload | DeleteVacancyTechnologyPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  candidateProfile?: Maybe<CandidateProfiles>;
  candidateProfiles?: Maybe<Array<Maybe<CandidateProfiles>>>;
  candidateProfilesConnection?: Maybe<CandidateProfilesConnection>;
  deviceToken?: Maybe<DeviceTokens>;
  deviceTokens?: Maybe<Array<Maybe<DeviceTokens>>>;
  deviceTokensConnection?: Maybe<DeviceTokensConnection>;
  englishLevel?: Maybe<EnglishLevel>;
  englishLevels?: Maybe<Array<Maybe<EnglishLevel>>>;
  englishLevelsConnection?: Maybe<EnglishLevelConnection>;
  feature?: Maybe<Features>;
  features?: Maybe<Array<Maybe<Features>>>;
  featuresConnection?: Maybe<FeaturesConnection>;
  huntdUser?: Maybe<HuntdUsers>;
  huntdUsers?: Maybe<Array<Maybe<HuntdUsers>>>;
  huntdUsersConnection?: Maybe<HuntdUsersConnection>;
  jobExperience?: Maybe<JobExperience>;
  jobExperiences?: Maybe<Array<Maybe<JobExperience>>>;
  jobExperiencesConnection?: Maybe<JobExperienceConnection>;
  profileConnection?: Maybe<ProfileConnections>;
  profileConnections?: Maybe<Array<Maybe<ProfileConnections>>>;
  profileConnectionsConnection?: Maybe<ProfileConnectionsConnection>;
  recruiterProfile?: Maybe<RecruiterProfiles>;
  recruiterProfiles?: Maybe<Array<Maybe<RecruiterProfiles>>>;
  recruiterProfilesConnection?: Maybe<RecruiterProfilesConnection>;
  serviceAccessToken?: Maybe<ServiceAccessTokens>;
  serviceAccessTokens?: Maybe<Array<Maybe<ServiceAccessTokens>>>;
  serviceAccessTokensConnection?: Maybe<ServiceAccessTokensConnection>;
  setting?: Maybe<Settings>;
  specialization?: Maybe<Specializations>;
  specializations?: Maybe<Array<Maybe<Specializations>>>;
  specializationsConnection?: Maybe<SpecializationsConnection>;
  technology?: Maybe<Technologies>;
  technologies?: Maybe<Array<Maybe<Technologies>>>;
  technologiesConnection?: Maybe<TechnologiesConnection>;
  translate?: Maybe<Translates>;
  translates?: Maybe<Array<Maybe<Translates>>>;
  translatesConnection?: Maybe<TranslatesConnection>;
  vacanciesSource?: Maybe<VacanciesSources>;
  vacanciesSources?: Maybe<Array<Maybe<VacanciesSources>>>;
  vacanciesSourcesConnection?: Maybe<VacanciesSourcesConnection>;
  vacancy?: Maybe<Vacancies>;
  vacancies?: Maybe<Array<Maybe<Vacancies>>>;
  vacanciesConnection?: Maybe<VacanciesConnection>;
  vacancySpecialization?: Maybe<VacancySpecializations>;
  vacancySpecializations?: Maybe<Array<Maybe<VacancySpecializations>>>;
  vacancySpecializationsConnection?: Maybe<VacancySpecializationsConnection>;
  vacancyTechnology?: Maybe<VacancyTechnologies>;
  vacancyTechnologies?: Maybe<Array<Maybe<VacancyTechnologies>>>;
  vacancyTechnologiesConnection?: Maybe<VacancyTechnologiesConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryCandidateProfileArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCandidateProfilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCandidateProfilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryDeviceTokenArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryDeviceTokensArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryDeviceTokensConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryEnglishLevelArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryEnglishLevelsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryEnglishLevelsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFeatureArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryFeaturesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFeaturesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryHuntdUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryHuntdUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryHuntdUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryJobExperienceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryJobExperiencesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryJobExperiencesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProfileConnectionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProfileConnectionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryProfileConnectionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRecruiterProfileArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRecruiterProfilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRecruiterProfilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryServiceAccessTokenArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryServiceAccessTokensArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryServiceAccessTokensConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySettingArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QuerySpecializationArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySpecializationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySpecializationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTechnologyArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTechnologiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTechnologiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTranslateArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTranslatesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTranslatesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryVacanciesSourceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryVacanciesSourcesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryVacanciesSourcesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryVacancyArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryVacanciesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryVacanciesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryVacancySpecializationArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryVacancySpecializationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryVacancySpecializationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryVacancyTechnologyArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryVacancyTechnologiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryVacancyTechnologiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCandidateProfile?: Maybe<CreateCandidateProfilePayload>;
  updateCandidateProfile?: Maybe<UpdateCandidateProfilePayload>;
  deleteCandidateProfile?: Maybe<DeleteCandidateProfilePayload>;
  createDeviceToken?: Maybe<CreateDeviceTokenPayload>;
  updateDeviceToken?: Maybe<UpdateDeviceTokenPayload>;
  deleteDeviceToken?: Maybe<DeleteDeviceTokenPayload>;
  createEnglishLevel?: Maybe<CreateEnglishLevelPayload>;
  updateEnglishLevel?: Maybe<UpdateEnglishLevelPayload>;
  deleteEnglishLevel?: Maybe<DeleteEnglishLevelPayload>;
  createFeature?: Maybe<CreateFeaturePayload>;
  updateFeature?: Maybe<UpdateFeaturePayload>;
  deleteFeature?: Maybe<DeleteFeaturePayload>;
  createHuntdUser?: Maybe<CreateHuntdUserPayload>;
  updateHuntdUser?: Maybe<UpdateHuntdUserPayload>;
  deleteHuntdUser?: Maybe<DeleteHuntdUserPayload>;
  createJobExperience?: Maybe<CreateJobExperiencePayload>;
  updateJobExperience?: Maybe<UpdateJobExperiencePayload>;
  deleteJobExperience?: Maybe<DeleteJobExperiencePayload>;
  createProfileConnection?: Maybe<CreateProfileConnectionPayload>;
  updateProfileConnection?: Maybe<UpdateProfileConnectionPayload>;
  deleteProfileConnection?: Maybe<DeleteProfileConnectionPayload>;
  createRecruiterProfile?: Maybe<CreateRecruiterProfilePayload>;
  updateRecruiterProfile?: Maybe<UpdateRecruiterProfilePayload>;
  deleteRecruiterProfile?: Maybe<DeleteRecruiterProfilePayload>;
  createServiceAccessToken?: Maybe<CreateServiceAccessTokenPayload>;
  updateServiceAccessToken?: Maybe<UpdateServiceAccessTokenPayload>;
  deleteServiceAccessToken?: Maybe<DeleteServiceAccessTokenPayload>;
  updateSetting?: Maybe<UpdateSettingPayload>;
  deleteSetting?: Maybe<DeleteSettingPayload>;
  createSpecialization?: Maybe<CreateSpecializationPayload>;
  updateSpecialization?: Maybe<UpdateSpecializationPayload>;
  deleteSpecialization?: Maybe<DeleteSpecializationPayload>;
  createTechnology?: Maybe<CreateTechnologyPayload>;
  updateTechnology?: Maybe<UpdateTechnologyPayload>;
  deleteTechnology?: Maybe<DeleteTechnologyPayload>;
  createTranslate?: Maybe<CreateTranslatePayload>;
  updateTranslate?: Maybe<UpdateTranslatePayload>;
  deleteTranslate?: Maybe<DeleteTranslatePayload>;
  createVacanciesSource?: Maybe<CreateVacanciesSourcePayload>;
  updateVacanciesSource?: Maybe<UpdateVacanciesSourcePayload>;
  deleteVacanciesSource?: Maybe<DeleteVacanciesSourcePayload>;
  createVacancy?: Maybe<CreateVacancyPayload>;
  updateVacancy?: Maybe<UpdateVacancyPayload>;
  deleteVacancy?: Maybe<DeleteVacancyPayload>;
  createVacancySpecialization?: Maybe<CreateVacancySpecializationPayload>;
  updateVacancySpecialization?: Maybe<UpdateVacancySpecializationPayload>;
  deleteVacancySpecialization?: Maybe<DeleteVacancySpecializationPayload>;
  createVacancyTechnology?: Maybe<CreateVacancyTechnologyPayload>;
  updateVacancyTechnology?: Maybe<UpdateVacancyTechnologyPayload>;
  deleteVacancyTechnology?: Maybe<DeleteVacancyTechnologyPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateCandidateProfileArgs = {
  input?: Maybe<CreateCandidateProfileInput>;
};


export type MutationUpdateCandidateProfileArgs = {
  input?: Maybe<UpdateCandidateProfileInput>;
};


export type MutationDeleteCandidateProfileArgs = {
  input?: Maybe<DeleteCandidateProfileInput>;
};


export type MutationCreateDeviceTokenArgs = {
  input?: Maybe<CreateDeviceTokenInput>;
};


export type MutationUpdateDeviceTokenArgs = {
  input?: Maybe<UpdateDeviceTokenInput>;
};


export type MutationDeleteDeviceTokenArgs = {
  input?: Maybe<DeleteDeviceTokenInput>;
};


export type MutationCreateEnglishLevelArgs = {
  input?: Maybe<CreateEnglishLevelInput>;
};


export type MutationUpdateEnglishLevelArgs = {
  input?: Maybe<UpdateEnglishLevelInput>;
};


export type MutationDeleteEnglishLevelArgs = {
  input?: Maybe<DeleteEnglishLevelInput>;
};


export type MutationCreateFeatureArgs = {
  input?: Maybe<CreateFeatureInput>;
};


export type MutationUpdateFeatureArgs = {
  input?: Maybe<UpdateFeatureInput>;
};


export type MutationDeleteFeatureArgs = {
  input?: Maybe<DeleteFeatureInput>;
};


export type MutationCreateHuntdUserArgs = {
  input?: Maybe<CreateHuntdUserInput>;
};


export type MutationUpdateHuntdUserArgs = {
  input?: Maybe<UpdateHuntdUserInput>;
};


export type MutationDeleteHuntdUserArgs = {
  input?: Maybe<DeleteHuntdUserInput>;
};


export type MutationCreateJobExperienceArgs = {
  input?: Maybe<CreateJobExperienceInput>;
};


export type MutationUpdateJobExperienceArgs = {
  input?: Maybe<UpdateJobExperienceInput>;
};


export type MutationDeleteJobExperienceArgs = {
  input?: Maybe<DeleteJobExperienceInput>;
};


export type MutationCreateProfileConnectionArgs = {
  input?: Maybe<CreateProfileConnectionInput>;
};


export type MutationUpdateProfileConnectionArgs = {
  input?: Maybe<UpdateProfileConnectionInput>;
};


export type MutationDeleteProfileConnectionArgs = {
  input?: Maybe<DeleteProfileConnectionInput>;
};


export type MutationCreateRecruiterProfileArgs = {
  input?: Maybe<CreateRecruiterProfileInput>;
};


export type MutationUpdateRecruiterProfileArgs = {
  input?: Maybe<UpdateRecruiterProfileInput>;
};


export type MutationDeleteRecruiterProfileArgs = {
  input?: Maybe<DeleteRecruiterProfileInput>;
};


export type MutationCreateServiceAccessTokenArgs = {
  input?: Maybe<CreateServiceAccessTokenInput>;
};


export type MutationUpdateServiceAccessTokenArgs = {
  input?: Maybe<UpdateServiceAccessTokenInput>;
};


export type MutationDeleteServiceAccessTokenArgs = {
  input?: Maybe<DeleteServiceAccessTokenInput>;
};


export type MutationUpdateSettingArgs = {
  input?: Maybe<UpdateSettingInput>;
};


export type MutationCreateSpecializationArgs = {
  input?: Maybe<CreateSpecializationInput>;
};


export type MutationUpdateSpecializationArgs = {
  input?: Maybe<UpdateSpecializationInput>;
};


export type MutationDeleteSpecializationArgs = {
  input?: Maybe<DeleteSpecializationInput>;
};


export type MutationCreateTechnologyArgs = {
  input?: Maybe<CreateTechnologyInput>;
};


export type MutationUpdateTechnologyArgs = {
  input?: Maybe<UpdateTechnologyInput>;
};


export type MutationDeleteTechnologyArgs = {
  input?: Maybe<DeleteTechnologyInput>;
};


export type MutationCreateTranslateArgs = {
  input?: Maybe<CreateTranslateInput>;
};


export type MutationUpdateTranslateArgs = {
  input?: Maybe<UpdateTranslateInput>;
};


export type MutationDeleteTranslateArgs = {
  input?: Maybe<DeleteTranslateInput>;
};


export type MutationCreateVacanciesSourceArgs = {
  input?: Maybe<CreateVacanciesSourceInput>;
};


export type MutationUpdateVacanciesSourceArgs = {
  input?: Maybe<UpdateVacanciesSourceInput>;
};


export type MutationDeleteVacanciesSourceArgs = {
  input?: Maybe<DeleteVacanciesSourceInput>;
};


export type MutationCreateVacancyArgs = {
  input?: Maybe<CreateVacancyInput>;
};


export type MutationUpdateVacancyArgs = {
  input?: Maybe<UpdateVacancyInput>;
};


export type MutationDeleteVacancyArgs = {
  input?: Maybe<DeleteVacancyInput>;
};


export type MutationCreateVacancySpecializationArgs = {
  input?: Maybe<CreateVacancySpecializationInput>;
};


export type MutationUpdateVacancySpecializationArgs = {
  input?: Maybe<UpdateVacancySpecializationInput>;
};


export type MutationDeleteVacancySpecializationArgs = {
  input?: Maybe<DeleteVacancySpecializationInput>;
};


export type MutationCreateVacancyTechnologyArgs = {
  input?: Maybe<CreateVacancyTechnologyInput>;
};


export type MutationUpdateVacancyTechnologyArgs = {
  input?: Maybe<UpdateVacancyTechnologyInput>;
};


export type MutationDeleteVacancyTechnologyArgs = {
  input?: Maybe<DeleteVacancyTechnologyInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export type CandidateProfilesBaseFragment = (
  { __typename?: 'CandidateProfiles' }
  & Pick<CandidateProfiles, 'id' | 'candidate_description' | 'experience_description' | 'position' | 'status' | 'salary'>
  & { user_id?: Maybe<(
    { __typename?: 'HuntdUsers' }
    & HuntdUsersBaseFragment
  )> }
);

export type CandidateProfilesQueryVariables = Exact<{
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}>;


export type CandidateProfilesQuery = (
  { __typename?: 'Query' }
  & { candidateProfiles?: Maybe<Array<Maybe<(
    { __typename?: 'CandidateProfiles' }
    & CandidateProfilesBaseFragment
  )>>> }
);

export type HuntdUsersBaseFragment = (
  { __typename?: 'HuntdUsers' }
  & Pick<HuntdUsers, 'id' | 'email' | 'first_name' | 'last_name'>
);

export type RecruiterProfilesBaseFragment = (
  { __typename?: 'RecruiterProfiles' }
  & Pick<RecruiterProfiles, 'id' | 'company_name' | 'position' | 'status'>
  & { user_id?: Maybe<(
    { __typename?: 'HuntdUsers' }
    & HuntdUsersBaseFragment
  )> }
);

export type RecruiterProfilesQueryVariables = Exact<{
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}>;


export type RecruiterProfilesQuery = (
  { __typename?: 'Query' }
  & { recruiterProfiles?: Maybe<Array<Maybe<(
    { __typename?: 'RecruiterProfiles' }
    & RecruiterProfilesBaseFragment
  )>>> }
);

export type SettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SettingsQuery = (
  { __typename?: 'Query' }
  & { setting?: Maybe<(
    { __typename?: 'Settings' }
    & Pick<Settings, 'id' | 'api_graphql_endpoint' | 'api_graphql_token'>
  )> }
);

export const HuntdUsersBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment HuntdUsersBase on HuntdUsers {
  id
  email
  first_name
  last_name
}
    `;
export const CandidateProfilesBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment CandidateProfilesBase on CandidateProfiles {
  id
  candidate_description
  experience_description
  position
  status
  salary
  user_id {
    ...HuntdUsersBase
  }
}
    ${HuntdUsersBaseFragmentDoc}`;
export const RecruiterProfilesBaseFragmentDoc = /*#__PURE__*/ gql`
    fragment RecruiterProfilesBase on RecruiterProfiles {
  id
  company_name
  position
  status
  user_id {
    ...HuntdUsersBase
  }
}
    ${HuntdUsersBaseFragmentDoc}`;
export const CandidateProfilesDocument = /*#__PURE__*/ gql`
    query candidateProfiles($sort: String, $limit: Int, $start: Int, $where: JSON) {
  candidateProfiles(sort: $sort, limit: $limit, start: $start, where: $where) {
    ...CandidateProfilesBase
  }
}
    ${CandidateProfilesBaseFragmentDoc}`;

/**
 * __useCandidateProfilesQuery__
 *
 * To run a query within a React component, call `useCandidateProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCandidateProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCandidateProfilesQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCandidateProfilesQuery(baseOptions?: Apollo.QueryHookOptions<CandidateProfilesQuery, CandidateProfilesQueryVariables>) {
        return Apollo.useQuery<CandidateProfilesQuery, CandidateProfilesQueryVariables>(CandidateProfilesDocument, baseOptions);
      }
export function useCandidateProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CandidateProfilesQuery, CandidateProfilesQueryVariables>) {
          return Apollo.useLazyQuery<CandidateProfilesQuery, CandidateProfilesQueryVariables>(CandidateProfilesDocument, baseOptions);
        }
export type CandidateProfilesQueryHookResult = ReturnType<typeof useCandidateProfilesQuery>;
export type CandidateProfilesLazyQueryHookResult = ReturnType<typeof useCandidateProfilesLazyQuery>;
export type CandidateProfilesQueryResult = Apollo.QueryResult<CandidateProfilesQuery, CandidateProfilesQueryVariables>;
export const RecruiterProfilesDocument = /*#__PURE__*/ gql`
    query recruiterProfiles($sort: String, $limit: Int, $start: Int, $where: JSON) {
  recruiterProfiles(sort: $sort, limit: $limit, start: $start, where: $where) {
    ...RecruiterProfilesBase
  }
}
    ${RecruiterProfilesBaseFragmentDoc}`;

/**
 * __useRecruiterProfilesQuery__
 *
 * To run a query within a React component, call `useRecruiterProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecruiterProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecruiterProfilesQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRecruiterProfilesQuery(baseOptions?: Apollo.QueryHookOptions<RecruiterProfilesQuery, RecruiterProfilesQueryVariables>) {
        return Apollo.useQuery<RecruiterProfilesQuery, RecruiterProfilesQueryVariables>(RecruiterProfilesDocument, baseOptions);
      }
export function useRecruiterProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecruiterProfilesQuery, RecruiterProfilesQueryVariables>) {
          return Apollo.useLazyQuery<RecruiterProfilesQuery, RecruiterProfilesQueryVariables>(RecruiterProfilesDocument, baseOptions);
        }
export type RecruiterProfilesQueryHookResult = ReturnType<typeof useRecruiterProfilesQuery>;
export type RecruiterProfilesLazyQueryHookResult = ReturnType<typeof useRecruiterProfilesLazyQuery>;
export type RecruiterProfilesQueryResult = Apollo.QueryResult<RecruiterProfilesQuery, RecruiterProfilesQueryVariables>;
export const SettingsDocument = /*#__PURE__*/ gql`
    query settings {
  setting {
    id
    api_graphql_endpoint
    api_graphql_token
  }
}
    `;

/**
 * __useSettingsQuery__
 *
 * To run a query within a React component, call `useSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSettingsQuery(baseOptions?: Apollo.QueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
        return Apollo.useQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, baseOptions);
      }
export function useSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
          return Apollo.useLazyQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, baseOptions);
        }
export type SettingsQueryHookResult = ReturnType<typeof useSettingsQuery>;
export type SettingsLazyQueryHookResult = ReturnType<typeof useSettingsLazyQuery>;
export type SettingsQueryResult = Apollo.QueryResult<SettingsQuery, SettingsQueryVariables>;