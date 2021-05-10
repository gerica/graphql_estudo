import logger from '../../utils/logger';

export const showMessage = () => 'Olá para todos';
export const showMessage2 = () => 'Olá mensagem todo novo';
export const showNome = ({ nome }) => {
  logger.info(`Mensagem pelo nome ${nome}`);
  return `Olá ${nome}`;
};
