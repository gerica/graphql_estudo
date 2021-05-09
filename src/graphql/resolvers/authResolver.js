/* eslint-disable no-return-await */

import { UserService } from '../../api/services';

export default {
  register: ({ input }) => new UserService().register(input),
};
