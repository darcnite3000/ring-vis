!function(e){function t(t){for(var r,u,c=t[0],a=t[1],l=t[2],s=0,p=[];s<c.length;s++)u=c[s],o[u]&&p.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(f&&f(t);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={1:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/ring-vis/";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=a;i.push([164,0]),n()}({164:function(e,t,n){e.exports=n(51)},51:function(e,t,n){"use strict";n.r(t);var r,o,i,u=n(0),c=n.n(u),a=n(50),l=n(3),f=n(48),s=n.n(f);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h,d,O,S=Object(l.DragSource)("GEM",{beginDrag:function(e){return{type:e.type,size:e.size,pos:e.pos}},endDrag:function(e,t){var n=t.getItem(),r=t.getDropResult();r&&(console.log(n,r),e.updateSlot(r.pos,n))}},function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging()}})((i=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,v(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,u["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.connectDragPreview,n=e.connectDragSource,r=e.size,o=e.type,i=e.isDragging,u=e.style,a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}({opacity:i?.5:1,width:10*r,height:10,backgroundColor:"Round"==o?"blue":"brown"},u);return t(n(c.a.createElement("div",{style:a})))}}])&&b(n.prototype,r),o&&b(n,o),t}(),o.defaultProps={size:1,type:"round",pos:null,style:{},updateSlot:function(){}},r=i))||r;function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D,k=Object(l.DropTarget)("GEM",{drop:function(e){return{pos:e.pos}},canDrop:function(e,t){var n=e.pos,r=e.slots,o=e.content,i=t.getItem();if(i.pos)return!0;var u=o.size||1;if(u===i.size)return!0;if(u>i.size)return!0;if(u<i.size){if(n===r.length-1)return!1;if(2===r[n+1].size)return!1}return!0}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}})((O=d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,_(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,u["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.content,n=e.connectDropTarget,r=e.isOver,o=e.canDrop,i=e.pos,u=e.updateSlot,a={backgroundColor:r&&o?"green":"gray",border:"1px solid black"},l={opacity:r?.5:1};return n(c.a.createElement("pre",{style:a},c.a.createElement(S,j({},t,{pos:i,updateSlot:u,style:l}))))}}])&&E(n.prototype,r),o&&E(n,o),t}(),d.defaultProps={content:{},pos:0,slotLength:1,updateSlot:function(){}},h=O))||h;function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=Object(l.DragLayer)(function(e){return{item:e.getItem(),currentOffset:e.getSourceClientOffset(),isDraging:e.isDragging()}})(D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,M(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,u["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.isDraging,n=e.currentOffset,r=e.item;return t?c.a.createElement(S,T({style:function(e){if(!e)return{display:"none"};var t=e.x,n=e.y,r="translate(".concat(t,"px, ").concat(n,"px)");return{position:"absolute",zIndex:100,top:0,left:0,pointerEvents:"none",transform:r,WebkitTransform:r}}(n)},r)):c.a.createElement("div",null)}}])&&C(n.prototype,r),o&&C(n,o),t}())||D;function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){J(e,t,n[t])})}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=[{size:1,type:"Round"},{size:2,type:"Baguette"}];function K(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(e===function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce(function(e,t){return e+t.size},0)}(t))return t;for(var n=[],r=0,o=0;r<e;)t[o]&&e-t[o].size-r>=0?(n.push(t[o]),r+=t[o].size,o+=1):(n.push({size:1,type:"Round"}),r+=1);return n}var N=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return V(r,(n=r=V(this,(e=W(t)).call.apply(e,[this].concat(i))),r.state={slots:K(12),size:12},r.updateSlot=function(e,t){var n=r.state.slots,o={size:t.size,type:t.type},i=t.pos;if(null!=i){if(i===e)return null;var u=L(n.slice(0,i)).concat(L(n.slice(i+1)));r.setState({slots:L(u.slice(0,e)).concat([o],L(u.slice(e)))})}else{var c=n[e].size||0;if(c===t.size)r.setState({slots:L(n.slice(0,e)).concat([t],L(n.slice(e+1)))});else if(c<t.size){var a=L(n.slice(0,e)).concat([o],L(n.slice(e+t.size)));r.setState({slots:a})}else{for(var l=[],f=Math.floor(c/t.size),s=0;s<f;s++)l.push(G({},t));var p=L(n.slice(0,e)).concat(l,L(n.slice(e+1)));r.setState({slots:p})}}},r.onChangeRingSize=function(e){var t=e.target.value;r.setRingSize(t)},n))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,u["Component"]),n=t,(r=[{key:"setRingSize",value:function(e){this.setState(function(t){var n=t.slots;return{size:e,slots:K(e,n)}})}},{key:"render",value:function(){var e=this,t=this.state,n=t.size,r=t.slots;return c.a.createElement("div",null,c.a.createElement("h1",null,"Ring Visualiser"),c.a.createElement("div",{style:{display:"flex"}},r.map(function(t,n){return c.a.createElement(k,{key:n,pos:n,slots:r,content:t,updateSlot:e.updateSlot})})),c.a.createElement("div",null,c.a.createElement("h2",null,"Band"),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"band-size"},"Band Size:"),c.a.createElement("select",{id:"band-size",value:n,onChange:this.onChangeRingSize},[12,14,16,18,20].map(function(e,t){return c.a.createElement("option",{key:t,value:e},e)})))),c.a.createElement("div",null,c.a.createElement("h2",null,"Gems"),c.a.createElement("ul",null,H.map(function(t){var n=t.size,r=t.type;return c.a.createElement("li",{style:{display:"flex",alignItems:"center"}},c.a.createElement(S,{key:r,size:n,type:r,updateSlot:e.updateSlot}),r," Style")}))),c.a.createElement(A,{key:"__preview",name:"Gem"}))}}])&&F(n.prototype,r),o&&F(n,o),t}();Object(a.render)(c.a.createElement(l.DragDropContextProvider,{backend:s()({enableMouseEvents:!0})},c.a.createElement(N,null)),document.getElementById("app"))}});
//# sourceMappingURL=main.fffbc37a.js.map