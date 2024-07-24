import gql from 'graphql-tag';

export const RECRUITER_PROFILE_BASE_FRAGMENT = gql`
  fragment RecruiterProfileBase on RecruiterProfile {
    id
    status
    rejectReason
    position
    companyName
    slug
    city
    lastActionTime
    statusesNotificationSentAt
  }
`;
