import React, { Component } from "react";
import { Modal, Button, Form, Header, Checkbox } from "semantic-ui-react";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      isToggled: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
  }

  handleOpen(e) {
    this.setState({ modalOpen: true });
  }

  handleClose(e) {
    this.setState({ modalOpen: false });
  }

  handleCheckClick(text, id, projId, linkStatus) {
    this.props.onLinkClick(id, text, projId, linkStatus);
    /*this.setState({ isToggled: !this.state.isToggled });
    this.state.isToggled
      ? this.props.onLinkClick(id, text)
      : console.log(this.state.isToggled);*/
  }

  render() {
    let tempproject = this.props.project;
    let input;
    return (
      <Modal trigger={<h1>{tempproject.title}</h1>}>
        <Modal.Header>
          <h1>{tempproject.title}</h1>
        </Modal.Header>
        <Modal.Content>
          <ul>
            {tempproject.tasks.map((dat, idx) => (
              <li key={idx}>
                <h4
                  style={{
                    textDecoration: dat.completed ? "line-through" : "none"
                  }}
                >
                  {dat.text}
                </h4>
                <Button
                  onClick={() => this.props.onDelete(tempproject.id, idx)}
                >
                  Delete
                </Button>
                <Checkbox
                  onClick={() =>
                    this.handleCheckClick(
                      dat.text,
                      dat.id,
                      tempproject.id,
                      dat.todoLink
                    )}
                />
              </li>
            ))}
          </ul>
          <Form
            onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) return;
              this.props.onEditClick(tempproject.id, input.value);
              input.value = "";
            }}
          >
            <Form.Field>
              <input
                ref={node => {
                  input = node;
                }}
              />
              <Button type="submit">Submit</Button>
            </Form.Field>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Project;
