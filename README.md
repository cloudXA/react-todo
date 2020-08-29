
### 项目结构
```
learn-react
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html      // 作为节点渲染的入口 <div id="root"></div>
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.js          // 祖父级组件  
│  ├─ App.test.js
│  ├─ components
│  │  ├─ Todo.js      // 父级组件
│  │  └─ TodoItem.js  // 子级组件
│  ├─ index.css       // 全局的css
│  ├─ index.js        // 将App.js渲染到document.getElementById('root')[引用来自index.html的元素]
│  ├─ logo.svg
│  ├─ serviceWorker.js
│  └─ setupTests.js
└─ yarn.lock

```
🔗 [**组件传值--dataf flowing**]
<br /> <br />

### 1.2 [✔] 子组件向父组件传值

**Tips:** 在子组件中的事件监听函数中书写```onChange={this.props.markComplete}```将触发父组件的监听函数```markComplete```

#### TodoItem子组件
```javascript
  <input type="checkbox" onChange={this.props.markComplete} />
```

#### Todo.js父组件
```javascript
  class Todos extends Component {
    markComplete = () => {
      console.log('hi)
    }

    render() {
      return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete = 
          {this.markComplete} />
      ))
    }
  }
```

### 1.3 [✔] 父组件向子组件传值
**Tips:** 在class{}之外声明类似于vue的props，
#### TodoItem.js子组件
```javascript
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired //接收todo变量
  }

```
#### Todo.js父组件
```javascript
class Todos extends Component{
  render() {
    return this.props.todos.map((todo) => (
      // 给子组件传递一个变量todo
      <TodoItem key={todo.id} todo={todo} >
    ))
  }
}

```

### 1.4 [✔] data flowing 数据流
**Tips:**用户交互的底层元素(节点)触发了相应的事件，进而通过this.props.someAction触发该组件父组件的someAction监听；该组件又通过事件响应函数如：
```JavaScript
   <TodoItem 
      key={todo.id} 
      todo={todo} 
      markComplete = {this.props.markComplete} 
   />
      
```
继续触发自定义事件markComplete事件，让其父组件监听markComplete事件。进而通过setState方式动态改变state中的数据，依据PropTypes进行数据向下流动。

#### 底层TodoItem.js组件

```javascript
  <input 
    type="checkbox" 
    onChange={this.props.markComplete.bind(this, id)}  // 底层不仅触发了markComplete事件，还传递了id载荷作为参数向上流动
  />
```
#### 中间传输层Todo.js组件
```javascript
 <TodoItem 
    key={todo.id} 
    todo={todo} 
    markComplete = {this.props.markComplete} // 作为中间传输层，传递markComplete事件
  /> 
      
```
#### 顶层App.js组件
**Tips:** 用于处理state数据
```javascript
  // Toggle complete 事件处理函数，进行取反切换
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  render() {  //作为组件的渲染入口
    return (
      <div className="App">
        /** 触发监听事件 **/  
        <Todos todos={this.state.todos} markComplete={this.markComplete}/> 
      </div>
    );
  }
```

🔗 [**内联自定义样式--inline  style**]
<br /> <br />

### 1.2 [✔] 固定样式
**Tips:** `btnStyle`声明在class类之外

```javascript
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
```
`btnStyle`写法,`btnStyle`作为了声明的变量,该变量为一对象，每个元素左边为属性名，对应右边为属性值。
```css
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
```
### 1.3 [✔] 动态样式
**Tips:** 动态样式为一声明在class中的函数，返回一个对象。每个元素为属性名，右边为属性值。属性值可以根据用户交互变化的值进行三元表达式映射出对应的样式效果。
```JavaScript
 getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #cc dotted',
      textDecoration: this.props.todo.completed ? 
      'line-through' : 'none'
    }
  }
```
🔗 [**input输入框数据绑定**]
<br /><br />
**Tips:**
```javascript

 export class AddTodo extends Component {
  state = {
    title: '五花马，千金裘,呼儿将出换美酒'
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
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
```
输入框初始值value是state的值流入到了value中。如果需要将用户输入的value值传递到state中，需要借助input的onChange 事件，即`onChange={this.onChange}`, onChange作为事件处理函数```onChange = (e) => this.setState({ [e.target.name]: e.target.value})```将input与state属性同名的name赋予新的value值
