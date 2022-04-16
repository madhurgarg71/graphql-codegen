const requireCtx = require("require-context");
const fs = require("fs");
const path = require("path");

function importAll(r) {
  return r.keys().map((file) => {
    return r(file);
  });
}

const schemas = importAll(
  requireCtx("../../src/server/schemas", true, /\.schema.ts$/)
);

const res = {
  types: [],
  queries: "",
};

schemas.reduce((acc, schema) => {
  const { types, queries } = schema;
  acc.types.push(...types);
  acc.queries = acc.queries.concat(queries);
  return acc;
}, res);

const { queries, types } = res;

const code = `
const {gql} = require("graphql-request");

const finalTypes = [
  gql\`
  ${types}
  \`
]

const finalSchema = [
  gql\`
    type Query {
        ${queries}
    }

    schema {
        query: Query
    }
  \`,
];

export const typeDefs = [...finalTypes, ...finalSchema];
`;

//write typeDefs to file
fs.writeFile(
  path.join(__dirname, "../src/server/schemas/generatedSchema.ts"),
  code,
  function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  }
);
