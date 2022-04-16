"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTodoApi = fetchTodoApi;

var fetch = require("node-fetch");

function fetchTodoApi(id) {
  return fetch("https://jsonplaceholder.typicode.com/todos/".concat(id)).then(function (response) {
    return response.json();
  }).then(function (json) {
    return json;
  });
}