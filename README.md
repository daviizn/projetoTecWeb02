# Controle de Finanças

Este projeto é uma aplicação web simples para controle de finanças pessoais, desenvolvida com React no frontend e um JSON Server para o backend.

## Funcionalidades

* **Listagem de Transações**: Visualize todas as suas transações, incluindo descrição, valor e tipo (receita ou despesa).
* **Resumo Financeiro**: Acompanhe o total de receitas, despesas e o saldo atual.
* **Adicionar Nova Transação**: Registre novas receitas ou despesas informando a descrição, o valor e o tipo.
* **Editar Transação**: Modifique os detalhes de uma transação existente.
* **Remover Transação**: Exclua transações que não são mais relevantes.
* **Validação de Formulário**: Mensagens de erro são exibidas para valores inválidos ou campos vazios ao adicionar ou editar transações.
* **Navegação entre Telas**: Alterna facilmente entre a listagem de transações e o formulário de nova transação.

## Tecnologias Utilizadas

* **Frontend**: React.js com Vite.
* **Backend**: JSON Server para simular uma API RESTful.
* **Gerenciamento de Estado**: React Context API para gerenciar o estado das transações e navegação.
* **Requisições HTTP**: Axios para comunicação com o backend.
* **Estilização**: CSS puro com variáveis para o tema.

## Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em seu sistema.

* **Node.js**: [https://nodejs.org/](https://nodejs.org/)
* **npm**: Vem com o Node.js
* **yarn**: `npm install --global yarn` (opcional)

### 1. Clonar o Repositório

git clone https://github.com/daviizn/projetoTecWeb02.git
cd projetoTecWeb02

### 2. Iniciar o Backend

* cd backend
* npm install
* npm start

### 3. Iniciar o Frontend

* cd ../frontend
* npm install 
* npm run dev 
