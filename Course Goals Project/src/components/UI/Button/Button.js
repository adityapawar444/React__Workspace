import React from 'react';

import classes from './button.module.css';

const Button = props => {
  
    console.log(classes);
  return (
    <button
      type={props.type}
      className={classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
