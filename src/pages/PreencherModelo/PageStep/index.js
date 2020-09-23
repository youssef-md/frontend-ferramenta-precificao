import React, { useCallback, useImperativeHandle, useRef } from 'react';

import { Form } from '@unform/web';
import {
  Container,
  FormSide,
  CustomInput as Input,
  InputsContainer,
  ImageContainer,
  PageEndCTA,
  ButtonsContainer,
} from './styles';
import Button from '../../../components/Button';

function PageStep({ page }, ref) {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      get containerPageStep() {
        return containerRef.current;
      },
      get formRef() {
        return formRef.current;
      },
    };
  });

  const createInputs = useCallback(
    ({ title, name, placeholder, auxText, type, maskType }, formType) => {
      return (
        <Input
          key={name}
          name={`${name}${formType && formType}`}
          type={type}
          label={title}
          maskType={maskType}
          placeholder={placeholder}
          auxiliaryText={auxText}
        />
      );
    },
    []
  );

  const createForm = useCallback(() => {
    if (page.form.pre && page.form.pos) {
      return (
        <>
          <FormSide>
            <h5>Pré Transformação</h5>
            <InputsContainer>
              {page.form.inputs.map(map => createInputs(map, 'Pre'))}
            </InputsContainer>
          </FormSide>
          <FormSide>
            <h5>Pós Transformação</h5>
            <InputsContainer>
              {page.form.inputs.map(map => createInputs(map, 'Pos'))}
            </InputsContainer>
          </FormSide>
        </>
      );
    }
    return (
      <InputsContainer>{page.form.inputs.map(createInputs)}</InputsContainer>
    );
  }, [page, createInputs]);

  const isPageForm = useCallback(() => page.type === 'page-form', [page.type]);
  const isPageIntro = useCallback(() => page.type === 'page-intro', [
    page.type,
  ]);
  const isPageEnd = useCallback(() => page.type === 'page-end', [page.type]);

  return (
    <Container ref={containerRef}>
      {!isPageEnd() && <h3>{page.subTitle}</h3>}
      {isPageForm() && <h4>{page.description}</h4>}

      <Form ref={formRef}>
        {isPageForm() && createForm()}

        {isPageIntro() && (
          <ImageContainer>
            <img
              alt="img"
              src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
            <h4>{page.description}</h4>
          </ImageContainer>
        )}

        {isPageEnd() && (
          <PageEndCTA>
            <h3>{page.subTitle}</h3>
            <h4>{page.description}</h4>
            <ButtonsContainer>
              {page.buttons.map(({ text, route }) => (
                <Button key={route} type="secondary">
                  {text}
                </Button>
              ))}
            </ButtonsContainer>
          </PageEndCTA>
        )}
      </Form>
    </Container>
  );
}

export default React.forwardRef(PageStep);
