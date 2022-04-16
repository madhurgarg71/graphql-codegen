import { gql } from "graphql-request";

const types = [
  gql`
    type TEducation {
      school: String
      degree: String
      year: String
    }

    type TExperience {
      company: String
      designation: String
    }

    type TUser {
      name: String
      education: TEducation
      experience: [TExperience]
    }

    type Todo {
      userId: Int
      id: Int
      title: String
      completed: Boolean
    }
  `,
];

const queries = gql`
  getTodo(id: Int!): Todo
  getUser: TUser
`;

export { types, queries };
