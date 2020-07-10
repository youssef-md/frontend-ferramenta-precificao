import React from 'react';

import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, TextContainer } from './styles';

function Card() {
  return (
    <Container>
      <TextContainer>
        <strong>
          Participar de Processo Seletivo para Curso de Graduação UnB
        </strong>
        <p>Fundação Universidade de Brasília</p>
      </TextContainer>
      <Link to="/servico-selecionado">
        <FaChevronRight size={22} />
      </Link>
    </Container>
  );
}

export default Card;
