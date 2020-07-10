import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ListarServicos from '../pages/ListarServicos';
import ServicoSelecionado from '../pages/ServicoSelecionado';
import PreencherModelo from '../pages/PreencherModelo';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/listar-servicos" component={ListarServicos} />
      <Route path="/servico-selecionado" component={ServicoSelecionado} />
      <Route path="/preencher-modelo" component={PreencherModelo} />
    </Switch>
  );
}

export default Routes;
