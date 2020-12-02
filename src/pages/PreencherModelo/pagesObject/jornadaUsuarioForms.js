// Colocar inputType: 'dropdown' só nos que forem dropdown e checar se tiver o type dropdown renderizá-lo
// https://unform.dev/examples/react-select

const data = [
  [
    {
      subTitle: 'Etapa 1 - Atividade: Digital',
      description: 'Buscar informações por canal digital',
    },
    {
      subTitle: 'Etapa 1 - Atividade: Presencial',
      description: 'Buscar informações por canal presencial',
    },
    {
      subTitle: 'Etapa 1 - Atividade: Postal',
      description: 'Buscar informações por canal postal',
    },
    {
      subTitle: 'Etapa 1 - Atividade: Telefone',
      description: 'Buscar informações por canal telefônico',
    },
  ],
  [
    {
      subTitle: 'Etapa 2 - Atividade: Presencial',
      description: 'Coletar documentos exigidos pelo serviço',
    },
    {
      subTitle: 'Etapa 2 - Atividade: Presencial',
      description: 'Preencher formulário de cadastro / soliticação',
    },
  ],
  [
    {
      subTitle: 'Etapa 3 - Atividade: Presencial',
      description: 'Solicitar o serviço por canal presencial',
    },
    {
      subTitle: 'Etapa 3 - Atividade: Digital',
      description: 'Soliticar o serviço por canal digital',
    },
    {
      subTitle: 'Etapa 3 - Atividade: Postal',
      description: 'Soliticar o serviço por canal postal',
    },
    {
      subTitle: 'Etapa 3 - Atividade: Telefone',
      description: 'Soliticar o serviço por canal telefônico',
    },
  ],
  [
    {
      subTitle: 'Etapa 4 - Atividade: Presencial',
      description: 'Receber o serviço por canal presencial',
    },
    {
      subTitle: 'Etapa 4 - Atividade: Digital',
      description: 'Receber o serviço por canal digital',
    },
    {
      subTitle: 'Etapa 4 - Atividade: Postal',
      description: 'Receber o serviço por canal postal',
    },
    {
      subTitle: 'Etapa 4 - Atividade: Telefone',
      description: 'Receber o serviço por canal telefônico.',
    },
  ],
];

function generateAtividadesEtapa(etapa) {
  return data[etapa - 1].map(({ subTitle, description }, atividade) => {
    return {
      type: 'page-form',
      step: etapa,
      activity: atividade + 1,
      subTitle,
      description,
      form: {
        pre: true,
        pos: true,
        inputs: [
          {
            title: 'Tempo Médio:',
            name: 'tempoMedio',
            placeholder: '123',
            type: 'number',
            maskType: '',
          },
          {
            title: 'Frequência:',
            name: 'frequencia',
            placeholder: '123',
            type: 'number',
            maskType: '',
          },
          {
            title: 'Quantidade de Usuários:',
            name: 'quantidadeUsuarios',
            placeholder: '123',
            type: 'number',
            maskType: '',
          },
          {
            title: 'Renda Média:',
            name: 'rendimentoMedio',
            placeholder: 'R$ 123,12',
            type: 'string',
            maskType: 'money',
          },
          {
            title: 'Custo Monetário da Atividade:',
            name: 'custoMonetario',
            placeholder: 'R$ 123,12',
            type: 'string',
            maskType: 'money',
          },
        ],
      },
    };
  });
}

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
  ...generateAtividadesEtapa(1),
  // ETAPA 2
  {
    type: 'page-intro',
    step: 2,
    subTitle: 'Etapa 2: Buscar Informações',
    image: 'fake-image',
    description:
      'Nesta etapa você deverá que preencher não sei o que, bla bla bla buscar informações lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  ...generateAtividadesEtapa(2),

  // ETAPA 3
  {
    type: 'page-intro',
    step: 3,
    subTitle: 'Etapa 3: Solicitar serviços',
    image: 'fake-image',
    description:
      'Nesta etapa você deverá que preencher não sei o que, bla bla bla buscar informações lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  ...generateAtividadesEtapa(3),

  // ETAPA 4
  {
    type: 'page-intro',
    step: 4,
    subTitle: 'Etapa 4: Receber o Serviço',
    image: 'fake-image',
    description:
      'Nesta etapa você deverá que preencher não sei o que, bla bla bla buscar informações lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  ...generateAtividadesEtapa(4),

  // FIM
  {
    type: 'page-end',
    subTitle: 'Todas as etapas foram preenchidas',
    description:
      'Você conclui o preenchimento da Jornada do Usuário, os dados já estão salvos.',
  },
];
