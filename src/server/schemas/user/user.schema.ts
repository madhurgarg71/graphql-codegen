const { gql } = require("graphql-request");

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
  `,
];

const queries = gql`
  getUser: TUser
`;

module.exports = {
  types,
  queries,
};
