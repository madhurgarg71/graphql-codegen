import { gql } from "graphql-request";

const GET_USER = gql`
  query getUser {
    getUser {
      name
      education {
        degree
        year
      }
      experience {
        company
        designation
      }
    }
  }
`;

const GET_TODO = gql`
  query getTodo {
    getTodo(id: 1) {
      id
      title
      completed
    }
  }
`;
