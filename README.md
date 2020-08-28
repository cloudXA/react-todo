
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

