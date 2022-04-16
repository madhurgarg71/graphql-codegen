"use strict";

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require("graphql-request"),
    gql = _require.gql;

var types = [gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    type TEducation {\n      school: String\n      degree: String\n      year: String\n    }\n\n    type TExperience {\n      company: String\n      designation: String\n    }\n\n    type TUser {\n      name: String\n      age: Int!\n      education: TEducation\n      experience: [TExperience]\n    }\n  "])))];
var queries = gql(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  getUser: TUser\n"])));
module.exports = {
  types: types,
  queries: queries
};