import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Form, Button, Header } from "semantic-ui-react";

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) return;
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <Button type="submit">Add Project</Button>
      </Form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
