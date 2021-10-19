(this["webpackJsonpconnect-four"]=this["webpackJsonpconnect-four"]||[]).push([[0],{66:function(e,n,t){},76:function(e,n,t){},96:function(e,n,t){},97:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),s=t(32),c=t.n(s),i=(t(66),t(39)),o=t(9),u=t(10),l=t(12),d=t(11),h=t(8),j=t(100),m=t(33),b=t(57),g=t(1),p=["user","component","render"],f=function(e){var n=e.user,t=e.component,r=e.render,a=Object(b.a)(e,p);return n&&r?Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},a),{},{render:r})):Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return n?Object(g.jsx)(t,Object(m.a)({},e)):Object(g.jsx)(h.a,{to:"/"})}}))},O=t(47),v=(t(76),function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.state={show:!0},r.timeoutId=null,r}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,n=e.variant,t=e.heading,r=e.message,a=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){a(s)}),300),Object(g.jsx)(O.a,{dismissible:!0,show:this.state.show,variant:n,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(O.a.Heading,{children:t}),Object(g.jsx)("p",{className:"alert-body",children:r})]})})}}]),t}(a.a.Component)),x=t(61),w=t(35),y=t(13),C=t.p+"static/media/connect4_logo.cc32475d.png",N=Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(y.b,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(y.b,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(g.jsx)(y.b,{to:"/new-game",className:"nav-link",children:"New Game"}),Object(g.jsx)(y.b,{to:"/games",className:"nav-link",children:"Your Games"})]}),S=Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(y.b,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(y.b,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),A=Object(g.jsx)(r.Fragment,{children:Object(g.jsx)(y.b,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),k=function(e){var n=e.user;return Object(g.jsxs)(w.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(g.jsx)(w.a.Brand,{children:Object(g.jsx)("img",{style:{height:"70px",width:"auto"},src:C})}),Object(g.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(x.a,{className:"ml-auto",children:[n&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",n.email]}),A,n?N:S]})})]})},P=t(24),I="https://murmuring-garden-97653.herokuapp.com",U="http://localhost:4741",F="localhost"===window.location.hostname?U:I,T=t(21),G=t.n(T),B=function(e){return G()({url:F+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},E=t(7),q=t(29),D=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).handleChange=function(e){return r.setState(Object(P.a)({},e.target.name,e.target.value))},r.onSignUp=function(e){e.preventDefault();var n,t=r.props,a=t.msgAlert,s=t.history,c=t.setUser;(n=r.state,G()({method:"POST",url:F+"/sign-up/",data:{credentials:{email:n.email,password:n.password,password_confirmation:n.passwordConfirmation}}})).then((function(){return B(r.state)})).then((function(e){return c(e.data.user)})).then((function(){return a({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){r.setState({email:"",password:"",passwordConfirmation:""}),a({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},r.state={email:"",password:"",passwordConfirmation:""},r}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,n=e.email,t=e.password,r=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign Up"}),Object(g.jsxs)(E.a,{onSubmit:this.onSignUp,children:[Object(g.jsxs)(E.a.Group,{controlId:"email",children:[Object(g.jsx)(E.a.Label,{children:"Email address"}),Object(g.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:n,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"password",children:[Object(g.jsx)(E.a.Label,{children:"Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"password",value:t,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(E.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(E.a.Control,{required:!0,name:"passwordConfirmation",value:r,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),t}(r.Component),L=Object(h.f)(D),M=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).handleChange=function(e){return r.setState(Object(P.a)({},e.target.name,e.target.value))},r.onSignIn=function(e){e.preventDefault();var n=r.props,t=n.msgAlert,a=n.history,s=n.setUser;B(r.state).then((function(e){return s(e.data.user)})).then((function(){return t({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){r.setState({email:"",password:""}),t({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},r.state={email:"",password:""},r}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,n=e.email,t=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign In"}),Object(g.jsxs)(E.a,{onSubmit:this.onSignIn,children:[Object(g.jsxs)(E.a.Group,{controlId:"email",children:[Object(g.jsx)(E.a.Label,{children:"Email address"}),Object(g.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:n,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"password",children:[Object(g.jsx)(E.a.Label,{children:"Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"password",value:t,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),t}(r.Component),z=Object(h.f)(M),_=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.msgAlert,t=e.history,r=e.clearUser;(function(e){return G()({url:F+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return n({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return t.push("/")})).finally((function(){return r()}))}},{key:"render",value:function(){return""}}]),t}(r.Component),H=Object(h.f)(_),W=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).handleChange=function(e){return r.setState(Object(P.a)({},e.target.name,e.target.value))},r.onChangePassword=function(e){e.preventDefault();var n=r.props,t=n.msgAlert,a=n.history,s=n.user;(function(e,n){return G()({url:F+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(n.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(r.state,s).then((function(){return t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){r.setState({oldPassword:"",newPassword:""}),t({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},r.state={oldPassword:"",newPassword:""},r}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,n=e.oldPassword,t=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(E.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(E.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(E.a.Label,{children:"Old password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"oldPassword",value:n,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(E.a.Label,{children:"New Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"newPassword",value:t,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),t}(r.Component),Y=Object(h.f)(W),J=function(e,n){return G()({method:"POST",url:F+"/boards",headers:{Authorization:"Bearer ".concat(e.token)},data:{board:{moves:n}}})},R=function(){for(var e=[],n=0;n<7;n++)e[n]=[0,0,0,0,0,0];return e},V=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=n.call.apply(n,[this].concat(a))).newGame=function(){var n=e.props,t=n.user,r=n.msgAlert,a=n.history,s=R();J(t,s).then((function(e){return a.push("/games/".concat(e.data.board._id))})).catch((function(e){r({heading:"Cannot create a new game",message:"Something went wrong: "+e.message,variant:"danger"})}))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(q.a,{onClick:function(){return e.newGame()},children:"New Game"})})}}]),t}(a.a.Component),K=Object(h.f)(V),Q=(t(96),function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=n.call.apply(n,[this].concat(a))).inputBuilder=function(n){for(var t=[[],[],[],[],[],[],[]],r=0;r<n.length;r++)for(var a=0;a<n[r].length;a++){var s="slot".concat(r+1).concat(a+1);0===n[r][a]?t[r][a]=Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0}),Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0}),Object(g.jsx)("div",{className:"disc"})]}):n[r][a]%2===0?t[r][a]=Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0,checked:!0}),Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0}),Object(g.jsx)("div",{className:"disc"})]}):t[r][a]=Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0}),Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0,checked:!0}),Object(g.jsx)("div",{className:"disc"})]})}return t},e.inputCombiner=function(e){return Object(g.jsxs)(g.Fragment,{children:[e[0],e[1],e[2],e[3],e[4],e[5]]})},e.buildBoard=function(n){var t=e.inputBuilder(n);console.log(t);for(var r=[],a=0;a<t.length;a++)r[a]=e.inputCombiner(t[a]);return console.log(r),Object(g.jsxs)(g.Fragment,{children:[r[0],Object(g.jsxs)("div",{className:"column",children:[r[1],Object(g.jsxs)("div",{className:"column",children:[r[2],Object(g.jsxs)("div",{className:"column",children:[r[3],Object(g.jsxs)("div",{className:"column",children:[r[4],Object(g.jsxs)("div",{className:"column",children:[r[5],Object(g.jsxs)("div",{className:"column",children:[r[6],Object(g.jsx)("div",{className:"column"})]})]})]})]})]})]})]})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.buildBoard(this.props.moves);return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("form",{className:"game-form",children:Object(g.jsxs)("div",{className:"board",children:[Object(g.jsx)("div",{className:"field",children:Object(g.jsx)("div",{className:"grid column",children:e})}),Object(g.jsx)("div",{className:"front"})]})})})}}]),t}(a.a.Component)),X=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).destroy=function(e){var n=r.props,t=n.user,a=n.msgAlert,s=n.history;(function(e,n){return G()({method:"DELETE",url:F+"/boards/"+n,headers:{Authorization:"Bearer ".concat(e.token)}})})(t,e).then(s.push("/new-game")).catch((function(e){return a({heading:"Delete failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},r.handleChange=function(e){console.log(e);var n,t,a,s=r.state.nextMove,c=function(e,n,t){for(var r=Number(n.charAt(5))-1,a=Number(n.charAt(4))-1,s=[[],[],[],[],[],[],[]],c=0;c<e.length;c++)for(var i=0;i<e[c].length;i++)s[c][i]=e[c][i];return s[a][r]=t,s}(r.state.board.moves,e.target.name,s),i=function(e){var n=function(e){for(var n=[[],[],[],[],[],[],[]],t=0;t<e.length;t++)for(var r=0;r<e[t].length;r++)0!==e[t][r]&&e[t][r]%2===0?n[t][r]=2:0!==e[t][r]&&e[t][r]%2!==0?n[t][r]=1:n[t][r]=0;return n}(e),t=null;return(t=function(e){for(var n=0;n<7;n++){var t=[e[n][0],e[n][1],e[n][2],e[n][3]],r=[e[n][1],e[n][2],e[n][3],e[n][4]],a=[e[n][2],e[n][3],e[n][4],e[n][5]];if(t.every((function(e){return 1===e}))||r.every((function(e){return 1===e}))||a.every((function(e){return 1===e})))return 1;if(t.every((function(e){return 2===e}))||r.every((function(e){return 2===e}))||a.every((function(e){return 2===e})))return 2}return null}(n))||(t=function(e){for(var n=0;n<6;n++){var t=[e[0][n],e[1][n],e[2][n],e[3][n]],r=[e[1][n],e[2][n],e[3][n],e[4][n]],a=[e[2][n],e[3][n],e[4][n],e[5][n]],s=[e[3][n],e[4][n],e[5][n],e[6][n]];if(t.every((function(e){return 1===e}))||r.every((function(e){return 1===e}))||a.every((function(e){return 1===e}))||s.every((function(e){return 1===e})))return 1;if(t.every((function(e){return 2===e}))||r.every((function(e){return 2===e}))||a.every((function(e){return 2===e}))||s.every((function(e){return 2===e})))return 2}return null}(n)),t||(t=function(e){for(var n=0;n<4;n++){var t=[e[n][0],e[n+1][1],e[n+2][2],e[n+3][3]],r=[e[n][1],e[n+1][2],e[n+2][3],e[n+3][4]],a=[e[n][2],e[n+1][3],e[n+2][4],e[n+3][5]],s=[e[n][5],e[n+1][4],e[n+2][3],e[n+3][2]],c=[e[n][4],e[n+1][3],e[n+2][2],e[n+3][1]],i=[e[n][3],e[n+1][2],e[n+2][1],e[n+3][0]];if(t.every((function(e){return 1===e}))||r.every((function(e){return 1===e}))||a.every((function(e){return 1===e}))||s.every((function(e){return 1===e}))||c.every((function(e){return 1===e}))||i.every((function(e){return 1===e})))return 1;if(t.every((function(e){return 2===e}))||r.every((function(e){return 2===e}))||a.every((function(e){return 2===e}))||s.every((function(e){return 2===e}))||c.every((function(e){return 2===e}))||i.every((function(e){return 2===e})))return 2}return null}(n)),t||(t=function(e){for(var n=0;n<e.length;n++)for(var t=0;t<e[n].length;t++)if(0===e[n][t])return null;return 0}(n)),1===t?"red":2===t?"yellow":0===t?"draw":null}(c),o={moves:c,winner:i};(n=r.props.user,t=r.props.match.params.id,a=o,G()({method:"PATCH",url:F+"/boards/"+t,headers:{Authorization:"Bearer ".concat(n.token)},data:{board:a}})).then((function(e){return console.log(e)})).then((function(){return r.setState({board:{moves:c,winner:i},nextMove:s+1})})).catch((function(n){e.target.checked=!1,r.props.msgAlert({heading:"Update failed",message:"Something went wrong: "+n.message,variant:"danger"})}))},r.state={board:{moves:[],winner:null},nextMove:1},r}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,n,t=this;(e=this.props.user,n=this.props.match.params.id,G()({method:"GET",url:F+"/boards/"+n,headers:{Authorization:"Bearer ".concat(e.token)}})).then((function(e){return t.setState({board:{moves:e.data.board.moves,winner:e.data.board.gameOver},nextMove:Math.max.apply(Math,Object(i.a)(e.data.board.moves.flat()))+1})})).catch((function(e){t.props.msgAlert({heading:"Cannot show this game",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e=this,n=null,t=this.state.board.winner;return t&&("red"===t?n=Object(g.jsxs)("h1",{children:["Congratulations! The winner is ",Object(g.jsx)("span",{style:{color:"red"},children:this.state.board.winner}),"."]}):"yellow"===t?n=Object(g.jsxs)("h1",{children:["Congratulations! The winner is ",Object(g.jsx)("span",{style:{color:"yellow"},children:this.state.board.winner}),"."]}):"draw"===t&&(n=Object(g.jsx)("h1",{children:"The game is drawn. Nobody is a winner!"}))),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Q,{handleChange:this.handleChange,moves:this.state.board.moves}),n,Object(g.jsx)(q.a,{onClick:function(){return e.destroy(e.props.match.params.id)},children:"Delete this game"})]})}}]),t}(a.a.Component),Z=Object(h.f)(X),$=t(101),ee=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).state={boards:null},r}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,n=this.props,t=n.user,r=n.msgAlert;(function(e){return G()({method:"GET",url:F+"/boards",headers:{Authorization:"Bearer ".concat(e.token)}})})(t).then((function(n){return e.setState({boards:n.data.boards})})).then((function(){return r({heading:"Success",message:"Here are your previous games.",variant:"success"})})).catch((function(e){return r({heading:"Index failed",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,n=this,t=this.state.boards;if(null===t)return Object(g.jsx)("p",{children:"Loading..."});var r=t.filter((function(e){return n.props.user._id===e.owner}));return e=0===r.length?Object(g.jsx)("p",{children:'You have not played any games. Hit "New Game" to begin!'}):r.map((function(e){return Object(g.jsx)($.a,{children:Object(g.jsxs)($.a.Body,{children:[Object(g.jsx)($.a.Title,{children:e._id}),Object(g.jsx)($.a.Text,{children:"Nothing here yet."}),Object(g.jsx)(q.a,{onClick:function(){return n.props.history.push("/games/".concat(e._id))},children:"View Game"})]})},e._id)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{children:Object(g.jsx)("h1",{style:{margin:"0 auto"},children:"Welcome!"})}),Object(g.jsx)("div",{children:e})]})}}]),t}(a.a.Component),ne=Object(h.f)(ee),te=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).setUser=function(e){return r.setState({user:e})},r.clearUser=function(){return r.setState({user:null})},r.deleteAlert=function(e){r.setState((function(n){return{msgAlerts:n.msgAlerts.filter((function(n){return n.id!==e}))}}))},r.msgAlert=function(e){var n=e.heading,t=e.message,a=e.variant,s=Object(j.a)();r.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:n,message:t,variant:a,id:s}])}}))},r.state={user:null,msgAlerts:[]},r}return Object(u.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.msgAlerts,a=n.user;return Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(k,{user:a}),t.map((function(n){return Object(g.jsx)(v,{heading:n.heading,variant:n.variant,message:n.message,id:n.id,deleteAlert:e.deleteAlert},n.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(h.b,{path:"/sign-up",render:function(){return Object(g.jsx)(L,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(h.b,{path:"/sign-in",render:function(){return Object(g.jsx)(z,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(f,{user:a,path:"/sign-out",render:function(){return Object(g.jsx)(H,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(g.jsx)(f,{user:a,path:"/change-password",render:function(){return Object(g.jsx)(Y,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(f,{user:a,path:"/new-game",render:function(){return Object(g.jsx)(K,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(f,{user:a,path:"/games/:id",render:function(){return Object(g.jsx)(Z,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(f,{user:a,exact:!0,path:"/games",render:function(){return Object(g.jsx)(ne,{msgAlert:e.msgAlert,user:a})}})]})]})}}]),t}(r.Component),re=Object(g.jsx)(y.a,{basename:"/connect-four",children:Object(g.jsx)(te,{})});c.a.render(re,document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.85e60af7.chunk.js.map