import React, { Component } from "react";
import { connect } from "react-redux";
import { showByDate, toggleTodoStatus } from "./actions/bulletjournalactions";
import { List } from "semantic-ui-react";
/*import {
  CrossIco,
  CheckIco,
  LeftPointerIco,
  RightPointerIco,
  FilledCircleIco,
  EmptyCircleIco,
  DashIco
} from "./svgs";*/

const TodoItem = props => (
  <List.Item
    onClick={() =>
      props.stats !== undefined && props.handleClick(props.id, props.stats)}
  >
    <List.Icon name={props.icon} />
    <List.Content>{props.content}</List.Content>
  </List.Item>
);

const selectIcons = category => {
  switch (category) {
    case "note":
      return "minus";
    case "todo":
      return "circle";
    case "ongoing":
      return "circle";
    case "event":
      return "radio";
    case "migrated":
      return "chevron circle right";
    case "scheduled":
      return "chevron circle left";
    case "completed":
      return "check circle";
    default:
      return "circle";
  }
};

class ShowTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id, currentStatus) {
    this.props.toggleTodoStatus(id, currentStatus);
  }
  render() {
    const { combined } = this.props;
    return (
      <List size="huge">
        {combined.map(res => (
          <TodoItem
            content={res.text}
            icon={
              res.category === "todo"
                ? selectIcons(res.status)
                : selectIcons(res.category)
            }
            key={res.id}
            id={res.id}
            stats={res.status}
            handleClick={this.handleClick}
          />
        ))}
      </List>
    );
  }
}

const getCurrentStates = (dat, fullDate) => {
  return dat.filter(res => res.date == fullDate);
};

const mapStateToProps = state => {
  let todos = getCurrentStates(state.todo, state.date);
  let events = getCurrentStates(state.events, state.date);
  let notes = getCurrentStates(state.notes, state.date);
  return {
    combined: [...todos, ...events, ...notes],
    todos,
    events,
    notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showByDate: date => dispatch(showByDate(date)),
    toggleTodoStatus: (id, currentStatus) =>
      dispatch(toggleTodoStatus(id, currentStatus))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);
