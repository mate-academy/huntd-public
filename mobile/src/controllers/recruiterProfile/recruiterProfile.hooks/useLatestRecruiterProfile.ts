import { QueryResult } from "@apollo/client";
import {
  LatestCandidateProfileQuery,
  RecruiterProfile,
  useLatestRecruiterProfileQuery,
} from "@/controllers/graphql/generated";

interface UseLatestRecruiterProfile {
  (): [RecruiterProfile | null, QueryResult<LatestCandidateProfileQuery>];
}
export const useLatestRecruiterProfile: UseLatestRecruiterProfile = () => {
  const queryResult = useLatestRecruiterProfileQuery();

  return [queryResult.data?.latestRecruiterProfile ?? null, queryResult];
};
