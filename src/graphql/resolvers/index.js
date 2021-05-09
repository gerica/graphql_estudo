import testResolver from './testResolver';
import randomResolver from './randomResolver';
import messageResolver from './messageResolver';
import authResolver from './authResolver';

export default {
  ...testResolver,
  ...randomResolver,
  ...messageResolver,
  ...authResolver,
};
