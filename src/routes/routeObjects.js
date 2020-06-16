export const LISTA_SERVICOS = {
  name: 'Listagem de Serviços',
  route: 'servicos',
};

export function SERVICO_SELECIONADO(serviceName) {
  return {
    name: serviceName,
    route: 'servico-selecionado',
  };
}

export const PACOTE_CONSTANTES = {
  name: 'Pacote de constantes',
  route: 'pacote-constantes',
};
