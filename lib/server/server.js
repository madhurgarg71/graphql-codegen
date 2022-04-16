"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _graphqlTools = require("graphql-tools");

var _resolversMap = require("./resolversMap");

var _schemasMap = require("./schemasMap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _schemasMap.typeDefs,
  resolvers: _resolversMap.resolverMap
});
var graphqlMiddleware = (0, _expressGraphql.graphqlHTTP)({
  schema: schema,
  graphiql: true
});
var app = (0, _express["default"])();
app.use("/graphql", function (req, res, next) {
  graphqlMiddleware(req, res);
});
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
var _default = app;
exports["default"] = _default;