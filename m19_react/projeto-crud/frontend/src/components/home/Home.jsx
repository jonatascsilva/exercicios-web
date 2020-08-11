import React from 'react';

import Main from '../templates/Main';

const Home = (props) => {
  return (
    <Main
      icon="fa fa-home"
      title="Início"
      subtitle="Projeto: Cadastro de Usuários"
    >
      <div className="display-4">Bem-vindo!</div>
      <hr />
      <p className="mb-0">
        Este é um projeto para cadastro de usuário contendo as quatro
        operações básicas do CRUD: Create (Criar), Update (Atualizar), Read
        (Ler) e Delete (Excluir).
      </p>
    </Main>
  );
}

export default Home;