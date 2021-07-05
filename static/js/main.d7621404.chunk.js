(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(11),o=a.n(s),c=(a(23),a(17)),r=a(3),i=a.n(r),l=a(4),d=a(12),u=a(13),h=a(18),m=a(16),j=["If you work on something a little bit every day, you end up with something that is massive.","Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.","If you cannot do great things, do small things in a great way.","Nothing will work unless you do.","To handle yourself, use your head; to handle others, use your heart.","What defines us is how well we rise after falling."],p=["/Images/landscape6.jpg","/Images/landscape7.jpg","/Images/landscape8.jpg","/Images/landscape9.jpg","/Images/landscape10.jpg"],f=(a(25),a(1)),g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).quote=j[Math.floor(Math.random()*j.length)],e.background=p[Math.floor(Math.random()*p.length)],e.fetchTime=function(){var t=new Date,a=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2);console.log(a),e.setState({time:a})},e.fetchTemp=Object(l.a)(i.a.mark((function t(){var a,n,s,o,c,r,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.ipify.org/?format=json");case 2:return a=t.sent,t.next=5,a.json();case 5:return n=t.sent,console.log(n.ip),t.next=9,fetch("https://api.ipinfodb.com/v3/ip-city/?key=f767493ed02b334854451e59119c0d4b52d13962686701b96df91a315a86d236&ip=".concat(n.ip,"&format=json"));case 9:return s=t.sent,t.next=12,s.json();case 12:return o=t.sent,e.setState({city:o.cityName}),console.log(o.cityName),t.next=17,fetch("http://api.weatherstack.com/current?access_key=85eced8e03eb0542a49b547653636cd1&query=".concat(o.cityName));case 17:return c=t.sent,t.next=20,c.json();case 20:r=t.sent,l=r.current.temperature,e.setState({temp:l});case 23:case"end":return t.stop()}}),t)}))),e.componentDidMount=Object(l.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=localStorage.getItem("name"),n=localStorage.getItem("todo"),null===a){t.next=5;break}return t.next=5,e.setState({onboard:!0,name:a});case 5:if(null===n){t.next=8;break}return t.next=8,e.setState({todo:JSON.parse(n)});case 8:e.fetchTime(),e.timeTimer=setInterval(e.fetchTime,6e4);case 10:case"end":return t.stop()}}),t)}))),e.componentWillUnmount=function(){clearInterval(e.timeTimer),clearInterval(e.tempTimer)},e.handleChange=function(t){var a=t.target.name,n=t.target.value;"query"===a?e.setState({query:n}):"todo"===a?e.setState({todoTitle:n}):"name"===a&&e.setState({name:n})},e.nameAdd=function(t){t.preventDefault(),""!==e.state.name&&e.setState({onboard:!0}),localStorage.setItem("name",e.state.name)},e.searchQuery=function(t){if(t.preventDefault(),""!=e.state.query){var a="https://www.google.com/search?q=".concat(e.state.query);window.open(a,"_self")}},e.todoAdd=function(){var t=Object(l.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),null!=e.state.todo.title||""===e.state.todoTitle){t.next=5;break}return n={title:e.state.todoTitle,isDone:!1},t.next=5,e.setState({todo:n});case 5:localStorage.setItem("todo",JSON.stringify(e.state.todo));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.toggleTodo=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=Object(c.a)({},e.state.todo)).isDone=!a.isDone,t.next=4,e.setState({todo:a});case 4:localStorage.setItem("todo",JSON.stringify(e.state.todo));case 5:case"end":return t.stop()}}),t)}))),e.deleteTodo=Object(l.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({todo:{}});case 2:localStorage.setItem("todo",JSON.stringify(e.state.todo));case 3:case"end":return t.stop()}}),t)}))),e.state={name:"",query:"",todo:{},todoTitle:"",onboard:!1,temp:"",time:"",city:""},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"mainBackground",children:[Object(f.jsx)("img",{src:this.background,alt:"Background_image",className:"png"}),this.state.onboard?Object(f.jsxs)("div",{className:"mainBox",children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:this.searchQuery,children:[Object(f.jsx)("i",{className:"fas fa-search"}),Object(f.jsx)("input",{type:"text",className:"google_search",name:"query",onChange:this.handleChange,value:this.state.query})]})}),Object(f.jsxs)("div",{className:"temperature",children:[Object(f.jsxs)("span",{children:[this.state.temp,Object(f.jsx)("sup",{children:"o"})]}),Object(f.jsx)("div",{className:"cityName",children:this.state.city})]})]}),Object(f.jsxs)("div",{className:"center",children:[Object(f.jsx)("div",{className:"center--time",children:this.state.time}),Object(f.jsxs)("div",{className:"center--personal_line",children:["You Matter,",this.state.name]}),null==this.state.todo.title?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"center--asking_line",children:"What is your main focus today?"}),Object(f.jsx)("form",{onSubmit:this.todoAdd,children:Object(f.jsx)("input",{type:"text",className:"todoInput",name:"todo",onChange:this.handleChange,value:this.state.todoTitle})})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"todo_headtext",children:"Your main focus TODAY"}),Object(f.jsxs)("div",{className:"todo--mainBlock",children:[Object(f.jsx)("input",{type:"checkbox",checked:this.state.todo.isDone,className:"checkbox",onClick:this.toggleTodo}),Object(f.jsx)("div",{className:"todo--title",style:this.state.todo.isDone?{textDecoration:"line-through"}:{},children:this.state.todo.title}),Object(f.jsx)("i",{class:"fas fa-times",onClick:this.deleteTodo})]})]})]}),Object(f.jsxs)("div",{className:"footer",children:[Object(f.jsx)("div",{children:"Sreedhar R, Creator"}),Object(f.jsx)("div",{className:"footer--quote",children:this.quote}),Object(f.jsx)("div",{children:"@newtanian"})]})]}):Object(f.jsxs)("div",{className:"center",children:[Object(f.jsx)("div",{className:"center--personal_line",children:"What's your name?"}),Object(f.jsx)("form",{onSubmit:this.nameAdd,children:Object(f.jsx)("input",{type:"text",className:"todoInput",name:"name",onChange:this.handleChange,value:this.state.name})})]})]})}}]),a}(n.Component),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),o(e),c(e)}))},x=a(15);o.a.render(Object(f.jsx)(x.a,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),b()}},[[32,1,2]]]);
//# sourceMappingURL=main.d7621404.chunk.js.map