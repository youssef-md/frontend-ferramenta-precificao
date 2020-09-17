import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { Container, EOFButton, Table } from './styles';
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
  console.log(constantesGeral);
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
          <button type="button">
            Salvar e criar um novo pacote de constantes
          </button>
        </header>

        <Table>
          <header>
            <p>Constantes Gerais</p>
            <p>Descrição</p>
            <p id="smaller">Valor</p>
            <p id="smaller">Ações</p>
          </header>
          {constantesGeral.map(
            ({ idConstante, nome: { nome }, descricao, valor }) => (
              <section key={idConstante}>
                <p>{nome}</p>
                <p>
                  {`${descricao.substr(0, 40)}${
                    descricao.length > 40 ? '...' : ''
                  }` || '---'}
                  {descricao.length > 40 && <span>{descricao}</span>}
                </p>
                <p id="smaller">R${valor}</p>
                <p id="smaller">
                  <button type="button">
                    <FaEdit size={22} />
                  </button>
                </p>
              </section>
            )
          )}
        </Table>

        <Table>
          <header>
            <p>Constantes Pré</p>
            <p>Descrição</p>
            <p id="smaller">Valor</p>
            <p id="smaller">Ações</p>
          </header>
          {constantesPre.map(
            ({ idConstante, nome: { nome }, descricao, valor }) => (
              <section key={idConstante}>
                <p>{nome}</p>
                <p>
                  {`${descricao.substr(0, 40)}${
                    descricao.length > 40 ? '...' : ''
                  }` || '---'}
                  {descricao.length > 40 && <span>{descricao}</span>}
                </p>
                <p id="smaller">R${valor}</p>
                <p id="smaller">
                  <button type="button">
                    <FaEdit size={22} />
                  </button>
                </p>
              </section>
            )
          )}
        </Table>

        <Table>
          <header>
            <p>Constantes Pós</p>
            <p>Descrição</p>
            <p id="smaller">Valor</p>
            <p id="smaller">Ações</p>
          </header>
          {constantesPos.map(
            ({ idConstante, nome: { nome }, descricao, valor }) => (
              <section key={idConstante}>
                <p>{nome}</p>
                <p>
                  {`${descricao.substr(0, 40)}${
                    descricao.length > 40 ? '...' : ''
                  }` || '---'}
                  {descricao.length > 40 && <span>{descricao}</span>}
                </p>
                <p id="smaller">R${valor}</p>
                <p id="smaller">
                  <button type="button">
                    <FaEdit size={22} />
                  </button>
                </p>
              </section>
            )
          )}
        </Table>

        <EOFButton type="secondary">
          Salvar e criar um novo pacote de constantes
        </EOFButton>
      </Container>
    </BasePage>
  );
}

export default ListarConstantes;
