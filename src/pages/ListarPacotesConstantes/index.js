import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import Card from '../../components/Card';
import {
  PACOTE_CONSTANTES,
  PACOTE_SELECIONADO,
} from '../../routes/routeObjects';
import api from '../../service/api';
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

  const formatDate = pacote => {
    const [dt, hrs] = pacote.dtPacote.split(' ');

    const date = new Date(dt);
    const dateFormat = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });

    const [
      { value: day },
      { value: month },
      { value: year },
    ] = dateFormat.formatToParts(date);

    const newDate = `${day} de ${month} de ${year}`;

    return `${newDate} às ${hrs}`;
  };

  return (
    <BasePage>
      <Breadcrumbs currentRouting={[PACOTE_CONSTANTES]} />
      <ListPacksContainer>
        <h3>Pacotes de Constantes dos Modelos</h3>
        {pacotes.map((pacote, index) => {
          return (
            <Card
              constantes
              key={pacote.idPacote}
              info={{
                date: formatDate(pacote),
              }}
              onPress={() =>
                history.push(
                  PACOTE_SELECIONADO(pacote.dtPacote, pacote.idPacote).route,
                  { pacote, canEditPack: index === 0 }
                )
              }
            />
          );
        })}
      </ListPacksContainer>
    </BasePage>
  );
}

export default ListarPacotesConstantes;
