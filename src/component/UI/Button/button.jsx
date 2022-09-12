import React, { Component } from 'react';
import "../Button/button.css"



function Button(props) {
    return <button onClick={props.onClick}>{props.children}</button>
}

export default Button