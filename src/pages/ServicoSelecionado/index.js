import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  LISTAR_SERVICOS,
  SERVICO_SELECIONADO,
} from '../../routes/routeObjects';
import api from '../../service/api';
import ModelCard from '../../components/ModelCard';

function ServicoSelecioado() {
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
      <h1>{servico.nome}</h1>
      {modelos.map(modelo => {
        return <ModelCard key={modelo.idModelo} modelo={modelo} />;
      })}
    </BasePage>
  );
}

export default ServicoSelecioado;
