import express from 'express';

import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { importSchema } from 'graphql-import';
import config from './config/config';
import logger, { loggerConfig } from './utils/logger';
import resolvers from './graphql/resolvers/index';

const { host, port, endpoint } = config;
logger.info(config, 'Your config:');

const loggingMiddleware = (req, res, next) => {
  logger.debug(`ip: ${req.ip}`);
  logger.debug('Calling res.send');
  next();
};

const app = express();
app.use(loggingMiddleware);
app.use(loggerConfig);

app.use(
  endpoint,
  graphqlHTTP({
    schema: buildSchema(importSchema('**/*.gql')),
    rootValue: resolvers,
    graphiql: true,
  }),
);
app.listen(port);
logger.info(`Running a GraphQL API server at http://${host}:${port}/graphql`);
