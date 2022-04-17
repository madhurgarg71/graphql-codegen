import { Context } from "../../server";
import { Resolvers } from "./../../../../graphql/generated";
import { fetchTodoApi } from "../../../api";

// The root provides a resolver function for each API endpoint
export const TodoResolver: Resolvers<Context> = {
  Query: {
    //the "context" param here is the same provided by the graphql middleware response.
    getTodo: (_, args, context) => {
      return fetchTodoApi(args.id);
    },
  },
};
