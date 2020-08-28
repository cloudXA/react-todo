import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';


class Todos extends Component {
  render() {
    // 类似v-for todo相当于item
    return this.props.todos.map((todo) => ( // 根据func创建新的数组
      <TodoItem key={todo.id} todo={todo} />
    ))
  }
}

// Todos组件： 中相当于vue的props, 需要的一个变量todos
// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}


export default Todos;