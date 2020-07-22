import React from 'react';

import { FaChevronRight } from 'react-icons/fa';
import { Container, TextContainer } from './styles';

function Card({ info, onPress, constantes }) {
  return (
    <Container onClick={() => onPress(info)}>
      <TextContainer constantes={constantes}>
        <strong>{constantes ? 'Data de edição do pacote:' : info.nome}</strong>
        <p>{constantes ? info.date : info.orgao.nomeOrgao}</p>
      </TextContainer>
      <FaChevronRight size={22} />
    </Container>
  );
}

export default Card;
