"use strict";

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require("graphql-request"),
    gql = _require.gql;

var types = [gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    type TTodo {\n      userId: Int\n      id: Int\n      title: String\n      completed: Boolean\n    }\n  "])))];
var queries = gql(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  getTodo(id: Int!): TTodo\n"])));
module.exports = {
  types: types,
  queries: queries
};