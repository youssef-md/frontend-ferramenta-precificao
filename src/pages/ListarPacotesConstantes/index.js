import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import Card from '../../components/Card';
import { PACOTE_CONSTANTES } from '../../routes/routeObjects';
import api from '../../service/api';
import BasePage from '../BasePage';

import { ListPacksContainer } from './styles';

function ListarPacotesConstantes() {
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
      ,
      { value: month },
      ,
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
        {pacotes.map(pacote => {
          return (
            <Card
              constantes
              key={pacote.idPacote}
              info={{
                date: formatDate(pacote),
              }}
              onPress={() => console.log('clicou')}
            />
          );
        })}
      </ListPacksContainer>
    </BasePage>
  );
}

export default ListarPacotesConstantes;
