/* eslint-disable no-return-await */

import { UserService } from '../../api/services';

const service = new UserService();
export default {
  register: ({ input }) => service.register(input),
  current: () => service.current(),
  allUsers: () => service.allUsers(),
};
