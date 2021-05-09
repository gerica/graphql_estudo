import { RandomDie } from '../../api/services/index';

export default {
  info: () => 'Random service',
  getDie: ({ numSides }) => new RandomDie(numSides || 6),
};
