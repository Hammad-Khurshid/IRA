(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),i=n(38),o=n.n(i),s=(n(52),n(1)),c=n(2),l=n(6),u=n(4),h=n(7),m=(n(54),n(25)),p=n.n(m),f=function(e){var t=e.onRouteChange;return e.isSignedin?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),r.a.createElement("p",{onClick:function(){return t("Register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},d=n(39),g=(n(99),n(40)),v=n.n(g),b=function(){return r.a.createElement("div",{className:"ma1 "},r.a.createElement(d.a,{className:"w-50"},r.a.createElement("div",{className:"Tilt "},r.a.createElement("img",{alt:"logo",src:v.a}),r.a.createElement("p",{className:"f2 b dim bb",style:{fontStyle:"Italic",color:"black"}},"SMART BRAIN"))))},y=(n(101),function(e){var t=e.onInputChange,n=e.onTap;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3"},"This Magic Brain will recognize  celebrity faces in  picture"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"center form pa4 br3 shadow-5"},r.a.createElement("input",{className:"f4 br3 pa1 w-80 center b--solid",type:"text",onChange:t}),r.a.createElement("button",{className:"bt2 w-25 grow f4 br3 link ph3  pv1 dib white ",onClick:n},"Detect"))))}),E=function(e){var t=e.name,n=e.entries;return r.a.createElement("div",null,r.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is...")),r.a.createElement("div",{className:"white f2"},n))},w=n(3),N=n(43),C=n(42);function k(){k=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),s=new j(r||[]);return a(o,"_invoke",{value:w(e,n,s)}),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var h={};function m(){}function p(){}function f(){}var d={};c(d,i,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(L([])));v&&v!==t&&n.call(v,i)&&(d=v);var b=f.prototype=m.prototype=Object.create(d);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;a(this,"_invoke",{value:function(a,i){function o(){return new t(function(r,o){!function a(r,i,o,s){var c=u(e[r],e,i);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){a("next",e,o,s)},function(e){a("throw",e,o,s)}):t.resolve(h).then(function(e){l.value=e,o(l)},function(e){return a("throw",e,o,s)})}s(c.arg)}(a,i,r,o)})}return r=r?r.then(o,o):o()}})}function w(e,t,n){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return x()}for(n.method=r,n.arg=i;;){var o=n.delegate;if(o){var s=N(o,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=u(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function N(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:x}}function x(){return{value:void 0,done:!0}}return p.prototype=f,a(b,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,i){void 0===i&&(i=Promise);var o=new E(l(t,n,a,r),i);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},y(b),c(b,s,"Generator"),c(b,i,function(){return this}),c(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;S(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var S=function(){var e=function(){var e=Object(w.a)(k().mark(function e(t){return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(N.a,{id:"tsparticles",init:e,loaded:function(e){},options:{fpsLimit:150,interactivity:{events:{onClick:{enable:!0,mode:""},onHover:{enable:!0,mode:"grab"},resize:!0},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:200,enable:!0,opacity:.8,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:3,straight:!1},number:{density:{enable:!0,area:1200},value:50},opacity:{value:.5}},detectRetina:!0}})},j=function(e){var t=e.IMAGEURL;e.Data;return r.a.createElement("div",null,r.a.createElement("div",{className:"center ma f3"},r.a.createElement("div",{className:"absolute mt2 "}),r.a.createElement("img",{alt:"insert url above in search bar",src:t,width:"400px",heigh:"auto"})))},L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))})},n.state={signInEmail:"",signInPassword:""},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("div",null,r.a.createElement("article",{className:"hide-child relative br3 ba b--black-20 shadow-5 mw6 center"},r.a.createElement("main",{className:"pa2 black-80"},r.a.createElement("div",{className:"measure "},r.a.createElement("fieldset",{className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",placeholder:" Enter Email-Address",onChange:this.onEmailChange})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",placeholder:"Enter Password",name:"password",autoComplete:"tel",onChange:this.onPasswordChange}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib",type:"submit",value:"Log in"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return e("Register")},href:"#0",className:"f6 link dim black db pointer"}," Register"))))))}}]),t}(r.a.Component),x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignIn=function(){fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then(function(e){return e.json()}).then(function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))})},n.state={email:"",password:"",name:""},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",required:!0,onChange:this.onNameChange})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",required:!0,onChange:this.onEmailChange})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",required:!0,onChange:this.onPasswordChange}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(r.a.Component),O=new p.a.App({apiKey:"eec46ed0322e4dfab533a8a76f938c64"}),I={input:"",IMAGEURL:"",Data:"",route:"signin",isSignedin:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},R=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.DisplayResult=function(t,n,a){e.setState({Data:n}),n=t.outputs[0].data.regions[0].data.concepts[0].value,a=t.outputs[0].data.regions[0].data.concepts[0].name,console.log("There is",n,"% probability, that its picture of",a),alert(a)},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onTap=function(){e.setState({IMAGEURL:e.state.input}),O.models.predict(p.a.CELEBRITY_MODEL,e.state.input).then(function(t){t&&fetch("http://localhost:3000",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then(function(e){return e.json()}).then(function(t){e.setState(Object.assign(e.state.user,{entries:t}))}).catch(console.log),e.DisplayResult(t)}).catch(function(e){return console.log("error",e)})},e.onRouteChange=function(t){"signout"===t?e.setState(I):"home"===t&&e.setState({isSignedin:!0}),e.setState({route:t})},e.state=I,e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedin,n=e.IMAGEURL,a=e.route;return r.a.createElement("div",{className:"App"},r.a.createElement(S,{className:"particles"}),r.a.createElement(b,null),r.a.createElement(f,{isSignedin:t,onRouteChange:this.onRouteChange}),"home"===a?r.a.createElement("div",null,r.a.createElement(E,{name:this.state.user.name,entries:this.state.user.entries}),r.a.createElement(y,{onInputChange:this.onInputChange,onTap:this.onTap}),r.a.createElement(j,{IMAGEURL:n})):"signin"===a?r.a.createElement(L,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):r.a.createElement(x,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(a.Component),P=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,107)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)})};n(104);o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null))),P()},40:function(e,t,n){e.exports=n.p+"static/media/brain1.51f28e5b.png"},44:function(e,t,n){e.exports=n(106)},52:function(e,t,n){},54:function(e,t,n){},99:function(e,t,n){}},[[44,3,2]]]);
//# sourceMappingURL=main.f03aa484.chunk.js.map