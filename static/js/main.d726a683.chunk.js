(this["webpackJsonplearn-react"]=this["webpackJsonplearn-react"]||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(17),c=n.n(r),l=(n(25),n(14)),i=n(4),s=n(5),d=n(6),u=n(7),m=n(9),p=n(1),f=(o.Component,{background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"});o.Component;var h={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoration:"none"},v=function(){return a.a.createElement("header",{style:h},a.a.createElement("h1",null,"TodoList"),a.a.createElement(m.b,{style:b,to:"/home"},"Home")," |",a.a.createElement(m.b,{style:b,to:"/about"},"About"))},E=n(19);o.Component;var g=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app version v1.0.0"))},w=n(34),j=(n(31),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:[{id:Object(w.a)(),title:"take out the trash",completed:!0},{id:Object(w.a)(),title:"Dinner with myself",completed:!1},{id:Object(w.a)(),title:"Meeting with boss",completed:!1}]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodo=function(t){var n={id:Object(w.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(l.a)(e.state.todos),[n])})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(v,null),a.a.createElement(p.a,{exact:!0,path:"/home",render:function(e){}}),a.a.createElement(p.a,{path:"/about",component:g}))))}}]),n}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d726a683.chunk.js.map