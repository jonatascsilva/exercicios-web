import React, { Component } from 'react';

import UserTable from './UserTable';
import userDatabaseUrl from './userDatabaseConfig';

const initialState = {
  user: { name: '', email: '', phone: '' },
  userList: []
};

class UserForm extends Component {
  state = { ...initialState };

  updateFormField = (event) => {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  clearForm = () => {
    this.setState({ user: initialState.user });
  }

  updateListedUsers = (newUser, addUser = true) => {
    const updatedUserList = this.state.userList.filter(user => user.id !== newUser.id);
    if (addUser) updatedUserList.unshift(newUser);
  
    return updatedUserList;
  }

  saveUser = async () => {
    const user = this.state.user;
    const targetUrl = user.id ? `${userDatabaseUrl}/${user.id}` : userDatabaseUrl;

    const options = {
      method: user.id ? 'PUT' : 'POST',
      body: new URLSearchParams(user)
    };
  
    try {
      const resp = await fetch(targetUrl, options);
      const insertedUser = await resp.json();
      const updatedListUsers = this.updateListedUsers(insertedUser);
  
      this.setState({ user: initialState.user, userList: updatedListUsers });
    } catch (err) {
      // Empty line
    }
  }

  loadUsers = async () => {
    const targetUrl = `${userDatabaseUrl}?_sort=id&_order=desc`;

    try {
      const resp = await fetch(targetUrl);
      const allUsers = await resp.json();

      this.setState({ userList: allUsers });
    } catch (err) {
      // Empty line
    }
  }

  loadUser = (user) => {
    this.setState({ user });
  }

  removeUser = async (user) => {
    const targetUrl = `${userDatabaseUrl}/${user.id}`;
    const options = {
      method: 'DELETE'
    };

    try {
      const removedUser = user;
      await fetch(targetUrl, options);
      const updatedListUsers = this.updateListedUsers(removedUser, false);

      this.setState({ userList: updatedListUsers });
    } catch (err) {
      // Empty line
    }
  }

  componentDidMount = () => {
    this.loadUsers();
  }

  render() {
    return (
      <>
        <div className="form">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label>Usuário</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.user.name}
                  onChange={this.updateFormField}
                  placeholder="Digite o nome"
                />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={this.state.user.email}
                  onChange={this.updateFormField}
                  placeholder="Digite o e-mail"
                />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={this.state.user.phone}
                  onChange={this.updateFormField}
                  placeholder="Digite o telefone"
                />
              </div>
            </div>
          </div>

          <hr/>

          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <button
                className="btn btn-primary"
                onClick={this.saveUser}
              >
                Salvar
              </button>
              <button
                className="btn btn-secondary ml-2"
                onClick={this.clearForm}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
        <UserTable
          className="col-12"
          userList={this.state.userList}
          loadUser={this.loadUser}
          removeUser={this.removeUser}
        >
        </UserTable>
      </>
    );
  }
}

export default UserForm;