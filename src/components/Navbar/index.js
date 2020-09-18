import React, { useState, useEffect, useCallback } from 'react';
import { FaBars, FaUser, FaAdjust, FaPowerOff } from 'react-icons/fa';

import {
  Container,
  TopContainer,
  BottomContainer,
  LogInLogoutButton,
} from './styles';
import govBrLogo from '../../assets/govbr-logo.png';
import Sidedrawer from './Sidedrawer';

import { useGeneralAppContext } from '../../App';

function Navbar() {
  const {
    userToken,
    logUserOut,
    openLoginModal,
    toggleTheme,
  } = useGeneralAppContext();

  const [isSidedrawerOpen, setIsSidedrawerOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  const openSidedrawer = useCallback(() => setIsSidedrawerOpen(true), []);
  const closeSidedrawer = useCallback(() => setIsSidedrawerOpen(false), []);

  useEffect(function resizeHeaderOnScroll() {
    let prevScrollOffset = window.pageYOffset;

    window.onscroll = () => {
      const currentScrollOffset = window.pageYOffset;

      setIsSmall(
        prevScrollOffset < currentScrollOffset || currentScrollOffset !== 0
      );

      prevScrollOffset = currentScrollOffset;
    };
  }, []);

  return (
    <>
      <Sidedrawer
        onCloseSidedrawer={closeSidedrawer}
        isOpen={isSidedrawerOpen}
      />

      <Container isSmall={isSmall}>
        <TopContainer>
          <a href="https://www.gov.br/pt-br">
            <img src={govBrLogo} alt="gov.br" />
          </a>

          <ul>
            <li>
              <a
                href="https://www.gov.br/pt-br/orgaos-do-governo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Órgãos do Governo
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.br/acessoainformacao/pt-br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acesso à Informação
              </a>
            </li>
            <li>
              <a
                href="http://www4.planalto.gov.br/legislacao"
                target="_blank"
                rel="noopener noreferrer"
              >
                Legislação
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acessibilidade
              </a>
            </li>
            <li>
              <button onClick={toggleTheme} type="button">
                <FaAdjust size={14} />
              </button>
            </li>
            <li>
              <LogInLogoutButton
                onClick={userToken ? logUserOut : openLoginModal}
              >
                {userToken ? <FaPowerOff size={14} /> : <FaUser size={14} />}
                {userToken ? 'Sair' : 'Entrar'}
              </LogInLogoutButton>
            </li>
          </ul>
        </TopContainer>
        <BottomContainer>
          <button onClick={openSidedrawer} type="button">
            <FaBars size={22} />
          </button>
          <h4>Análise de Custos de Serviços</h4>
        </BottomContainer>
      </Container>
    </>
  );
}

export default Navbar;
