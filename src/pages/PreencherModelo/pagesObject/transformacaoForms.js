export const transformacaoForms = [
  // ETAPA 1
  {
    type: 'page-intro',
    step: 1,
    title: 'Etapas do Serviço - Custos de Transformação',
    subTitle: 'Etapa 1: Custos de Pessoal',
    image: 'fake-image',
    description: '',
  },
  {
    subTitle: 'Etapa 1 - Custos Pessoal: Servidores',
    description: 'Custo da remuneração dos servidores dedicados',
    type: 'page-form',
    step: 1,
    activity: 1,
    pessoaTipo: 'Servidores',
    form: {
      inputs: [
        {
          title: 'Renda Média:',
          name: 'mediaSalarialServidores',
          placeholder: 'R$ 123,12',
          type: 'string',
          maskType: 'money',
        },
        {
          title: 'Quantidade de Servidores:',
          name: 'qtdFuncionariosServidores',
          placeholder: '123',
          type: 'number',
          maskType: '',
        },
        {
          title: 'Tempo dedicação:',
          name: 'tempoDedicacaoServidores',
          placeholder: '123',
          type: 'number',
          maskType: '',
        },
      ],
    },
  },
  {
    subTitle: 'Etapa 1 - Custos Pessoal: Terceirizados',
    description: 'Custo da remuneração dos terceirizados dedicados',
    type: 'page-form',
    step: 1,
    activity: 2,
    pessoaTipo: 'Terceirizados',
    form: {
      inputs: [
        {
          title: 'Renda Média:',
          name: 'mediaSalarialTercerizados',
          placeholder: 'R$ 123,12',
          type: 'string',
          maskType: 'money',
        },
        {
          title: 'Quantidade de Terceirizados:',
          name: 'qtdFuncionariosTercerizados',
          placeholder: '123',
          type: 'number',
          maskType: '',
        },
        {
          title: 'Tempo dedicação:',
          name: 'tempoDedicacaoTercerizados',
          placeholder: '123',
          type: 'number',
          maskType: '',
        },
      ],
    },
  },

  // ETAPA 2
  {
    type: 'page-intro',
    step: 2,
    title: 'Etapas do Serviço - Custos de Transformação',
    subTitle: 'Etapa 2: Custos de Espaço Físico',
    image: 'fake-image',
    description: '',
  },
  {
    subTitle: 'Etapa 2 - Custos de Espaço Físico: Armazenamento de Papel',
    description: 'Quantidade de papel por processo',
    type: 'page-form',
    step: 2,
    activity: 1,
    form: {
      inputs: [
        {
          title: 'Quantidade de papel:',
          name: 'quantidadePapelArmazenado',
          placeholder: '123,12',
          type: 'number',
          // maskType: 'money',
        },
      ],
    },
  },

  // ETAPA 3
  {
    type: 'page-intro',
    step: 3,
    title: 'Etapas do Serviço - Custos de Transformação',
    subTitle: 'Etapa 3: Custos de Infraestrutura e TI',
    image: 'fake-image',
    description: '',
  },
  {
    subTitle: 'Etapa 3 - Custos de Infraestrutura e TI',
    description: 'Custos de Infraestrutura e TI existentes',
    type: 'page-form',
    step: 3,
    activity: 1,
    form: {
      inputs: [
        {
          isDropdown: true,
          title: 'Solução de Transformação:',
          name: 'solucaoTransformacao',
          placeholder: 'Balcão, SEI, etc',
          type: 'string',
          options: [
            { value: 'Balcão', label: 'Balcão' },
            { value: 'Fluxo', label: 'Fluxo' },
            { value: 'Fluxo de Integração', label: 'Balcão' },
            { value: 'SEI', label: 'SEI' },
            { value: 'Solução Própria', label: 'Solução Própria' },
          ],
        },
        {
          title: 'Custos de Infra:',
          name: 'custoTreinamento',
          placeholder: 'R$ 123,12',
          type: 'string',
          maskType: 'money',
        },
      ],
    },
  },
  {
    subTitle: 'Etapa 3 - Volume de solicitação',
    description: 'Quantidade de vezes que o serviço é solicitado',
    type: 'page-form',
    step: 3,
    activity: 2,
    form: {
      inputs: [
        {
          title: 'Volume de solicitação:',
          name: 'volumeSolicitacao',
          placeholder: '123,12',
          type: 'string',
          // maskType: 'money',
        },
      ],
    },
  },

  {
    type: 'page-end',
    subTitle: 'Todas as etapas foram preenchidas',
    description:
      'Você conclui o preenchimento da Jornada do Usuário, os dados já estão salvos.',
  },
];
