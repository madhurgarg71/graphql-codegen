const { gql } = require("graphql-request");

const types = [
  gql`
    type TTodo {
      userId: Int
      id: Int
      title: String
      completed: Boolean
    }
  `,
];

const queries = gql`
  getTodo(id: Int!): TTodo
`;

module.exports = {
  types,
  queries,
};
