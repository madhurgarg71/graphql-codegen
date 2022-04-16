const { gql } = require("graphql-request");

const types = [
  gql`
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
`;

module.exports = {
  types,
  queries,
};
