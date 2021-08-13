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
    this.editTodo = this.editTodo.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  addTodo(todo) {
    const newTodo = { todo, id: uuidv4(), edit: false };
    this.setState((state) => ({ todos: [...state.todos, newTodo] }));
  }

  removeTodo(evt) {
    const targetId = evt.target.parentElement.id;
    const filteredTodos = [...this.state.todos].filter(
      (todo) => todo.id !== targetId
    );
    this.setState({ todos: filteredTodos });
  }

  editTodo(evt) {
    const targetId = evt.target.parentElement.id;
    const task = [...this.state.todos].find((todo) => todo.id === targetId);
    task.edit = true;
    this.setState({ todos: [...this.state.todos] });
  }

  submitEdit(evt) {
    const target = evt.target.firstChild;
    const targetId = target.id;
    const targetValue = target.value;
    const task = [...this.state.todos].find((todo) => todo.id === targetId);
    task.edit = false;
    task.todo = targetValue;
    this.setState({ todos: [...this.state.todos] });
  }

  render() {
    const todos = this.state.todos.map((e) => {
      return e.edit ? (
        <EditTodoForm
          task={e.todo}
          key={e.id}
          id={e.id}
          submitEdit={this.submitEdit}
        />
      ) : (
        <Todo
          task={e.todo}
          key={e.id}
          id={e.id}
          editTodo={this.editTodo}
          removeTodo={this.removeTodo}
        />
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
