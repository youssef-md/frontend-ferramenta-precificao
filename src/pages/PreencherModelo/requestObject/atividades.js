function formatCurrency(string) {
  return Number(string.replace('R$ ', '').replace('.', '').replace(',', '.'));
}

export function getJornadaUsuarioAtividadeReqObj({
  idEtapa,
  idAtividade,
  quantidadeUsuarios,
  frequencia,
  tempoMedio,
  custoMonetario,
  rendimentoMedio,
}) {
  return {
    atualizadoEm: null,
    canalAtendimento: 'Presencial',
    criadoEm: null,
    custos: {
      quantidadeUsuarios: Number(quantidadeUsuarios),
      frequencia: Number(frequencia),
      custoMonetario: formatCurrency(custoMonetario),
      tempoMedio: Number(tempoMedio),
      rendimentoMedio: formatCurrency(rendimentoMedio),
      memoriaCalculo: {
        mcQuantidadeUsuarios: null,
        mcFrequencia: null,
        mcCustoMonetario: null,
        mcTempoMedio: null,
        mcRendimentoMedio: null,
      },
    },
    etapa: idEtapa,
    idAtividade,
    posicao: 0,
    profissaoResponsavel: null,
    volumeSolicitacoes: null,
  };
}

export function getCustosOrgaoAtividadeReqObj({
  quantidadePapelArmazenado,
  mediaSalarialTercerizados,
  mediaSalarialServidores,
  qtdFuncionariosTercerizados,
  qtdFuncionariosServidores,
  tempoDedicacaoTercerizados,
  tempoDedicacaoServidores,
  dropdownSolucao,
  // IDS
  custosAlocacaoPessoasPreId,
  custosAlocacaoPessoasPosId,
  custosArmazenamentoPapelPreId,
  custosArmazenamentoPapelPosId,
  custosImovelPreId,
  custosImovelPosId,
  custosInfraestruturaPreId,
  custosInfraestruturaPosId,
  custosPessoalPreServidores,
  custosPessoalPosServidores,
  custosPessoalPreTerceirizados,
  custosPessoalPosTerceirizados,
  idCustosOrgaoPre,
  idCustosOrgaoPos,
  // idCustosAlocacaoPessoas,
  // idCustosArmazenamentoPapel,
  // idCustosImovel,
  // idCustosInfraestrutura,
  // idCustosPessoal,
  // idCustosOrgao,
  // idCustosOrgaoPre,
  // idCustosOrgaoPos,
  idModelo,
}) {
  return {
    custosOrgao: {
      cadastroCustosPessoal: false,
      custosImovel: {
        custosAlocacaoPessoas: {
          custoOcupacao: null,
          custoTotalOcupacao: null,
          espacoOcupadoPessoa: null,
          idCustosAlocacaoPessoas:
            custosAlocacaoPessoasPreId || custosAlocacaoPessoasPosId,
          memoriaCalculo: '',
          quantidadePessoasAlocadas: null,
          totalEspacoOcupado: null,
        },
        custosArmazenamentoPapel: {
          custoArmazenamento: null,
          custoTotalArmazenamento: null,
          idCustosArmazenamentoPapel:
            custosArmazenamentoPapelPreId || custosArmazenamentoPapelPosId,
          memoriaCalculo: '',
          quantidadePapelArmazenado,
        },
        idCustosImovel: custosImovelPreId || custosImovelPosId,
      },
      custosInfraestrutura: {
        custoManutencao: null,
        custoTreinamento: null,
        idCustosInfraestrutura:
          custosInfraestruturaPreId || custosInfraestruturaPosId,
        memoriaCalculo: dropdownSolucao,
      },
      custosPersonalizado: [],
      custosPessoal: [
        {
          descricao: null,
          idCustosPessoal:
            custosPessoalPreServidores || custosPessoalPosServidores,
          posicao: 0,
          memoriaCalculo: null,
          mediaSalarial: formatCurrency(mediaSalarialServidores),
          nome: 'Servidores',
          quantidadeFuncionarios: Number(qtdFuncionariosServidores),
          tempoDedicacao: Number(tempoDedicacaoServidores),
        },
        {
          descricao: null,
          idCustosPessoal:
            custosPessoalPreTerceirizados || custosPessoalPosTerceirizados,
          posicao: 1,
          memoriaCalculo: null,
          mediaSalarial: formatCurrency(mediaSalarialTercerizados),
          nome: 'Tercerizados',
          quantidadeFuncionarios: Number(qtdFuncionariosTercerizados),
          tempoDedicacao: Number(tempoDedicacaoTercerizados),
        },
      ],
      idCustosOrgao: idCustosOrgaoPre || idCustosOrgaoPos,
    },
    idCustosOrgao: idCustosOrgaoPre || idCustosOrgaoPos,
    idModelo,
    tipo: 'física',
  };
}
