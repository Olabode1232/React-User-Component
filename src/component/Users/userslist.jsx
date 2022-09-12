import React, { Component } from "react";
import Card from "../UI/Card/card";
import "./usersList.css"

function UsersList(props) {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
