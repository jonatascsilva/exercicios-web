import React from 'react';

import Main from '../templates/Main';
import UserForm from './UserForm';

const Users = () => {
  return (
    <Main
      icon="fa fa-user-circle"
      title="Usuários"
      subtitle="CRUD: Dados dos Usuários"
    >
      <UserForm className="Users" />
    </Main>
  )
}

export default Users;