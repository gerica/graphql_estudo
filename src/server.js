import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { importSchema } from 'graphql-import';
import resolvers from './graphql/resolvers/index';

const loggingMiddleware = (req, res, next) => {
  // console.log('ip:', req.ip);
  next();
};

const app = express();
app.use(loggingMiddleware);
app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(importSchema('**/*.gql')),
    rootValue: resolvers,
    graphiql: true,
  }),
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
