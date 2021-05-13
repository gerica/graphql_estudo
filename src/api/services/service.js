/* eslint-disable class-methods-use-this */
import logger from '../../utils/logger';
import config from '../../config/config';

class Service {
  async callLicenseServer() {
    logger.info('Call license');
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
  }

  async callServer() {
    logger.info('Call server');
    const endpoint = config.service;

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
  }
}
export default Service;
