(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),l=(n(12),n(3)),i=n(4);n(13);function u(e){var t=e.todo,n=e.index,a=e.completeTodo,r=e.removeTodo;return o.a.createElement("div",{className:"todo",style:{textDecoration:t.isCompleted?"line-through":""}},t.text,o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return a(n)}},"Complete"),o.a.createElement("button",{onClick:function(){return r(n)}},"x")))}function m(e){var t=e.addTodo,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],l=r[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c&&(t(c),l(""))}},o.a.createElement("input",{type:"text",className:"input",placeholder:"Enter an item and press Enter",value:c,onChange:function(e){return l(e.target.value)}}))}function s(){return o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"Todo app"))}var d=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=function(e){var t=Object(l.a)(n);t[e].isCompleted=!0,r(t)},d=function(e){var t=Object(l.a)(n);t.splice(e,1),r(t)};return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"todo-list"},o.a.createElement(s,null),n.map((function(e,t){return o.a.createElement(u,{key:t,index:t,todo:e,completeTodo:c,removeTodo:d})})),o.a.createElement(m,{addTodo:function(e){var t=[].concat(Object(l.a)(n),[{text:e}]);r(t)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.bfd57051.chunk.js.map