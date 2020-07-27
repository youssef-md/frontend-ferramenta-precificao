import React, { useCallback } from 'react';
import { uuid } from 'uuidv4';

import { Form } from '@unform/web';
import {
  Container,
  FormSide,
  CustomInput as Input,
  InputsContainer,
  ImageContainer,
} from './styles';

function PageStep({ page, style }) {
  const createInputs = useCallback(({ title, placeholder, auxText, type }) => {
    return (
      <Input
        key={uuid()}
        name={uuid()}
        type={type}
        label={title}
        placeholder={placeholder}
        auxiliaryText={auxText}
      />
    );
  }, []);

  const createForm = useCallback(() => {
    if (page.form.pre && page.form.pos) {
      return (
        <>
          <FormSide>
            <h5>Pré Transformação</h5>
            <InputsContainer>
              {page.form.inputs.map(createInputs)}
            </InputsContainer>
          </FormSide>
          <FormSide>
            <h5>Pós Transformação</h5>
            <InputsContainer>
              {page.form.inputs.map(createInputs)}
            </InputsContainer>
          </FormSide>
        </>
      );
    }
    return (
      <InputsContainer>{page.form.inputs.map(createInputs)}</InputsContainer>
    );
  }, [page, createInputs]);

  return (
    <Container style={style}>
      <h3>{page.subTitle}</h3>
      {page.type === 'page-form' && <h4>{page.description}</h4>}

      <Form>
        {page.form ? (
          createForm()
        ) : (
          <ImageContainer>
            <img
              alt="img"
              src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
            <h4>{page.description}</h4>
          </ImageContainer>
        )}
      </Form>
    </Container>
  );
}

export default PageStep;
