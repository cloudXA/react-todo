import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todo.js'
import Header from './components/layout/Header.js'
import AddTodo from './components/AddTodo.js'
import About from './components/pages/about'
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

  componentDidMount() {
    // axios请求数据，完成后端数据渲染
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
      <Router>
         <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              // 替换div
              <React.Fragment> 
                <AddTodo addTodo={this.addTodo} />
                <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  delTodo = {this.delTodo}
                />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} /> 
            
          </div>
        </div>


      </Router>
     
    );
  }
}



export default App;
