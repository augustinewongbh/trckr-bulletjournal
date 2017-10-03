import { Component } from "react";
import { Form, Button, Header, Modal, Dropdown } from "semantic-ui-react";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      task: "",
      tags: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(e) {
    this.setState({ modalOpen: true });
  }

  handleClose(e) {
    this.setState({ modalOpen: false });
  }

  handleChange(e) {
    let newState = {};
    e.target.id === "tags"
      ? (newState[e.target.id] = e.target.value.split(","))
      : (newState[e.target.id] = e.target.value);
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    let itemArray = this.props.todos;
    itemArray.push({
      task: this.state.task,
      tags: this.state.tags,
      completed: false,
      key: Date.now()
    });
    this.props.handleFormSubmit(itemArray);

    this.setState({
      task: "",
      tags: [],
      modalOpen: false
    });
  }

  render() {
    return (
      <div>
        <Modal
          className="todomodal"
          trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Add Todo</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <input
                  id="task"
                  placeholder="Task"
                  onChange={this.handleChange}
                  value={this.state.task}
                  autoFocus
                />
              </Form.Field>
              <Form.Field>
                <input
                  id="tags"
                  placeholder="Tags"
                  onChange={this.handleChange}
                  value={this.state.tags}
                />
              </Form.Field>
              <Form.Field>
                {
                  //Add Dropdown here - link to project/goal
                }
              </Form.Field>
              <Button type="submit">TickIcon</Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
