import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  LISTAR_SERVICOS,
  SERVICO_SELECIONADO,
} from '../../routes/routeObjects';
import api from '../../service/api';
import ModelCard from '../../components/ModelCard';
import Button from '../../components/Button';
import {
  TitleHeader,
  Buttons,
  RightArrow,
  ModelSection,
  Models,
} from './styles';

function ServicoSelecioado() {
  const history = useHistory();
  const [modelos, setModelos] = useState([]);
  const {
    state: { servico },
  } = useLocation();

  useEffect(() => {
    api.get(`modelos/servico/${servico.idServico}/`).then(response => {
      setModelos(response.data);
    });
  }, [servico]);

  return (
    <BasePage>
      <Breadcrumbs
        currentRouting={[
          LISTAR_SERVICOS,
          SERVICO_SELECIONADO(servico.nome, servico.idServico),
        ]}
      />
      <TitleHeader>
        <h3>{servico.nome}</h3>
        <h4>{servico.orgao.nomeOrgao}</h4>
      </TitleHeader>
      <Buttons>
        <Button
          type="secondary"
          onClick={() => history.push('/preencher-modelo')}
        >
          Jornada do Usuário
        </Button>

        <RightArrow />

        <Button type="secondary" disabled>
          Custos do Órgão
        </Button>
        <RightArrow />

        <Button type="secondary" disabled>
          Custos de Transformação
        </Button>

        <RightArrow />

        <Button type="primary" disabled>
          Gerar Relatório
        </Button>
      </Buttons>
      <ModelSection>
        <h4>Modelos</h4>
        <Models>
          {modelos.map(modelo => {
            return <ModelCard key={modelo.idModelo} modelo={modelo} />;
          })}
        </Models>
      </ModelSection>
    </BasePage>
  );
}

export default ServicoSelecioado;
