(this.webpackJsonplabenusers=this.webpackJsonplabenusers||[]).push([[0],{17:function(e,a,t){e.exports=t(39)},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),o=t.n(l),u=t(2),i=t(3),s=t(6),c=t(5),m=t(4),h=t.n(m),d=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={newUserNameValue:"",newUserEmailValue:""},e.onChangeName=function(a){e.setState({newUserNameValue:a.target.value})},e.onChangeEmail=function(a){e.setState({newUserEmailValue:a.target.value})},e.onClickCreateUser=function(){var a={name:e.state.newUserNameValue,email:e.state.newUserEmailValue};h.a.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",a,{headers:{Authorization:"artur-candelori-julian"}}).then((function(e){window.alert("Usu\xe1rio criado")})).catch((function(e){window.alert("Erro!")})),e.setState({newUserNameValue:"",newUserEmailValue:""})},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Nome: "),r.a.createElement("input",{onChange:this.onChangeName,value:this.state.userNameValue}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Email: "),r.a.createElement("input",{onChange:this.onChangeEmail,value:this.state.userEmailValue}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.onClickCreateUser},"Salvar"))}}]),t}(r.a.Component),p=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={listaUsuarios:[]},e.getAllUsers=function(){h.a.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{headers:{Authorization:"artur-candelori-julian"}}).then((function(a){e.setState({listaUsuarios:a.data})})).catch((function(e){console.log(e)}))},e.onClickDeleteUser=function(a){h.a.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/".concat(a),{headers:{Authorization:"artur-candelori-julian"}}).then((function(a){window.alert("Usu\xe1rio deletado"),e.getAllUsers()})).catch((function(e){window.alert("Erro!")}))},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getAllUsers()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Usu\xe1rios Cadastrados:"),this.state.listaUsuarios.map((function(a){return r.a.createElement("p",null,a.name," ",r.a.createElement("button",{onClick:function(){return e.onClickDeleteUser(a.id)}},"X"))})))}}]),t}(r.a.Component),f=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={paginaAtual:"cadastro"},e.onClickMudaPagina=function(){var a="";a="cadastro"===e.state.paginaAtual?"lista":"cadastro",e.setState({paginaAtual:a})},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onClickMudaPagina},"cadastro"===this.state.paginaAtual?"Ir para a lista de usu\xe1rios":"Ir para a p\xe1gina de cadastro"),r.a.createElement("br",null),r.a.createElement("br",null),"cadastro"===this.state.paginaAtual?r.a.createElement(d,null):r.a.createElement(p,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.77c3a8fc.chunk.js.map