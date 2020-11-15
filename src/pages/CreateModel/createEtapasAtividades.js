import api from '../../service/api';
import { getJornadaUsuarioAtividadeReqObj } from '../PreencherModelo/requestObject/atividades';

export async function createEtapasAtividadeJornadaUsuario(idModelo, preOuPos) {
  // CRIA ETAPAS
  const response = await api.post(`/etapas-${preOuPos}/modelo/${idModelo}/`, [
    {
      nome: '',
      descricao: '',
      posicao: 0,
      tipo: 'fisica',
    },
    {
      nome: '',
      descricao: '',
      posicao: 1,
      tipo: 'fisica',
    },
    {
      nome: '',
      descricao: '',
      posicao: 2,
      tipo: 'fisica',
    },
    {
      nome: '',
      descricao: '',
      posicao: 3,
      tipo: 'fisica',
    },
  ]);

  const idsEtapas = response.data.map(item => item.idEtapaPrecificacao);

  // CRIA AS ATIVIDADES
  Promise.all([
    // ETAPA 01
    api.post(`/atividades-${preOuPos}/etapa/${idsEtapas[0]}/`, [
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[0],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[0],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[0],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[0],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
    ]),

    // ETAPA 02
    api.post(`/atividades-${preOuPos}/etapa/${idsEtapas[1]}/`, [
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[1],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[1],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
    ]),

    // ETAPA 03
    api.post(`/atividades-${preOuPos}/etapa/${idsEtapas[2]}/`, [
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[2],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[2],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[2],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[2],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
    ]),

    // ETAPA 04
    api.post(`/atividades-${preOuPos}/etapa/${idsEtapas[3]}/`, [
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[3],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[3],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[3],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
      getJornadaUsuarioAtividadeReqObj({
        custoMonetario: 0,
        frequencia: 0,
        idAtividade: 0,
        idEtapa: idsEtapas[3],
        quantidadeUsuarios: 0,
        rendimentoMedio: 0,
        tempoMedio: 0,
      }),
    ]),
  ]);
}

export async function createEtapasCustoOrgao(idModelo, preOuPos) {
  const response = await api.get(
    `/custos-orgao-${preOuPos}/modelo/${idModelo}/fisica/`
  );
  await api.post(`/custos-orgao-${preOuPos}/modelo/${idModelo}/`, response);
}
