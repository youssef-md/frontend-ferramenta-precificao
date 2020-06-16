import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { LISTA_SERVICOS, SERVICO_SELECIONADO } from '../../routes/routeObjects';

function ServicoSelecioado() {
  return (
    <>
      <h1>Serviço Selecionado</h1>
      <Breadcrumbs
        currentRouting={[
          LISTA_SERVICOS,
          SERVICO_SELECIONADO('Bolsa de pesquisa UnB'),
        ]}
      />
    </>
  );
}

export default ServicoSelecioado;
