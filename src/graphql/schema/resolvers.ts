import { fetchTodoApi } from "../../api";

// The root provides a resolver function for each API endpoint
export const UserResolver = {
  Query: {
    getUser: () => {
      return {
        name: "Madhur Garg",
        age: 27,
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
    getTodo: (_: any, args: any) => {
      return fetchTodoApi(args.id);
    },
  },
};
