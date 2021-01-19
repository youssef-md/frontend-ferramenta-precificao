function formatCurrency(string) {
  if (typeof string !== 'string') return;
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
  idCustosOrgao,
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
          // custoOcupacao: null,
          // custoTotalOcupacao: null,
          // espacoOcupadoPessoa: null,
          idCustosAlocacaoPessoas:
            custosAlocacaoPessoasPreId || custosAlocacaoPessoasPosId,
          memoriaCalculo: '',
          // quantidadePessoasAlocadas: null,
          // totalEspacoOcupado: null,
        },
        custosArmazenamentoPapel: {
          // custoArmazenamento: null,
          // custoTotalArmazenamento: null,
          idCustosArmazenamentoPapel:
            custosArmazenamentoPapelPreId || custosArmazenamentoPapelPosId,
          memoriaCalculo: '',
          quantidadePapelArmazenado: Number(quantidadePapelArmazenado),
        },
        idCustosImovel: custosImovelPreId || custosImovelPosId,
      },
      custosInfraestrutura: {
        // custoManutencao: null,
        // custoTreinamento: null,
        idCustosInfraestrutura:
          custosInfraestruturaPreId || custosInfraestruturaPosId,
        memoriaCalculo: idCustosOrgaoPos ? dropdownSolucao : '',
      },
      custosPersonalizado: [],
      custosPessoal: [
        {
          descricao: 'Custo da remuneração dos servidores dedicados',
          idCustosPessoal:
            custosPessoalPreTerceirizados || custosPessoalPosTerceirizados,
          mediaSalarial: formatCurrency(mediaSalarialTercerizados),
          // memoriaCalculo: null,
          nome: 'Tercerizados',
          posicao: 1,
          quantidadeFuncionarios: Number(qtdFuncionariosTercerizados),
          tempoDedicacao: Number(tempoDedicacaoTercerizados),
        },
        {
          descricao: 'Custo da remuneração dos terceirizados dedicados',
          idCustosPessoal:
            custosPessoalPreServidores || custosPessoalPosServidores,
          mediaSalarial: formatCurrency(mediaSalarialServidores),
          // memoriaCalculo: null,
          nome: 'Servidores',
          posicao: 0,
          quantidadeFuncionarios: Number(qtdFuncionariosServidores),
          tempoDedicacao: Number(tempoDedicacaoServidores),
        },
      ],
      idCustosOrgao,
    },
    [idCustosOrgaoPre ? 'idCustosOrgaoPre' : 'idCustosOrgaoPos']:
      idCustosOrgaoPre || idCustosOrgaoPos,
    idModelo,
    tipo: 'fisica',
  };
}

export function getCustosInvestimentoReqObj({
  custosAlocacaoPessoasInvestimento,
  custosArmazenamentoPapelInvestimento,
  custosImovelInvestimento,
  custosInfraestruturaInvestimento,
  custosPessoalInvestimentoServidores,
  custosPessoalInvestimentoTerceirizados,
  idModelo,
  idCustosInvestimento,
  quantidadePapelArmazenado,
  solucaoTransformacao,
  custoTreinamento,
  mediaSalarialServidores,
  mediaSalarialTercerizados,
  qtdFuncionariosServidores,
  qtdFuncionariosTercerizados,
  tempoDedicacaoServidores,
  tempoDedicacaoTercerizados,
}) {
  return {
    cadastroCustosPessoal: false,
    custosImovel: {
      custosAlocacaoPessoas: {
        // custoOcupacao: null,
        // custoTotalOcupacao: null,
        // espacoOcupadoPessoa: null,
        idCustosAlocacaoPessoas: custosAlocacaoPessoasInvestimento,
        memoriaCalculo: '',
        // quantidadePessoasAlocadas: null,
        // totalEspacoOcupado: null,
      },
      custosArmazenamentoPapel: {
        // custoArmazenamento: null, Constante do Banco
        // custoTotalArmazenamento: null,
        idCustosArmazenamentoPapel: custosArmazenamentoPapelInvestimento,
        memoriaCalculo: '',
        quantidadePapelArmazenado: Number(quantidadePapelArmazenado),
      },
      idCustosImovel: custosImovelInvestimento,
    },
    custosInfraestrutura: {
      // custoFerramentaAutomacao: null,
      custoTreinamento: formatCurrency(custoTreinamento),
      idCustosInfraestrutura: custosInfraestruturaInvestimento,
      memoriaCalculo: solucaoTransformacao,
    },
    custosPersonalizado: [],
    custosPessoal: [
      {
        descricao: 'Custo da remuneração dos servidores dedicados',
        idCustosPessoal: custosPessoalInvestimentoServidores,
        mediaSalarial: formatCurrency(mediaSalarialServidores),
        memoriaCalculo: '',
        nome: 'Servidores',
        posicao: 0,
        quantidadeFuncionarios: Number(qtdFuncionariosServidores),
        tempoDedicacao: Number(tempoDedicacaoServidores),
      },
      {
        descricao: 'Custo da remuneração dos terceirizados dedicados',
        idCustosPessoal: custosPessoalInvestimentoTerceirizados,
        mediaSalarial: formatCurrency(mediaSalarialTercerizados),
        memoriaCalculo: '',
        nome: 'Terceirizados',
        posicao: 1,
        quantidadeFuncionarios: Number(qtdFuncionariosTercerizados),
        tempoDedicacao: Number(tempoDedicacaoTercerizados),
      },
    ],
    idCustosInvestimento,
    idModelo,
    tipo: 'física',
  };
}
