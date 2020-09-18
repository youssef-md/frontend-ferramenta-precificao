import React from 'react';

import BasePage from '../BasePage';
import Login from '../Login';
import Button from '../../components/Button';

import { useGeneralAppContext } from '../../App';

import servicosImg from '../../assets/servicos.png';
import relatorioImg from '../../assets/relatorio.png';
import custosImg from '../../assets/custos.png';

import {
  TitleHeader,
  CardsContainer,
  Card,
  Container,
  Indicator,
} from './styles';

function Home() {
  const { showLoginModal, openLoginModal } = useGeneralAppContext();

  return (
    <BasePage>
      <Container>
        {showLoginModal && <Login />}
        <TitleHeader>
          <h4>Bem vindo à Ferramenta de</h4>
          <h3>Análise de Custos de Serviços</h3>
          <p>
            Logo abaixo estão as etapas para estimar os custos de seu serviço:
          </p>
        </TitleHeader>

        <CardsContainer>
          <Card>
            <img src={servicosImg} alt="service" />
            <div>
              <Indicator>1</Indicator>
              <p>Selecione o serviço</p>
            </div>
          </Card>
          <Card>
            <img src={custosImg} alt="service" />
            <div>
              <Indicator>1</Indicator>
              <p>Selecione o serviço</p>
            </div>
          </Card>
          <Card>
            <img src={relatorioImg} alt="service" />
            <div>
              <Indicator>1</Indicator>
              <p>Selecione o serviço</p>
            </div>
          </Card>
        </CardsContainer>

        <Button onClick={openLoginModal} type="primary">
          Entrar na ferramenta
        </Button>
      </Container>
    </BasePage>
  );
}

export default Home;
