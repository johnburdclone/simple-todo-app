import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {
  handleChange = (key) => {
    this.setState( prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (key === todo.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      }
    });
  }

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id; 
        })
      ]
    });
  }

  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false 
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      },

    ]
  };
  render() {
    return (
      <div className="container">
        <Header />
        <InputTodo addTodoProps={this.addTodo} />
        <TodosList
        todos={this.state.todos}
        handleChangeProps={this.handleChange}
        deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer
