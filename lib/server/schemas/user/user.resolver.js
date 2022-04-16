"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserResolver = void 0;
var UserResolver = {
  Query: {
    getUser: function getUser() {
      return {
        name: "Madhur Garg",
        age: "30",
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
    }
  }
};
exports.UserResolver = UserResolver;