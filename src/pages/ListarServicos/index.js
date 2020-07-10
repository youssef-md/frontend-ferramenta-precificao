import React from 'react';
import { FaSearch } from 'react-icons/fa';

import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import { LISTA_SERVICOS } from '../../routes/routeObjects';
import Card from '../../components/Card';
import { TitleHeader } from './styles';
import PaginationFooter from '../../components/PaginationFooter';

function ListarServicos() {
  const cards = [0, 1, 2, 3, 4, 5];

  return (
    <BasePage>
      <Breadcrumbs currentRouting={[LISTA_SERVICOS]} />
      <TitleHeader>
        <h4>Lista de Serviços cadastrados</h4>;
        <button type="button">
          <FaSearch size={22} />
        </button>
      </TitleHeader>
      {cards.map(card => (
        <Card key={card} />
      ))}
      <PaginationFooter />
    </BasePage>
  );
}

export default ListarServicos;
