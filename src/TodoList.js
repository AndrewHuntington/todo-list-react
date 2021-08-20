import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    if (localStorage.tasks) {
      this.state = {
        todos: JSON.parse(localStorage.tasks),
      };
    } else {
      this.state = {
        todos: [],
      };
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.markComplete = this.markComplete.bind(this);
  }

  markComplete(id) {
    const task = [...this.state.todos].find((todo) => todo.id === id);
    task.completed = !task.completed;
    this.setState((state) => ({ todos: [...state.todos] }));
    localStorage.setItem("tasks", JSON.stringify(this.state.todos));
  }

  addTodo(todo) {
    const newTodo = { todo, id: uuidv4(), edit: false, completed: false };
    this.setState((state) => ({ todos: [...state.todos, newTodo] }));
    localStorage.setItem("tasks", JSON.stringify(this.state.todos));
  }

  removeTodo(id) {
    const filteredTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: filteredTodos });
    localStorage.setItem("tasks", JSON.stringify(filteredTodos));
  }

  editTodo(id) {
    const task = [...this.state.todos].find((todo) => todo.id === id);
    task.edit = true;
    this.setState((state) => ({ todos: [...state.todos] }));
  }

  submitEdit(target) {
    const targetId = target.id;
    const targetValue = target.value;
    const task = [...this.state.todos].find((todo) => todo.id === targetId);
    task.edit = false;
    task.todo = targetValue;
    this.setState((state) => ({ todos: [...this.state.todos] }));
    localStorage.setItem("tasks", JSON.stringify(this.state.todos));
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
          completed={e.completed}
          editTodo={this.editTodo}
          removeTodo={this.removeTodo}
          markComplete={this.markComplete}
        />
      );
    });

    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <ul>{todos}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
