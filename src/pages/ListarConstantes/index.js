import React from 'react';

import { useLocation } from 'react-router-dom';
import { Container } from './styles';
import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  PACOTE_CONSTANTES,
  PACOTE_SELECIONADO,
} from '../../routes/routeObjects';

function ListarConstantes() {
  const {
    state: { pacote },
  } = useLocation();

  const { idPacote, dtPacote } = pacote;
  return (
    <BasePage>
      <Breadcrumbs
        currentRouting={[
          PACOTE_CONSTANTES,
          PACOTE_SELECIONADO(dtPacote, idPacote),
        ]}
      />
    </BasePage>
  );
}

export default ListarConstantes;
