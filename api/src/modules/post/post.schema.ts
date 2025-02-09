import gql from "graphql-tag";

export const RecruiterPostSchema = gql`
  type Post {
    title: String
    shortDescription: String
    description: String
    recruiter: RecruiterProfile
  }
`;
