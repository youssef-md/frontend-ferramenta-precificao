import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Backdrop, SideNav, NavHead, NavItem } from './styles';

import govBrLogo from '../../../assets/govbr-logo.png';

function Sidedrawer({ onCloseSidedrawer }) {
  return (
    <>
      <SideNav>
        <NavHead>
          <button onClick={onCloseSidedrawer} type="button">
            <FaTimes size={22} />
          </button>
          <a href="https://www.gov.br/">
            <img src={govBrLogo} alt="gov.br" />
          </a>
        </NavHead>
        <NavItem to="/oi">Pacote de Constantes</NavItem>
        <NavItem to="/oi">Lista de Serviços</NavItem>
      </SideNav>
      <Backdrop onClick={onCloseSidedrawer} />
    </>
  );
}

export default Sidedrawer;
