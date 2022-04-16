"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserResolver = void 0;

var _api = require("../../api");

// The root provides a resolver function for each API endpoint
var UserResolver = {
  Query: {
    getUser: function getUser() {
      return {
        name: "Madhur Garg",
        age: 27,
        education: {
          school: "JAYPEE UNIVERSITY",
          degree: "B.Tech",
          year: "2016"
        },
        experience: [{
          company: "Inmobi",
          designation: "Software Engineer"
        }, {
          company: "Goibibo",
          designation: "Software Engineer"
        }]
      };
    },
    getTodo: function getTodo(_, args) {
      return (0, _api.fetchTodoApi)(args.id);
    }
  }
};
exports.UserResolver = UserResolver;