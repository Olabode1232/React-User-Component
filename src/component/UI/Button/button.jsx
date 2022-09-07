import React, { Component } from 'react';
import "../Button/button.css"



function Button(props) {
    return <button>{props.children}</button>
}

export default Button