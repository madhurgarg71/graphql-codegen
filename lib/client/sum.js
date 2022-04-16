"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertCamelCaseToKebabCase = convertCamelCaseToKebabCase;
exports.sum = sum;

function sum(a, b) {
  return a + b;
}

function convertCamelCaseToKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}