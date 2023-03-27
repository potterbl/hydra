import React from 'react';
import '../../style/Button.css';

const Button = ({ children, customStyles, onClick, id, cn }) => {
    return (
        <button id={id} className={cn} onClick={onClick} style={customStyles}>{children.toUpperCase()}</button>
    );
};

export default Button;
