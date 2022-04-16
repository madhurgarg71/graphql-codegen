import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import { resolverMap } from "./resolversMap";
import { typeDefs } from "./schemasMap";

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolverMap,
});

const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  graphiql: true,
});

const app = express();
app.use("/graphql", function (req, res, next) {
  graphqlMiddleware(req, res);
});
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");

export default app;
