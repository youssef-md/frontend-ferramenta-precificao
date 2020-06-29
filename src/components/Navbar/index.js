import React from 'react';
import { FaBars } from 'react-icons/fa';

import { Container, TopContainer, BottomContainer } from './styles';
import govBrLogo from '../../assets/govbr-logo.png';

function Navbar() {
  return (
    <Container>
      <TopContainer>
        <a href="https://www.gov.br/pt-br">
          <img src={govBrLogo} alt="gov.br" />
        </a>
        <ul>
          <li>
            <a
              href="https://www.gov.br/pt-br/orgaos-do-governo"
              target="_blank"
              rel="noreferrer"
            >
              Órgãos do Governo
            </a>
          </li>
          <li>
            <a
              href="https://www.gov.br/acessoainformacao/pt-br"
              target="_blank"
              rel="noreferrer"
            >
              Acesso à Informação
            </a>
          </li>
          <li>
            <a
              href="http://www4.planalto.gov.br/legislacao"
              target="_blank"
              rel="noreferrer"
            >
              Legislação
            </a>
          </li>
          <li>
            <a
              href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital"
              target="_blank"
              rel="noreferrer"
            >
              Acessibilidade
            </a>
          </li>
        </ul>
      </TopContainer>
      <BottomContainer>
        <FaBars size={25} />
        <h4>Análise de Custos de Serviços</h4>
      </BottomContainer>
    </Container>
  );
}

export default Navbar;
