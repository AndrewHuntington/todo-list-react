import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(evt) {
    this.props.editTodo(evt);
  }

  handleRemove(evt) {
    this.props.removeTodo(evt);
  }

  render() {
    return (
      <li className="Todo" id={this.props.id}>
        {this.props.task}
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}
