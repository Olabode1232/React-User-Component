import React, { Component } from "react";
import Card from "../UI/Card/card";
import Button from "../UI/Button/button";
import "./addUsers.css";

function AddUser(props) {
  // const [enterednameAndAge, setEnterednameAndAge] = React.useState({
  //     username: "",
  //     age: "",
  // })
  // const usernameAndAgeHandler = (event) => {
  //     setEnterednameAndAge((prevState) => {
  //          return {
  //             ...prevState,
  //             username: event.target.value,
  //             age: event.target.value
  //          }
  //     })
  // }
  const [enteredUsername, setEnteredUsername] = React.useState("");
  const [enteredAge, setEnteredAge] = React.useState("");

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    setEnteredUsername("");
    setEnteredAge("");
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
        return;
    }
    if(+enteredAge < 0){
        return;
    }
    // console.log(enterednameAndAge)
  props.onAddUser(enteredUsername, enteredAge)
  };
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          value={enteredUsername}
          onChange={usernameHandler}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
} 

export default AddUser;
