import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import { LISTA_SERVICOS } from '../../routes/routeObjects';
import Card from '../../components/Card';
import { TitleHeader } from './styles';
import PaginationFooter from '../../components/PaginationFooter';
import api from '../../service/api';

function ListarServicos() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    api.get('servicos/?quantidade=20&pagina=0').then(response => {
      setServicos(response.data.content);
    });
  }, []);

  return (
    <BasePage>
      <Breadcrumbs currentRouting={[LISTA_SERVICOS]} />
      <TitleHeader>
        <h4>Lista de Serviços cadastrados</h4>;
        <button type="button">
          <FaSearch size={22} />
        </button>
      </TitleHeader>
      {servicos.map(servico => (
        <Card key={servico.idServico} info={servico} />
      ))}
      <PaginationFooter />
    </BasePage>
  );
}

export default ListarServicos;
