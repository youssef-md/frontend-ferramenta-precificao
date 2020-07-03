import React, { useState, useCallback } from 'react';
import { FaBars, FaUser, FaAdjust } from 'react-icons/fa';
import { useTransition, animated } from 'react-spring';

import {
  Container,
  TopContainer,
  BottomContainer,
  LogInButton,
} from './styles';
import govBrLogo from '../../assets/govbr-logo.png';
import Sidedrawer from './Sidedrawer';

function Navbar() {
  const [isSidedrawerOpen, setIsSidedrawerOpen] = useState(false);

  const openSidedrawer = useCallback(() => setIsSidedrawerOpen(true), []);
  const closeSidedrawer = useCallback(() => setIsSidedrawerOpen(false), []);

  return (
    <>
      <Sidedrawer
        onCloseSidedrawer={closeSidedrawer}
        isOpen={isSidedrawerOpen}
      />

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
            <li>
              <button type="button">
                <FaAdjust size={14} />
              </button>
            </li>
            <li>
              <LogInButton>
                <FaUser size={14} />
                Entrar
              </LogInButton>
            </li>
          </ul>
        </TopContainer>
        <BottomContainer>
          <button onClick={() => setIsSidedrawerOpen(true)} type="button">
            <FaBars size={22} />
          </button>
          <h4>Análise de Custos de Serviços</h4>
        </BottomContainer>
      </Container>
    </>
  );
}

export default Navbar;
