import React, { useState, useCallback } from 'react';

import { useLocation } from 'react-router-dom';
import { FaCheckCircle, FaEdit, FaTimesCircle } from 'react-icons/fa';
import { Container, EOFButton, Table } from './styles';
import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  PACOTE_CONSTANTES,
  PACOTE_SELECIONADO,
} from '../../routes/routeObjects';

const geralNewValueInputs = [];
const preNewValueInputs = [];
const posNewValueInputs = [];

function ListarConstantes() {
  const {
    state: { pacote, canEditPack },
  } = useLocation();

  const filterConstantesByEtapa = useCallback(
    etapa =>
      pacote.constante.filter(
        constante => constante.etapaPrecificacao === etapa
      ),
    [pacote.constante]
  );

  const constantesGeral = filterConstantesByEtapa(null);
  const [geralEdit, setGeralEdit] = useState(
    Array(constantesGeral.length).fill(false)
  );

  const constantesPre = filterConstantesByEtapa('Pré');

  const constantesPos = filterConstantesByEtapa('Pós');

  const generateDescription = useCallback(
    descricao =>
      `${descricao.substr(0, 40)}${descricao.length > 40 ? '...' : ''}` ||
      '---',
    []
  );

  const toggleEditGeral = useCallback(
    index => {
      const prev = [...geralEdit];
      prev[index] = !prev[index];
      setGeralEdit(prev);
    },
    [geralEdit]
  );

  const getEditOnActions = useCallback(
    (okAction, noAction, index) => (
      <span className="new-value">
        <button type="button" onClick={() => okAction(index)}>
          <FaCheckCircle size={22} color="#2670E8" />
        </button>
        <button type="button" onClick={() => noAction(index)}>
          <FaTimesCircle size={22} color="#e60000" />
        </button>
      </span>
    ),
    []
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
          <button type="button">
            Salvar e criar um novo pacote de constantes
          </button>
        </header>

        <Table>
          <header>
            <p>Constantes Gerais</p>
            <p>Descrição</p>
            <p className="smaller">Valor</p>
            {canEditPack && <p className="smaller">Ações</p>}
          </header>
          {constantesGeral.map(
            ({ idConstante, nome: { nome }, descricao, valor }, index) => (
              <section key={idConstante}>
                <p>{nome}</p>
                <p>
                  {descricao.length > 40 && (
                    <span className="desc-popup">{descricao}</span>
                  )}
                  {generateDescription(descricao)}
                </p>
                <p className="smaller">
                  {geralEdit[index] ? (
                    <input
                      className="input-new-value"
                      type="number"
                      placeholder={`R$ ${valor}`}
                      onChange={e => {
                        geralNewValueInputs[index] = Number(e.target.value);
                      }}
                    />
                  ) : (
                    `R$ ${valor}`
                  )}
                </p>
                {canEditPack && (
                  <p className="smaller">
                    {geralEdit[index] ? (
                      getEditOnActions(
                        () => {
                          if (geralNewValueInputs[index]) {
                            constantesGeral[index].valor =
                              geralNewValueInputs[index];
                          }
                          toggleEditGeral(index);
                        },
                        toggleEditGeral,
                        index
                      )
                    ) : (
                      <button
                        type="button"
                        onClick={() => toggleEditGeral(index)}
                      >
                        <FaEdit size={22} style={{ height: 18 }} />
                      </button>
                    )}
                  </p>
                )}
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
