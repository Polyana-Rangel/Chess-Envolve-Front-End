<!-- Titulo do projeto -->
<div align="center" style="margin-bottom: 16px">
    <img 
        src="./src/assets/logo.svg" 
        alt="Logo evolve." 
        width="500" 
    />
</div>

---

<!-- Informações visuais do projeto -->
<div align="center">
    <a href="https://www.linkedin.com/in/polyana-rangel-596027156/">
    <img alt="Polyana Rangel" src="https://img.shields.io/badge/-polyanarangel-009db9?style=flat&logo=Linkedin&logoColor=white" />
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Polyana-Rangel/Chess-Envolve-Front-End?color=009bd9">

  <a href="https://github.com/Polyana-Rangel/Chess-Envolve-Front-End/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Polyana-Rangel/Chess-Envolve-Front-End?color=009bd9">
  </a>

  <a href="https://github.com/Polyana-Rangel/Chess-Envolve-Front-End/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Polyana-Rangel/Chess-Envolve-Front-End?color=009db9&logo=github">
  </a>
    <img alt="Version" src="https://img.shields.io/badge/Version-18.2-3B19E5?logo=react" />
    <img alt="License" src="https://img.shields.io/badge/license-MIT-3B19E5" />    
</div>

<!-- Breve descrição sobre o projeto -->

<div align="center">
  <sub>Desafio Front-End para Evolve</sub>
</div>

<!-- Tabela de conteúdo do projeto -->

## :pushpin: Tabela de Conteúdo

- [:pushpin: Tabela de Conteúdo](#pushpin-tabela-de-conteúdo)
- [:one: Sobre o Projeto](#one-sobre-o-projeto)
- [:two: Tecnologias](#two-tecnologias)
- [:three: Funcionalidades](#three-funcionalidades)
- [:four: Pré-requisitos](#four-pré-requisitos)
- [:five: Como rodar](#five-como-rodar)
- [:closed_book: Licencia](#closed_book-licencia)

<!-- Descrição do projeto -->

## :one: Sobre o Projeto

O Simulador de Captura de Peças de Xadrez é um projeto de frontend que utiliza a biblioteca React e uma API para simular a seleção e captura de peças de xadrez. O projeto consiste em três blocos principais: Bloco 1, Bloco 2 e Bloco 3. O Bloco 1 permite a seleção de peças, o Bloco 2 exibe as peças selecionadas e o Bloco 3 mantém as informações atualizadas sobre o total e a quantidade de peças selecionadas.

<!-- Tecnologias usadas no projeto -->

## :two: Tecnologias

Esse projeto foi feito utilizando as seguintes tecnologias:

- [React](https://pt-br.legacy.reactjs.org/docs/getting-started.html)
- [React Router](https://www.freecodecamp.org/portuguese/news/um-guia-completo-de-react-router-para-iniciantes-incluindo-router-hooks/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [vite](https://vitejs.dev/guide/)

<!-- Funcionalidades do projeto -->

## :three: Funcionalidades

Recursos do projeto:

* **Interface de usuário interativa:** O projeto contará com uma interface de usuário responsiva e intuitiva.
* **Bloco 1:**

**Clique em um item do Passo 1:** Ao clicar em um item no Bloco 1 (representando uma peça de xadrez), o item será adicionado ao Bloco 2.

**Adição no topo:** Os itens adicionados ao Bloco 2 serão exibidos na ordem inversa de adição, com o último item adicionado aparecendo no topo da lista

**Indicador visual de seleção:** Um indicador visual de uma borda diferente será exibido no item selecionado no Bloco 1 para sinalizar que ele foi incluído. Isso permite que o usuário identifique facilmente as peças selecionadas.

**Remoção de itens selecionados:** Ao clicar em um item já selecionado no Bloco 2, ele será removido do bloco, permitindo ao usuário alterar suas seleções.

* **Bloco 2:** Neste bloco, os itens selecionados pelo usuário serão exibidos.

**Listagem de itens selecionados:** O Bloco 2 exibirá os itens adicionados pelo usuário no Bloco 1. Essa lista será atualizada dinamicamente conforme o usuário seleciona ou remove peças.

**Exclusão de itens:** Ao clicar no ícone de lixeira ao lado de um item no Bloco 2, o item será excluído da lista de peças selecionadas.

* **Bloco 3:** Este bloco manterá as informações atualizadas sobre o total e a quantidade de peças selecionadas.

**Atualização do total e quantidade:** O Bloco 3 manterá as informações atualizadas sobre o total e a quantidade de peças selecionadas. Esses valores serão recalculados dinamicamente à medida que o usuário inclui ou exclui peças.

<!-- Pré-requisitos para rodar o projeto -->

## :four: Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [React](https://pt-br.legacy.reactjs.org/docs/getting-started.html)
  , [Axios](https://axios-http.com/ptbr/docs/intro), [Api](https://docs.microsoft.com/azure/azure-functions/functions-run-local), [Node.js](https://nodejs.org/pt-br/docs).

<!-- Como rodar o projeto -->

## :five: Como rodar

Node.js instalado na sua máquina.

### Passo 1: Clonar o repositório

- Abra o terminal ou prompt de comando.
- Navegue até o diretório onde você deseja clonar o projeto.
- Execute o seguinte comando para clonar o repositório:

```bash

git clone https://github.com/Polyana-Rangel/Chess-Envolve-Front-End

```

### Passo 2: Instalar as dependências

- No terminal ou prompt de comando, navegue até a raiz do projeto clonado.
- Execute o seguinte comando para instalar as dependências do projeto:

```bash

npm install

```

### Passo 3: Configurar a API

- Abra o terminal ou prompt de comando na raiz do projeto clonado.
- Navegue até a api:

```bash

cd api

```

- Instale as dependências:

```bash

npm install

```

- Rode a aplicação usando o seguinte trecho:

```bash

npm run dev

```

- A api já está funcionando na porta 5000 e com isso o frontend conseguirá visualizar as peças.

Obs: Para melhor funcionamento da api, foi adicionado o pacote cors e nodemon.

### Passo 4: Iniciar o servidor de desenvolvimento da Frontend

No terminal ou prompt de comando, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash

npm run dev

```

### Passo 5: Visualizar o projeto

Após iniciar o servidor de desenvolvimento, o projeto estará disponível no navegador.
Abra o seu navegador e acesse o seguinte endereço: http://localhost:5173 (ou a porta especificada no terminal, se for diferente).
Agora você deve conseguir visualizar e interagir com o projeto Simulador de Captura de Peças de Xadrez utilizando React e API. Certifique-se de que o servidor de desenvolvimento esteja em execução sempre que desejar testar o projeto.

<!-- Licença do projeto -->

## :closed_book: Licencia

Lançado em 2023 :closed_book: Licencia

Construído por Polyana Rangel 🚀. Esse projeto esta sobre MIT license.
