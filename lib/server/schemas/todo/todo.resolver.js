"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoResolver = void 0;

var _api = require("../../../api");

// The root provides a resolver function for each API endpoint
var TodoResolver = {
  Query: {
    getTodo: function getTodo(_, args) {
      return (0, _api.fetchTodoApi)(args.id);
    }
  }
};
exports.TodoResolver = TodoResolver;