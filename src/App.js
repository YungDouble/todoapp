import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'},
      {id: 3, content: 'browse the hub'}, // added new item
      {id: 4, Content: 'look for aparment'} // new item
      {id: 5, Content: 'move to uptown'} // added new item
      {id: 6, Content: 'get a dog'} // added new item
      {id: 7, Content: 'help daniel get his license back'}
    ]
  }
//Below we create a new todos array, it takes in the ID as a parameter and compares the ID to the current todo that is being parsed
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => { 
      return todo.id !== id
    });
    this.setState({
      todos: todos  //es6 shortcut since key and value have the same namy, we could write just todos
    })
  }
  // when a new todo is added a random id is assigned
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]; 
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container" >
        <h1 className="center green-text">Todos</h1> //changed color to green
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
