import React, { Component } from 'react'
import Todos from './Todo'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #cc dotted',
      textDecoration: this.props.todo.completed ? 
      'line-through' : 'none'
    }
  }


  render() {
    const { id, title, complete } = this.props.todo;
    return (
      <div style={ this.getStyle() }> 
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title }
          <button 
            onClick={this.props.delTodo.bind(this, id)}
            style={ btnStyle }
          >
            ✂
          </button>
            
        </p>
      </div>
    )
  }
}

// PropTypes 
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}


const itemStyle = {
  backgroundColor: '#f4f4f4'
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
