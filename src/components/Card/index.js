import React from 'react';

import { FaChevronRight } from 'react-icons/fa';
import { Container, TextContainer } from './styles';

function Card({ info, onServiceSelect, constantes }) {
  if (constantes) {
    return (
      <Container onClick={() => onServiceSelect(info)} constantes={constantes}>
        <TextContainer constantes={constantes}>
          <strong>Data de edição do pacote:</strong>
          <p>{info.date}</p>
        </TextContainer>
        <FaChevronRight size={22} />
      </Container>
    );
  }
  return (
    <Container onClick={() => onServiceSelect(info)} constantes={constantes}>
      <TextContainer constantes={constantes}>
        <strong>{info.nome}</strong>
        <p>{info.orgao.nomeOrgao}</p>
      </TextContainer>
      <FaChevronRight size={22} />
    </Container>
  );
}

export default Card;
