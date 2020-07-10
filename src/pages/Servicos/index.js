import React from 'react';

import { FaSearch } from 'react-icons/fa';
import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import { LISTA_SERVICOS } from '../../routes/routeObjects';
import { Container } from './styles';
import ServiceCard from '../../components/ServiceCard';

function Servicos() {
  const cards = [0, 1, 2, 3, 4, 5];

  return (
    <BasePage>
      <Breadcrumbs currentRouting={[LISTA_SERVICOS]} />
      {/* <Link to="servico-selecionado">Ir para bolsa de pesquisa UnB</Link> */}
      <Container>
        <h4>Lista de Serviços cadastrados</h4>;
        <FaSearch size={20} color="blue" />
      </Container>
      {cards.map(card => (
        <ServiceCard key={card} />
      ))}
    </BasePage>
  );
}

export default Servicos;
