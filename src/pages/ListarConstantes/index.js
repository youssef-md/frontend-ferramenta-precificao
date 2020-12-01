import React, { useState, useCallback, useRef } from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaEdit, FaTimesCircle } from 'react-icons/fa';
import { format } from 'date-fns';
import { Container, EOFButton, Table } from './styles';
import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  PACOTE_CONSTANTES,
  PACOTE_SELECIONADO,
} from '../../routes/routeObjects';
import api from '../../service/api';
import { formatDate } from '../../utils/formatDate';

const geralNewValueInputs = [];
const preNewValueInputs = [];
const posNewValueInputs = [];

function ListarConstantes() {
  const {
    state: { pacote, canEditPack },
  } = useLocation();

  const history = useHistory();

  const filterConstantesByEtapa = useCallback(
    etapa =>
      pacote.constante.filter(
        constante => constante.etapaPrecificacao === etapa
      ),
    [pacote.constante]
  );

  const constantesGeral = useRef(filterConstantesByEtapa(null)).current;
  const constantesPre = useRef(filterConstantesByEtapa('Pré')).current;
  const constantesPos = useRef(filterConstantesByEtapa('Pós')).current;

  const [geralEdit, setGeralEdit] = useState(
    Array(constantesGeral.length).fill(false)
  );

  const [preEdit, setPreEdit] = useState(
    Array(constantesGeral.length).fill(false)
  );

  const [posEdit, setPosEdit] = useState(
    Array(constantesGeral.length).fill(false)
  );

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

  const toggleEditPre = useCallback(
    index => {
      const prev = [...preEdit];
      prev[index] = !prev[index];
      setPreEdit(prev);
    },
    [preEdit]
  );

  const toggleEditPos = useCallback(
    index => {
      const prev = [...posEdit];
      prev[index] = !prev[index];
      setPosEdit(prev);
    },
    [posEdit]
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

  const generateConstants = useCallback(
    (constants, editArrayState, tempForNewValueInput, toggleEditConstantType) =>
      constants.map(
        (
          { idConstante, nome: { nome }, descricao, valor, etapaPrecificacao },
          index
        ) => (
          <section key={`${idConstante}-${etapaPrecificacao}`}>
            <p>{nome}</p>
            <p>
              {descricao.length > 40 && (
                <span className="desc-popup">{descricao}</span>
              )}
              {generateDescription(descricao)}
            </p>
            <p className="smaller">
              {editArrayState[index] ? (
                <input
                  className="input-new-value"
                  type="number"
                  placeholder={`R$ ${valor}`}
                  onChange={e => {
                    tempForNewValueInput[index] = Number(e.target.value);
                  }}
                />
              ) : (
                `R$ ${valor}`
              )}
            </p>
            {canEditPack && (
              <p className="smaller">
                {editArrayState[index] ? (
                  getEditOnActions(
                    () => {
                      if (tempForNewValueInput[index]) {
                        constants[index].valor = tempForNewValueInput[index];
                      }
                      toggleEditConstantType(index);
                    },
                    toggleEditConstantType,
                    index
                  )
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleEditConstantType(index)}
                  >
                    <FaEdit size={22} style={{ height: 18 }} />
                  </button>
                )}
              </p>
            )}
          </section>
        )
      ),
    [canEditPack, generateDescription, getEditOnActions]
  );

  const { idPacote, dtPacote } = pacote;

  const submitConstants = useCallback(async () => {
    const formattedDate = format(new Date(), "YYY-MM-dd' 'HH:mm:ss");

    await api.post('pacote-constantes/create', {
      dtPacote: formattedDate,
      constante: [...constantesGeral, ...constantesPre, ...constantesPos],
    });
    history.goBack();
  }, [history, constantesGeral, constantesPre, constantesPos]);

  return (
    <BasePage>
      <Breadcrumbs
        currentRouting={[
          PACOTE_CONSTANTES,
          PACOTE_SELECIONADO(formatDate(dtPacote), idPacote),
        ]}
      />
      <Container>
        <header>
          <h3>Lista de constantes do pacote selecionado</h3>
          {canEditPack && (
            <button type="button" onClick={submitConstants}>
              Salvar e criar um novo pacote de constantes
            </button>
          )}
        </header>

        <Table>
          <header>
            <p>Constantes Gerais</p>
            <p>Descrição</p>
            <p className="smaller">Valor</p>
            {canEditPack && <p className="smaller">Ações</p>}
          </header>
          {generateConstants(
            constantesGeral,
            geralEdit,
            geralNewValueInputs,
            toggleEditGeral
          )}
        </Table>

        <Table>
          <header>
            <p>Constantes Pré</p>
            <p>Descrição</p>
            <p className="smaller">Valor</p>
            {canEditPack && <p className="smaller">Ações</p>}
          </header>
          {generateConstants(
            constantesPre,
            preEdit,
            preNewValueInputs,
            toggleEditPre
          )}
        </Table>

        <Table>
          <header>
            <p>Constantes Pós</p>
            <p>Descrição</p>
            <p className="smaller">Valor</p>
            {canEditPack && <p className="smaller">Ações</p>}
          </header>
          {generateConstants(
            constantesPos,
            posEdit,
            posNewValueInputs,
            toggleEditPos
          )}
        </Table>

        {canEditPack && (
          <EOFButton type="secondary" onClick={submitConstants}>
            Salvar e criar um novo pacote de constantes
          </EOFButton>
        )}
      </Container>
    </BasePage>
  );
}

export default ListarConstantes;
