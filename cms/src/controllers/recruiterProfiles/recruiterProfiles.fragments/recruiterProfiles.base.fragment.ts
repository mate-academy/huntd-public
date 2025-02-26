import { gql } from "@apollo/client";
import { HUNTD_USERS_BASE_FRAGMENT } from "@/controllers/huntdUser/huntdUsers.fragments/huntdUsers.base.fragment";

export const RECRUITER_PROFILES_BASE_FRAGMENT = gql`
  fragment RecruiterProfilesBase on RecruiterProfiles {
    id
    company_name
    city
    position
    status
    user_id {
      ...HuntdUsersBase
    }
  }
  ${HUNTD_USERS_BASE_FRAGMENT}
`;
