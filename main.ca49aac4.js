!function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],p=0,f=[];p<a.length;p++)i=a[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);f.length;)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ring-vis/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=c;u.push([189,0]),n()}({188:function(e,t,n){"use strict";n.r(t);var r,o,u,i,a,c,l=n(0),s=n.n(l),p=n(63),f=n(20),y=n(61),d=n.n(y);function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),e}function j(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=Object(f.DropTarget)("GEM",{drop:function(e){return{pos:e.pos}},canDrop:function(e,t){var n=e.pos,r=e.slots,o=e.content,u=t.getItem(),i=o.size||1;if(i===u.size)return!0;if(i>u.size)return!0;if(i<u.size){if(n===r.length-1)return!1;if(2===r[n+1].size)return!1}return!0}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}})((u=o=function(e){function t(){return h(this,t),j(this,E(t).apply(this,arguments))}return w(t,l["Component"]),S(t,[{key:"render",value:function(){var e=this.props,t=e.content,n=e.connectDropTarget,r=e.isOver,o=e.canDrop,u=r&&o?"green":"gray";return n(s.a.createElement("pre",{style:{backgroundColor:u}},s.a.createElement("code",null,JSON.stringify(m({},t),null,2))))}}]),t}(),o.defaultProps={content:{},pos:0,slotLength:1,updateSlot:function(){}},r=u))||r,P=Object(f.DragSource)("GEM",{beginDrag:function(e){return{type:e.type,size:e.size}},endDrag:function(e,t){var n=t.getItem(),r=t.getDropResult();r&&(console.log(n,r),e.updateSlot(r.pos,n))}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})((c=a=function(e){function t(){return h(this,t),j(this,E(t).apply(this,arguments))}return w(t,l["Component"]),S(t,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.size,r=e.type;return t(s.a.createElement("pre",null,s.a.createElement("code",null,JSON.stringify({size:n,type:r},null,2))))}}]),t}(),a.defaultProps={size:1,type:"round",updateSlot:function(){}},i=c))||i,_=function(e){function t(){var e,n,r;h(this,t);for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return j(r,(n=r=j(this,(e=E(t)).call.apply(e,[this].concat(u))),r.state={slots:[{size:1,type:"Round"},{size:1,type:"Round"},{size:1,type:"Round"},{size:1,type:"Round"},{size:1,type:"Round"},{size:1,type:"Round"}]},r.updateSlot=function(e,t){var n=r.state.slots,o=n[e].size||0;if(o===t.size)r.setState({slots:b(n.slice(0,e)).concat([t],b(n.slice(e+1)))});else if(o<t.size){var u=b(n.slice(0,e)).concat([t],b(n.slice(e+t.size)));r.setState({slots:u})}else{for(var i=[],a=Math.floor(o/t.size),c=0;c<a;c++)i.push(m({},t));var l=b(n.slice(0,e)).concat(i,b(n.slice(e+1)));r.setState({slots:l})}},n))}return w(t,l["Component"]),S(t,[{key:"render",value:function(){var e=this,t=this.state.slots;return s.a.createElement("div",null,s.a.createElement("h1",null,"Ring Visualiser"),s.a.createElement("div",null,t.map(function(n,r){return s.a.createElement(D,{key:r,pos:r,slots:t,content:n,updateSlot:e.updateSlot})})),s.a.createElement("div",null,s.a.createElement("h2",null,"Gems"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(P,{size:2,type:"Baguette",updateSlot:this.updateSlot})),s.a.createElement("li",null,s.a.createElement(P,{size:1,type:"Round",updateSlot:this.updateSlot})))))}}]),t}();Object(p.render)(s.a.createElement(f.DragDropContextProvider,{backend:d.a},s.a.createElement(_,null)),document.getElementById("app"))},189:function(e,t,n){e.exports=n(188)}});
//# sourceMappingURL=main.ca49aac4.js.map