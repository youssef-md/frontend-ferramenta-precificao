import React from 'react';
import { FaCheck, FaDownload, FaTrash } from 'react-icons/fa';
import api from '../../service/api';

import { ModelData, ModelCardContainer } from './styles';

function ModelCard({
  modelo,
  handleSelectFunction,
  handleDeleteFunction,
  handleUpdateFunction,
  selectModel,
}) {
  async function deleteModel() {
    await api.delete(`modelos/${modelo.idModelo}/`);
    handleDeleteFunction(modelo);
  }

  async function importModelFromLimesurvey() {
    try {
      const response = await api.get(
        `modelos/atualizar_dados/${modelo.idModelo}`
      );

      const modeloImportado = response.data;

      if (modeloImportado) {
        handleUpdateFunction(modeloImportado);
      } else {
        alert('Erro ao importar o modelo do limesurvey');
      }
    } catch (error) {
      alert('Erro ao importar o modelo do limesurvey');
    }
  }

  return (
    <ModelCardContainer>
      <header>
        {selectModel ? <FaCheck size={35} /> : <div />}
        <div>
          <button type="button" onClick={importModelFromLimesurvey}>
            <FaDownload size={12} />
            Importar
          </button>
          {modelo.nome !== 'Modelo Principal' && (
            <button type="button" onClick={() => deleteModel(modelo)}>
              <FaTrash size={12} />
              Apagar
            </button>
          )}
        </div>
      </header>
      <ModelData onClick={() => handleSelectFunction(modelo)}>
        <strong>{modelo.nome}</strong>
        <p>{modelo.descricao}</p>
      </ModelData>
    </ModelCardContainer>
  );
}

export default ModelCard;
