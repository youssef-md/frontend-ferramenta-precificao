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
}) {
  return {
    custosOrgao: {
      cadastroCustosPessoal: false,
      custosImovel: {
        custosAlocacaoPessoas: {
          custoOcupacao: 0,
          custoTotalOcupacao: 0,
          espacoOcupadoPessoa: 0,
          idCustosAlocacaoPessoas: '?',
          memoriaCalculo: '',
          quantidadePessoasAlocadas: 0,
          totalEspacoOcupado: 0,
        },
        custosArmazenamentoPapel: {
          custoArmazenamento: 0,
          custoTotalArmazenamento: 0,
          idCustosArmazenamentoPapel: '?',
          memoriaCalculo: '',
          quantidadePapelArmazenado,
        },
        idCustosImovel: '?',
      },
      custosInfraestrutura: {
        custoManutencao: 0,
        custoTreinamento: 0,
        idCustosInfraestrutura: '?',
        memoriaCalculo: dropdownSolucao,
      },
      custosPersonalizado: [],
      custosPessoal: [
        {
          descricao: '',
          posicao: 0,
          memoriaCalculo: '',

          mediaSalarial:
            mediaSalarialTercerizados &&
            formatCurrency(mediaSalarialTercerizados),
          nome: mediaSalarialTercerizados && 'Tercerizados',
          quantidadeFuncionarios:
            qtdFuncionariosTercerizados && Number(qtdFuncionariosTercerizados),
          tempoDedicacao:
            tempoDedicacaoTercerizados && Number(tempoDedicacaoTercerizados),
        },
        {
          descricao: '',
          posicao: 0,
          memoriaCalculo: '',

          mediaSalarial:
            mediaSalarialServidores && formatCurrency(mediaSalarialServidores),
          nome: mediaSalarialServidores && 'Servidores',
          quantidadeFuncionarios:
            qtdFuncionariosServidores && Number(qtdFuncionariosServidores),
          tempoDedicacao:
            tempoDedicacaoServidores && Number(tempoDedicacaoServidores),
        },
      ],
      idCustosOrgao: '?',
    },
    idCustosOrgaoPre: '?',
    idCustosOrgaoPos: '?',
    tipo: '',
    idModelo: '?',
  };
}
