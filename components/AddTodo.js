import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, addNote, addEvent } from "./actions/bulletjournalactions";
import { Form, Button, Header, Popup, Grid, Input } from "semantic-ui-react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      showInput: false,
      actionToTake: ""
    };
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleMainClick = e => {
    //make input active

    const actionToTake = e.target.id;
    this.setState({
      showInput: true,
      actionToTake
    });
  };

  handleSubmit = () => {
    const { date } = this.props;
    switch (this.state.actionToTake) {
      case "notebutton":
        this.props.addNote(this.state.text, date);
        break;
      case "todobutton":
        this.props.addTodo(this.state.text, date);
        break;
      case "eventbutton":
        this.props.addEvent(this.state.text, date);
        break;

      default:
        break;
    }
    this.setState({
      showInput: false,
      text: "",
      actiontoTake: ""
    });
  };

  render() {
    let inputvar;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            {this.state.showInput ? (
              <Input
                id="task"
                placeholder="..."
                onChange={this.handleChange}
                value={this.state.text}
                autoFocus
              />
            ) : null}
          </Form.Field>
          <Grid centered>
            <Grid.Column textAlign="center">
              <Popup
                trigger={<Button type="button">Select</Button>}
                position="bottom center"
                hoverable
                flowing
              >
                <Grid centered columns={3}>
                  <Grid.Column textAlign="center">
                    <Button id="todobutton" onClick={this.handleMainClick}>
                      Todo
                    </Button>
                  </Grid.Column>
                  <Grid.Column textAlign="center">
                    <Button id="eventbutton" onClick={this.handleMainClick}>
                      Event
                    </Button>
                  </Grid.Column>
                  <Grid.Column textAlign="center">
                    <Button id="notebutton" onClick={this.handleMainClick}>
                      Note
                    </Button>
                  </Grid.Column>
                </Grid>
              </Popup>
            </Grid.Column>
          </Grid>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    date: state.date
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNote: (text, date) => dispatch(addNote(text, date)),
    addTodo: (text, date) => dispatch(addTodo(text, date)),
    addEvent: (text, date) => dispatch(addEvent(text, date))
  };
};

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default AddTodo;
