import React, { Component } from "react";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import { Container } from "semantic-ui-react";

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //there is key inside each todo. use to track status
      todos: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleFormSubmit(e) {
    this.setState({ todos: e });
  }

  toggleTodo(e) {
    let todos = this.state.todos;
    todos = todos.map(
      todo => (todo.key === e ? { ...todo, completed: !todo.completed } : todo)
    );
    this.setState({ todos });
  }

  handleRemove(e) {
    let todos = this.state.todos;
    let removeId = todos.map(todo => todo.key).indexOf(e);
    let newtodos = [...todos.slice(0, removeId), ...todos.slice(removeId + 1)];
    this.setState({ todos: newtodos });
  }

  render() {
    return (
      <div className="TodoContainer">
        <div className="showTodo">
          <ShowTodo
            todos={this.state.todos}
            toggleTodo={this.toggleTodo}
            handleRemove={this.handleRemove}
          />
        </div>

        <div className="addTodo">
          <AddTodo
            todos={this.state.todos}
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
        <style jsx>{`
          .TodoContainer {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-rows: 10%;
            grid-template-columns: 10%;
            align-items: center;
            justify-items: center;
          }
          .showTodo {
            grid-row: 1/10;
            grid-column: 1/10;
            width: 85%;
            height: 50vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .addTodo {
            grid-column: 5;
            grid-row: 10/10;
          }
        `}</style>
      </div>
    );
  }
}

export default TodoContainer;
