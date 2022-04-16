
const finalTypes = [
  gql`
  
    type Todo {
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
      education: TEducation
      experience: [TExperience]
    }
  
  `
]

const finalSchema = [
  gql`
    type Query {
        
  getTodo(id: Int!): Todo

  getUser: TUser

    }

    schema {
        query: Query
    }
  `,
];

export const typeDefs = [...finalTypes, ...finalSchema];
