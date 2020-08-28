import React, { Component } from 'react';
import Todos from './components/Todo.js'
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Dinner with myself',
        completed: false 
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  render() {  //作为组件的渲染入口
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}



export default App;
