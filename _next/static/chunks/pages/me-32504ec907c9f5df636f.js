_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"3RDu":function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},"5zBY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"6M06":function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},"6TbW":function(e,t,n){var r=n("qgE7");e.exports=function(e){if(Array.isArray(e))return r(e)}},"9Zy5":function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("3jmZ"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},C7YJ:function(e,t,n){var r=n("6M06");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},F1wk:function(e,t,n){"use strict";var r=n("dAov").c.main.withConfig({displayName:"Page",componentId:"sc-jsm1i-0"})(["width:100vw;max-width:1024px;margin:0px auto;"]);t.a=r},GI5R:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},TVvo:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},Tp32:function(e,t,n){var r=n("qgE7");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},VBH3:function(e,t,n){"use strict";n("xRQJ");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("3jmZ")),i=(r=n("dFjc"))&&r.__esModule?r:{default:r},a=n("9Zy5"),c=n("k/IP"),s=n("fNwL");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var l=f[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var p=o.props[l],d=r[l]||new Set;"name"===l&&a||!d.has(p)?(d.add(p),r[l]=d):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},YJaB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/me",function(){return n("sLVg")}])},afeJ:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dFjc:function(e,t,n){"use strict";var r=n("u8Yi"),o=n("afeJ"),i=n("zBuL"),a=(n("GI5R"),n("C7YJ")),c=n("w0c1"),s=n("i6Ac");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("3jmZ"),p=function(e){a(n,e);var t=u(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},fNwL:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("3jmZ"))&&r.__esModule?r:{default:r},i=n("9Zy5");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},fsnS:function(e,t,n){e.exports=n("VBH3")},i6Ac:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"k/IP":function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("3jmZ"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},qgE7:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},sLVg:function(e,t,n){"use strict";n.r(t);var r=n("G8UI"),o=n("fsnS"),i=n.n(o),a=(n("3jmZ"),n("dAov")),c=n("F1wk"),s=a.c.p.withConfig({displayName:"me__Description",componentId:"sc-j52gzg-0"})(["margin-top:50px;text-align:center;font-size:smaller;line-height:1.5;color:#999;"]),u=a.c.main.withConfig({displayName:"me__Content",componentId:"sc-j52gzg-1"})(["padding:16px;& h2{font-size:large;font-weight:700;margin:8px 0px;}& ul{list-style:disc;& > li{}}& a{font-weight:500;padding:4px 8px;border-radius:4px;&:hover{background-color:#EEE;}}"]),l=a.c.div.withConfig({displayName:"me__GitContributionChart",componentId:"sc-j52gzg-2"})(["display:flex;flex-direction:column;align-items:center;margin-top:24px;padding:8px;& > h2{margin-top:16px;margin-left:8px;font-weight:medium;font-size:16px;& > a{display:flex;align-items:center;font-weight:500;padding:4px 8px;border-radius:4px;& > span{margin-left:4px;}&:hover{background-color:#EEE;}}}& > div{margin-bottom:16px;max-width:100vw;overflow-x:scroll;overflow-y:hidden;& > img{margin:16px;}}"]),p=a.c.section.withConfig({displayName:"me__Section",componentId:"sc-j52gzg-3"})(["margin:32px 0px;"]),f=a.c.ul.withConfig({displayName:"me__List",componentId:"sc-j52gzg-4"})(["margin-left:24px;list-style:disc;& > li{margin:8px;color:#333;font-weight:lighter;& i{font-style:italic;color:#888;}& b{font-weight:500;color:black;}}"]),d=(a.c.ul.withConfig({displayName:"me__SubList",componentId:"sc-j52gzg-5"})(["margin-left:24px;list-style:circle;& > li{margin:8px;color:#555;font-weight:lighter;}"]),"https://music.youtube.com/playlist?list=PLHoqbVn8h6ipHj4GpEjT7gJlULGup_wDT"),h="https://music.youtube.com/playlist?list=PLHoqbVn8h6iqeo3oPVLK_2_RZCgY5kAxt";t.default=function(){return Object(r.jsxs)(c.a,{children:[Object(r.jsx)(i.a,{children:Object(r.jsx)("title",{children:"Me | 1000ship"})}),Object(r.jsxs)(l,{children:[Object(r.jsx)("h2",{children:Object(r.jsxs)("a",{href:"https://github.com/1000ship",target:"_blank",children:[Object(r.jsx)("ion-icon",{name:"logo-github"}),Object(r.jsx)("span",{children:"1000ship"})]})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"https://ghchart.rshah.org/1000ship",alt:"1000ship's Github Contribution Chart"})}),Object(r.jsx)("h2",{children:Object(r.jsxs)("a",{href:"https://github.com/insomenia-seonghyeok",target:"_blank",children:[Object(r.jsx)("ion-icon",{name:"logo-github"}),Object(r.jsx)("span",{children:"insomenia-seonghyeok"})]})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"https://ghchart.rshah.org/insomenia-seonghyeok",alt:"insomenia-seonghyeok's Github Contribution Chart"})})]}),Object(r.jsxs)(u,{children:[Object(r.jsxs)(p,{children:[Object(r.jsx)("h2",{children:"\ub180\ub78d\uac8c\ub3c4 \uc800\ub294 \ud504\ub85c\uadf8\ub798\ubc0d'\ub9cc' \uc88b\uc544\ud558\uc9c4 \uc54a\uc544\uc694."}),Object(r.jsxs)(f,{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"\uce75\ud14c\uc77c, \uc704\uc2a4\ud0a4"}),"\ub97c \uc544\uc8fc \uc88b\uc544\ud569\ub2c8\ub2e4. \ub3d9\uc544\ub9ac \ud65c\ub3d9\uc740 \ubb3c\ub860, \uc870\uc8fc\uae30\ub2a5\uc0ac \uc790\uaca9\uc99d\ub3c4 \ucde8\ub4dd\ud588\ub2f5\ub2c8\ub2e4."]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"\uc5ec\ud589"})," \ub2e4\ub2c8\ub294 \uac83\uc744 \uc88b\uc544\ud574\uc694. \uc138\uc0c1\uc740 \ub113\uace0, \uad6c\uacbd\ud560 \uac83\uc740 \uc544\uc8fc \ub9ce\uc544\uc694."]})]})]}),Object(r.jsxs)(p,{children:[Object(r.jsx)("h2",{children:"\uc800\ub294 \uc774\ub7f0 \uc74c\uc545\uc744 \uc88b\uc544\ud574\uc694."}),Object(r.jsxs)(f,{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:d,target:"_blank",children:"Lo-Fi"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:h,target:"_blank",children:"Jazz"})})]})]}),Object(r.jsxs)(p,{children:[Object(r.jsx)("h2",{children:"\uc800\ub294 \ub514\uc9c0\ud138\ub178\ub9c8\ub4dc\ub97c \ub5a0\ub0a0 \uacc4\ud68d\uc774\uc5d0\uc694."}),Object(r.jsx)(f,{children:Object(r.jsxs)("li",{children:[Object(r.jsx)("b",{children:"Austin, Texas"})," ",Object(r.jsx)("i",{children:"\u2014 2021.10-2022.01"})]})}),Object(r.jsx)("p",{children:"\ub2e4\uc74c\uc740 \uc5b4\ub514\ub85c \uac00\uac8c\ub420\uae4c\uc694?"})]})]}),Object(r.jsxs)(s,{children:["\ucc3e\uc544\uc640\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4!",Object(r.jsx)("br",{}),"\uc5ec\ub7ec\ubd84 \uc8fc\ubcc0 \uce5c\uad6c, \uc9c0\uc778\ub4e4\ucc98\ub7fc \ud55c \uba85\uc758 \uc0ac\ub78c\uc73c\ub85c\uc11c \uc800\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.",Object(r.jsx)("br",{}),"\uacc4\uc18d\ud574\uc11c \ud398\uc774\uc9c0 \ub0b4\uc6a9\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \uc608\uc815\uc785\ub2c8\ub2e4!"]})]})}},u8Yi:function(e,t,n){var r=n("6TbW"),o=n("yBC3"),i=n("Tp32"),a=n("5zBY");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},w0c1:function(e,t,n){var r=n("TVvo"),o=n("GI5R");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},xRQJ:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},yBC3:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},zBuL:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}},[["YJaB",0,1,3]]]);