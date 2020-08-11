import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
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

const mergedStepData = {};

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
  const currentPageRef = useRef(null);

  const submitData = useCallback(() => {
    // fazer o post com o mergedStepData
    // Rota: muda
  }, []);

  const goToNextPage = useCallback(
    event => {
      if (event) event.preventDefault();

      // Sempre que for para proxima página revalidar e resalvar os dados;
      // Validar os inputs;
      // Fazer o merge com o mergedStepData;

      if (currentFormIndex < formPages.length - 1) {
        const { current } = currentPageRef;
        current.style.transform = 'translateX(-200px)';
        current.style.opacity = 0;

        setTimeout(() => {
          setCurrentFormIndex(currentFormIndex + 1);
          current.style.transform = 'translateX(200px)';
        }, 200);
      }
    },
    [currentFormIndex, formPages]
  );

  const goToPreviousPage = useCallback(
    event => {
      if (event) event.preventDefault();
      if (currentFormIndex > 0) {
        const { current } = currentPageRef;
        current.style.transform = 'translateX(200px)';
        current.style.opacity = 0;

        setTimeout(() => {
          setCurrentFormIndex(currentFormIndex - 1);
          current.style.transform = 'translateX(-200px)';
        }, 200);
      }
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

  useEffect(() => {
    const { current } = currentPageRef;
    setTimeout(() => {
      current.style.opacity = 1;
      current.style.transform = 'translateX(0)';
    }, 250);
  }, [currentFormIndex]);

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

        <PageStep ref={currentPageRef} page={formPages[currentFormIndex]} />
      </Container>
    </BasePage>
  );
}

export default PreencherModelo;
