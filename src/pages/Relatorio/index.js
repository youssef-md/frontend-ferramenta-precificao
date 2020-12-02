import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  GERAR_RELATORIO,
  LISTAR_SERVICOS,
  SERVICO_SELECIONADO,
} from '../../routes/routeObjects';
import api from '../../service/api';
import BasePage from '../BasePage';

export default function Relatorio() {
  const {
    state: { servico, modelo },
  } = useLocation();

  const { idServico, nome } = servico;
  const [report, setReport] = useState('');

  useEffect(() => {
    api
      .get(`/relatorios/${modelo.idModelo}/fisica/`)
      .then(res => setReport(res.data));
  }, [modelo.idModelo]);

  return (
    <BasePage>
      <Breadcrumbs
        currentRouting={[
          LISTAR_SERVICOS,
          SERVICO_SELECIONADO(nome, idServico),
          GERAR_RELATORIO,
        ]}
      />
      <pre>
        <code>
          {report ? JSON.stringify(report, undefined, 2) : 'Carregando...'}
        </code>
      </pre>
    </BasePage>
  );
}
