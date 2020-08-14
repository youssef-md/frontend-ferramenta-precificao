// Colocar inputType: 'dropdown' só nos que forem dropdown e checar se tiver o type dropdown renderizá-lo
// https://unform.dev/examples/react-select

export const jornadaUsuarioForms = [
  {
    type: 'page-intro',
    title: 'Etapas do Serviço - Jornada do Usuário',
    subTitle: 'Etapa 1: Buscar Informações',
    image: 'fake-image',
    description:
      'Nesta etapa você deverá que preencher não sei o que, bla bla bla buscar informações lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    step: 1,
  },
  {
    type: 'page-form',
    subTitle: 'Etapa 1 - Atividade: Digital',
    description: 'Buscar informações por canal digital',
    form: {
      pre: true,
      pos: true,
      inputs: [
        {
          title: 'Tempo Médio',
          name: '1',
          placeholder: '123',
          type: 'number',
          auxText: 'Tempo em horas',
        },
        {
          title: 'Tempo Médio',
          name: '2',
          placeholder: '123',
          type: 'number',
          auxText: 'Tempo em horas',
        },
        {
          title: 'Tempo Médio',
          name: '3',
          placeholder: '123',
          type: 'number',
          auxText: 'Tempo em horas',
        },
        {
          title: 'Tempo Médio',
          name: '4',
          placeholder: '123',
          type: 'string',
          auxText: 'Tempo em horas',
        },
        {
          title: 'Tempo Médio',
          name: '5',
          placeholder: '123',
          type: 'string',
          auxText: 'Tempo em horas',
        },
      ],
    },
  },
  {
    type: 'page-intro',
    subTitle: 'Etapa 2: Buscar Informações',
    image: 'fake-image',
    description:
      'Nesta etapa você deverá que preencher não sei o que, bla bla bla buscar informações lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    step: 2,
  },
  {
    type: 'page-form',
    subTitle: 'Etapa 1 - Atividade: Bla Blak',
    description: 'Buscar informaçes por canal Bla bla',
    form: {
      pre: true,
      pos: true,
      inputs: [
        {
          title: 'Tempo Médio',
          name: '9',
          placeholder: '123',
          type: 'string',
          auxText: 'Tempo em horas',
        },
        {
          title: 'Tempo Médio',
          name: '10',
          placeholder: '123',
          type: 'string',
          auxText: 'Tempo em horas',
        },
      ],
    },
  },
  {
    type: 'page-end',
    subTitle: 'Todas as etapas foram preenchidas',
    description:
      'Você conclui o preenchimento da Jornada do Usuário, os dados já estão salvos. Deseja retornar para a tela de serviço ou continuar o preenchimento para a seção de Custos do Órgão ?',
    buttons: [
      {
        text: 'Voltar para tela de serviço',
        route: '',
      },
      {
        text: 'Preencher custos do órgão',
        route: '',
      },
    ],
  },
];
