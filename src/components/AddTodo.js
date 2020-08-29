import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: '五花马，千金裘,呼儿将出换美酒'
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title); //触发自定义事件，并传递载荷
    this.setState({ title: '' })
  }

  // onChange = (e) => this.setState({ title: e.target.value})  动态设置state1
  onChange = (e) => this.setState({ [e.target.name]: e.target.value})

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex '}}>
        <input 
          type="text" 
          name="title" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="addTodo..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit"
          className="btn"
          style={{flext: '1' }}
        />
      </form>
    )
  }
}

export default AddTodo
