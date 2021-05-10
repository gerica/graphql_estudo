import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const { PORT, HOST, PATH_GRAPHQL } = process.env;

export default {
  endpoint: PATH_GRAPHQL,
  host: HOST,
  port: PORT,
};
