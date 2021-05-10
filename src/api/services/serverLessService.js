import { GraphQLClient, gql } from 'graphql-request';
import config from '../../config/config';
import logger from '../../utils/logger';

export const showMessage = () => 'Olá para todos';
export const showMessage2 = () => 'Olá mensagem todo novo';
export const showNome = ({ nome }) => {
  logger.info(`Mensagem pelo nome ${nome}`);
  return `Olá ${nome}`;
};
export const callMicroService = async () => {
  logger.info('Chamar outro servico em graphql');
  const endpoint = config.serviceLicense;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer MY_TOKEN',
    },
  });

  const query = gql`
    {
      showMessage
    }
  `;
  const data = await graphQLClient.request(query);

  // logger.info(JSON.stringify(data, undefined, 2));
  return data.showMessage;
};
