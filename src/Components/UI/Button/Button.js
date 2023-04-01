import React from "react";
 import './Button.css';

 const Button = props => {
    return (
        <button type={props.type} className={props.className} onClick={props.onClick} style={props.style}>{props.children}</button>
    );
 };
 export default Button;