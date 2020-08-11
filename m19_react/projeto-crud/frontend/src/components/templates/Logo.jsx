import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.css';

import logo from '../../assets/images/logo.png';

const Logo = (props) => {
  return (
    <aside className="Logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </aside>
  );
}

export default Logo;