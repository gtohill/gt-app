import React, { Component } from "react";

import OpenToDos from "./components/OpenToDos";
import CompletedToDos from "./components/CompletedToDos";
import BannerReact from "../../components/HeroBanner"
require('./assets/css/todostyle.css')

export default class ToDoContainer extends Component {
  constructor(props) {
    super();
    this.state = { todos: [], completedTasks: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let list = this.state.todos;
    list.push(e.target.name.value);
    this.setState({ todos: list });
  }

  handleInputChange(e) {
    e.preventDefault();
    let list = this.state.todos;
    let index = parseInt(e.target.name);

    const toDoRemoved = list.filter((item, i) => {
      if (index !== i) {
        return item;
      }
    });

    let completed = this.state.todos[index];
    let updateCompletedTasks = this.state.completedTasks;
    updateCompletedTasks.push(completed);
    this.setState({ todos: toDoRemoved, completedTasks: updateCompletedTasks });
  }

  render() {
    return (
      <React.Fragment>
      <BannerReact 
        headline="To Do App"
        subline="React app that demonstrates basic CRUD functions in a To Do format"
      />
        <div className="flex-container">
          <form onSubmit={this.handleSubmit}>
            <div className="nue-box" style={{ backgroundColor: "#5348D0" }}>
              <h4>Add To Do</h4>
              <input type="text" name="name" size="50" required />
              <br />
              <br />
              <input className="to-do-btn" type="submit" value="ADD" />
            </div>
          </form>
        </div>
        <div className="flex-container">
          <br />
          <div className="active-todos">
            <OpenToDos
              todos={this.state.todos}
              onchange={this.handleInputChange}
            />
          </div>
          <br />
          <div
            className={
              this.state.completedTasks.length > 0
                ? "show-completed"
                : "hide-completed"
            }
          >
            <CompletedToDos completedtasks={this.state.completedTasks} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
