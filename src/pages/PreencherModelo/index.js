import React from 'react';
import Input from '../../components/Input';

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
    <>
      {formPages.map(function createPage(page) {
        return (
          <>
            <h2>{page.title}</h2>
            <h3>{page.subTitle}</h3>
            <h4>{page.description}</h4>

            <form>
              {page.form.pre && page.form.pos ? (
                <>
                  <div>
                    <p>Pré Transformação</p>
                    <div>{page.form.inputs.map(createForm)}</div>
                  </div>
                  <div>
                    <p>Pós Transformação</p>
                    <div>{page.form.inputs.map(createForm)}</div>
                  </div>
                </>
              ) : (
                <div>{page.form.inputs.map(createForm)}</div>
              )}
            </form>
          </>
        );
      })}
    </>
  );
}

export default PreencherModelo;
