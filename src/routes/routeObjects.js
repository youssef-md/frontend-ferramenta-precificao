export const LISTAR_SERVICOS = {
  name: 'Listagem de Serviços',
  route: 'listar-servicos',
};

export function SERVICO_SELECIONADO(name, id) {
  return {
    name,
    route: `servico-selecionado/${id}`,
  };
}

export const PACOTE_CONSTANTES = {
  name: 'Pacote de constantes',
  route: 'pacote-constantes',
};

export const PREENCHER_MODELO = {
  name: 'Preencher modelo',
  route: 'preencher-modelo',
};
