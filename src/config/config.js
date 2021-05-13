import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: `${process.cwd()}/src/config/.env` });
}

const {
  PORT,
  HOST,
  PATH_GRAPHQL,
  API_SERVICE,
  API_SERVICE_LICENSE,
  //
} = process.env;

export default {
  endpoint: PATH_GRAPHQL,
  host: HOST,
  port: PORT,
  service: API_SERVICE,
  serviceLicense: API_SERVICE_LICENSE,
};
