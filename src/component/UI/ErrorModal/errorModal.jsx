import React, { Component } from "react";
import Card from "../Card/card";
import Button from "../Button/button";
import "./errorModal.css";

function ErrorModal(props) {
  return (
    <div>
    <div className="backdrop" onClick={props.onConfirm}/>
    <div className="overall">
      <Card>
        <div>
          <header className="header">
            <h2>{props.title}</h2>
          </header>
          <div className="content">
            <p>{props.message}</p>
          </div>
          <footer className="action  important!">
            <Button className="button" onClick={props.onConfirm}>okay</Button>
          </footer>
        </div>
      </Card>
    </div>
    </div>
  );
}

export default ErrorModal;
