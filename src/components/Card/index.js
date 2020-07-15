import React from 'react';

import { FaChevronRight } from 'react-icons/fa';
import { Container, TextContainer } from './styles';

function Card({ info, onServiceSelect }) {
  return (
    <Container onClick={() => onServiceSelect(info)}>
      <TextContainer>
        <strong>{info.nome}</strong>
        <p>{info.orgao.nomeOrgao}</p>
      </TextContainer>
      <FaChevronRight size={22} />
    </Container>
  );
}

export default Card;
