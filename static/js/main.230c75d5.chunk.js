(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(6),r=n.n(c),i=(n(12),n(3)),l=n(4);n(13);function u(e){var t=e.todo,n=e.index,o=e.completeTodo,c=e.removeTodo;return a.a.createElement("div",{className:"todo",style:{textDecoration:t.isCompleted?"line-through":""}},t.text,a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return o(n)}},"Complete"),a.a.createElement("button",{onClick:function(){return c(n)}},"x")))}function m(e){var t=e.addTodo,n=Object(o.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r&&(t(r),i(""))}},a.a.createElement("input",{type:"text",className:"input",value:r,onChange:function(e){return i(e.target.value)}}))}var s=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=function(e){var t=Object(i.a)(n);t[e].isCompleted=!0,c(t)},s=function(e){var t=Object(i.a)(n);t.splice(e,1),c(t)};return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"todo-list"},n.map((function(e,t){return a.a.createElement(u,{key:t,index:t,todo:e,completeTodo:r,removeTodo:s})})),a.a.createElement(m,{addTodo:function(e){var t=[].concat(Object(i.a)(n),[{text:e}]);c(t)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.230c75d5.chunk.js.map