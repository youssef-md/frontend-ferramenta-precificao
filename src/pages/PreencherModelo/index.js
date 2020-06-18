import React, { useState, useCallback } from 'react';

import {
  Container,
  FormSide,
  CustomInput as Input,
  InputsContainer,
} from './styles';
import Breadcrumbs from '../../components/Breadcrumbs';
import { PREENCHER_MODELO } from '../../routes/routeObjects';

import { formPages } from './jornadaUsuarioForms';

function PreencherModelo() {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const goToNextForm = useCallback(() => {
    setCurrentFormIndex(currentFormIndex + 1);
  }, [currentFormIndex]);

  const goToPreviousForm = useCallback(() => {
    setCurrentFormIndex(currentFormIndex - 1);
  }, [currentFormIndex]);

  const createInputs = useCallback(({ title, placeholder, auxText, type }) => {
    return (
      <Input
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
      <div>{formPages[currentFormIndex].form.inputs.map(createInputs)}</div>
    );
  }, [currentFormIndex, createInputs]);

  return (
    <Container>
      <button onClick={goToNextForm}>&larr;</button>
      <button onClick={goToPreviousForm}>&rarr;</button>

      <Breadcrumbs currentRouting={[PREENCHER_MODELO]} />
      <h2>{formPages[0].title}</h2>
      <p>Bolinhas</p>
      <h3>{formPages[currentFormIndex].subTitle}</h3>
      <h4>{formPages[currentFormIndex].description}</h4>
      <form>{createForm()}</form>
    </Container>
  );
}

export default PreencherModelo;
