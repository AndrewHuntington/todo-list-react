import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleMark = this.handleMark.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleMark() {
    this.props.markComplete(this.props.id);
  }

  handleEdit() {
    this.props.editTodo(this.props.id);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  render() {
    return (
      <li
        className={`Todo ${this.props.completed && "done"}`}
        id={this.props.id}
      >
        <span onClick={this.handleMark}>{this.props.task}</span>
        <div className="actions">
          <i className="fas fa-edit" onClick={this.handleEdit}></i>
          <i className="fas fa-trash-alt" onClick={this.handleRemove}></i>
        </div>
      </li>
    );
  }
}
