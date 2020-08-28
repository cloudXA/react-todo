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

  markComplete(e) {
    console.log(this.props)
  }


  render() {
    return (
      // 1. 内联样式使用{{ backgroundColor: 'red'}}
      // 2. 内联样式可以使用class之外定义的const 变量，并使用{ itemStyle }完成
      // 3. 内联样式可以使用const 和 getStyle() 不可连用 ,后面的只会渲染后面得style
      // 4. 内联样式{ }使用getStyle()，该调用函数会返回{ textDecoration: 'line-through' } 刚好第一条对应起来
      // 5. 仅仅是父组件下面渲染的底层子组件，代表了底层的数据，仅关注某一个数据
      <div style={ this.getStyle() }> 
        <p>
          <input type="checkbox" onChange={this.markComplete.bind(this)} /> {' '}
          { this.props.todo.title }
          </p>
      </div>
    )
  }
}

// PropTypes 
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}


const itemStyle = {
  backgroundColor: '#f4f4f4'
}

export default TodoItem
