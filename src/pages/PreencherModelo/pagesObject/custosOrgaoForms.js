export const custoOrgaoForms = [
  // ETAPA 1
  {
    type: 'page-intro',
    step: 1,
    title: 'Etapas do Serviço - Custos do Órgão',
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
      pre: true,
      pos: true,
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
      pre: true,
      pos: true,
      inputs: [
        {
          title: 'Renda Média:',
          name: 'mediaSalarialTercerizados',
          placeholder: 'R$ 123,12',
          type: 'string',
          maskType: 'money',
        },
        {
          title: 'Quantidade de Servidores:',
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
      pre: true,
      pos: true,
      inputs: [
        {
          title: 'Quantidade de papel:',
          name: 'quantidadePapelArmazenado',
          placeholder: '123',
          type: 'number',
          maskType: '',
        },
      ],
    },
  },

  // ETAPA 3
  {
    type: 'page-intro',
    step: 3,
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
      pre: true,
      pos: true,
      inputs: [
        {
          isDropdown: true,
          options: [
            { value: 'Balcão', label: 'Balcão' },
            { value: 'Fluxo', label: 'Fluxo' },
            { value: 'Fluxo de Integração', label: 'Balcão' },
            { value: 'SEI', label: 'SEI' },
            { value: 'Solução Própria', label: 'Solução Própria' },
          ],
          title: 'Solução de Transformação:',
          name: 'dropdownSolucao',
          placeholder: 'Solução Própria',
          type: 'string',
          maskType: '',
        },
      ],
    },
  },

  // FIM
  {
    type: 'page-end',
    subTitle: 'Todas as etapas foram preenchidas',
    description:
      'Você conclui o preenchimento do Custos do Órgão, os dados já estão salvos.',
  },
];
