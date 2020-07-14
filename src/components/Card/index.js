import React from 'react';

import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, TextContainer } from './styles';

function Card({ info }) {
  return (
    <Container>
      <TextContainer>
        <strong>{info.nome}</strong>
        <p>{info.orgao.nomeOrgao}</p>
      </TextContainer>
      <Link to="/servico-selecionado">
        <FaChevronRight size={22} />
      </Link>
    </Container>
  );
}

export default Card;
