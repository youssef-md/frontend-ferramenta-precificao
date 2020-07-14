import React from 'react';
import { Link } from 'react-router-dom';

import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import Login from '../Login';
import { useGeneralAppContext } from '../../App';

function Home() {
  const { showLoginModal } = useGeneralAppContext();

  return (
    <BasePage>
      {showLoginModal && <Login />}
      <Breadcrumbs />
      <Link to="listar-servicos">Ir para listagem de serviços</Link>
      <Link to="preencher-modelo">Ir para preencher modelo</Link>
    </BasePage>
  );
}

export default Home;
