import React from 'react';
import { FaCheck, FaDownload, FaTrash } from 'react-icons/fa';

import { ModelData, ModelCardContainer } from './styles';

function ModelCard({ modelo }) {
  return (
    <ModelCardContainer>
      <header>
        <FaCheck size={35} />
        <div>
          <button type="button">
            <FaDownload size={12} />
            Importar
          </button>
          {modelo.nome !== 'Modelo Principal' && (
            <button type="button">
              <FaTrash size={12} />
              Apagar
            </button>
          )}
        </div>
      </header>
      <ModelData>
        <strong>{modelo.nome}</strong>
        <p>{modelo.descricao}</p>
      </ModelData>
    </ModelCardContainer>
  );
}

export default ModelCard;
