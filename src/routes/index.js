import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Servicos from '../pages/Servicos';
import ServicoSelecionado from '../pages/ServicoSelecionado';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/servico-selecionado" component={ServicoSelecionado} />
    </Switch>
  );
}

export default Routes;
