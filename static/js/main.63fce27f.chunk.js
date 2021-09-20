(this["webpackJsonpconnect-four"]=this["webpackJsonpconnect-four"]||[]).push([[0],{66:function(e,t,n){},76:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(32),c=n.n(s),i=(n(66),n(39)),o=n(10),u=n(11),l=n(13),d=n(12),h=n(8),j=n(100),m=n(33),b=n(57),g=n(1),p=["user","component","render"],v=function(e){var t=e.user,n=e.component,r=e.render,a=Object(b.a)(e,p);return t&&r?Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},a),{},{render:r})):Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return t?Object(g.jsx)(n,Object(m.a)({},e)):Object(g.jsx)(h.a,{to:"/"})}}))},f=n(47),O=(n(76),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.state={show:!0},r.timeoutId=null,r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,r=e.message,a=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){a(s)}),300),Object(g.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(f.a.Heading,{children:n}),Object(g.jsx)("p",{className:"alert-body",children:r})]})})}}]),n}(a.a.Component)),x=n(61),w=n(35),y=n(9),C=Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(y.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(y.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(g.jsx)(y.c,{to:"/new-game",className:"nav-link",children:"New Game"}),Object(g.jsx)(y.c,{to:"/games",className:"nav-link",children:"Your Games"})]}),N=Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(y.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(y.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),S=Object(g.jsx)(r.Fragment,{children:Object(g.jsx)(y.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),A=function(e){var t=e.user;return Object(g.jsxs)(w.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(g.jsx)(w.a.Brand,{children:Object(g.jsx)(y.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"react-auth-template"})}),Object(g.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(x.a,{className:"ml-auto",children:[t&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),S,t?C:N]})})]})},k=n(24),P="https://murmuring-garden-97653.herokuapp.com",I="http://localhost:4741",F="localhost"===window.location.hostname?I:P,U=n(21),T=n.n(U),G=function(e){return T()({url:F+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},B=n(7),E=n(29),q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(k.a)({},e.target.name,e.target.value))},r.onSignUp=function(e){e.preventDefault();var t,n=r.props,a=n.msgAlert,s=n.history,c=n.setUser;(t=r.state,T()({method:"POST",url:F+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return G(r.state)})).then((function(e){return c(e.data.user)})).then((function(){return a({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){r.setState({email:"",password:"",passwordConfirmation:""}),a({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},r.state={email:"",password:"",passwordConfirmation:""},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,r=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign Up"}),Object(g.jsxs)(B.a,{onSubmit:this.onSignUp,children:[Object(g.jsxs)(B.a.Group,{controlId:"email",children:[Object(g.jsx)(B.a.Label,{children:"Email address"}),Object(g.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(B.a.Group,{controlId:"password",children:[Object(g.jsx)(B.a.Label,{children:"Password"}),Object(g.jsx)(B.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(B.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(B.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(B.a.Control,{required:!0,name:"passwordConfirmation",value:r,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(E.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(r.Component),D=Object(h.f)(q),L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(k.a)({},e.target.name,e.target.value))},r.onSignIn=function(e){e.preventDefault();var t=r.props,n=t.msgAlert,a=t.history,s=t.setUser;G(r.state).then((function(e){return s(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){r.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},r.state={email:"",password:""},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign In"}),Object(g.jsxs)(B.a,{onSubmit:this.onSignIn,children:[Object(g.jsxs)(B.a.Group,{controlId:"email",children:[Object(g.jsx)(B.a.Label,{children:"Email address"}),Object(g.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(B.a.Group,{controlId:"password",children:[Object(g.jsx)(B.a.Label,{children:"Password"}),Object(g.jsx)(B.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(E.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(r.Component),M=Object(h.f)(L),z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,r=e.clearUser;(function(e){return T()({url:F+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return r()}))}},{key:"render",value:function(){return""}}]),n}(r.Component),H=Object(h.f)(z),_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(k.a)({},e.target.name,e.target.value))},r.onChangePassword=function(e){e.preventDefault();var t=r.props,n=t.msgAlert,a=t.history,s=t.user;(function(e,t){return T()({url:F+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(r.state,s).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){r.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},r.state={oldPassword:"",newPassword:""},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(B.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(B.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(B.a.Label,{children:"Old password"}),Object(g.jsx)(B.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(B.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(B.a.Label,{children:"New Password"}),Object(g.jsx)(B.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(E.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(r.Component),W=Object(h.f)(_),Y=function(e,t){return T()({method:"POST",url:F+"/boards",headers:{Authorization:"Bearer ".concat(e.token)},data:{board:{moves:t}}})},J=function(){for(var e=[],t=0;t<7;t++)e[t]=[0,0,0,0,0,0];return e},R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).newGame=function(){var t=e.props,n=t.user,r=t.msgAlert,a=t.history,s=J();Y(n,s).then((function(e){return a.push("/games/".concat(e.data.board._id))})).catch((function(e){r({heading:"Cannot create a new game",message:"Something went wrong: "+e.message,variant:"danger"})}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(E.a,{onClick:function(){return e.newGame()},children:"New Game"})})}}]),n}(a.a.Component),V=Object(h.f)(R),K=(n(96),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).inputBuilder=function(t){for(var n=[[],[],[],[],[],[],[]],r=0;r<t.length;r++)for(var a=0;a<t[r].length;a++){var s="slot".concat(r+1).concat(a+1);0===t[r][a]?n[r][a]=Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0}),Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0}),Object(g.jsx)("div",{className:"disc"})]}):t[r][a]%2===0?n[r][a]=Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0,checked:!0}),Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0}),Object(g.jsx)("div",{className:"disc"})]}):n[r][a]=Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0}),Object(g.jsx)("input",{onChange:e.props.handleChange,className:"piece-input",type:"radio",name:s,tabIndex:"-1",required:!0,checked:!0}),Object(g.jsx)("div",{className:"disc"})]})}return n},e.inputCombiner=function(e){return Object(g.jsxs)(g.Fragment,{children:[e[0],e[1],e[2],e[3],e[4],e[5]]})},e.buildBoard=function(t){var n=e.inputBuilder(t);console.log(n);for(var r=[],a=0;a<n.length;a++)r[a]=e.inputCombiner(n[a]);return console.log(r),Object(g.jsxs)(g.Fragment,{children:[r[0],Object(g.jsxs)("div",{className:"column",children:[r[1],Object(g.jsxs)("div",{className:"column",children:[r[2],Object(g.jsxs)("div",{className:"column",children:[r[3],Object(g.jsxs)("div",{className:"column",children:[r[4],Object(g.jsxs)("div",{className:"column",children:[r[5],Object(g.jsxs)("div",{className:"column",children:[r[6],Object(g.jsx)("div",{className:"column"})]})]})]})]})]})]})]})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.buildBoard(this.props.moves);return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("form",{className:"game-form",children:Object(g.jsxs)("div",{className:"board",children:[Object(g.jsx)("div",{className:"field",children:Object(g.jsx)("div",{className:"grid column",children:e})}),Object(g.jsx)("div",{className:"front"})]})})})}}]),n}(a.a.Component)),Q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).destroy=function(e){var t=r.props,n=t.user,a=t.msgAlert,s=t.history;(function(e,t){return T()({method:"DELETE",url:F+"/boards/"+t,headers:{Authorization:"Bearer ".concat(e.token)}})})(n,e).then(s.push("/new-game")).catch((function(e){return a({heading:"Delete failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},r.handleChange=function(e){console.log(e);var t,n,a,s=r.state.nextMove,c=function(e,t,n){for(var r=Number(t.charAt(5))-1,a=Number(t.charAt(4))-1,s=[[],[],[],[],[],[],[]],c=0;c<e.length;c++)for(var i=0;i<e[c].length;i++)s[c][i]=e[c][i];return s[a][r]=n,s}(r.state.board.moves,e.target.name,s),i=function(e){var t=function(e){for(var t=[[],[],[],[],[],[],[]],n=0;n<e.length;n++)for(var r=0;r<e[n].length;r++)0!==e[n][r]&&e[n][r]%2===0?t[n][r]=2:0!==e[n][r]&&e[n][r]%2!==0?t[n][r]=1:t[n][r]=0;return t}(e),n=null;return(n=function(e){for(var t=0;t<7;t++){var n=[e[t][0],e[t][1],e[t][2],e[t][3]],r=[e[t][1],e[t][2],e[t][3],e[t][4]],a=[e[t][2],e[t][3],e[t][4],e[t][5]];if(n.every((function(e){return 1===e}))||r.every((function(e){return 1===e}))||a.every((function(e){return 1===e})))return 1;if(n.every((function(e){return 2===e}))||r.every((function(e){return 2===e}))||a.every((function(e){return 2===e})))return 2}return null}(t))||(n=function(e){for(var t=0;t<6;t++){var n=[e[0][t],e[1][t],e[2][t],e[3][t]],r=[e[1][t],e[2][t],e[3][t],e[4][t]],a=[e[2][t],e[3][t],e[4][t],e[5][t]],s=[e[3][t],e[4][t],e[5][t],e[6][t]];if(n.every((function(e){return 1===e}))||r.every((function(e){return 1===e}))||a.every((function(e){return 1===e}))||s.every((function(e){return 1===e})))return 1;if(n.every((function(e){return 2===e}))||r.every((function(e){return 2===e}))||a.every((function(e){return 2===e}))||s.every((function(e){return 2===e})))return 2}return null}(t)),n||(n=function(e){for(var t=0;t<4;t++){var n=[e[t][0],e[t+1][1],e[t+2][2],e[t+3][3]],r=[e[t][1],e[t+1][2],e[t+2][3],e[t+3][4]],a=[e[t][2],e[t+1][3],e[t+2][4],e[t+3][5]],s=[e[t][5],e[t+1][4],e[t+2][3],e[t+3][2]],c=[e[t][4],e[t+1][3],e[t+2][2],e[t+3][1]],i=[e[t][3],e[t+1][2],e[t+2][1],e[t+3][0]];if(n.every((function(e){return 1===e}))||r.every((function(e){return 1===e}))||a.every((function(e){return 1===e}))||s.every((function(e){return 1===e}))||c.every((function(e){return 1===e}))||i.every((function(e){return 1===e})))return 1;if(n.every((function(e){return 2===e}))||r.every((function(e){return 2===e}))||a.every((function(e){return 2===e}))||s.every((function(e){return 2===e}))||c.every((function(e){return 2===e}))||i.every((function(e){return 2===e})))return 2}return null}(t)),n||(n=function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].length;n++)if(0===e[t][n])return null;return 0}(t)),1===n?"red":2===n?"yellow":0===n?"draw":null}(c),o={moves:c,winner:i};(t=r.props.user,n=r.props.match.params.id,a=o,T()({method:"PATCH",url:F+"/boards/"+n,headers:{Authorization:"Bearer ".concat(t.token)},data:{board:a}})).then((function(e){return console.log(e)})).then((function(){return r.setState({board:{moves:c,winner:i},nextMove:s+1})})).catch((function(t){e.target.checked=!1,r.props.msgAlert({heading:"Update failed",message:"Something went wrong: "+t.message,variant:"danger"})}))},r.state={board:{moves:[],winner:null},nextMove:1},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e,t,n=this;(e=this.props.user,t=this.props.match.params.id,T()({method:"GET",url:F+"/boards/"+t,headers:{Authorization:"Bearer ".concat(e.token)}})).then((function(e){return n.setState({board:{moves:e.data.board.moves,winner:e.data.board.gameOver},nextMove:Math.max.apply(Math,Object(i.a)(e.data.board.moves.flat()))+1})})).catch((function(e){n.props.msgAlert({heading:"Cannot show this game",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e=this,t=null,n=this.state.board.winner;return n&&("red"===n?t=Object(g.jsxs)("h1",{children:["Congratulations! The winner is ",Object(g.jsx)("span",{style:{color:"red"},children:this.state.board.winner}),"."]}):"yellow"===n?t=Object(g.jsxs)("h1",{children:["Congratulations! The winner is ",Object(g.jsx)("span",{style:{color:"yellow"},children:this.state.board.winner}),"."]}):"draw"===n&&(t=Object(g.jsx)("h1",{children:"The game is drawn. Nobody is a winner!"}))),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{children:this.state.board.moves[0]}),Object(g.jsx)("div",{children:this.state.board.moves[1]}),Object(g.jsx)("div",{children:this.state.board.moves[2]}),Object(g.jsx)("div",{children:this.state.board.moves[3]}),Object(g.jsx)("div",{children:this.state.board.moves[4]}),Object(g.jsx)("div",{children:this.state.board.moves[5]}),Object(g.jsx)("div",{children:this.state.board.moves[6]}),Object(g.jsx)(K,{handleChange:this.handleChange,moves:this.state.board.moves}),t,Object(g.jsx)(E.a,{onClick:function(){return e.destroy(e.props.match.params.id)},children:"Delete this game"})]})}}]),n}(a.a.Component),X=Object(h.f)(Q),Z=n(101),$=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={boards:null},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,r=t.msgAlert;(function(e){return T()({method:"GET",url:F+"/boards",headers:{Authorization:"Bearer ".concat(e.token)}})})(n).then((function(t){return e.setState({boards:t.data.boards})})).then((function(){return r({heading:"Success",message:"Here are your previous games.",variant:"success"})})).catch((function(e){return r({heading:"Index failed",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this,n=this.state.boards;if(null===n)return Object(g.jsx)("p",{children:"Loading..."});var r=n.filter((function(e){return t.props.user._id===e.owner}));return e=0===r.length?Object(g.jsx)("p",{children:'You have not played any games. Hit "New Game" to begin!'}):r.map((function(e){return Object(g.jsx)(Z.a,{children:Object(g.jsxs)(Z.a.Body,{children:[Object(g.jsx)(Z.a.Title,{children:e._id}),Object(g.jsx)(Z.a.Text,{children:"Nothing here yet."}),Object(g.jsx)(E.a,{onClick:function(){return t.props.history.push("/games/".concat(e._id))},children:"View Game"})]})},e._id)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{children:Object(g.jsx)("h1",{style:{margin:"0 auto"},children:"Welcome!"})}),Object(g.jsx)("div",{children:e})]})}}]),n}(a.a.Component),ee=Object(h.f)($),te=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).setUser=function(e){return r.setState({user:e})},r.clearUser=function(){return r.setState({user:null})},r.deleteAlert=function(e){r.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},r.msgAlert=function(e){var t=e.heading,n=e.message,a=e.variant,s=Object(j.a)();r.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:n,variant:a,id:s}])}}))},r.state={user:null,msgAlerts:[]},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,a=t.user;return Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(A,{user:a}),n.map((function(t){return Object(g.jsx)(O,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(h.b,{path:"/sign-up",render:function(){return Object(g.jsx)(D,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(h.b,{path:"/sign-in",render:function(){return Object(g.jsx)(M,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(v,{user:a,path:"/sign-out",render:function(){return Object(g.jsx)(H,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(g.jsx)(v,{user:a,path:"/change-password",render:function(){return Object(g.jsx)(W,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(v,{user:a,path:"/new-game",render:function(){return Object(g.jsx)(V,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(v,{user:a,path:"/games/:id",render:function(){return Object(g.jsx)(X,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(v,{user:a,exact:!0,path:"/games",render:function(){return Object(g.jsx)(ee,{msgAlert:e.msgAlert,user:a})}})]})]})}}]),n}(r.Component),ne=Object(g.jsx)(y.a,{basename:"/connect-four",children:Object(g.jsx)(te,{})});c.a.render(ne,document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.63fce27f.chunk.js.map