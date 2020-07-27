import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Transition } from 'react-spring/renderprops';
import { useLocation } from 'react-router-dom';

import FormProgressState from '../../components/FormProgressState';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageStep from './PageStep';
import {
  LISTAR_SERVICOS,
  SERVICO_SELECIONADO,
  PREENCHER_MODELO_JORNADA_USUARIO,
} from '../../routes/routeObjects';

import { jornadaUsuarioForms } from './pagesObject';
import { Container, RightFormButton, LeftFormButton } from './styles';
import BasePage from '../BasePage';

function PreencherModelo() {
  const {
    state: { idServico, nomeServico },
  } = useLocation();
  // receber o objeto com os campos via params ao cadastrar esse componente no react router
  // passar o id do modelo para a rota? pra saber onde deve fazer o post com o json? (vai que ele só copia e cola a url)

  // Na tela do serviço selecionado, checar se estou recebendo o obj do serviço, se ele acessar a rota diretamente tem que fazer uma req
  // pegando o id que ta na url

  const formPages = jornadaUsuarioForms;
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const goToNextPage = useCallback(
    event => {
      if (event) event.preventDefault();
      if (currentFormIndex < formPages.length - 1)
        setCurrentFormIndex(currentFormIndex + 1);
    },
    [currentFormIndex, formPages]
  );

  const goToPreviousPage = useCallback(
    event => {
      if (event) event.preventDefault();
      if (currentFormIndex > 0) setCurrentFormIndex(currentFormIndex - 1);
    },
    [currentFormIndex]
  );

  const handleKeyDownToSwitchPage = useCallback(
    event => {
      const { key, target } = event;
      if (target.nodeName === 'INPUT') return;

      if (key === 'ArrowRight') goToNextPage();
      else if (key === 'ArrowLeft') goToPreviousPage();
    },
    [goToNextPage, goToPreviousPage]
  );

  useEffect(
    function registerKeydownEventListener() {
      window.addEventListener('keydown', handleKeyDownToSwitchPage);

      return function remoteKeydownListener() {
        window.removeEventListener('keydown', handleKeyDownToSwitchPage);
      };
    },
    [handleKeyDownToSwitchPage]
  );

  return (
    <BasePage>
      <Container>
        <Breadcrumbs
          currentRouting={[
            LISTAR_SERVICOS,
            SERVICO_SELECIONADO(nomeServico, idServico),
            PREENCHER_MODELO_JORNADA_USUARIO,
          ]}
        />
        <h2>{formPages[0].title}</h2>
        <FormProgressState
          formPages={formPages}
          currentFormIndex={currentFormIndex}
        />

        <LeftFormButton
          onClick={goToPreviousPage}
          type="secondary"
          disabled={currentFormIndex === 0}
        >
          <FaArrowLeft size={22} />
        </LeftFormButton>

        <RightFormButton
          onClick={goToNextPage}
          type="secondary"
          disabled={currentFormIndex === formPages.length - 1}
        >
          <FaArrowRight size={22} />
        </RightFormButton>

        <Transition
          keys={Math.random()}
          from={{ transform: 'translate3d(200%, 0, 0)', opacity: 0 }}
          enter={{ transform: 'translate3d(0%, 0, 0)', opacity: 1 }}
          leave={{ transform: 'translate3d(-200%, 0, 0)', opacity: 0 }}
        >
          {_ => props => (
            <PageStep page={formPages[currentFormIndex]} style={props} />
          )}
        </Transition>
      </Container>
    </BasePage>
  );
}

export default PreencherModelo;
