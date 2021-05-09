import testResolver from './testResolver';
import randomResolver from './randomResolver';
import messageResolver from './messageResolver';
import authResolver from './authResolver';
import serverLessResolver from './serverLessResolver';

export default {
  ...testResolver,
  ...randomResolver,
  ...messageResolver,
  ...authResolver,
  ...serverLessResolver,
};
