import React from 'react';

import { Container, Content } from './styles';

import logoWhite from '../../assets/govbr-white.png';
import acessoInfo from '../../assets/acesso-informacao.png';
import patria from '../../assets/patria-amada.png';

function Footer() {
  return (
    <Container>
      <Content>
        <img src={logoWhite} alt="Gov.br" />
        <div>
          <a href="https://www.gov.br/acessoainformacao/pt-br">
            <img src={acessoInfo} alt="Acesso à Informação" />
          </a>
          <a href="https://www.gov.br/">
            <img src={patria} alt="Pátria Amada" />
          </a>
        </div>
      </Content>
    </Container>
  );
}

export default Footer;
