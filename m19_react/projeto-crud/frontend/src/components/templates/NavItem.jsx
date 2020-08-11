import React from 'react';
import { Link } from 'react-router-dom';

import './NavItem.css';

const NavItem = (props) => {
  return (
    <Link to={props.href} className="NavItem">
      <i className={`${props.icon} mr-1`}></i> {props.label}
    </Link>
  );
}

export default NavItem;