// Colocar inputType: 'dropdown' só nos que forem dropdown e checar se tiver o type dropdown renderizá-lo
// https://unform.dev/examples/react-select

export const jornadaUsuarioForms = [
  // ETAPA 1
  {
    type: 'page-intro',
    step: 1,
    title: 'Etapas do Serviço - Jornada do Usuário',
    subTitle: 'Etapa 1: Buscar Informações',
    image: 'fake-image',
    description:
      'Nesta etapa você deverá que preencher não sei o que, bla bla bla buscar informações lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    type: 'page-form',
    step: 1,
    activity: 1,
    subTitle: 'Etapa 1 - Atividade: Digital',
    description: 'Buscar informações por canal digital',
    form: {
      pre: true,
      pos: true,
      inputs: [
        {
          title: 'Tempo Médio:',
          name: 'tempoMedio',
          placeholder: '123',
          type: 'number',
          auxText: 'Tempo em horas',
          maskType: '',
        },
        {
          title: 'Frequência:',
          name: '2',
          placeholder: '123',
          type: 'number',
          auxText: 'Frequência anual',
          maskType: '',
        },
        {
          title: 'Quantidade de Usuários:',
          name: '3',
          placeholder: '123',
          type: 'number',
          auxText: 'Quantidade de usuários',
          maskType: '',
        },
        {
          title: 'Renda Média:',
          name: '4',
          placeholder: 'R$ 123,12',
          type: 'string',
          auxText: 'Renda média',
          maskType: 'money',
        },
        {
          title: 'Custo Monetário da Atividade:',
          name: '5',
          placeholder: 'R$ 123,12',
          type: 'string',
          auxText: 'Custo monetário',
          maskType: 'money',
        },
      ],
    },
  },

  // ETAPA 2
  {
    type: 'page-intro',
    step: 2,
    subTitle: 'Etapa 2: Buscar Informações',
    image: 'fake-image',
    description:
      'Nesta etapa você deverá que preencher não sei o que, bla bla bla buscar informações lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },

  // ETAPA 3
  {
    type: 'page-intro',
    step: 3,
    subTitle: 'Etapa 3: Solicitar serviços',
    image: 'fake-image',
    description:
      'Nesta etapa você deverá que preencher não sei o que, bla bla bla buscar informações lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },

  // ETAPA 4
  {
    type: 'page-intro',
    step: 4,
    subTitle: 'Etapa 4: Receber o Serviço',
    image: 'fake-image',
    description:
      'Nesta etapa você deverá que preencher não sei o que, bla bla bla buscar informações lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },

  // FIM
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
