export function getAtividadeRequestObject({
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
      custoMonetario: parseFloat(custoMonetario),
      tempoMedio: Number(tempoMedio),
      rendimentoMedio: parseFloat(rendimentoMedio),
      memoriaCalculo: {
        mcQuantidadeUsuarios: null,
        mcFrequencia: null,
        mcCustoMonetario: null,
        mcTempoMedio: null,
        mcRendimentoMedio: null,
      },
    },
    descricao: null,
    etapa: idEtapa,
    idAtividade,
    nome: '',
    posicao: 0,
    profissaoResponsavel: null,
    volumeSolicitacoes: null,
  };
}
