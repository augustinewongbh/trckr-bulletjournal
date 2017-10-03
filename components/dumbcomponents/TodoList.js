import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick, onDelete }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id, todo.todoLink)}
        onDelete={() => onDelete(todo.id)}
      />
    ))}
  </ul>
);

export default TodoList;
