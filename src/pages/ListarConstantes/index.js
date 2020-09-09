import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { Container, EOFButton } from './styles';
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

  function filterConstantesByEtapa(etapa) {
    return pacote.constante.reduce((acc, constante) => {
      if (constante.etapaPrecificacao === etapa)
        return [...acc, { ...constante, isEditing: false }];
      return acc;
    }, []);
  }

  const [constantesPre, setConstantesPre] = useState(
    filterConstantesByEtapa('Pré')
  );

  const [constantesPos, setConstantesPos] = useState(
    filterConstantesByEtapa('Pós')
  );

  const [constantesGeral, setConstantesGeral] = useState(
    filterConstantesByEtapa(null)
  );

  const { idPacote, dtPacote } = pacote;
  return (
    <BasePage>
      <Breadcrumbs
        currentRouting={[
          PACOTE_CONSTANTES,
          PACOTE_SELECIONADO(dtPacote, idPacote),
        ]}
      />
      <Container>
        <header>
          <h3>Lista de constantes do pacote selecionado</h3>
          <button>Salvar e criar um novo pacote de constantes</button>
        </header>

        <EOFButton type="secondary">
          Salvar e criar um novo pacote de constantes
        </EOFButton>
      </Container>
    </BasePage>
  );
}

export default ListarConstantes;
