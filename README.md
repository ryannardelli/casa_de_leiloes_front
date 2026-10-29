# Casa de Leilões Online Arremata - Front-End

Aplicação web desenvolvida para uma Casa de Leilões Online, permitindo que leiloeiros gerenciem lotes e que licitantes acompanhem disputas em tempo real, realizem lances e gerenciem seus saldos. O sistema também oferece consulta pública ao histórico de lances e verificação da integridade das informações dos leilões.

O projeto foi desenvolvido como parte do teste técnico **Elite Dev na Verzel**, com foco em organização do código, experiência do usuário, atualização de dados em tempo real e integração com uma API de back-end.

## Visão Geral

A plataforma possui três perfis de usuário, com permissões específicas de acordo com suas responsabilidades. O leiloeiro e o licitante possuem dashboards próprios, enquanto o administrador realiza suas operações sem um dashboard dedicado.

- **Leiloeiro:** responsável por criar e gerenciar seus próprios lotes, acompanhar os leilões e consultar os resultados e valores arrecadados.
- **Licitante:** responsável por realizar depósitos simulados na carteira, participar dos leilões por meio de lances, acompanhar suas disputas e consultar seus arremates.
- **Administrador:** responsável pelas operações administrativas e pelo gerenciamento de recursos da plataforma, conforme as permissões definidas no sistema.

Além disso, a aplicação disponibiliza uma vitrine pública de lotes e uma página de auditoria que permite verificar o histórico de lances sem a necessidade de autenticação.

## Tecnologias e Ferramentas

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Context API
- Zod
- Socket.IO Client
- Lucide React
- JsPDF

## Arquitetura

A aplicação está organizada em camadas, seguindo princípios de separação de responsabilidades e organização por domínio. Essa abordagem facilita a manutenção, a reutilização de componentes e a evolução das funcionalidades do sistema.

A estrutura separa a interface, a lógica de interação, a comunicação com a API e os modelos de dados, mantendo o código organizado e favorecendo a escalabilidade da aplicação.

## Estrutura do Projeto

A estrutura abaixo representa uma visão geral das principais pastas do front-end:

```bash
src/
├── assets/             # Imagens, ícones e recursos estáticos
├── components/         # Componentes da interface
│   ├── domain/         # Componentes específicos do domínio de leilões
│   ├── feedback/       # Notificações, loaders, alertas e mensagens
│   ├── layout/         # Componentes estruturais da interface
│   └── ui/             # Componentes genéricos e reutilizáveis
├── constants/          # Constantes utilizadas na aplicação
├── hooks/              # Hooks personalizados
├── mocks/              # Dados fictícios temporários utilizados durante o desenvolvimento
├── models/             # Modelos e estruturas de dados
├── layout/             # Estruturas compartilhadas das páginas
├── pages/              # Páginas e telas do sistema
│   ├── Auctioneer/     # Páginas do leiloeiro
│   ├── Auth/           # Páginas de autenticação
│   ├── Bidder/         # Páginas do licitante
│   └── Public/         # Páginas públicas
├── providers/          # Provedores de contexto global
├── reducers/           # Reducers para gerenciamento de estado
├── routers/            # Configuração das rotas
│   ├── Auth/           # Rotas de autenticação
│   ├── MainRouter/     # Rotas principais da aplicação
│   └── ProfileRouter/  # Rotas específicas por perfil
├── schemas/            # Esquemas de validação
│   ├── AuctioneerLot/  # Validações relacionadas aos lotes do leiloeiro
│   └── Auth/           # Validações relacionadas à autenticação
├── services/           # Comunicação com a API
├── templates/          # Estruturas-base de interface
│   ├── HomeTemplate/   # Template da página inicial
│   └── MainTemplate/   # Template principal da aplicação
├── utils/              # Funções utilitárias
├── App.tsx             # Componente principal da aplicação
└── main.tsx            # Ponto de entrada do React
```

*Observação: a estrutura apresentada é ilustrativa e não contempla toda a arquitetura do projeto. Para conhecer a organização completa, consulte as pastas e os arquivos existentes no repositório.*

## Visão Geral da Organização dos Componentes

### Components

A pasta `components/` reúne os componentes da interface, organizados por responsabilidade para promover reutilização, consistência visual e separação entre elementos de domínio, feedback, estrutura e interface genérica.

#### Domain

Contém componentes relacionados às regras e funcionalidades específicas do negócio de leilões, organizados conforme os domínios da aplicação.

Exemplos:
- Exibição e gerenciamento de lotes.
- Sala de leilão e histórico de lances.
- Carteira e transações do licitante.
- Comprovantes de arremate.
- Auditoria e integridade dos lotes.
- Componentes específicos do painel do leiloeiro.

#### Feedback

Reúne componentes responsáveis por apresentar informações de retorno ao usuário durante a utilização do sistema.

Exemplos:
- Notificações de sucesso e erro.
- Mensagens de validação.
- Indicadores de carregamento.
- Estados vazios e mensagens informativas.
- Alertas e confirmações de operações.

#### Layout

Contém componentes responsáveis pela estrutura e organização visual das páginas.

Exemplos:
- Cabeçalho e navegação.
- Sidebar e menus.
- Estruturas de páginas autenticadas.
- Containers e seções compartilhadas.
- Elementos estruturais comuns às diferentes áreas do sistema.

#### UI

Reúne componentes genéricos e reutilizáveis de interface, sem dependência direta das regras de negócio da Casa de Leilões.

Exemplos:
- Botões e campos de formulário.
- Cards e badges.
- Modais e elementos de navegação.
- Tabelas e elementos de paginação.
- Componentes visuais compartilhados entre diferentes funcionalidades.

Essa organização permite manter os componentes específicos do negócio separados dos elementos genéricos de interface, facilitando a manutenção e a evolução do front-end.

### Pages

Contém as páginas que representam as principais telas da aplicação, organizadas conforme as áreas e os perfis de acesso do sistema.

Entre elas estão as páginas do leiloeiro, do licitante, de autenticação e as páginas públicas, como a vitrine de lotes e a auditoria dos leilões.

### Constants
Armazena constantes utilizadas em diferentes partes da aplicação, centralizando valores fixos e configurações compartilhadas para facilitar a reutilização, a organização e a manutenção do código.

### Layout

Reúne componentes responsáveis pela estrutura visual compartilhada entre as páginas, como cabeçalhos, menus laterais e elementos de navegação, mantendo uma organização consistente entre as diferentes áreas da aplicação.

### Templates

Contém estruturas-base utilizadas na composição das páginas, permitindo padronizar layouts e organizar elementos recorrentes da interface.

### Hooks

Reúne hooks personalizados que encapsulam lógicas reutilizáveis da aplicação, como autenticação, consulta e gerenciamento de lotes, operações da carteira, envio de lances e atualização de informações em tempo real.

### Services

Responsável pela comunicação entre o front-end e a API de back-end, centralizando as chamadas e operações necessárias para acessar os recursos da plataforma.

Inclui serviços relacionados à autenticação, ao gerenciamento de lotes, aos lances, à carteira, aos arremates e à consulta dos registros de auditoria.

### Models

Define as estruturas de dados utilizadas pela aplicação, estabelecendo os modelos e contratos necessários para representar informações de usuários, lotes, lances, carteiras, transações, arremates e auditoria.

### Providers

Contém os provedores de contexto da Context API, responsáveis por disponibilizar estados compartilhados entre diferentes componentes da aplicação, como informações de autenticação e dados globais do usuário, conforme implementado no projeto.

### Reducers

Reúne reducers utilizados no gerenciamento de estado, centralizando as atualizações e transições de estado associadas aos contextos da aplicação, quando aplicável.

### Routers

Responsável pela configuração e organização das rotas da aplicação, definindo os caminhos de navegação para páginas públicas, autenticação e áreas específicas dos perfis de usuário.

### Schemas

Contém esquemas de validação utilizados para verificar os dados de entrada antes do processamento das operações. Utiliza o Zod para definir regras de validação de formulários e informações relacionadas às funcionalidades do sistema, conforme os esquemas implementados.

### Services

Centraliza a comunicação com a API de back-end, permitindo consultar e executar operações relacionadas aos recursos da plataforma.

### Utils

Reúne funções utilitárias reutilizáveis, como formatação de valores monetários, datas e outras operações auxiliares necessárias para a apresentação e o tratamento de informações.

### Assets

Armazena os recursos estáticos utilizados na interface, incluindo imagens, ícones e outros arquivos visuais necessários para a aplicação.

## Funcionalidades

### Vitrine de Lotes

Exibe os lotes disponíveis para consulta, organizados conforme seus estados, como agendados, em andamento e encerrados.

### Painel do Leiloeiro

Permite buscar itens em uma API pública, criar e gerenciar lotes, acompanhar disputas e consultar os resultados dos leilões encerrados.

### Sala de Leilão em Tempo Real

Apresenta informações atualizadas sobre o lote, valor do lance atual, incremento mínimo, histórico de lances e posição do licitante na disputa.

A comunicação em tempo real permite acompanhar alterações relevantes sem precisar recarregar a página.

### Carteira do Licitante

Disponibiliza informações sobre saldo total, valores comprometidos em lances e saldo disponível, além das funcionalidades de depósito simulado e consulta de movimentações.

### Meus Arremates

Permite consultar os lotes vencidos pelo licitante e acessar os respectivos comprovantes de arremate, incluindo links para compartilhamento.

### Auditoria Pública

Disponibiliza o histórico de lances de um lote e informações sobre a integridade dos registros, permitindo a verificação sem necessidade de autenticação.

### Autenticação e Controle de Acesso

Organiza o acesso às funcionalidades de acordo com o perfil do usuário, diferenciando as permissões de leiloeiros e licitantes.

## Convenção de Commits

O projeto utiliza a convenção [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/), que padroniza as mensagens de commit e facilita a identificação das alterações realizadas.

- `feat`: implementação de novas funcionalidades.
- `fix`: correção de erros.
- `docs`: alterações na documentação.
- `style`: alterações de formatação sem mudança na lógica.
- `refactor`: refatoração de código.
- `perf`: melhorias de desempenho.
- `test`: criação ou alteração de testes.
- `chore`: tarefas de manutenção.
- `ci`: alterações relacionadas à integração e entrega contínuas.

### Vinculação de Issues

Para associar commits a issues do GitHub, podem ser utilizadas expressões como:

Fechar uma issue automaticamente:

```text
closes #12
```

Resolver uma issue:

```text
resolves #87
```

Vincular múltiplas issues:

```text
fixes #3 #5 closes #9
```

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/ryannardelli/casa_de_leiloes_front.git
```

### 2. Acessar a pasta do projeto

```bash
cd casa_de_leiloes_front
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias para a comunicação com o back-end.

Exemplo, caso a aplicação utilize uma URL de API configurável:

```env
VITE_API_URL=http://localhost:3000
```

O endereço e o prefixo devem corresponder à configuração real do back-end. Se o projeto utilizar outras variáveis, consulte o arquivo de configuração dos serviços e a documentação correspondente.

### 5. Executar em ambiente de desenvolvimento

```bash
npm run dev
```

Após iniciar o servidor, acesse o endereço local apresentado no terminal, geralmente:

```text
http://localhost:5173
```

### 6. Gerar a versão de produção

```bash
npm run build
```

### 7. Verificar o código de produção localmente

```bash
npm run preview
```

O comando `preview` permite verificar localmente a versão compilada da aplicação. Ele não substitui o deploy em um ambiente de produção.

## Deploy

A aplicação possui deploy público para permitir a avaliação dos fluxos do sistema sem necessidade de executar o projeto localmente.

**Aplicação em produção:** https://arremata-app.vercel.app

Para utilizar as funcionalidades que dependem do back-end, a API deve estar acessível e as variáveis de ambiente devem apontar para o ambiente correspondente.

## Considerações Finais

Este projeto foi desenvolvido como parte do teste técnico Elite Dev na Verzel, com o objetivo de construir uma plataforma de leilões online que reúna gerenciamento de lotes, disputas em tempo real, controle de carteira, consulta de arremates e auditoria pública.

A organização do front-end busca favorecer a manutenção do código, a reutilização de componentes, a segurança dos fluxos de acesso e a integração com os serviços responsáveis pelas regras de negócio do sistema.
