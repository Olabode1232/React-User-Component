import React, { Component } from "react";
import AddUser from "./component/Users/addUsers";
import UsersList from "../src/component/Users/userslist";
import "./App.css";

function App(props) {
  const [renUser, setRenUser] = React.useState([]);
  const addHandler = (Uname, Uage) => {
    setRenUser((prevState) => {
      return [
        ...prevState,
        { name: Uname, age: Uage, id: Math.random().toString },
      ];
    });
  };

  return (
    <div className="app">
      <AddUser onAddUser={addHandler} />
      <UsersList users={renUser} />
    </div>
  );
}

export default App;
