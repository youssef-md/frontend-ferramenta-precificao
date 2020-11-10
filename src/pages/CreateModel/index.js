import React, { useCallback, useState } from 'react';
import { Container, Form, Backdrop } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../service/api';

import { getAtividadeRequestObject } from '../PreencherModelo/requestObject/atividades';

function CreateModel({ servico, closeCreateModal, handleFunction }) {
  const [loading, setIsLoading] = useState(false);

  const handleCreateModel = useCallback(
    async ({ nome, descricao }) => {
      setIsLoading(true);

      try {
        let response = await api.post(`modelos/servico/${servico.idServico}/`, {
          nome,
          descricao,
        });
        handleFunction(response.data);

        // CRIA ETAPAS JORNADA DO USUÁRIO
        response = await api.post(
          `/etapas-pre/modelo/${response.data.idModelo}/`,
          [
            {
              nome: 'Buscar Informações',
              descricao:
                'Etapa em que o usuário se informa sobre os documentos necessários, a jornada do usuário e outras exigências.',
              posicao: 0,
              tipo: 'fisica',
            },
            {
              nome: 'Coletar Documentos',
              descricao:
                'Etapa em que o usuário coleta e prepara os documentos exigidos pelo serviço e preenche formulário de cadastro/solicitação.',
              posicao: 1,
              tipo: 'fisica',
            },
            {
              nome: 'Solicitar Serviços',
              descricao: 'Etapa em que o usuário solicita o serviço.',
              posicao: 2,
              tipo: 'fisica',
            },
            {
              nome: 'Receber o Serviço',
              descricao: 'Etapa em que o usuário recebe o serviço.',
              posicao: 3,
              tipo: 'fisica',
            },
          ]
        );

        const idsEtapas = response.data.map(item => {
          return item.idEtapaPrecificacao;
        });

        // CRIA AS ATIVIDADES JORNADA DO USUÁRIO
        response = await api.post(`/atividades-pre/etapa/${idsEtapas[0]}/`, [
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[0],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[0],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[0],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[0],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
        ]);

        response = await api.post(`/atividades-pre/etapa/${idsEtapas[1]}/`, [
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[1],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[1],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
        ]);

        response = await api.post(`/atividades-pre/etapa/${idsEtapas[2]}/`, [
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[2],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[2],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[2],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[2],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
        ]);

        response = await api.post(`/atividades-pre/etapa/${idsEtapas[3]}/`, [
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[3],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[3],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[3],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
          getAtividadeRequestObject({
            custoMonetario: 0,
            frequencia: 0,
            idAtividade: 0,
            idEtapa: idsEtapas[3],
            quantidadeUsuarios: 0,
            rendimentoMedio: 0,
            tempoMedio: 0,
          }),
        ]);

        // CRIA CUSTOS DO ÓRGÃO
        // response = await api.post(``)

        console.log(response.data);
      } catch (error) {
        alert('Erro ao criar modelo de custos');
      } finally {
        setIsLoading(false);
        closeCreateModal();
      }
    },
    [servico, closeCreateModal, handleFunction]
  );

  return (
    <Container>
      <Form onSubmit={handleCreateModel}>
        <h4>Crie um novo modelo de custos</h4>
        <Input name="nome" type="text" label="Nome" />
        <Input name="descricao" type="text" label="Descrição" />
        <Button type="primary" loading={Number(loading)}>
          Criar
        </Button>
      </Form>
      <Backdrop onClick={closeCreateModal} />
    </Container>
  );
}

export default CreateModel;
