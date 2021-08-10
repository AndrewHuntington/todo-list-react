import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState((state) => ({ todos: [...state.todos, newTodo] }));
  }

  render() {
    const todos = this.state.todos.map((e) => <Todo item={e} />);
    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        {todos}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
