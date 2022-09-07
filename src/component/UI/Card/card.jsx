import React, { Component } from 'react';
import "../Card/card.css"


function Card(props) {
    return <div className="cardHolder"> 
        {props.children}
    </div>
}

export default Card