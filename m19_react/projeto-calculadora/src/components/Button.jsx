import React from 'react';
import './Button.css';

const Button = props => {
  let classes = 'button ';
  classes += props.myClass;
  
  return (
    <button
      id={props.label}
      onClick={e => props.click && props.click(props.label, e)}
      className={classes}
    >
      {props.label}
    </button>
  )
}

export default Button;