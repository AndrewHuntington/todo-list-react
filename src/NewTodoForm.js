import React, { Component } from "react";
import "./NewTodoForm.css";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  removeTodo() {
    // do stuff
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">New Todo</label>
        <br />
        <input
          name="todo"
          id="todo"
          value={this.state.todo}
          onChange={this.handleChange}
        ></input>
        <button>Add Todo</button>
      </form>
    );
  }
}
