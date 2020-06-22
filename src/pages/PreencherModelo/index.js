import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { uuid } from 'uuidv4';

import FormProgressState from '../../components/FormProgressState';
import Breadcrumbs from '../../components/Breadcrumbs';
import { PREENCHER_MODELO } from '../../routes/routeObjects';

import {
  Container,
  FormSide,
  CustomInput as Input,
  InputsContainer,
  FormButton,
  ImageContainer,
} from './styles';

import { jornadaUsuarioForms } from './jornadaUsuarioForms';

function PreencherModelo() {
  const [formPages, setFormPages] = useState(jornadaUsuarioForms);
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const goToNextForm = useCallback(
    event => {
      if (event) event.preventDefault();
      if (currentFormIndex < formPages.length - 1)
        setCurrentFormIndex(currentFormIndex + 1);
    },
    [currentFormIndex, formPages]
  );

  const goToPreviousForm = useCallback(
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

      if (key === 'ArrowRight') goToNextForm();
      else if (key === 'ArrowLeft') goToPreviousForm();
    },
    [goToNextForm, goToPreviousForm]
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

  const createInputs = useCallback(({ title, placeholder, auxText, type }) => {
    return (
      <Input
        key={uuid()}
        label={title}
        placeholder={placeholder}
        auxiliaryText={auxText}
        type={type}
      />
    );
  }, []);

  const createForm = useCallback(() => {
    if (
      formPages[currentFormIndex].form.pre &&
      formPages[currentFormIndex].form.pos
    ) {
      return (
        <>
          <FormSide>
            <h5>Pré Transformação</h5>
            <InputsContainer>
              {formPages[currentFormIndex].form.inputs.map(createInputs)}
            </InputsContainer>
          </FormSide>
          <FormSide>
            <h5>Pós Transformação</h5>
            <InputsContainer>
              {formPages[currentFormIndex].form.inputs.map(createInputs)}
            </InputsContainer>
          </FormSide>
        </>
      );
    }
    return (
      <InputsContainer>
        {formPages[currentFormIndex].form.inputs.map(createInputs)}
      </InputsContainer>
    );
  }, [formPages, currentFormIndex, createInputs]);

  const currentPage = formPages[currentFormIndex];
  return (
    <Container>
      <Breadcrumbs currentRouting={[PREENCHER_MODELO]} />
      <h2>{formPages[0].title}</h2>

      <FormProgressState
        formPages={formPages}
        currentFormIndex={currentFormIndex}
      />

      <h3>{currentPage.subTitle}</h3>
      {currentPage.type === 'page-form' && <h4>{currentPage.description}</h4>}

      <form>
        <FormButton
          onClick={goToPreviousForm}
          type="secondary"
          disabled={currentFormIndex === 0}
        >
          <FaArrowLeft size={22} />
        </FormButton>

        {currentPage.form ? (
          createForm()
        ) : (
          <ImageContainer>
            <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
            <h4>{currentPage.description}</h4>
          </ImageContainer>
        )}

        <FormButton
          onClick={goToNextForm}
          type="secondary"
          disabled={currentFormIndex === formPages.length - 1}
        >
          <FaArrowRight size={22} />
        </FormButton>
      </form>
    </Container>
  );
}

export default PreencherModelo;
