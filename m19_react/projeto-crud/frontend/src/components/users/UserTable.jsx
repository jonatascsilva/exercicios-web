import React from 'react';

import UserRows from './UserRows';

const UserTable = (props) => {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <UserRows {...props} />
      </tbody>
    </table>
  );
}

export default UserTable;