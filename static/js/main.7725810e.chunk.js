(this.webpackJsonpr1=this.webpackJsonpr1||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(12),n(1)),s=n(2),i=n(3),u=n(4),h=function(e){return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s"},r.a.createElement("img",{alt:"test",src:"https://robohash.org/".concat(e.id,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,e.id),r.a.createElement("p",null,e.name)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name})})))},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"bg-light-green dib br3 "},r.a.createElement("input",{type:"search",placeholder:"search robots",onChange:t}))},f=(n(13),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"500px"}},e.children)}),g=(a.Component,function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onsearchChange=function(t){console.log(t.target.value),e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.searchfield,n=e.robots,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"RObo Frnz"),r.a.createElement(d,{searchChange:this.onsearchChange}),r.a.createElement(f,null,"  ",r.a.createElement(m,{robots:a}))):r.a.createElement("h1",null,"Loading...")}}]),n}(a.Component));n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.7725810e.chunk.js.map