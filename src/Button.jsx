import React from 'react'

const Button = ({ variant, onClick, children }) => {
    const buttonClassName = `button ${variant}`;
  
    return (
      <button className={buttonClassName} onClick={onClick}>
        {children}
      </button>
    );
  };

export default Button