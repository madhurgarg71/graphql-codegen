"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolverMap = void 0;

var _todo = require("../server/schemas/todo/todo.resolver");

var _user = require("../server/schemas/user/user.resolver");

var _lodash = require("lodash");

var resolverMap = (0, _lodash.merge)({}, _user.UserResolver, _todo.TodoResolver);
exports.resolverMap = resolverMap;