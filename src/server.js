import express from 'express';
import dotenv from 'dotenv';

import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { importSchema } from 'graphql-import';

import logger, { loggerConfig } from './utils/logger';
import resolvers from './graphql/resolvers/index';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const { PORT, HOST, PATH_GRAPHQL } = process.env;
logger.info(`Your config: host:${HOST} port:${PORT} path:${PATH_GRAPHQL}`); // 8626

const loggingMiddleware = (req, res, next) => {
  logger.debug(`ip: ${req.ip}`);
  logger.debug('Calling res.send');
  next();
};

const app = express();
app.use(loggingMiddleware);
app.use(loggerConfig);

app.use(
  PATH_GRAPHQL,
  graphqlHTTP({
    schema: buildSchema(importSchema('**/*.gql')),
    rootValue: resolvers,
    graphiql: true,
  }),
);
app.listen(PORT);
logger.info(`Running a GraphQL API server at http://${HOST}:${PORT}/graphql`);
