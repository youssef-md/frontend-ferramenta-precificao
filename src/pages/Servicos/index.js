import React from 'react';
import { Link } from 'react-router-dom';

import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import { LISTA_SERVICOS } from '../../routes/routeObjects';

function Servicos() {
  return (
    <BasePage>
      <h1>Serviços</h1>;
      <Breadcrumbs currentRouting={[LISTA_SERVICOS]} />
      <Link to="servico-selecionado">Ir para bolsa de pesquisa UnB</Link>
    </BasePage>
  );
}

export default Servicos;
