import React from 'react';
import { Link } from 'react-router-dom'
//可以作为组件进行渲染
function Header() {  
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/react-todo/home">home</Link> |
      <Link style={linkStyle} to="/react-todo/about">about</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
