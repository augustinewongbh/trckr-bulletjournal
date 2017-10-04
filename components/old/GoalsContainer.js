/*

Renders the list of projects/goals/bucket list
in the modal render the descriptions/steps. possibly link the task to addtodo
*/

import AddGoals from "./AddGoals";
import ShowGoals from "./ShowGoals";
import React, { Component } from "react";

export default class GoalsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: [], //goals is an array of projects that includes title, key, description, tasks? that can be added later
      modalOpen: false,
      title: "",
      description: "",
      curridx: 0,
      tasks: [],
      tags: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    newState[e.target.curridx] = e.target.id;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    let itemArray = this.state.goals;
    itemArray.push({
      key: Date.now(),
      title: this.state.title,
      description: "",
      tasks: [""]
    });
    this.setState({
      goals: itemArray,
      title: ""
    });
  }

  handleFormSubmit(e) {
    let itemArray = this.state.goals;
    itemArray[e.refidx] = e;
    this.setState({ goals: itemArray });
  }

  handleDelete(e) {
    let goals = this.state.goals;
    console.log(goals, e);
    let removeId = goals.map(goal => goal.key).indexOf(e);
    let itemArray = [...goals.slice(0, removeId), ...goals.slice(removeId + 1)];
    this.setState({ goals: itemArray });
  }

  render() {
    return (
      <div className="goalscontainer">
        <ShowGoals
          goals={this.state.goals}
          handleFormSubmit={this.handleFormSubmit}
          handleDelete={this.handleDelete}
        />
        <AddGoals
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          onChange={this.handleChange}
        />
        <style jsx>{``}</style>
      </div>
    );
  }
}
