import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    const newTodo = { todo, id: uuidv4(), edit: false };
    this.setState((state) => ({ todos: [...state.todos, newTodo] }));
  }

  removeTodo(evt) {
    // first parent element is <p>, second is <div> w/id
    const targetId = evt.target.parentElement.id;
    const filteredTodos = [...this.state.todos].filter(
      (todo) => todo.id !== targetId
    );
    this.setState({ todos: filteredTodos });
  }

  render() {
    const todos = this.state.todos.map((e) => {
      return e.edit ? (
        <EditTodoForm task={e.todo} key={e.id} id={e.id} />
      ) : (
        <Todo task={e.todo} key={e.id} id={e.id} removeTodo={this.removeTodo} />
      );
    });
    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        <ul>{todos}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
