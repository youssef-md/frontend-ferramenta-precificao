import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import Card from '../../components/Card';
import {
  PACOTE_CONSTANTES,
  PACOTE_SELECIONADO,
} from '../../routes/routeObjects';
import api from '../../service/api';
import { formatDate } from '../../utils/formatDate';
import BasePage from '../BasePage';

import { ListPacksContainer } from './styles';

function ListarPacotesConstantes() {
  const history = useHistory();
  const [pacotes, setPacotes] = useState([]);

  useEffect(() => {
    api.get('/pacote-constantes/').then(res => {
      setPacotes(res.data);
    });
  }, []);

  return (
    <BasePage>
      <Breadcrumbs currentRouting={[PACOTE_CONSTANTES]} />
      <ListPacksContainer>
        <h3>Pacotes de Constantes dos Modelos</h3>
        {pacotes.map((pacote, index) => {
          const formattedDate = formatDate(pacote.dtPacote);

          return (
            <Card
              constantes
              key={pacote.idPacote}
              info={{
                date: formattedDate,
              }}
              onPress={() => {
                history.push(
                  PACOTE_SELECIONADO(formattedDate, pacote.idPacote).route,
                  { pacote, canEditPack: index === 0 }
                );
              }}
            />
          );
        })}
      </ListPacksContainer>
    </BasePage>
  );
}

export default ListarPacotesConstantes;
