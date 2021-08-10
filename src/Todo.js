import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <p>{this.props.item}</p>
      </div>
    );
  }
}
