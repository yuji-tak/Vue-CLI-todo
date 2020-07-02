(function(e){function t(t){for(var o,u,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},i=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/Vue-CLI-todo/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("ToDoリスト")]),n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedBtn,expression:"selectedBtn"}],attrs:{value:"all",type:"radio"},domProps:{checked:e._q(e.selectedBtn,"all")},on:{change:function(t){e.selectedBtn="all"}}}),e._v("すべて "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedBtn,expression:"selectedBtn"}],attrs:{value:"working",type:"radio"},domProps:{checked:e._q(e.selectedBtn,"working")},on:{change:function(t){e.selectedBtn="working"}}}),e._v("作業中 "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedBtn,expression:"selectedBtn"}],attrs:{value:"completed",type:"radio"},domProps:{checked:e._q(e.selectedBtn,"completed")},on:{change:function(t){e.selectedBtn="completed"}}}),e._v("完了 ")]),n("main",[n("table",[e._m(0),n("transition-group",{attrs:{name:"fade",tag:"tbody"}},e._l(e.sortedTodos,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(e.indexOfAll(t)))]),n("td",[e._v(e._s(t.comment))]),n("td",[n("button",{on:{click:function(n){return e.changeState(t)}}},[e._v(e._s(e.currentState(t)))])]),n("td",[n("button",{on:{click:function(n){e.removeTodo(e.indexOfAll(t))}}},[e._v("削除")])])])})),0)],1)]),n("h2",[e._v("新規タスクの追加")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.addTodo(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.inputValue,expression:"inputValue",modifiers:{trim:!0}}],staticStyle:{"margin-right":"5px"},attrs:{type:"text"},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("input",{attrs:{type:"submit",value:"追加"}})])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("ID")]),n("th",[e._v("コメント")]),n("th",[e._v("状態")])])])}],u=(n("4de4"),n("c975"),n("a434"),{data:function(){return{selectedBtn:"all",todos:[],inputValue:"",id:0}},methods:{addTodo:function(){if(this.inputValue){var e={comment:this.inputValue,isDone:!1,id:this.id};this.todos.push(e),this.id++,this.inputValue=""}},removeTodo:function(e){this.todos.splice(e,1)},changeState:function(e){return e.isDone=!e.isDone}},computed:{sortedTodos:function(){return"all"===this.selectedBtn?this.todos:"working"===this.selectedBtn?this.todos.filter((function(e){return!e.isDone})):this.todos.filter((function(e){return e.isDone}))},currentState:function(){return function(e){return e.isDone?"完了":"作業中"}},indexOfAll:function(){return function(e){return this.todos.indexOf(e)}}}}),a=u,c=(n("034f"),n("2877")),l=Object(c["a"])(a,r,i,!1,null,null,null),s=l.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.9deb901a.js.map