import React from 'react';

import { FaSearch } from 'react-icons/fa';
import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import { LISTA_SERVICOS } from '../../routes/routeObjects';
import { Container } from './styles';
import Card from '../../components/Card';

function Servicos() {
  const cards = [0, 1, 2, 3, 4, 5];

  return (
    <BasePage>
      <Breadcrumbs currentRouting={[LISTA_SERVICOS]} />
      <Container>
        <h4>Lista de Serviços cadastrados</h4>;
        <button type="button">
          <FaSearch size={22} />
        </button>
      </Container>
      {cards.map(card => (
        <Card key={card} />
      ))}
    </BasePage>
  );
}

export default Servicos;
