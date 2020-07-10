import React from 'react';

import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CardContainer, Card, TextContainer } from './styles';

function CardService() {
  return (
    <CardContainer>
      <Card>
        <TextContainer>
          <p>Participar de Processo Seletivo para Curso de Graduação UnB</p>
          <p>Fundação Universidade de Brasília</p>
        </TextContainer>
        <Link to="/servico-selecionado">
          <FaChevronRight size={25} />
        </Link>
      </Card>
    </CardContainer>
  );
}

export default CardService;
