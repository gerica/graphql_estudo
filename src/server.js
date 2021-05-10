import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { importSchema } from 'graphql-import';

import logger, { loggerConfig } from './utils/logger';
import resolvers from './graphql/resolvers/index';

const PORT = process.env.PORT || 4000;

const loggingMiddleware = (req, res, next) => {
  logger.debug(`ip: ${req.ip}`);
  logger.debug('Calling res.send');
  next();
};

const app = express();
app.use(loggingMiddleware);
app.use(loggerConfig);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(importSchema('**/*.gql')),
    rootValue: resolvers,
    graphiql: true,
  }),
);
app.listen(PORT);
logger.info(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
// const user = { firstName: 'Maxim', lastName: 'Orlov' };
// logger.info(user, 'User successfully authenticated');
// const error = new Error('Database crashed!');
// logger.error(error, 'Failed to fetch user');
