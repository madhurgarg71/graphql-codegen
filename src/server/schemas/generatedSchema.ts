
const {gql} = require("graphql-request");

const finalTypes = [
  gql`
  
    type TTodo {
      userId: Int
      id: Int
      title: String
      completed: Boolean
    }
  ,
    type TEducation {
      school: String
      degree: String
      year: String
    }

    type TExperience {
      company: String
      designation: String
    }

    type TUser {
      name: String
      age: Int!
      education: TEducation
      experience: [TExperience]
    }
  
  `
]

const finalSchema = [
  gql`
    type Query {
        
  getTodo(id: Int!): TTodo

  getUser: TUser

    }

    schema {
        query: Query
    }
  `,
];

export const typeDefs = [...finalTypes, ...finalSchema];
