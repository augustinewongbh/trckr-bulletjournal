import React, { Component } from "react";
import { connect } from "react-redux";
import {
  showByDate,
  toggleTodoStatus,
  endOfDayAction
} from "./actions/bulletjournalactions";
import { List, Modal, Header, Button } from "semantic-ui-react";
import moment from "moment";

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
      all: null,
      modalOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  showModalTimer = () => {
    var showTime = moment()
      .set("hour", this.props.time.hour || 21)
      .set("minute", this.props.time.minute || 0)
      .set("second", 30);
    let startTime = moment();
    let timetoShow = showTime - startTime;
    if (timetoShow < 1000) {
      showTime = showTime.add(1, "days");
      timetoShow = showTime - startTime;
    } //prevents infinite loop, sets the timer to the next day
    this.EndOfDayTimer = setTimeout(
      () => this.setState({ modalOpen: !this.state.modalOpen }),
      timetoShow
    );
    console.log("showModalTimer called", timetoShow);
  };

  componentDidMount() {
    //start timer here. get time to 9pm (to be adjustable)
    //when time is up, setState of modal to show
    this.showModalTimer();
  }

  componentWillUpdate(newProps, newState) {
    if (newState.modalOpen == false) {
      clearTimeout(this.EndOfDayTimer);
      this.showModalTimer();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.EndOfDayTimer);
    console.log("showTodo componentWillUnmount called");
  }

  handleClick(id, currentStatus) {
    this.props.toggleTodoStatus(id, currentStatus);
  }

  handleCloseModal = () => {
    clearTimeout(this.EndOfDayTimer);
    this.setState({ modalOpen: false });
  };

  handleSubmitModal = () => {
    if (this.props.todos.filter(res => res.status == "ongoing").length > 0) {
      alert("One or more task actions have not been decided ");
    } else {
      this.props.endOfDayAction();
      this.handleCloseModal();
    }
  };
  render() {
    const { todos, combined } = this.props;
    return (
      <div>
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
        <Modal
          dimmer={false}
          open={this.state.modalOpen}
          onClose={this.handleCloseModal}
          closeOnDocumentClick
        >
          <Modal.Header>Don't Leave These Hanging...</Modal.Header>
          <Modal.Content>
            <List size="huge">
              {todos.filter(res => res.status == "ongoing").map(res => (
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
                  //cannot use actions handleClick
                  //as when the state updates, the modal closes
                  //maybe change to an accordion? with buttons to choose the actions. then pass actions to action creator
                />
              ))}
            </List>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.handleSubmitModal}>
              Accept
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
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
    time: state.time,
    combined: [...todos, ...events, ...notes],
    todos,
    events,
    notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    endOfDayAction: () => dispatch(endOfDayAction()),
    showByDate: date => dispatch(showByDate(date)),
    toggleTodoStatus: (id, currentStatus) =>
      dispatch(toggleTodoStatus(id, currentStatus))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);
