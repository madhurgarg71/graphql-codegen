import { Resolvers } from "./../../../../graphql/generated";
import { fetchTodoApi } from "../../../api";

// The root provides a resolver function for each API endpoint
export const TodoResolver: Resolvers = {
  Query: {
    getTodo: (_: any, args: any) => {
      return fetchTodoApi(args.id);
    },
  },
};
