"use strict";

var _graphqlRequest = require("graphql-request");

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GET_USER = (0, _graphqlRequest.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query getUser {\n    getUser {\n      name\n      education {\n        degree\n        year\n      }\n      experience {\n        company\n        designation\n      }\n    }\n  }\n"])));
var GET_TODO = (0, _graphqlRequest.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  query getTodo {\n    getTodo(id: 1) {\n      id\n      title\n      completed\n    }\n  }\n"])));