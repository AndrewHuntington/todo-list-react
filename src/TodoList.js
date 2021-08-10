import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        <Todo item="Create Todo List" />
        <NewTodoForm />
      </div>
    );
  }
}
