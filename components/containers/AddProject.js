import React, { Component } from "react";
import { connect } from "react-redux";
import { addProjectTitle } from "../actions";
import { Form, Button, Header } from "semantic-ui-react";

let AddProject = ({ dispatch }) => {
  let input;

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) return;
          dispatch(addProjectTitle(input.value));
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

AddProject = connect()(AddProject);

export default AddProject;
