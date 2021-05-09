import { showMessage, showMessage2, showNome } from '../../api/services/serverLessService';

export default {
  showMessage: () => showMessage(),
  showMessage2: () => showMessage2(),
  showNome: (nome) => showNome(nome),
};
