import React from 'react';

import {
  Container,
  FormSide,
  CustomInput as Input,
  InputsContainer,
} from './styles';

const formPages = [
  // {
  //   title: 'Etapas do Serviço - Jornada do Usuário',
  //   subTitle: 'Etapa 1: Buscar Informações',
  //   image: 'fake-image',
  //   description:
  //     'Nesta etapa você deverá que preencher não sei o que, bla bla bla buscar informações lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  //   valido: false,
  // },
  {
    title: 'Etapas do Serviço - Jornada do Usuário',
    subTitle: 'Etapa 1 - Atividade: Digital',
    description: 'Buscar informações por canal digital',
    valido: false,
    form: {
      pre: true,
      pos: true,
      inputs: [
        {
          title: 'Tempo Médio',
          placeholder: '123',
          type: 'string',
          auxText: 'Tempo em horas',
        },
        {
          title: 'Tempo Médio',
          placeholder: '123',
          type: 'string',
          auxText: 'Tempo em horas',
        },
        {
          title: 'Tempo Médio',
          placeholder: '123',
          type: 'string',
          auxText: 'Tempo em horas',
        },
        {
          title: 'Tempo Médio',
          placeholder: '123',
          type: 'string',
          auxText: 'Tempo em horas',
        },
        {
          title: 'Tempo Médio',
          placeholder: '123',
          type: 'string',
          auxText: 'Tempo em horas',
        },
      ],
    },
  },
];

function PreencherModelo() {
  function createForm(input) {
    return (
      <Input
        label={input.title}
        placeholder={input.placeholder}
        auxiliaryText={input.auxText}
        type={input.type}
      />
    );
  }

  return (
    <Container>
      <h2>{formPages[0].title}</h2>
      <p>Bolinhas</p>
      {formPages.map(function createPage(page) {
        return (
          <>
            <h3>{page.subTitle}</h3>
            <h4>{page.description}</h4>

            <form>
              {page.form.pre && page.form.pos ? (
                <>
                  <FormSide>
                    <h5>Pré Transformação</h5>
                    <InputsContainer>
                      {page.form.inputs.map(createForm)}
                    </InputsContainer>
                  </FormSide>
                  <FormSide>
                    <h5>Pós Transformação</h5>
                    <InputsContainer>
                      {page.form.inputs.map(createForm)}
                    </InputsContainer>
                  </FormSide>
                </>
              ) : (
                <div>{page.form.inputs.map(createForm)}</div>
              )}
            </form>
          </>
        );
      })}
    </Container>
  );
}

export default PreencherModelo;
