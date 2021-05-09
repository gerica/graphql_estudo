export const showMessage = () => 'Olá para todos';
export const showMessage2 = () => 'Olá mensagem todo novo';
export const showNome = ({ nome }) => {
  console.log(nome);
  return `Olá ${nome}`;
};
