export const LISTAR_SERVICOS = {
  name: 'Listagem de Serviços',
  route: '/listar-servicos/',
};

export function SERVICO_SELECIONADO(name, id) {
  return {
    name,
    route: `/servico-selecionado/${id}`,
  };
}

export const PACOTE_CONSTANTES = {
  name: 'Pacote de constantes',
  route: '/pacotes-constantes/',
};

export function PACOTE_SELECIONADO(dtPacote, id) {
  return {
    name: dtPacote,
    route: `/pacote-selecionado/${id}`,
  };
}

export const PREENCHER_JORNADA_USUARIO = {
  name: 'Preencher Modelo - Jornada do Usuário',
  route: `/preencher-jornada-usuario`,
};

export const PREENCHER_CUSTOS_ORGAO = {
  name: 'Preencher Modelo - Custos do Órgão',
  route: `/preencher-custos-orgao`,
};

export const PREENCHER_CUSTOS_TRANSFORMACAO = {
  name: 'Preencher Modelo - Custos de Transformação',
  route: `/preencher-custos-transformacao`,
};

export const GERAR_RELATORIO = {
  name: 'Relatório',
  route: '/relatorio',
};
