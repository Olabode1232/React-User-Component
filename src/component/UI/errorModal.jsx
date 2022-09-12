import React, { Component } from "react";
import Card from "../UI/Card/card"
import Button from "../UI/Button/button"

function ErrorModal(props) {
  return (
      
      <Card>
    <div>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
          <Button>okay</Button>
      </footer>
    </div>
    </Card>
  );
}

export default ErrorModal;
