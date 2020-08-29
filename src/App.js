import React, { Component } from 'react';
import Todos from './components/Todo.js'
import Header from './components/layout/Header.js'
import AddTodo from './components/AddTodo.js'
import { v4 as uuidv4 } from 'uuid';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id:  uuidv4(),
        title: 'take out the trash',
        completed: true
      },
      {
        id:  uuidv4(),
        title: 'Dinner with myself',
        completed: false 
      },
      {
        id:  uuidv4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  
  // Toggle complete 
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // delTodo
  delTodo = (id) => {
    // this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)}) // 此也可
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}) //使用剩余模式，将筛选出的数组元素全部取出
  }

  addTodo = (title) => {
    const newTodo = {
      id:  uuidv4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo] })
  }

  render() {  //作为组件的渲染入口
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete} 
            delTodo = {this.delTodo}
          />
        </div>
        
      </div>
    );
  }
}



export default App;
