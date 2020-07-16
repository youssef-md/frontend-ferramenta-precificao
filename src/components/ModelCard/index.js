import React from 'react';
import { FaCheck, FaDownload, FaTrash } from 'react-icons/fa';

import { Card, ModelCardContainer } from './styles';

function ModelCard({ modelo }) {
  return (
    <ModelCardContainer>
      <header>
        <FaCheck size={35} />
        <div>
          <p style={{ color: '#2670E8' }}>
            <FaDownload size={12} />
            Importar
          </p>
          <p style={{ color: '#e60000' }}>
            <FaTrash size={12} />
            Apagar
          </p>
        </div>
      </header>
      <Card>
        <strong>{modelo.nome}</strong>
        <p>{modelo.descricao}</p>
      </Card>
    </ModelCardContainer>
  );
}

export default ModelCard;
