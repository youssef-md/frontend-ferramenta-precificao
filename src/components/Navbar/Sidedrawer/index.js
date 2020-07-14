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
      </SideNav>
      {isOpen && <Backdrop onClick={onCloseSidedrawer} />}
    </>
  );
}

export default Sidedrawer;
