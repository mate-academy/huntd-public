import { gql } from "@apollo/client";

import { RECRUITER_PROFILES_BASE_FRAGMENT } from "@/controllers/recruiterProfiles/recruiterProfiles.fragments/recruiterProfiles.base.fragment";

export const RECRUITER_PROFILES_QUERY = gql`
  query recruiterProfiles(
    $sort: String
    $limit: Int
    $start: Int
    $where: JSON
  ) {
    recruiterProfiles(
      sort: $sort
      limit: $limit
      start: $start
      where: $where
    ) {
      ...RecruiterProfilesBase
    }
  }
  ${RECRUITER_PROFILES_BASE_FRAGMENT}
`;
