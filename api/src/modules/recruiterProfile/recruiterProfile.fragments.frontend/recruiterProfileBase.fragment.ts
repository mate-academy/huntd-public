import gql from 'graphql-tag';

export const RECRUITER_PROFILE_BASE_FRAGMENT = gql`
  fragment RecruiterProfileBase on RecruiterProfile {
    id
    city
    status
    rejectReason
    position
    companyName
    slug
    lastActionTime
  }
`;
