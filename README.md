
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
🔗 [**组件传值**]
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

### 1.2 [✔] 父组件向子组件传值
**Tips:** 在class{}之外声明类似于vue的propTypes，
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
      <-- 给子组件传递一个变量todo-->
      <TodoItem key={todo.id} todo={todo} >
    ))
  }
}

```