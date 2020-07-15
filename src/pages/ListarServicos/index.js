import React, { useEffect, useState, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';

import { useHistory } from 'react-router-dom';
import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  LISTAR_SERVICOS,
  SERVICO_SELECIONADO,
} from '../../routes/routeObjects';
import Card from '../../components/Card';
import { TitleHeader } from './styles';
import PaginationFooter from '../../components/PaginationFooter';
import api from '../../service/api';

function ListarServicos() {
  const history = useHistory();
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    api.get('servicos/?quantidade=20&pagina=0').then(response => {
      setServicos(response.data.content);
    });
  }, []);

  const selectService = useCallback(
    servico => {
      const { idServico, nome } = servico;
      history.push(SERVICO_SELECIONADO(nome, idServico).route, { servico });
    },
    [history]
  );

  return (
    <BasePage>
      <Breadcrumbs currentRouting={[LISTAR_SERVICOS]} />
      <TitleHeader>
        <h4>Lista de Serviços cadastrados</h4>
        <button type="button">
          <FaSearch size={22} />
        </button>
      </TitleHeader>
      {servicos.map(servico => (
        <Card
          key={servico.idServico}
          info={servico}
          onServiceSelect={selectService}
        />
      ))}
      <PaginationFooter />
    </BasePage>
  );
}

export default ListarServicos;
