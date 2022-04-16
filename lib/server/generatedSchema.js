"use strict";

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var finalTypes = [gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  \n    type TEducation {\n      school: String\n      degree: String\n      year: String\n    }\n\n    type TExperience {\n      company: String\n      designation: String\n    }\n\n    type TUser {\n      name: String\n      education: TEducation\n      experience: [TExperience]\n    }\n\n    type Todo {\n      userId: Int\n      id: Int\n      title: String\n      completed: Boolean\n    }\n  \n  "])))];
var finalSchema = [gql(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    type Query {\n        \n  getTodo(id: Int!): Todo\n  getUser: TUser\n\n    }\n\n    schema {\n        query: Query\n    }\n  "])))];