import React from 'react';
//可以作为组件进行渲染
function Header() {  
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;
