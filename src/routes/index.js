import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import ListarServicos from '../pages/ListarServicos';
import ServicoSelecionado from '../pages/ServicoSelecionado';
import PreencherModelo from '../pages/PreencherModelo';
import ListarPacotesConstantes from '../pages/ListarPacotesConstantes';
import { useGeneralAppContext } from '../App';
import {
  LISTAR_SERVICOS,
  PREENCHER_JORNADA_USUARIO,
  PREENCHER_CUSTOS_ORGAO,
  PREENCHER_CUSTOS_TRANSFORMACAO,
  GERAR_RELATORIO,
} from './routeObjects';
import ListarConstantes from '../pages/ListarConstantes';
import Relatorio from '../pages/Relatorio';

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
        stepType="JORNADA_USUARIO"
        path={PREENCHER_JORNADA_USUARIO.route}
        component={PreencherModelo}
      />
      <CustomRoute
        isPrivate
        stepType="CUSTOS_ORGAO"
        path={PREENCHER_CUSTOS_ORGAO.route}
        component={PreencherModelo}
      />
      <CustomRoute
        isPrivate
        stepType="CUSTOS_TRANSFORMAÇÃO"
        path={PREENCHER_CUSTOS_TRANSFORMACAO.route}
        component={PreencherModelo}
      />
      <CustomRoute
        isPrivate
        path={GERAR_RELATORIO.route}
        component={Relatorio}
      />

      <CustomRoute
        isPrivate
        path="/pacotes-constantes"
        component={ListarPacotesConstantes}
      />
      <CustomRoute
        isPrivate
        path="/pacote-selecionado"
        component={ListarConstantes}
      />
    </Switch>
  );
}

export default Routes;
