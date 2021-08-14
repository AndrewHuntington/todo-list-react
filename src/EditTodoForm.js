import React, { Component } from "react";
import "./EditTodoForm.css";

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
    const target = evt.target.firstChild;
    this.props.submitEdit(target);
    this.setState({ todo: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <form className="EditTodoForm" onSubmit={this.handleSubmit}>
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
