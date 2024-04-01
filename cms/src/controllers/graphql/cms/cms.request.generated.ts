import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
};

export type Query = {
  __typename?: 'Query';
  candidateProfile?: Maybe<CandidateProfiles>;
  candidateProfiles?: Maybe<Array<Maybe<CandidateProfiles>>>;
  candidateProfilesConnection?: Maybe<CandidateProfilesConnection>;
  huntdUser?: Maybe<HuntdUsers>;
  huntdUsers?: Maybe<Array<Maybe<HuntdUsers>>>;
  huntdUsersConnection?: Maybe<HuntdUsersConnection>;
  recruiterProfile?: Maybe<RecruiterProfiles>;
  recruiterProfiles?: Maybe<Array<Maybe<RecruiterProfiles>>>;
  recruiterProfilesConnection?: Maybe<RecruiterProfilesConnection>;
  serviceAccessToken?: Maybe<ServiceAccessTokens>;
  serviceAccessTokens?: Maybe<Array<Maybe<ServiceAccessTokens>>>;
  serviceAccessTokensConnection?: Maybe<ServiceAccessTokensConnection>;
  setting?: Maybe<Settings>;
  translate?: Maybe<Translates>;
  translates?: Maybe<Array<Maybe<Translates>>>;
  translatesConnection?: Maybe<TranslatesConnection>;
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
};


export type QueryCandidateProfilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCandidateProfilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryHuntdUserArgs = {
  id: Scalars['ID'];
};


export type QueryHuntdUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryHuntdUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRecruiterProfileArgs = {
  id: Scalars['ID'];
};


export type QueryRecruiterProfilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRecruiterProfilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryServiceAccessTokenArgs = {
  id: Scalars['ID'];
};


export type QueryServiceAccessTokensArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryServiceAccessTokensConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTranslateArgs = {
  id: Scalars['ID'];
};


export type QueryTranslatesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTranslatesConnectionArgs = {
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
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

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
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};


export enum Enum_Candidateprofiles_Status {
  Draft = 'DRAFT',
  OnReview = 'ON_REVIEW',
  Rejected = 'REJECTED',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type HuntdUsers = {
  __typename?: 'HuntdUsers';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  recruiter_profiles?: Maybe<Array<Maybe<RecruiterProfiles>>>;
  candidate_profiles?: Maybe<Array<Maybe<CandidateProfiles>>>;
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

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
};


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
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export enum Enum_Recruiterprofiles_Status {
  Draft = 'DRAFT',
  OnReview = 'ON_REVIEW',
  Rejected = 'REJECTED',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type CandidateProfilesConnection = {
  __typename?: 'CandidateProfilesConnection';
  values?: Maybe<Array<Maybe<CandidateProfiles>>>;
  groupBy?: Maybe<CandidateProfilesGroupBy>;
  aggregate?: Maybe<CandidateProfilesAggregator>;
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
  created_by?: Maybe<Array<Maybe<CandidateProfilesConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<CandidateProfilesConnectionUpdated_By>>>;
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

export type CandidateProfilesConnectionCreated_By = {
  __typename?: 'CandidateProfilesConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CandidateProfilesConnection>;
};

export type CandidateProfilesConnectionUpdated_By = {
  __typename?: 'CandidateProfilesConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CandidateProfilesConnection>;
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

export type HuntdUsersConnection = {
  __typename?: 'HuntdUsersConnection';
  values?: Maybe<Array<Maybe<HuntdUsers>>>;
  groupBy?: Maybe<HuntdUsersGroupBy>;
  aggregate?: Maybe<HuntdUsersAggregator>;
};

export type HuntdUsersGroupBy = {
  __typename?: 'HuntdUsersGroupBy';
  id?: Maybe<Array<Maybe<HuntdUsersConnectionId>>>;
  created_at?: Maybe<Array<Maybe<HuntdUsersConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<HuntdUsersConnectionUpdated_At>>>;
  email?: Maybe<Array<Maybe<HuntdUsersConnectionEmail>>>;
  first_name?: Maybe<Array<Maybe<HuntdUsersConnectionFirst_Name>>>;
  last_name?: Maybe<Array<Maybe<HuntdUsersConnectionLast_Name>>>;
  created_by?: Maybe<Array<Maybe<HuntdUsersConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<HuntdUsersConnectionUpdated_By>>>;
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

export type HuntdUsersConnectionCreated_By = {
  __typename?: 'HuntdUsersConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HuntdUsersConnection>;
};

export type HuntdUsersConnectionUpdated_By = {
  __typename?: 'HuntdUsersConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HuntdUsersConnection>;
};

export type HuntdUsersAggregator = {
  __typename?: 'HuntdUsersAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type RecruiterProfilesConnection = {
  __typename?: 'RecruiterProfilesConnection';
  values?: Maybe<Array<Maybe<RecruiterProfiles>>>;
  groupBy?: Maybe<RecruiterProfilesGroupBy>;
  aggregate?: Maybe<RecruiterProfilesAggregator>;
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
  created_by?: Maybe<Array<Maybe<RecruiterProfilesConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<RecruiterProfilesConnectionUpdated_By>>>;
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

export type RecruiterProfilesConnectionCreated_By = {
  __typename?: 'RecruiterProfilesConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RecruiterProfilesConnection>;
};

export type RecruiterProfilesConnectionUpdated_By = {
  __typename?: 'RecruiterProfilesConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RecruiterProfilesConnection>;
};

export type RecruiterProfilesAggregator = {
  __typename?: 'RecruiterProfilesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ServiceAccessTokens = {
  __typename?: 'ServiceAccessTokens';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  token: Scalars['String'];
  user_id?: Maybe<HuntdUsers>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type ServiceAccessTokensConnection = {
  __typename?: 'ServiceAccessTokensConnection';
  values?: Maybe<Array<Maybe<ServiceAccessTokens>>>;
  groupBy?: Maybe<ServiceAccessTokensGroupBy>;
  aggregate?: Maybe<ServiceAccessTokensAggregator>;
};

export type ServiceAccessTokensGroupBy = {
  __typename?: 'ServiceAccessTokensGroupBy';
  id?: Maybe<Array<Maybe<ServiceAccessTokensConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ServiceAccessTokensConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ServiceAccessTokensConnectionUpdated_At>>>;
  token?: Maybe<Array<Maybe<ServiceAccessTokensConnectionToken>>>;
  user_id?: Maybe<Array<Maybe<ServiceAccessTokensConnectionUser_Id>>>;
  created_by?: Maybe<Array<Maybe<ServiceAccessTokensConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ServiceAccessTokensConnectionUpdated_By>>>;
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

export type ServiceAccessTokensConnectionCreated_By = {
  __typename?: 'ServiceAccessTokensConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServiceAccessTokensConnection>;
};

export type ServiceAccessTokensConnectionUpdated_By = {
  __typename?: 'ServiceAccessTokensConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServiceAccessTokensConnection>;
};

export type ServiceAccessTokensAggregator = {
  __typename?: 'ServiceAccessTokensAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Settings = {
  __typename?: 'Settings';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  api_graphql_endpoint: Scalars['String'];
  api_graphql_token: Scalars['String'];
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
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
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type TranslatesConnection = {
  __typename?: 'TranslatesConnection';
  values?: Maybe<Array<Maybe<Translates>>>;
  groupBy?: Maybe<TranslatesGroupBy>;
  aggregate?: Maybe<TranslatesAggregator>;
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
  created_by?: Maybe<Array<Maybe<TranslatesConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<TranslatesConnectionUpdated_By>>>;
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

export type TranslatesConnectionCreated_By = {
  __typename?: 'TranslatesConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TranslatesConnection>;
};

export type TranslatesConnectionUpdated_By = {
  __typename?: 'TranslatesConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TranslatesConnection>;
};

export type TranslatesAggregator = {
  __typename?: 'TranslatesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | CandidateProfiles | CandidateProfilesConnection | CandidateProfilesAggregator | CandidateProfilesAggregatorSum | CandidateProfilesAggregatorAvg | CandidateProfilesAggregatorMin | CandidateProfilesAggregatorMax | CandidateProfilesGroupBy | CandidateProfilesConnectionId | CandidateProfilesConnectionCreated_At | CandidateProfilesConnectionUpdated_At | CandidateProfilesConnectionStatus | CandidateProfilesConnectionPosition | CandidateProfilesConnectionSalary | CandidateProfilesConnectionCandidate_Description | CandidateProfilesConnectionExperience_Description | CandidateProfilesConnectionReject_Reason | CandidateProfilesConnectionUser_Id | CandidateProfilesConnectionCreated_By | CandidateProfilesConnectionUpdated_By | CreateCandidateProfilePayload | UpdateCandidateProfilePayload | DeleteCandidateProfilePayload | HuntdUsers | HuntdUsersConnection | HuntdUsersAggregator | HuntdUsersGroupBy | HuntdUsersConnectionId | HuntdUsersConnectionCreated_At | HuntdUsersConnectionUpdated_At | HuntdUsersConnectionEmail | HuntdUsersConnectionFirst_Name | HuntdUsersConnectionLast_Name | HuntdUsersConnectionCreated_By | HuntdUsersConnectionUpdated_By | CreateHuntdUserPayload | UpdateHuntdUserPayload | DeleteHuntdUserPayload | RecruiterProfiles | RecruiterProfilesConnection | RecruiterProfilesAggregator | RecruiterProfilesGroupBy | RecruiterProfilesConnectionId | RecruiterProfilesConnectionCreated_At | RecruiterProfilesConnectionUpdated_At | RecruiterProfilesConnectionStatus | RecruiterProfilesConnectionPosition | RecruiterProfilesConnectionCompany_Name | RecruiterProfilesConnectionUser_Id | RecruiterProfilesConnectionReject_Reason | RecruiterProfilesConnectionCreated_By | RecruiterProfilesConnectionUpdated_By | CreateRecruiterProfilePayload | UpdateRecruiterProfilePayload | DeleteRecruiterProfilePayload | ServiceAccessTokens | ServiceAccessTokensConnection | ServiceAccessTokensAggregator | ServiceAccessTokensGroupBy | ServiceAccessTokensConnectionId | ServiceAccessTokensConnectionCreated_At | ServiceAccessTokensConnectionUpdated_At | ServiceAccessTokensConnectionToken | ServiceAccessTokensConnectionUser_Id | ServiceAccessTokensConnectionCreated_By | ServiceAccessTokensConnectionUpdated_By | CreateServiceAccessTokenPayload | UpdateServiceAccessTokenPayload | DeleteServiceAccessTokenPayload | Settings | UpdateSettingPayload | DeleteSettingPayload | Translates | TranslatesConnection | TranslatesAggregator | TranslatesGroupBy | TranslatesConnectionId | TranslatesConnectionCreated_At | TranslatesConnectionUpdated_At | TranslatesConnectionCode | TranslatesConnectionNamespace | TranslatesConnectionLanguage | TranslatesConnectionValue | TranslatesConnectionCreated_By | TranslatesConnectionUpdated_By | CreateTranslatePayload | UpdateTranslatePayload | DeleteTranslatePayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionCreated_By | UploadFileConnectionUpdated_By | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnectionCreated_By | UsersPermissionsRoleConnectionUpdated_By | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionCreated_By | UsersPermissionsUserConnectionUpdated_By | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

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

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type CreateCandidateProfilePayload = {
  __typename?: 'createCandidateProfilePayload';
  candidateProfile?: Maybe<CandidateProfiles>;
};

export type UpdateCandidateProfilePayload = {
  __typename?: 'updateCandidateProfilePayload';
  candidateProfile?: Maybe<CandidateProfiles>;
};

export type DeleteCandidateProfilePayload = {
  __typename?: 'deleteCandidateProfilePayload';
  candidateProfile?: Maybe<CandidateProfiles>;
};

export type CreateHuntdUserPayload = {
  __typename?: 'createHuntdUserPayload';
  huntdUser?: Maybe<HuntdUsers>;
};

export type UpdateHuntdUserPayload = {
  __typename?: 'updateHuntdUserPayload';
  huntdUser?: Maybe<HuntdUsers>;
};

export type DeleteHuntdUserPayload = {
  __typename?: 'deleteHuntdUserPayload';
  huntdUser?: Maybe<HuntdUsers>;
};

export type CreateRecruiterProfilePayload = {
  __typename?: 'createRecruiterProfilePayload';
  recruiterProfile?: Maybe<RecruiterProfiles>;
};

export type UpdateRecruiterProfilePayload = {
  __typename?: 'updateRecruiterProfilePayload';
  recruiterProfile?: Maybe<RecruiterProfiles>;
};

export type DeleteRecruiterProfilePayload = {
  __typename?: 'deleteRecruiterProfilePayload';
  recruiterProfile?: Maybe<RecruiterProfiles>;
};

export type CreateServiceAccessTokenPayload = {
  __typename?: 'createServiceAccessTokenPayload';
  serviceAccessToken?: Maybe<ServiceAccessTokens>;
};

export type UpdateServiceAccessTokenPayload = {
  __typename?: 'updateServiceAccessTokenPayload';
  serviceAccessToken?: Maybe<ServiceAccessTokens>;
};

export type DeleteServiceAccessTokenPayload = {
  __typename?: 'deleteServiceAccessTokenPayload';
  serviceAccessToken?: Maybe<ServiceAccessTokens>;
};

export type UpdateSettingPayload = {
  __typename?: 'updateSettingPayload';
  setting?: Maybe<Settings>;
};

export type DeleteSettingPayload = {
  __typename?: 'deleteSettingPayload';
  setting?: Maybe<Settings>;
};

export type CreateTranslatePayload = {
  __typename?: 'createTranslatePayload';
  translate?: Maybe<Translates>;
};

export type UpdateTranslatePayload = {
  __typename?: 'updateTranslatePayload';
  translate?: Maybe<Translates>;
};

export type DeleteTranslatePayload = {
  __typename?: 'deleteTranslatePayload';
  translate?: Maybe<Translates>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
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
  created_by?: Maybe<Array<Maybe<UploadFileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UploadFileConnectionUpdated_By>>>;
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

export type UploadFileConnectionCreated_By = {
  __typename?: 'UploadFileConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_By = {
  __typename?: 'UploadFileConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
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

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
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
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdated_By>>>;
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

export type UsersPermissionsRoleConnectionCreated_By = {
  __typename?: 'UsersPermissionsRoleConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionUpdated_By = {
  __typename?: 'UsersPermissionsRoleConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
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
  created_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_By>>>;
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

export type UsersPermissionsUserConnectionCreated_By = {
  __typename?: 'UsersPermissionsUserConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_By = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCandidateProfile?: Maybe<CreateCandidateProfilePayload>;
  updateCandidateProfile?: Maybe<UpdateCandidateProfilePayload>;
  deleteCandidateProfile?: Maybe<DeleteCandidateProfilePayload>;
  createHuntdUser?: Maybe<CreateHuntdUserPayload>;
  updateHuntdUser?: Maybe<UpdateHuntdUserPayload>;
  deleteHuntdUser?: Maybe<DeleteHuntdUserPayload>;
  createRecruiterProfile?: Maybe<CreateRecruiterProfilePayload>;
  updateRecruiterProfile?: Maybe<UpdateRecruiterProfilePayload>;
  deleteRecruiterProfile?: Maybe<DeleteRecruiterProfilePayload>;
  createServiceAccessToken?: Maybe<CreateServiceAccessTokenPayload>;
  updateServiceAccessToken?: Maybe<UpdateServiceAccessTokenPayload>;
  deleteServiceAccessToken?: Maybe<DeleteServiceAccessTokenPayload>;
  updateSetting?: Maybe<UpdateSettingPayload>;
  deleteSetting?: Maybe<DeleteSettingPayload>;
  createTranslate?: Maybe<CreateTranslatePayload>;
  updateTranslate?: Maybe<UpdateTranslatePayload>;
  deleteTranslate?: Maybe<DeleteTranslatePayload>;
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


export type MutationCreateHuntdUserArgs = {
  input?: Maybe<CreateHuntdUserInput>;
};


export type MutationUpdateHuntdUserArgs = {
  input?: Maybe<UpdateHuntdUserInput>;
};


export type MutationDeleteHuntdUserArgs = {
  input?: Maybe<DeleteHuntdUserInput>;
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


export type MutationCreateTranslateArgs = {
  input?: Maybe<CreateTranslateInput>;
};


export type MutationUpdateTranslateArgs = {
  input?: Maybe<UpdateTranslateInput>;
};


export type MutationDeleteTranslateArgs = {
  input?: Maybe<DeleteTranslateInput>;
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

export type CreateCandidateProfileInput = {
  data?: Maybe<CandidateProfileInput>;
};

export type CandidateProfileInput = {
  status?: Maybe<Enum_Candidateprofiles_Status>;
  position?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Float']>;
  candidate_description?: Maybe<Scalars['String']>;
  experience_description?: Maybe<Scalars['String']>;
  reject_reason?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateCandidateProfileInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCandidateProfileInput>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type EditCandidateProfileInput = {
  status?: Maybe<Enum_Candidateprofiles_Status>;
  position?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['Float']>;
  candidate_description?: Maybe<Scalars['String']>;
  experience_description?: Maybe<Scalars['String']>;
  reject_reason?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteCandidateProfileInput = {
  where?: Maybe<InputId>;
};

export type CreateHuntdUserInput = {
  data?: Maybe<HuntdUserInput>;
};

export type HuntdUserInput = {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  recruiter_profiles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  candidate_profiles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateHuntdUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditHuntdUserInput>;
};

export type EditHuntdUserInput = {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  recruiter_profiles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  candidate_profiles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteHuntdUserInput = {
  where?: Maybe<InputId>;
};

export type CreateRecruiterProfileInput = {
  data?: Maybe<RecruiterProfileInput>;
};

export type RecruiterProfileInput = {
  status?: Maybe<Enum_Recruiterprofiles_Status>;
  position?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  reject_reason?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRecruiterProfileInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRecruiterProfileInput>;
};

export type EditRecruiterProfileInput = {
  status?: Maybe<Enum_Recruiterprofiles_Status>;
  position?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  reject_reason?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteRecruiterProfileInput = {
  where?: Maybe<InputId>;
};

export type CreateServiceAccessTokenInput = {
  data?: Maybe<ServiceAccessTokenInput>;
};

export type ServiceAccessTokenInput = {
  token: Scalars['String'];
  user_id?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateServiceAccessTokenInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditServiceAccessTokenInput>;
};

export type EditServiceAccessTokenInput = {
  token?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteServiceAccessTokenInput = {
  where?: Maybe<InputId>;
};

export type UpdateSettingInput = {
  data?: Maybe<EditSettingInput>;
};

export type EditSettingInput = {
  api_graphql_endpoint?: Maybe<Scalars['String']>;
  api_graphql_token?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateTranslateInput = {
  data?: Maybe<TranslateInput>;
};

export type TranslateInput = {
  code: Scalars['String'];
  namespace: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateTranslateInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTranslateInput>;
};

export type EditTranslateInput = {
  code?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteTranslateInput = {
  where?: Maybe<InputId>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
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

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
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

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
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
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
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
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};


export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SettingInput = {
  api_graphql_endpoint: Scalars['String'];
  api_graphql_token: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
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




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

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
export const RecruiterProfilesDocument = /*#__PURE__*/ gql`
    query recruiterProfiles($sort: String, $limit: Int, $start: Int, $where: JSON) {
  recruiterProfiles(sort: $sort, limit: $limit, start: $start, where: $where) {
    ...RecruiterProfilesBase
  }
}
    ${RecruiterProfilesBaseFragmentDoc}`;
export const SettingsDocument = /*#__PURE__*/ gql`
    query settings {
  setting {
    id
    api_graphql_endpoint
    api_graphql_token
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    candidateProfiles(variables?: CandidateProfilesQueryVariables): Promise<CandidateProfilesQuery> {
      return withWrapper(() => client.request<CandidateProfilesQuery>(print(CandidateProfilesDocument), variables));
    },
    recruiterProfiles(variables?: RecruiterProfilesQueryVariables): Promise<RecruiterProfilesQuery> {
      return withWrapper(() => client.request<RecruiterProfilesQuery>(print(RecruiterProfilesDocument), variables));
    },
    settings(variables?: SettingsQueryVariables): Promise<SettingsQuery> {
      return withWrapper(() => client.request<SettingsQuery>(print(SettingsDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;