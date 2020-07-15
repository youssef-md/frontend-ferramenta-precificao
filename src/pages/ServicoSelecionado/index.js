import React from 'react';

import { useLocation } from 'react-router-dom';
import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  LISTAR_SERVICOS,
  SERVICO_SELECIONADO,
} from '../../routes/routeObjects';

function ServicoSelecioado() {
  const {
    state: { servico },
  } = useLocation();

  return (
    <BasePage>
      <h1>{servico.nome}</h1>
      <Breadcrumbs
        currentRouting={[
          LISTAR_SERVICOS,
          SERVICO_SELECIONADO(servico.nome, servico.idServico),
        ]}
      />
    </BasePage>
  );
}

export default ServicoSelecioado;
