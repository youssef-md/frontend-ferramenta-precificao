import React from 'react';
import { FaCheck, FaDownload, FaTrash } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import api from '../../service/api';

import { ModelData, ModelCardContainer } from './styles';

function ModelCard({
  modelo,
  handleSelectFunction,
  handleDeleteFunction,
  selectModel,
}) {
  async function deleteModel() {
    await api.delete(`modelos/${modelo.idModelo}/`);
    handleDeleteFunction(modelo);
  }

  return (
    <ModelCardContainer>
      <header>
        {selectModel ? <FaCheck size={35} /> : <div />}
        <div>
          <button type="button">
            <FaDownload size={12} />
            Importar
          </button>
          {modelo.nome !== 'Modelo Principal' && (
            <button type="button" onClick={deleteModel}>
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
