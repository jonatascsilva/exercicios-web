import React from 'react';

import './Nav.css';

import NavItem from './NavItem';

const Nav = (props) => {
  return (
    <aside className="Nav">
      <nav>
        <NavItem
          href="/"
          icon="fa fa-home"
          label="Início"
        />
        <NavItem
          href="/users"
          icon="fa fa-user-circle"
          label="Usuários"
        />
      </nav>
    </aside>
  );
}

export default Nav;