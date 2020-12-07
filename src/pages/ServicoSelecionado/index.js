import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa';
import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  LISTAR_SERVICOS,
  SERVICO_SELECIONADO,
  PREENCHER_JORNADA_USUARIO,
  PREENCHER_CUSTOS_ORGAO,
  PREENCHER_CUSTOS_TRANSFORMACAO,
  GERAR_RELATORIO,
} from '../../routes/routeObjects';
import api from '../../service/api';
import ModelCard from '../../components/ModelCard';
import Button from '../../components/Button';
import {
  TitleHeader,
  Buttons,
  RightArrow,
  ModelSection,
  Models,
} from './styles';
import CreateModel from '../CreateModel';

let etapaAtividadesIds = null;

function ServicoSelecioado() {
  const history = useHistory();
  const {
    state: { servico },
  } = useLocation();

  const [modelos, setModelos] = useState([]);
  const [modeloSelecionado, setModeloSelecionado] = useState();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const getEtapaAtividadesIds = useCallback(async idModelo => {
    await api.get(`modelos/etapaAtividades/${idModelo}`).then(response => {
      etapaAtividadesIds = response.data;
    });
  }, []);

  const addModel = useCallback(
    modelo => {
      setModelos([...modelos, modelo]);
      setModeloSelecionado(modelo);
    },
    [modelos]
  );

  const deleteModel = useCallback(
    modeloApagado => {
      setModelos(
        modelos.filter(modelo => modelo.idModelo !== modeloApagado.idModelo)
      );
      // defaultSelectModel(modelos);
      setModeloSelecionado(modelos[0]);
    },
    [modelos]
  );

  const updateImportedModel = useCallback(
    modeloImportado => {
      setModelos(
        modelos.map(modelo => {
          if (modelo.idModelo === modeloImportado.idModelo) {
            return modeloImportado;
          }
          return modelo;
        })
      );
      setModeloSelecionado(modeloImportado);
    },
    [modelos]
  );

  const navigateToEtapasPreenchimento = useCallback(
    route => {
      history.push(route, {
        servico,
        etapaAtividadesIds,
      });
    },
    [history, servico]
  );

  const selectModel = async modelo => {
    await getEtapaAtividadesIds(modeloSelecionado.idModelo);
    setModeloSelecionado(modelo);
  };

  const closeCreateModal = useCallback(() => {
    setShowCreateModal(false);
  }, []);

  useEffect(() => {
    if (modeloSelecionado && modeloSelecionado.idModelo) {
      getEtapaAtividadesIds(modeloSelecionado.idModelo);
    }
  }, [modeloSelecionado, getEtapaAtividadesIds]);

  useEffect(() => {
    api.get(`modelos/servico/${servico.idServico}/`).then(async response => {
      setModeloSelecionado(response.data[0]);
      setModelos(response.data);
    });
  }, [servico, getEtapaAtividadesIds]);

  return (
    <BasePage>
      <Breadcrumbs
        currentRouting={[
          LISTAR_SERVICOS,
          SERVICO_SELECIONADO(servico.nome, servico.idServico),
        ]}
      />
      <TitleHeader>
        <h3>{servico.nome}</h3>
        <h4>{servico.orgao.nomeOrgao}</h4>
      </TitleHeader>
      <Buttons>
        <Button
          type="secondary"
          onClick={() =>
            navigateToEtapasPreenchimento(PREENCHER_JORNADA_USUARIO.route)
          }
        >
          Jornada do Usuário
        </Button>

        <RightArrow />

        <Button
          type="secondary"
          onClick={() =>
            navigateToEtapasPreenchimento(PREENCHER_CUSTOS_ORGAO.route)
          }
        >
          Custos do Órgão
        </Button>
        <RightArrow />

        <Button
          type="secondary"
          onClick={() =>
            navigateToEtapasPreenchimento(PREENCHER_CUSTOS_TRANSFORMACAO.route)
          }
        >
          Custos de Transformação
        </Button>

        <RightArrow />

        <Button
          type="primary"
          onClick={() =>
            history.push(GERAR_RELATORIO.route, {
              servico,
              modelo: modeloSelecionado,
            })
          }
        >
          Gerar Relatório
        </Button>
      </Buttons>
      {showCreateModal && (
        <CreateModel
          closeCreateModal={closeCreateModal}
          handleFunction={addModel}
          servico={servico}
        />
      )}
      <ModelSection>
        <h4>Modelos</h4>
        <Models>
          {modelos.map(modelo => {
            return (
              <ModelCard
                key={modelo.idModelo}
                handleSelectFunction={selectModel}
                handleDeleteFunction={deleteModel}
                handleUpdateFunction={updateImportedModel}
                selectModel={
                  modeloSelecionado &&
                  modeloSelecionado.idModelo === modelo.idModelo
                }
                modelo={modelo}
              />
            );
          })}
          <Button type="secondary" onClick={() => setShowCreateModal(true)}>
            <FaPlus size={18} />
            Criar novo modelo de custos
          </Button>
        </Models>
      </ModelSection>
    </BasePage>
  );
}

export default ServicoSelecioado;
