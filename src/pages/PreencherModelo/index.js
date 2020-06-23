import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { uuid } from 'uuidv4';
import { Transition } from 'react-spring/renderprops';

import FormProgressState from '../../components/FormProgressState';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageStep from './PageStep';
import { PREENCHER_MODELO } from '../../routes/routeObjects';

import { jornadaUsuarioForms } from './jornadaUsuarioForms';
import { Container, FormButton, FormButtonContainer } from './styles';

function PreencherModelo() {
  const [formPages, setFormPages] = useState(jornadaUsuarioForms);
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
    <Container>
      <Breadcrumbs currentRouting={[PREENCHER_MODELO]} />
      <h2>{formPages[0].title}</h2>
      <FormProgressState
        formPages={formPages}
        currentFormIndex={currentFormIndex}
      />

      <FormButtonContainer>
        <FormButton
          onClick={goToPreviousPage}
          type="secondary"
          disabled={currentFormIndex === 0}
        >
          <FaArrowLeft size={22} />
        </FormButton>

        <FormButton
          onClick={goToNextPage}
          type="secondary"
          disabled={currentFormIndex === formPages.length - 1}
        >
          <FaArrowRight size={22} />
        </FormButton>
      </FormButtonContainer>

      <Transition
        keys={Math.random()}
        from={{ transform: 'translate3d(200%, 0, 0)', opacity: 0 }}
        enter={{ transform: 'translate3d(0%, 0, 0)', opacity: 1 }}
        leave={{ transform: 'translate3d(-200%, 0, 0)', opacity: 0 }}
      >
        {item => props => (
          <PageStep page={formPages[currentFormIndex]} style={props} />
        )}
      </Transition>
    </Container>
  );
}

export default PreencherModelo;
