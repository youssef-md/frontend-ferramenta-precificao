import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import ListarServicos from '../pages/ListarServicos';
import ServicoSelecionado from '../pages/ServicoSelecionado';
import PreencherModelo from '../pages/PreencherModelo';
import ListarPacotesConstantes from '../pages/ListarPacotesConstantes';
import { useGeneralAppContext } from '../App';
import { LISTAR_SERVICOS } from './routeObjects';

function CustomRoute({ isPrivate, component: Component, ...rest }) {
  const { userToken } = useGeneralAppContext();
  return (
    <Route
      render={() => {
        return isPrivate === !!userToken ? (
          <Component {...rest} />
        ) : (
          <Redirect to={userToken ? LISTAR_SERVICOS.route : '/'} />
        );
      }}
    />
  );
}

function Routes() {
  return (
    <Switch>
      <CustomRoute isPrivate={false} path="/" exact component={Home} />
      <CustomRoute
        isPrivate
        path="/listar-servicos"
        component={ListarServicos}
      />
      <CustomRoute
        isPrivate
        path="/servico-selecionado/:id"
        component={ServicoSelecionado}
      />
      <CustomRoute
        isPrivate
        path="/preencher-modelo-jornada-usuario"
        stepType="JORNADA_USUARIO"
        component={PreencherModelo}
      />
      <CustomRoute
        isPrivate
        path="/preencher-modelo-custos-orgao"
        stepType="CUSTOS_ORGAO"
        component={PreencherModelo}
      />
      <CustomRoute
        isPrivate
        path="/preencher-modelo-custos-transformacao"
        stepType="CUSTOS_TRANSFORMAÇÃO"
        component={PreencherModelo}
      />
      <CustomRoute
        isPrivate
        path="/pacotes-constantes"
        component={ListarPacotesConstantes}
      />
    </Switch>
  );
}

export default Routes;
