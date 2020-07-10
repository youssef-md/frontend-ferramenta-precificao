import React from 'react';
import { Link } from 'react-router-dom';

import BasePage from '../BasePage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Breadcrumbs from '../../components/Breadcrumbs';
import api from '../../service/api';

function Home() {
  async function makeReq() {
    const servicos = await api.get('servicos');
    console.log(servicos);
  }

  return (
    <BasePage>
      <Button type="primary" onClick={makeReq}>
        Testar req
      </Button>
      <h1>Análise de Custos de Serviços</h1>
      <h2>Participar de Processo Seletivo para Curso de Graduação UnB</h2>
      <h3>Etapa 1: Custos de Pessoal</h3>
      <h4>Fundação Universidade de Brasília (UnB)</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti,
        deleniti eveniet quidem cum earum ullam aspernatur error delectus ad,
        tempora beatae excepturi, mollitia asperiores voluptate provident
        aliquid molestias quos?
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '1000px',
          maxWidth: '400px',
          margin: 'auto',
        }}
      >
        <Breadcrumbs />
        <Link to="servicos">Ir para listagem de serviços</Link>
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
