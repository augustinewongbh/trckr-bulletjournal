/*
This is a functional component that takes in the state from showgoals which takes it from GoalsContainer
process then returns the processed object/array to parents
*/

import React, { Component } from "react";
import { Modal, Button, Form, Header } from "semantic-ui-react";

class GoalsEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      description: this.props.res.description,
      title: "",
      task: "",
      tasks: this.props.res.tasks || [""],
      curridx: this.props.idx
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleOpen(e) {
    this.setState({ modalOpen: true });
  }

  handleClose(e) {
    this.setState({ modalOpen: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    let itemObj = this.props.res;
    console.log(Object.keys(this.state));
    itemObj["refidx"] = this.state.curridx;
    itemObj["description"] = this.state.description;
    itemObj["tasks"] = this.state.tasks;
    this.props.handleFormSubmit(itemObj);
    this.setState({
      modalOpen: false
    });
  }

  handleTaskChange(e) {
    let temp = this.state.tasks;
    temp[e.target.id] = e.target.value;
    this.setState({ tasks: temp });
  }

  handleTaskSubmit(e) {
    e.preventDefault();
    let temp = this.state.tasks;
    temp.push(this.state.task);
    this.setState({
      tasks: temp,
      task: ""
    });
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>PenLogo</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>
          <h1>
            {this.props.res.title}
          </h1>
        </Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <textarea
                name="description"
                placeholder="Describe your goal"
                onChange={this.handleChange}
                value={this.state.description}
              />
            </Form.Field>
            <Form.Field>
              <ul style={{ listStyle: "none" }}>
                {this.state.tasks.map((data, idx) =>
                  <li key={idx}>
                    <input
                      name="tasks"
                      value={this.state.tasks[idx]}
                      onChange={this.handleTaskChange}
                      id={idx}
                      autoFocus
                    />
                  </li>
                )}
              </ul>
              <Button onClick={this.handleTaskSubmit}>+</Button>
            </Form.Field>
            <Button type="submit" onSubmit={this.handleSubmit}>
              Save
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default GoalsEdit;
