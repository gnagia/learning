(window.webpackJsonpLearning=window.webpackJsonpLearning||[]).push([[0],{41:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),l=a(9),s=a(3),o=a(10),m=a(4),u="SET_CURRENT_USER",p={currentUser:null},d="TOGGLE_CART_HIDDEN",b="ADD_ITEM",h="CLEAR_ITEM_FROM_CART",g="REMOVE_ITEM",f=a(40),v=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(m.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(f.a)(e),[Object(m.a)({},t,{quantity:1})])},E=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(m.a)({},e,{quantity:e.quantity-1}):e}))},y={hidden:!0,cartItems:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(m.a)({},e,{hidden:!e.hidden});case b:return Object(m.a)({},e,{cartItems:v(e.cartItems,t.payload)});case h:return Object(m.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case g:return Object(m.a)({},e,{cartItems:E(e.cartItems,t.payload)});default:return e}},O={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type,e},N={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U=a(27),C=a(36),I={key:"root",storage:a.n(C).a,whitelist:["cart"]},S=Object(o.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case u:return Object(m.a)({},e,{currentUser:n});default:return e}},cart:k,shop:w,directory:j}),x=Object(U.a)(I,S),B=a(37),T=[a.n(B).a],P=Object(o.d)(x,o.a.apply(void 0,T)),R=Object(U.b)(P),A=a(38),M=(a(51),a(7)),q=a.n(M),G=a(12),W=a(17),D=a(18),H=a(19),J=a(20),z=a(14),V=(a(53),a(13)),L=(a(54),Object(z.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),F=a(2),_=Object(F.a)([function(e){return e.directory}],(function(e){return e.sections})),K=(a(56),Object(F.b)({sections:_})),Q=Object(s.b)(K)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(V.a)(e,["id"]);return r.a.createElement(L,Object.assign({key:t},a))})))})),Y=(a(57),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(Q,null))}),X=(a(58),a(59),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(V.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),Z=(a(60),function(){return{type:d}}),$=function(e){return{type:b,payload:e}},ee=Object(s.b)(null,(function(e){return{addItems:function(t){return e($(t))}}}))((function(e){var t=e.item,a=e.addItems,n=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},c)),r.a.createElement(X,{onClick:function(){return a(t)},inverted:!0},"Add to cart"))})),te=(a(61),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(ee,{key:e.id,item:e})}))))}),ae=Object(F.a)([function(e){return e.shop}],(function(e){return e.collections})),ne=Object(F.a)([ae],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),re=Object(F.b)({collections:ne}),ce=Object(s.b)(re)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collection-overview"},t.map((function(e){var t=e.id,a=Object(V.a)(e,["id"]);return r.a.createElement(te,Object.assign({key:t},a))})))})),ie=(a(62),Object(s.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(F.a)([ae],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.collection,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(ee,{key:e.id,item:e})}))))}))),le=function(e){var t=e.match;return r.a.createElement("div",{className:"shope-page"},r.a.createElement(z.b,{exact:!0,path:"".concat(t.path),component:ce}),r.a.createElement(z.b,{path:"".concat(t.path,"/:collectionId"),component:ie}))},se=a(16),oe=(a(63),function(e){var t=e.handleChange,a=e.label,n=Object(V.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),me=a(21),ue=a.n(me);a(64),a(68);ue.a.initializeApp({apiKey:"AIzaSyDg6G_VA64THdW0zmqwgGB45pKIvVR4NZM",authDomain:"shoppingreactapp.firebaseapp.com",databaseURL:"https://shoppingreactapp.firebaseio.com",projectId:"shoppingreactapp",storageBucket:"shoppingreactapp.appspot.com",messagingSenderId:"413471815774",appId:"1:413471815774:web:6c4f37f4d3463ea4639ccf"});var pe=function(){var e=Object(G.a)(q.a.mark((function e(t,a){var n,r,c,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=be.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,n.set(Object(m.a)({displayName:r,email:c,createdAt:i},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}(),de=ue.a.auth(),be=ue.a.firestore(),he=new ue.a.auth.GoogleAuthProvider;he.setCustomParameters({prompt:"select_account"});var ge=function(){return de.signInWithPopup(he)},fe=(ue.a,a(70),function(e){Object(J.a)(a,e);var t=Object(H.a)(a);function a(e){var n;return Object(W.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(G.a)(q.a.mark((function e(t){var a,r,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,de.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(se.a)({},r,a))},n.state={email:"",password:""},n}return Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(oe,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(oe,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(X,{type:"submit"}," Sign in "),r.a.createElement(X,{onClick:ge,isGoogleSignIn:!0},"Sign in with Google"))))}}]),a}(r.a.Component)),ve=(a(71),function(e){Object(J.a)(a,e);var t=Object(H.a)(a);function a(){var e;return Object(W.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(G.a)(q.a.mark((function t(a){var n,r,c,i,l,s,o;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,i=n.password,l=n.confirmPassword,i===l){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,de.createUserWithEmailAndPassword(c,i);case 8:return s=t.sent,o=s.user,t.next=12,pe(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(se.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(D.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(oe,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(oe,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(oe,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(oe,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(X,{type:"submit"},"SIGN UP")))}}]),a}(r.a.Component)),Ee=(a(72),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(fe,null),r.a.createElement(ve,null))}),ye=(a(73),function(e){return e.cart}),ke=Object(F.a)([ye],(function(e){return e.cartItems})),Oe=Object(F.a)([ye],(function(e){return e.hidden})),we=Object(F.a)([ke],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ne=Object(F.a)([ke],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),je=(a(74),Object(s.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:h,payload:e}}(t))},addItem:function(t){return e($(t))},removeItem:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))((function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,s=t.price,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{alt:"item",src:l})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},s),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}))),Ue=Object(F.b)({cartItems:ke,total:Ne}),Ce=Object(s.b)(Ue)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"checkout-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"checkout-block"},r.a.createElement("span",null,"Describe")),r.a.createElement("div",{className:"checkout-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"checkout-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"checkout-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(je,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL : $",a)))}));function Ie(){return(Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var xe=r.a.createElement("title",null,"Group"),Be=r.a.createElement("desc",null,"Created with Sketch."),Te=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Pe=function(e){var t=e.svgRef,a=e.title,n=Se(e,["svgRef","title"]);return r.a.createElement("svg",Ie({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?xe:a?r.a.createElement("title",null,a):null,Be,Te)},Re=r.a.forwardRef((function(e,t){return r.a.createElement(Pe,Ie({svgRef:t},e))}));a.p;function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Me(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var qe=r.a.createElement("g",null),Ge=r.a.createElement("g",null),We=r.a.createElement("g",null),De=r.a.createElement("g",null),He=r.a.createElement("g",null),Je=r.a.createElement("g",null),ze=r.a.createElement("g",null),Ve=r.a.createElement("g",null),Le=r.a.createElement("g",null),Fe=r.a.createElement("g",null),_e=r.a.createElement("g",null),Ke=r.a.createElement("g",null),Qe=r.a.createElement("g",null),Ye=r.a.createElement("g",null),Xe=r.a.createElement("g",null),Ze=function(e){var t=e.svgRef,a=e.title,n=Me(e,["svgRef","title"]);return r.a.createElement("svg",Ae({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),qe,Ge,We,De,He,Je,ze,Ve,Le,Fe,_e,Ke,Qe,Ye,Xe)},$e=r.a.forwardRef((function(e,t){return r.a.createElement(Ze,Ae({svgRef:t},e))})),et=(a.p,a(75),Object(F.b)({itemCount:we})),tt=Object(s.b)(et,(function(e){return{toggleCartHidden:function(){return e(Z())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement($e,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),at=(a(76),a(77),a(78),function(e){var t=e.item,a=t.name,n=t.price,c=t.imageUrl,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:c,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},i," * ",n)))}),nt=Object(F.b)({cartItems:ke,itemCount:we}),rt=Object(z.g)(Object(s.b)(nt)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length>0?t.map((function(e){return r.a.createElement(at,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(X,{onClick:function(){a.push("/checkout"),n(Z())}},"Go To CHECKOUT"))}))),ct=Object(F.a)([function(e){return e.user}],(function(e){return e.currentUser})),it=Object(F.b)({currentUser:ct,hidden:Oe}),lt=Object(s.b)(it)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement(Re,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/shop"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return de.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(tt,null)),a?"":r.a.createElement(rt,null))})),st=function(e){Object(J.a)(a,e);var t=Object(H.a)(a);function a(){var e;Object(W.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(D.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=de.onAuthStateChanged(function(){var t=Object(G.a)(q.a.mark((function t(a){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,pe(a);case 3:t.sent.onSnapshot((function(t){e(Object(m.a)({id:t.id},t.data()))}));case 5:console.log("userAuth"+a),e(a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(lt,null),r.a.createElement(z.d,null,r.a.createElement(z.b,{exact:!0,path:"/",component:Y}),r.a.createElement(z.b,{path:"/shop",component:le}),r.a.createElement(z.b,{exact:!0,path:"/checkout",component:Ce}),r.a.createElement(z.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(z.a,{to:"/"}):r.a.createElement(Ee,null)}})))}}]),a}(r.a.Component),ot=Object(F.b)({currentUser:ct}),mt=Object(s.b)(ot,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:u,payload:e}}(t))}}}))(st);i.a.render(r.a.createElement(s.a,{store:P},r.a.createElement(l.a,null,r.a.createElement(A.a,{persistor:R},r.a.createElement(mt,null)))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2a6d23a3.chunk.js.map