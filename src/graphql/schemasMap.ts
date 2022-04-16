import { queries, types } from "./schema/schema";

import { gql } from "graphql-request";

const schema = [
  gql`
        type Query {
            ${queries}
        }

        schema {
            query: Query
        }
    `,
];

export const typeDefs = [...schema, ...types];
