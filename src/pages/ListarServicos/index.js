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
  const [qtd, setQtd] = useState(7);
  const [page, setPage] = useState(0);
  const [isItemDropOpen, setIsItemDropOpen] = useState(false);
  const [isPageDropOpen, setIsPageDropOpen] = useState(false);

  useEffect(() => {
    api.get(`servicos/?quantidade=${qtd}&pagina=${page}`).then(response => {
      setServicos(response.data.content);
    });
  }, [qtd, page]);

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
      <PaginationFooter
        qtd={qtd}
        totalQtd="x"
        page={page}
        pageTotal="y"
        isItemDropOpen={isItemDropOpen}
        setIsItemDropOpen={setIsItemDropOpen}
        isPageDropOpen={isPageDropOpen}
        setIsPageDropOpen={setIsPageDropOpen}
      />
    </BasePage>
  );
}

export default ListarServicos;
