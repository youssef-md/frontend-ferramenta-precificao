import React from 'react';
import { Link } from 'react-router-dom';

import BasePage from '../BasePage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Breadcrumbs from '../../components/Breadcrumbs';
import Login from '../Login';
import { useGeneralAppContext } from '../../App';

function Home() {
  const { showLoginModal } = useGeneralAppContext();

  return (
    <BasePage>
      {showLoginModal && <Login />}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '1000px',
          maxWidth: '400px',
          margin: 'auto',
          marginBottom: '200px',
        }}
      >
        <Breadcrumbs />
        <Link to="listar-servicos">Ir para listagem de serviços</Link>
        <Link to="preencher-modelo">Ir para preencher modelo</Link>
        <Input label="Custos de Infra" />

        <Input label="Tempo Médio" auxiliaryText="Unidade de tempo em horas" />

        <Input
          label="Tempo Médio"
          auxiliaryText="Unidade de tempo em horas"
          valid
        />

        <Input
          label="Tempo Médio"
          auxiliaryText="Unidade de tempo em horas"
          invalid
        />

        <Button type="primary">
          Entrar com <strong>gov.br</strong>
        </Button>
        <Button type="primary" loading>
          Entrar com <strong>gov.br</strong>
        </Button>
        <Button type="primary" disabled>
          Entrar com <strong>gov.br</strong>
        </Button>

        <Button type="secondary">
          Entrar com <strong>gov.br</strong>
        </Button>
        <Button type="secondary" loading>
          Entrar com <strong>gov.br</strong>
        </Button>
        <Button type="secondary" disabled>
          Entrar com <strong>gov.br</strong>
        </Button>
      </div>
    </BasePage>
  );
}

export default Home;
