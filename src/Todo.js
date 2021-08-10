import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(evt) {
    console.log("Editing!");
  }

  handleRemove(evt) {
    this.props.removeTodo(evt);
  }

  render() {
    return (
      <div className="Todo" id={this.props.id}>
        <p>
          {this.props.item}
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
        </p>
      </div>
    );
  }
}
