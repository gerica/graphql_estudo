import { Service } from '../../api/services';

const service = new Service();

export default {
  licenses: () => service.callLicenseServer(),
  server: () => service.callServer(),
};
