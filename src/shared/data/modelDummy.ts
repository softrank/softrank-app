import { ModelEntity } from '../models/modelEntity';
import { ModelLevel } from '../models/modelLevel';
import { Process } from '../models/process';

const LevelOptions: ModelLevel[] = [
  {
    id: '',
    initial: 'A',
    name: 'Em otimização',
    predecessor: null,
  },
  {
    id: '',
    initial: 'B',
    name: 'Gerenciado quantativamente',
    predecessor: null,
  },
  {
    id: '',
    initial: 'C',
    name: 'Totalmente definido',
    predecessor: null,
  },
  {
    id: '',
    initial: 'D',
    name: 'Definido',
    predecessor: null,
  },
  {
    id: '',
    initial: 'E',
    name: 'Parcialmente definido',
    predecessor: null,
  },
  {
    id: '',
    initial: 'F',
    name: 'Gerenciados',
    predecessor: null,
  },
  {
    id: '',
    initial: 'G',
    name: 'Parcialmente gerenciado',
    predecessor: null,
  },
];

export const ProcessOptions: Process[] = [
  {
    id: '',
    initial: 'GPR',
    name: 'Gerência de projetos',
    processCapacity: 'P',
    description:
      'O propósito do processo Gerência de Projetos é estabelecer e manter atualizados planos que definam as atividades, recursos, riscos, prazos e responsabilidades do projeto. Também é propósito deste processo prover informações sobre o andamento do projeto que permitam a realização de correções quando houver desvios significativos no desempenho do projeto, incluindo análise de causa-raiz',
    expectedResults: [
      {
        id: '',
        initial: 'GPR 1',
        name: ' Gerência de Projetos 1',
        description:
          'O escopo do trabalho para o projeto é estabelecido, mantido atualizado e utilizado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 2',
        name: ' Gerência de Projetos 2',
        description:
          'O processo a ser utilizado para a execução do projeto é descrito, mantido atualizado e utilizado. ',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 2+',
        name: 'Gerência de Projetos 2+',
        description:
          'O processo definido para o projeto, derivado da estratégia para adaptação do processo da organização, é estabelecido, mantido atualizado e utilizado',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 3',
        name: 'Gerência de Projetos 3',
        description:
          'Estimativas de dimensão de tarefas e produtos de trabalho do projeto são estabelecidas e mantidas atualizadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 3+',
        name: 'Gerência de Projetos 3+',
        description:
          'Estimativas de dimensão de tarefas e produtos de trabalho do projeto são estabelecidas com a utilização de métodos apropriados e documentados, e são mantidas atualizadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 4',
        name: 'Gerência de Projetos 4',
        description:
          'Estimativas de esforço, duração e custo para a execução das tarefas e dos produtos de trabalho do projeto são estabelecidas e justificadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 4+',
        name: 'Gerência de Projetos 4+',
        description:
          ' Estimativas de esforço, duração e custo para a execução das tarefas e dos produtos de trabalho do projeto são estabelecidas e justificadas utilizando métodos apropriados, baseadas no repositório organizacional de medidas e no conjunto de ativos de processo organizacional.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 5',
        name: 'Gerência de Projetos 5',
        description:
          'O orçamento e o cronograma do projeto, incluindo a definição de marcos, são estabelecidos e mantidos atualizados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 6',
        name: 'Gerência de Projetos 6',
        description:
          'Os recursos humanos para o projeto são planejados considerando as habilidades e os conhecimentos necessários para executá-lo',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 7',
        name: 'Gerência de Projetos 7',
        description:
          'Os recursos materiais e o ambiente de trabalho necessários para executar o projeto são estabelecidos e mantidos atualizados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 7+',
        name: 'Gerência de Projetos 7+',
        description:
          'Os recursos materiais e o ambiente de trabalho necessários para executar o projeto são estabelecidos a partir dos ambientes padrão de trabalho da organização, e são mantidos atualizados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 8',
        name: 'Gerência de Projetos 8',
        description:
          'A estratégia de transição para operação e suporte do produto, incluindo as tarefas e o cronograma, é planejada.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 9',
        name: 'Gerência de Projetos 9',
        description:
          'O envolvimento das partes interessadas no projeto é planejado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 10',
        name: 'Gerência de Projetos 10',
        description:
          'Os riscos ou oportunidades do projeto são identificados e o seu impacto, probabilidade de ocorrência e prioridade de tratamento são determinados e documentados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 10+',
        name: 'Gerência de Projetos 10+',
        description:
          'O tratamento de riscos ou oportunidades do projeto é realizado conforme a estratégia definida para a gerência de riscos e oportunidades da organização.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 11',
        name: 'Gerência de Projetos 11',
        description:
          'A viabilidade de atingir as metas do projeto é avaliada considerando restrições e recursos disponíveis. Se necessário, ajustes são realizados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 12',
        name: 'Gerência de Projetos 12',
        description:
          'Um plano geral para a execução do projeto é estabelecido com a integração consistente dos planejamentos realizados, e é mantido atualizado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 12+',
        name: 'Gerência de Projetos 12+',
        description:
          'Um plano geral para a execução do projeto é estabelecido com a integração consistente dos planejamentos realizados, considerando o processo do projeto, os ativos de processo e o repositório de medidas, e é mantido atualizado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 13',
        name: 'Gerência de Projetos 13',
        description:
          'O Plano do Projeto é revisado com todos os interessados e o compromisso com ele é obtido.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 13+',
        name: 'Gerência de Projetos 13+',
        description:
          'O Plano do Projeto é revisado com todos os interessados, incluindo o tratamento de dependências críticas, e o compromisso com ele é obtido.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 14',
        name: 'Gerência de Projetos 14',
        description:
          ' O escopo, as tarefas, as estimativas, o orçamento, o cronograma, os recursos materiais e humanos e o ambiente de trabalho são monitorados em relação ao planejado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 14+',
        name: 'Gerência de Projetos 14+',
        description:
          'O escopo, as tarefas, as estimativas, o orçamento, o cronograma, os recursos materiais e humanos e o ambiente de trabalho são monitorados em relação ao planejado e ao processo do projeto, e dependências críticas são gerenciadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 15',
        name: 'Gerência de Projetos 15',
        description:
          'O envolvimento das partes interessadas no projeto é monitorado e tratado em relação ao planejado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 16',
        name: 'Gerência de Projetos 16',
        description:
          ' A transição para a etapa de operação e suporte do produto é monitorada em relação ao planejado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 17',
        name: 'Gerência de Projetos 17',
        description:
          ' Os riscos ou oportunidades do projeto são monitorados e seus resultados são comunicados às partes interessadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 17+',
        name: 'Gerência de Projetos 17+',
        description:
          'Os riscos ou oportunidades do projeto são monitorados em relação às estratégias definidas e seus resultados são comunicados às partes interessadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 18',
        name: 'Gerência de Projetos 18',
        description:
          'Ações para corrigir desvios em relação ao planejado são identificadas, implementadas e acompanhadas até o seu fechamento.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 18+',
        name: 'Gerência de Projetos 18+',
        description:
          'Ações para corrigir desvios em relação ao planejado e outras questões relacionadas ao projeto são identificadas, tratadas com as partes interessadas, implementadas e acompanhadas até o seu fechamento.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 19',
        name: 'Gerência de Projetos 19',
        description:
          'Resultados positivos ou negativos significativos do projeto são analisados e tratados em relação à causa-raiz, utilizando um procedimento organizacional e documentando os seus resultados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 20',
        name: 'Gerência de Projetos 20',
        description:
          'Técnicas estatísticas e quantitativas são utilizadas para definir e manter as atividades do projeto alinhadas aos objetivos de qualidade e desempenho definidos para o projeto.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 21',
        name: 'Gerência de Projetos 21',
        description:
          'Análises da causa-raiz dos resultados selecionados são realizadas e o impacto das ações implementadas no desempenho do processo de projeto é avaliado, utilizando técnicas estatísticas e quantitativas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPR 22',
        name: 'Gerência de Projetos 22',
        description:
          'Avaliações de soluções são realizadas utilizando técnicas estatísticas e quantitativas para determinar se a solução pode ser aplicada na organização.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'REQ',
    name: 'Engenharia de Requisitos',
    processCapacity: 'P',
    description:
      'O propósito do processo Engenharia de Requisitos é definir, gerenciar e manter atualizados os requisitos das partes interessadas e do produto, garantindo que inconsistências entre os requisitos, os planos e os produtos de trabalho sejam identificadas e tratadas.',
    expectedResults: [
      {
        id: '',
        initial: 'REQ 1',
        name: 'Engenharia de Requisitos 1',
        description:
          'As necessidades, expectativas e restrições das partes interessadas, tanto em relação ao produto quanto a suas interfaces, são identificadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'REQ 2',
        name: 'Engenharia de Requisitos 2',
        description:
          'Os requisitos são especificados, priorizados e mantidos atualizados a partir das necessidades, expectativas e restrições identificadas para o produto e suas interfaces.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'REQ 2+',
        name: 'Engenharia de Requisitos 2+',
        description:
          'Os requisitos são especificados, priorizados, refinados, alocados para implementação e mantidos atualizados a partir das necessidades, expectativas e restrições identificadas, o que inclui a especificação de conceitos operacionais, cenários e interfaces internas e externas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'REQ 3',
        name: 'Engenharia de Requisitos 3',
        description:
          'Os requisitos são entendidos e analisados junto aos fornecedores de requisitos.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'REQ 3+',
        name: 'Engenharia de Requisitos 3+',
        description:
          'Os requisitos são entendidos e analisados junto aos fornecedores de requisitos para garantir que sejam claros, necessários e suficientes e para balancear as necessidades das partes interessadas com as restrições existentes.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'REQ 4',
        name: 'Engenharia de Requisitos 4',
        description:
          'Os requisitos são aprovados pelos fornecedores de requisitos.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'REQ 4+',
        name: 'Engenharia de Requisitos 4',
        description: 'Os requisitos são validados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'REQ 5',
        name: 'Engenharia de Requisitos 5',
        description:
          'O compromisso da equipe técnica com a implementação dos requisitos é obtido.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'REQ 6',
        name: 'Engenharia de Requisitos 6',
        description:
          'A rastreabilidade bidirecional entre requisitos, atividades e produtos de trabalho do projeto é estabelecida e mantida.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'REQ 7',
        name: 'Engenharia de Requisitos7',
        description:
          'Os planos, atividades e produtos de trabalho relacionados são revisados visando identificar e tratar inconsistência em relação aos requisitos.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'PCP',
    name: 'Projeto e Construção do Produto',
    processCapacity: 'P',
    description:
      'O propósito do processo Projeto e Construção do Produto é projetar, desenvolver e implementar soluções para atender aos requisitos.',
    expectedResults: [
      {
        id: '',
        initial: 'PCP 1',
        name: 'Projeto e Construção do Produto 1',
        description:
          'Um projeto (design) preliminar para o produto é desenvolvido com definição da solução e da arquitetura, com base em critérios para apoio às decisões de projeto previamente definidos.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'PCP 2',
        name: 'Projeto e Construção do Produto 2',
        description:
          'Alternativas de solução para componentes de produto selecionados são desenvolvidas e, com base nestas alternativas, é realizada análise para decidir sobre construção, compra ou reutilização. Soluções são selecionadas com base em critérios pré-estabelecidos e um projeto (design) detalhado é desenvolvido com definição da estrutura e funcionalidade dos componentes e suas interfaces.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'PCP 3',
        name: 'Projeto e Construção do Produto 3',
        description:
          'O projeto (design) é avaliado e os problemas identificados são tratados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'PCP 4',
        name: 'Projeto e Construção do Produto 4',
        description:
          'O produto é implementado de acordo com o que foi projetado e as informações necessárias são desenvolvidas, mantidas atualizadas e utilizadas para a sua implementação, evolução e sustentação.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'ITP',
    name: 'Integração do Produto',
    processCapacity: 'P',
    description:
      'O propósito do processo Integração do Produto é montar os componentes do produto conforme a estratégia definida, produzindo um produto integrado consistente com seu projeto (design) e seus requisitos.',
    expectedResults: [
      {
        id: '',
        initial: 'ITP 1',
        name: 'Integração do Produto 1',
        description:
          'Uma estratégia para integração dos componentes do produto é estabelecida e mantida atualizada, incluindo procedimentos e critérios a serem seguidos, bem como a descrição das interfaces internas e externas dos componentes do produto, de forma a garantir a cobertura, a completude e a consistência da solução.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ITP 2',
        name: 'Integração do Produto 2',
        description:
          'Um ambiente para integração dos componentes do produto é estabelecido e mantido atualizado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ITP 3',
        name: 'Integração do Produto 3',
        description:
          'Cada componente do produto é avaliado para confirmar que está pronto para a integração, analisando se atende aos requisitos, projeto e descrição das interfaces internas e externas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ITP 4',
        name: 'Integração do Produto 4',
        description:
          'Os componentes do produto são integrados utilizando a estratégia, procedimentos, critérios e o ambiente de integração estabelecidos.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ITP 5',
        name: 'Integração do Produto 5',
        description:
          'O produto integrado é testado para assegurar que atende aos requisitos e projeto (design) e à compatibilidade das interfaces, e os resultados são registrados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ITP 6',
        name: 'Integração do Produto 6',
        description:
          'O produto e material de apoio são preparados e entregues às partes interessadas.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'VV',
    name: 'Verificação e Validação',
    processCapacity: 'P',
    description:
      'O propósito do processo Verificação e Validação é confirmar que os produtos de trabalho selecionados atendem aos requisitos especificados, pela execução de testes e revisão por pares, e que um produto ou componente do produto atenderá a seu uso pretendido quando colocado no ambiente operacional.',
    expectedResults: [
      {
        id: '',
        initial: 'VV 1',
        name: 'Verificação e Validação 1',
        description:
          'Produtos de trabalho a serem verificados e validados são selecionados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'VV 2',
        name: 'Verificação e Validação 2',
        description:
          'Procedimentos e material de apoio são definidos, mantidos atualizados e usados para preparação e realização de revisões por pares.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'VV 3',
        name: 'Verificação e Validação 3',
        description:
          ' Métodos, procedimentos, critérios e ambientes são definidos, mantidos atualizados e usados durante as atividades de teste com fins de verificação e validação.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'VV 4',
        name: 'Verificação e Validação 4',
        description:
          'Atividades de verificação e validação são realizadas e problemas identificados são tratados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'VV 5',
        name: 'Verificação e Validação 5',
        description:
          'Os resultados das atividades de verificação e validação são analisados, registrados e comunicados.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'GCO',
    name: 'Gerência de Configuração',
    processCapacity: 'O',
    description:
      'O propósito do processo Gerência de Configuração é estabelecer e manter a integridade de produtos de trabalho e disponibilizá-los a todos os envolvidos.',
    expectedResults: [
      {
        id: '',
        initial: 'GCO 1',
        name: 'Gerência de Configuração 1',
        description:
          'Itens de configuração são identificados e seus níveis de controle são estabelecidos.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GCO 2',
        name: 'Gerência de Configuração 2',
        description:
          'Um sistema para gerência de configuração e controle de mudanças é estabelecido, mantido atualizado e utilizado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GCO 3',
        name: 'Gerência de Configuração 3',
        description:
          'Baselines são estabelecidas considerando entregáveis e liberações aos interessados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GCO 4',
        name: 'Gerência de Configuração 4',
        description:
          'Registros de itens de configuração e de modificações realizadas nestes itens são estabelecidos, mantidos atualizados e utilizados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GCO 5',
        name: 'Gerência de Configuração 5',
        description:
          'Auditorias de configuração são executadas para avaliar as baselines e o conteúdo do sistema de gerência de configuração.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'AQU',
    name: 'Aquisição',
    processCapacity: 'O',
    description:
      'O propósito do processo Aquisição é gerenciar a aquisição de produtos que satisfaçam às necessidades expressas pelo adquirente.',
    expectedResults: [
      {
        id: '',
        initial: 'AQU 1',
        name: 'Aquisição 1',
        description:
          'Um acordo que expresse claramente as expectativas, responsabilidades e obrigações de ambas as partes (cliente e fornecedor) é estabelecido.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'AQU 2',
        name: 'Aquisição 2',
        description:
          'O fornecedor é monitorado de forma que as condições especificadas no acordo sejam atendidas gerando, quando necessário, ações corretivas e atualizações do acordo.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'AQU 2+',
        name: 'Aquisição 2+',
        description:
          'O fornecedor é monitorado de forma que as condições especificadas no acordo sejam atendidas gerando, quando necessário, ações corretivas e atualizações do acordo.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'AQU 3',
        name: 'Aquisição 3',
        description:
          'As obrigações do adquirente definidas no acordo, incluindo a gestão financeira, são satisfeitas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'AQU 4',
        name: 'Aquisição 4',
        description:
          'As entregas do fornecedor são avaliadas em relação ao acordado e o resultado (aceite ou rejeição) é documentado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'AQU 4+',
        name: 'Aquisição 4+',
        description:
          'Entregas do fornecedor são selecionadas para serem objeto de revisão técnica por parte do adquirente, em relação ao acordo, e o resultado (aceite ou rejeição) é documentado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'AQU 5',
        name: 'Aquisição 5',
        description:
          'O desempenho do fornecedor em atender aos objetivos de qualidade e desempenho do processo é gerenciado quantitativamente por meio de medidas, técnicas estatísticas e outras técnicas quantitativas.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'MED',
    name: 'Medição',
    processCapacity: 'O',
    description:
      'O propósito do processo Medição é coletar, armazenar, analisar e relatar dados objetivos relacionados aos produtos desenvolvidos e aos processos implementados, de forma a apoiar os objetivos organizacionais.',
    expectedResults: [
      {
        id: '',
        initial: 'MED 1',
        name: 'Medição 1',
        description:
          'Objetivos organizacionais de medição e de desempenho, derivados dos objetivos de negócio e das necessidades de informação, são definidos e mantidos atualizados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 2',
        name: 'Medição 2',
        description:
          'Medidas são identificadas a partir dos objetivos organizacionais de medição e de desempenho, são documentadas por meio de definições operacionais, mantidas atualizadas e disponibilizadas de acordo com os processos pertinentes.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 3',
        name: 'Medição 3',
        description:
          'Medidas são coletadas, verificadas e armazenadas de acordo com as definições operacionais.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 3+',
        name: 'Medição 3+',
        description:
          'Medidas são coletadas e verificadas usando procedimentos para assegurar a qualidade de medidas, e armazenadas de acordo com as definições operacionais.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 4',
        name: 'Medição 4',
        description:
          'Medidas são analisadas e os resultados da análise são armazenados de acordo com as definições operacionais.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 4+',
        name: 'Medição 4+',
        description:
          'O desempenho organizacional é analisado, a partir das medidas e de acordo com as definições operacionais, com o objetivo de determinar necessidades de melhoria de desempenho.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 5',
        name: 'Medição 5',
        description:
          'A partir do resultado da análise das medidas, ações corretivas são realizadas visando alcançar os objetivos de desempenho estabelecidos.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 6',
        name: 'Medição 6',
        description:
          'Resultados de desempenho são periodicamente comunicados à organização.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 7',
        name: 'Medição 7',
        description:
          'O repositório organizacional de medidas é avaliado periodicamente usando procedimentos para assegurar a qualidade de medidas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 8',
        name: 'Medição 8',
        description:
          'Objetivos de qualidade e de desempenho dos processos rastreáveis para os objetivos quantitativos de negócio são definidos, mantido atualizados e comunicados usando estatística e outras técnicas quantitativas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 9',
        name: 'Medição 9',
        description:
          ' Medidas e técnicas analíticas para gerenciar quantitativamente o desempenho visando alcançar os objetivos de qualidade e de desempenho dos processos são identificadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 10',
        name: 'Medição 10',
        description:
          'Baselines de desempenho dos processos são estabelecidas, analisadas e mantidas atualizadas usando técnicas estatísticas e outras técnicas quantitativas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 11',
        name: 'Medição 11',
        description:
          'Modelos de desempenho do processo são desenvolvidos, analisados e mantidos atualizados utilizando técnicas estatísticas e outras técnicas quantitativas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 12',
        name: 'Medição 12',
        description:
          'Técnicas estatísticas e outras técnicas quantitativas são utilizadas para assegurar que os objetivos de negócio estão alinhados com a estratégia e desempenho do negócio.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'MED 13',
        name: 'Medição 13',
        description:
          'Dados de desempenho são analisados usando técnicas estatísticas e outras técnicas quantitativas para determinar a capacidade de satisfazer objetivos de negócio selecionados e para identificar áreas potenciais para aumento do desempenho.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'GDE',
    name: 'Gerência de Decisões',
    processCapacity: 'O',
    description:
      'O propósito do processo Gerência de Decisões é analisar possíveis decisões críticas usando um processo formal, com critérios estabelecidos, para avaliação das alternativas identificadas',
    expectedResults: [
      {
        id: '',
        initial: 'GDE 1',
        name: 'Gerência de Decisões 1',
        description:
          'Diretrizes organizacionais especificando quando um processo formal de tomada de decisão deve ser seguido são estabelecidas, mantidas atualizadas e usadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GDE 2',
        name: 'Gerência de Decisões 2',
        description:
          'A definição de papéis com autoridade para tomadas de decisão formal é estabelecida, mantida atualizada e usada',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GDE 3',
        name: 'Gerência de Decisões 3',
        description:
          'O problema ou questão a ser objeto de um processo formal de tomada de decisão é definido.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GDE 4',
        name: 'Gerência de Decisões 4',
        description:
          'Alternativas de solução para o problema ou questão são identificadas e registradas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GDE 5',
        name: 'Gerência de Decisões 5',
        description:
          'Critérios para avaliação das alternativas de solução são definidos.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GDE 6',
        name: 'Gerência de Decisões 6',
        description:
          'Métodos de avaliação das alternativas de solução são selecionados de acordo com sua viabilidade de aplicação.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GDE 7',
        name: 'Gerência de Decisões 7',
        description:
          'Soluções alternativas são avaliadas usando os critérios e métodos estabelecidos, e decisões são tomadas e registradas.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'GRH',
    name: 'Gerência de Recursos Humanos',
    processCapacity: 'O',
    description:
      'O propósito do processo de Gerência de Recursos Humanos é prover a organização com os recursos humanos necessários e manter as suas competências adequadas às necessidades do negócio.',
    expectedResults: [
      {
        id: '',
        initial: 'GRH 1',
        name: 'Gerência de Recursos Humanos 1',
        description:
          'As necessidades de capacitação e recrutamento, do ponto de vista estratégico e de curto prazo, relacionadas aos processos e projetos/serviços são identificadas e planos para seu atendimento são definidos, seguidos e mantidos atualizados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GRH 2',
        name: 'Gerência de Recursos Humanos 2',
        description:
          'Os treinamentos identificados como necessários para capacitação dos colaboradores são realizados e registrados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GRH 3',
        name: 'Gerência de Recursos Humanos 3',
        description: ' A efetividade dos treinamentos é avaliada.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GRH 4',
        name: 'Gerência de Recursos Humanos 4',
        description:
          'A partir da análise dos registros e avaliações da efetividade dos treinamentos, as habilidades dos instrutores e os recursos para treinamento dos colaboradores são desenvolvidos e aprimorados.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'GPC',
    name: 'Gerência de Processos',
    processCapacity: 'O',
    description:
      'O propósito do processo Gerência de Processos é estabelecer, manter atualizado, identificar e realizar melhorias em um conjunto de processo da organização e padrões do ambiente de trabalho usáveis e aplicáveis às necessidades de negócio da organização. Também é propósito deste processo definir as estratégias para a garantia da qualidade e gerência de riscos e a infraestrutura para realização de medições.',
    expectedResults: [
      {
        id: '',
        initial: 'GPC 1',
        name: 'Gerência de Processos 1',
        description:
          'Os processos necessários são desenvolvidos e mantidos atualizados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPC 1+',
        name: 'Gerência de Processos 1+',
        description:
          'Uma estratégia é definida, mantida atualizada e utilizada para estabelecer a arquitetura de processos, desenvolver, comprar, reutilizar ou evoluir os ativos de processo padrão da organização, incluindo diretrizes para a sua adaptação e disponibilizá-los em uma biblioteca de ativos de processos.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPC 2',
        name: 'Gerência de Processos 2',
        description:
          'Uma estratégia que inclua escopo e procedimentos de garantia da qualidade e o(s) plano(s) para garantia da qualidade são desenvolvidos, executados e mantidos atualizados, com base em dados históricos de qualidade.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPC 3',
        name: 'Gerência de Processos 3',
        description:
          'Uma estrutura de apoio para fornecer orientação no uso dos processos, identificar e corrigir problemas nos processos, promover a melhoria contínua dos processos e a implementação, implantação e sustentação do uso das melhorias de processos é estabelecida',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPC 4',
        name: 'Gerência de Processos 4',
        description:
          'Estratégias para a gerência de riscos ou oportunidades, contendo parâmetros, categorias e atividades relacionadas, são estabelecidas, executadas e mantidas atualizadas. A partir destas estratégias, os riscos e oportunidades organizacionais são identificados, analisados, priorizados, tratados, documentados, monitorados e comunicados para as partes interessadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPC 5',
        name: 'Gerência de Processos 5',
        description:
          'Oportunidades de melhoria dos processos derivadas dos objetivos de negócio, de avaliações da implementação dos processos e da exploração e avaliação de potenciais novos processos, técnicas, métodos e ferramentas são identificadas e mantidas atualizadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPC 6',
        name: 'Gerência de Processos 6',
        description:
          'Um plano para implementação de melhorias, com base na importância dos processos para o alcance dos objetivos de negócio da organização, é definido, executado e mantido atualizado.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPC 7',
        name: 'Gerência de Processos 7',
        description:
          'Os ambientes padrão de trabalho da organização são estabelecidos e mantidos atualizados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPC 8',
        name: 'Gerência de Processos 8',
        description:
          'Um repositório organizacional de medidas e procedimentos para garantia da qualidade de medidas são definidos e mantidos atualizados. ',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPC 9',
        name: 'Gerência de Processos 9',
        description:
          'Processos padrão e ativos de processos organizacionais são implantados na organização.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPC 10',
        name: 'Gerência de Processos 10',
        description:
          'A efetividade das melhorias implantadas é avaliada com base nos objetivos de melhoria.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GPC 11',
        name: 'Gerência de Processos 11',
        description:
          'As melhorias de desempenho selecionadas são avaliadas por meio de técnicas estatísticas ou de outras técnicas quantitativas.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'ORG',
    name: 'Gerência Organizacional',
    processCapacity: 'O',
    description:
      'O propósito do processo Gerência Organizacional é fornecer para a gerência da organização instrumentos para apoiar os processos e prover um alinhamento entre os objetivos de negócio, os processos, os recursos e os projetos/serviços da organização.',
    expectedResults: [
      {
        id: '',
        initial: 'ORG 1',
        name: 'Gerência Organizacional 1',
        description:
          'Diretrizes para definição e melhoria de processos são definidas, mantidas atualizadas e comunicadas pela gerência da organização, a partir das necessidades e objetivos da organização.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ORG 2',
        name: 'Gerência Organizacional 2',
        description:
          ' Recursos e treinamento para definição, apoio, execução, avaliação da aderência e melhoria dos processos são garantidos pela gerência da organização.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ORG 3',
        name: 'Gerência Organizacional 3',
        description:
          'As informações necessárias para garantir à gerência da organização visibilidade sobre os processos são identificadas e utilizadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ORG 4',
        name: 'Gerência Organizacional 4',
        description:
          'O alinhamento dos colaboradores às diretrizes organizacionais e à implementação dos processos é assegurado pela gerência da organização.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ORG 4+',
        name: 'Gerência Organizacional 4+',
        description:
          'O alinhamento das competências requeridas e dos colaboradores aos objetivos organizacionais, incluindo os objetivos de melhoria e de implementação dos processos, é assegurado pela gerência da organização.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ORG 5',
        name: 'Gerência Organizacional 5',
        description:
          ' As oportunidades de negócio são identificadas e avaliadas.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ORG 6',
        name: 'Gerência Organizacional 6',
        description:
          'Medidas para o gerenciamento dos objetivos organizacionais têm sua coleta, análise e uso garantidos pela gerência da organização.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ORG 7',
        name: 'Gerência Organizacional 7',
        description:
          'Medidas para o gerenciamento dos objetivos organizacionais têm sua coleta, análise e uso garantidos pela gerência da organização.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ORG 8',
        name: 'Gerência Organizacional 8',
        description:
          'As oportunidades de negócio, as necessidades e os investimentos são identificados, qualificados e priorizados, de acordo com critérios derivados dos objetivos organizacionais.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ORG 9',
        name: 'Gerência Organizacional 9',
        description:
          'Os recursos necessários, orçamentos, responsabilidade e autoridade para o gerenciamento do portfólio de projetos/serviços são estabelecidos e acompanhados.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ORG 10',
        name: 'Gerência Organizacional 10',
        description:
          'Os projetos do portfólio que atendem aos acordos e requisitos que levaram à sua aprovação são mantidos, e os que não atendem são tratados conforme pertinente, considerando o acordo estabelecido.',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'ORG 11',
        name: 'Gerência Organizacional 11',
        description:
          ' O uso de análise estatística ou quantitativa para decisões selecionadas são garantidas pela gerência da organização.',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
];

export const modelDummy: ModelEntity = {
  id: '',
  name: 'Modelo de Referência MPS para Software',
  year: new Date(),
  description:
    'O Modelo de Referência MPS para Software (MR-MPS-SW) define níveis de maturidade que são uma combinação entre processos e sua capacidade.',
  modelLevels: LevelOptions,
  modelProcesses: ProcessOptions,
};
