import testResolver from './testResolver';
import randomResolver from './randomResolver';
import messageResolver from './messageResolver';

export default {
  ...testResolver,
  ...randomResolver,
  ...messageResolver,
};
