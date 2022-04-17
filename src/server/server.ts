import express, { Request, Response } from "express";

//make sure to import cookieParser in order to use req.cookies
import cookieParser from "cookie-parser";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import { resolverMap } from "./resolversMap";
import { typeDefs } from "./../server/schemas/generatedSchema";

export interface Context {
  authToken?: string;
  accountId?: string;
  roles?: string[];
  userEmail?: string;
}

//used to add "context" property in the type "Request"
//need to figure out the declare syntax; how it's used (yes, i'm TS dumbass!)
declare module "express-serve-static-core" {
  interface Request {
    context: Context;
  }
}

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolverMap,
});

/**
 * By default "context" is set to the request object provided by the
 * express middleware. However, we can pass anything in the context;
 * in this case I am passing the "context" as defined in the interface above.
 */

const graphqlMiddleware = graphqlHTTP(
  (req: Request, res: Response, _: unknown) => {
    return {
      schema: schema,
      graphiql: true,
      context: req.context,
    };
  }
);

const app = express();
app.use(cookieParser());
app.use(function (req, _, next) {
  const cookies = req.cookies || {};
  req.context = {
    authToken: cookies["iam_id_token"],
  };
  next();
});

app.use("/graphql", graphqlMiddleware);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");

export default app;
