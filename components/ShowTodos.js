import React, { Component } from "react";
import { connect } from "react-redux";

import { List } from "semantic-ui-react";

const TodoItem = props => (
  <List.Item icon={props.icon} content={props.content} />
);

const ShowTodos = props => <List>{console.log(Object.values(props.all))}</List>;

const mapStateToProps = state => {
  return {
    all: state
  };
};

export default connect(mapStateToProps)(ShowTodos);
