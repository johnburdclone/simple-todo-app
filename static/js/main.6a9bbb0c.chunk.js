(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),c=n.n(a),i=n(8),r=n.n(i),s=(n(15),n(16),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),o(t),a(t),c(t),i(t)}))}),d=n(7),l=n(2),p=n(3),u=n(5),h=n(4),j=n(19),b=function(){return Object(o.jsxs)("header",{style:{padding:"20px 0",lineHeight:"2em"},children:[Object(o.jsx)("h1",{style:{fontSize:"25px",marginBottom:"15px"},children:"Simple Todo App"}),Object(o.jsx)("p",{style:{fontSize:"19px"},children:"Please add to-dos item(s) through the input field"})]})},f={fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"},m=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).handle=function(){console.log("clicked")},t}return Object(p.a)(n,[{key:"render",value:function(){var t=this,e=this.props.todo,n=e.title,a=e.completed,c=e.id;return Object(o.jsxs)("li",{className:"todo-item",children:[Object(o.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return t.props.handleChangeProps(c)}}),Object(o.jsx)("span",{style:a?f:null,children:n}),Object(o.jsx)("button",{onClick:function(){return t.props.deleteTodoProps(c)},children:"Delete"})]})}}]),n}(c.a.Component),O=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsx)("div",{children:this.props.todos.map((function(e){return Object(o.jsx)(m,{todo:e,handleChangeProps:t.props.handleChangeProps,deleteTodoProps:t.props.deleteTodoProps},e.id)}))})}}]),n}(c.a.Component),v=n(9),g=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).onChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodoProps(t.state.title),t.setState({title:""})},t.state={title:"t"},t}return Object(p.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:"form-container",children:[Object(o.jsx)("input",{type:"text",className:"input-text",placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange,name:"title"}),Object(o.jsx)("input",{className:"input-submit",onClick:this.handleSubmit,type:"submit",value:"Submit"})]})}}]),n}(a.Component),x=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).handleChange=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return e===t.id&&(t.completed=!t.completed),t}))}}))},t.delTodo=function(e){t.setState({todos:Object(d.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var n={id:Object(j.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(d.a)(t.state.todos),[n])})},t.state={todos:[{id:1,title:"Setup development environment",completed:!0},{id:2,title:"Develop website and add content",completed:!1},{id:3,title:"Deploy to live server",completed:!1}]},t}return Object(p.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(b,{}),Object(o.jsx)(g,{addTodoProps:this.addTodo}),Object(o.jsx)(O,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo})]})}}]),n}(c.a.Component);r.a.render(Object(o.jsx)(x,{}),document.getElementById("root")),s()}},[[17,1,2]]]);
//# sourceMappingURL=main.6a9bbb0c.chunk.js.map