import React, { Component } from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, onDelete, completed, text }) =>
  <li style={{ textDecoration: completed ? "line-through" : "none" }}>
    <span onClick={onClick}>
      {text}
    </span>
    <button onClick={onDelete}>Delete</button>
  </li>;

export default Todo;
