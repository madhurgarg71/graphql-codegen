"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolverMap = void 0;

var _resolvers = require("./schema/resolvers");

var _lodash = require("lodash");

var resolverMap = (0, _lodash.merge)(_resolvers.UserResolver);
exports.resolverMap = resolverMap;