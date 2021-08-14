import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleMark = this.handleMark.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleMark(evt) {
    const todo = evt.target.parentElement;
    this.props.markComplete(todo);
  }

  handleEdit(evt) {
    const targetId = evt.target.parentElement.id;
    this.props.editTodo(targetId);
  }

  handleRemove(evt) {
    const targetId = evt.target.parentElement.id;
    this.props.removeTodo(targetId);
  }

  render() {
    return (
      <li className="Todo" id={this.props.id}>
        <span onClick={this.handleMark}>{this.props.task}</span>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}
