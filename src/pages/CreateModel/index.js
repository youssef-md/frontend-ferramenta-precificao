import React, { useCallback, useState } from 'react';
import { Container, Form, Backdrop } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../service/api';

import {
  createEtapasAtividadeJornadaUsuario,
  createEtapasCustoOrgao,
} from './createEtapasAtividades';

function CreateModel({ servico, closeCreateModal, handleFunction }) {
  const [loading, setIsLoading] = useState(false);

  const handleCreateModel = useCallback(
    async ({ nome, descricao }) => {
      setIsLoading(true);

      try {
        const response = await api.post(
          `modelos/servico/${servico.idServico}/`,
          {
            nome,
            descricao,
          }
        );

        const { idModelo } = response.data;
        console.log(response.data, { idModelo, servico: servico.idServico });
        // Promise.all([
        await createEtapasAtividadeJornadaUsuario(idModelo, 'pre');
        await createEtapasAtividadeJornadaUsuario(idModelo, 'pos');
        await createEtapasCustoOrgao(servico.idServico, 'pre');
        await createEtapasCustoOrgao(servico.idServico, 'pos');
        // ])
        // .then(() => handleFunction(response.data))
        // .catch(() => {
        // throw new Error();
        // });

        // CRIA CUSTOS DO ÓRGÃO
        // response = await api.post(``)
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
