import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { Backdrop, SideNav, NavHead, NavItem } from './styles';

import govBrLogo from '../../../assets/govbr-logo.png';
import {
  PACOTE_CONSTANTES,
  LISTAR_SERVICOS,
} from '../../../routes/routeObjects';

function Sidedrawer({ onCloseSidedrawer, isOpen }) {
  return (
    <>
      <SideNav isOpen={isOpen}>
        <NavHead>
          <button onClick={onCloseSidedrawer} type="button">
            <FaTimes size={22} />
          </button>
          <a href="https://www.gov.br/">
            <img src={govBrLogo} alt="gov.br" />
          </a>
        </NavHead>
        <NavItem to={PACOTE_CONSTANTES.route}>Pacote de Constantes</NavItem>
        <NavItem to={LISTAR_SERVICOS.route}>Lista de Serviços</NavItem>
        <div>
          <NavItem to="https://www.gov.br/pt-br/orgaos-do-governo">
            Órgãos do Governo
          </NavItem>
          <NavItem to="https://www.gov.br/acessoainformacao/pt-br">
            Acesso à informação
          </NavItem>
          <NavItem to="http://www4.planalto.gov.br/legislacao">
            Legislação
          </NavItem>
          <NavItem to="https://www.gov.br/governodigital/pt-br/acessibilidade-digital">
            Acessibilidade
          </NavItem>
        </div>
      </SideNav>
      {isOpen && <Backdrop onClick={onCloseSidedrawer} />}
    </>
  );
}

export default Sidedrawer;
