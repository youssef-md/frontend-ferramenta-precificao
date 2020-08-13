import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa';
import BasePage from '../BasePage';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  LISTAR_SERVICOS,
  SERVICO_SELECIONADO,
  PREENCHER_MODELO_JORNADA_USUARIO,
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

function ServicoSelecioado() {
  const history = useHistory();

  const [modelos, setModelos] = useState([]);
  const [modeloSelecionado, setModeloSelecionado] = useState();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const {
    state: { servico },
  } = useLocation();

  const defaultSelectModel = useCallback(listaModelos => {
    setModeloSelecionado(
      listaModelos.filter(modelo => modelo.nome === 'Modelo Principal')[0]
    );
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
      defaultSelectModel(modelos);
    },
    [modelos, defaultSelectModel]
  );

  useEffect(() => {
    api.get(`modelos/servico/${servico.idServico}/`).then(response => {
      setModelos(response.data);
      defaultSelectModel(response.data);
    });
  }, [servico, defaultSelectModel]);

  const navigateToJornadaUsuario = useCallback(() => {
    const { idServico, nome } = servico;
    history.push(PREENCHER_MODELO_JORNADA_USUARIO.route, {
      idServico,
      nomeServico: nome,
    });
  }, [history, servico]);

  const selectModel = modelo => {
    setModeloSelecionado(modelo);
  };

  const closeCreateModal = useCallback(() => {
    setShowCreateModal(false);
  }, []);

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
        <Button type="secondary" onClick={navigateToJornadaUsuario}>
          Jornada do Usuário
        </Button>

        <RightArrow />

        <Button type="secondary" disabled>
          Custos do Órgão
        </Button>
        <RightArrow />

        <Button type="secondary" disabled>
          Custos de Transformação
        </Button>

        <RightArrow />

        <Button type="primary" disabled>
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
                handleSelectFunction={() => selectModel(modelo)}
                handleDeleteFunction={() => deleteModel(modelo)}
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
