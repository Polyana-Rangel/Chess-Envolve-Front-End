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
    <img alt="Polyana Rangel" src="https://img.shields.io/badge/-polyana-rangel-596027156-009db9?style=flat&logo=Linkedin&logoColor=white" />
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Polyana-Rangel/Chess-Envolve-Front-End?color=009bd9">

  <a href="https://github.com/Polyana-Rangel/Chess-Envolve-Front-End/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Polyana-Rangel/Chess-Envolve-Front-End?color=009bd9">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-009db9">

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

- _Interface de usuário interativa:_ O projeto contará com uma interface de usuário responsiva e intuitiva.
- _Bloco 1:_
- _Clique em um item do Passo 1:_ Ao clicar em um item no Bloco 1 (representando uma peça de xadrez), o item será adicionado ao Bloco 2.
- _Adição no topo:_ Os itens adicionados ao Bloco 2 serão exibidos na ordem inversa de adição, com o último item adicionado aparecendo no topo da lista
- _Indicador visual de seleção:_ Um indicador visual de uma borda diferente será exibido no item selecionado no Bloco 1 para sinalizar que ele foi incluído. Isso permite que o usuário identifique facilmente as peças selecionadas.
- _Remoção de itens selecionados:_ Ao clicar em um item já selecionado no Bloco 2, ele será removido do bloco, permitindo ao usuário alterar suas seleções.
- _Bloco 2:_ Neste bloco, os itens selecionados pelo usuário serão exibidos.
- _Listagem de itens selecionados:_ O Bloco 2 exibirá os itens adicionados pelo usuário no Bloco 1. Essa lista será atualizada dinamicamente conforme o usuário seleciona ou remove peças.
- _Exclusão de itens:_ Ao clicar no ícone de lixeira ao lado de um item no Bloco 2, o item será excluído da lista de peças selecionadas.
- *Bloco 3:*Este bloco manterá as informações atualizadas sobre o total e a quantidade de peças selecionadas.
- _Atualização do total e quantidade:_ O Bloco 3 manterá as informações atualizadas sobre o total e a quantidade de peças selecionadas. Esses valores serão recalculados dinamicamente à medida que o usuário inclui ou exclui peças.

<!-- Pré-requisitos para rodar o projeto -->

## :four: Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [React](https://pt-br.legacy.reactjs.org/docs/getting-started.html)
  , [Axios](https://axios-http.com/ptbr/docs/intro), [Api](https://docs.microsoft.com/azure/azure-functions/functions-run-local), [Node.js](https://nodejs.org/pt-br/docs).

<!-- Como rodar o projeto -->

## :five: Como rodar

Node.js instalado na sua máquina.

- _Passo 1: Clonar o repositório_

- Abra o terminal ou prompt de comando.
- Navegue até o diretório onde você deseja clonar o projeto.
- Execute o seguinte comando para clonar o repositório:

bash

git clone <URL_DO_REPOSITÓRIO>

- (Substitua <URL_DO_REPOSITÓRIO> pela URL do repositório Git onde o projeto está hospedado).

- _Passo 2: Instalar as dependências_

- No terminal ou prompt de comando, navegue até o diretório do projeto clonado.
- Execute o seguinte comando para instalar as dependências do projeto:

bash
npm install

- _Passo 3: Configurar a API_

...

- _Passo 4: Iniciar o servidor de desenvolvimento_

No terminal ou prompt de comando, execute o seguinte comando para iniciar o servidor de desenvolvimento:

bash
npm run dev

- _Passo 5: Visualizar o projeto_

Após iniciar o servidor de desenvolvimento, o projeto estará disponível no navegador.
Abra o seu navegador e acesse o seguinte endereço: http://localhost:5173 (ou a porta especificada no terminal, se for diferente).
Agora você deve conseguir visualizar e interagir com o projeto Simulador de Captura de Peças de Xadrez utilizando React e API. Certifique-se de que o servidor de desenvolvimento esteja em execução sempre que desejar testar o projeto.

<!-- Licença do projeto -->

## :closed_book: Licencia

Lançado em 2023 :closed_book: Licencia

Construído por Polyana Rangel 🚀. Esse projeto esta sobre MIT license.
