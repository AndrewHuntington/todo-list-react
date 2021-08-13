import React, { Component } from "react";

export default class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.task,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("You did it!");
    this.setState({ todo: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="todo"
          id={this.props.id}
          value={this.state.todo}
          onChange={this.handleChange}
        ></input>
        <button>Done</button>
      </form>
    );
  }
}
