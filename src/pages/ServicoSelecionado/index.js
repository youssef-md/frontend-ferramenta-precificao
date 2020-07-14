import React from 'react';

import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  LISTAR_SERVICOS,
  SERVICO_SELECIONADO,
} from '../../routes/routeObjects';

function ServicoSelecioado() {
  return (
    <BasePage>
      <h1>Serviço Selecionado</h1>
      <Breadcrumbs
        currentRouting={[
          LISTAR_SERVICOS,
          SERVICO_SELECIONADO('Bolsa de pesquisa UnB'),
        ]}
      />
    </BasePage>
  );
}

export default ServicoSelecioado;
