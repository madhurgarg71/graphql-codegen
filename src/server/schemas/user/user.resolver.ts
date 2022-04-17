import { Context } from "../../server";
import { Resolvers } from "./../../../../graphql/generated";
export const UserResolver: Resolvers<Context> = {
  Query: {
    getUser: () => {
      return {
        name: "Madhur Garg",
        age: 20,
        education: {
          school: "JAYPEE UNIVERSITY",
          degree: "B.Tech",
          year: "2016",
        },
        experience: [
          {
            company: "Inmobi",
            designation: "Software Engineer",
          },
          {
            company: "Goibibo",
            designation: "Software Engineer",
          },
        ],
      };
    },
  },
};
