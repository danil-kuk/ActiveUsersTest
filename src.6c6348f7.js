parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(s).then(function(t){f.value=t,a(f)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"PMvg":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"QVnC"}],"NVR6":[function(require,module,exports) {
function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}module.exports=n;
},{}],"XfJI":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function a(a){if(Array.isArray(a))return r(a)}module.exports=a;
},{"./arrayLikeToArray":"NVR6"}],"OMTj":[function(require,module,exports) {
function e(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}module.exports=e;
},{}],"UyFj":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function t(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}module.exports=t;
},{"./arrayLikeToArray":"NVR6"}],"wFNi":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e;
},{}],"Fhqp":[function(require,module,exports) {
var r=require("./arrayWithoutHoles"),e=require("./iterableToArray"),u=require("./unsupportedIterableToArray"),a=require("./nonIterableSpread");function o(o){return r(o)||e(o)||u(o)||a()}module.exports=o;
},{"./arrayWithoutHoles":"XfJI","./iterableToArray":"OMTj","./unsupportedIterableToArray":"UyFj","./nonIterableSpread":"wFNi"}],"agGE":[function(require,module,exports) {
function n(n,t,o,r,e,i,u){try{var c=n[i](u),v=c.value}catch(a){return void o(a)}c.done?t(v):Promise.resolve(v).then(r,e)}function t(t){return function(){var o=this,r=arguments;return new Promise(function(e,i){var u=t.apply(o,r);function c(t){n(u,e,i,c,v,"next",t)}function v(t){n(u,e,i,c,v,"throw",t)}c(void 0)})}}module.exports=t;
},{}],"bmYm":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,o){if("function"==typeof e&&e.amd)e(["exports","module"],o);else if("undefined"!=typeof exports&&"undefined"!=typeof module)o(exports,module);else{var n={exports:{}};o(n.exports,n),t.fetchJsonp=n.exports}}(this,function(e,t){"use strict";var o={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function n(e){try{delete window[e]}catch(t){window[e]=void 0}}function r(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=e,a=t.timeout||o.timeout,u=t.jsonpCallback||o.jsonpCallback,c=void 0;return new Promise(function(o,s){var l=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),d=u+"_"+l;window[l]=function(e){o({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),r(d),n(l)},i+=-1===i.indexOf("?")?"?":"&";var m=document.createElement("script");m.setAttribute("src",""+i+u+"="+l),t.charset&&m.setAttribute("charset",t.charset),m.id=d,document.getElementsByTagName("head")[0].appendChild(m),c=setTimeout(function(){s(new Error("JSONP request to "+e+" timed out")),n(l),r(d),window[l]=function(){n(l)}},a),m.onerror=function(){s(new Error("JSONP request to "+e+" failed")),n(l),r(d),c&&clearTimeout(c)}})}});
},{}],"Jvg2":[function(require,module,exports) {
var define;
var e;!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof e&&e.amd?e(["exports"],n):n((t=t||self).vkBridge={})}(this,function(e){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function n(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],p=0,a=i.length;p<a;p++,r++)o[r]=i[p];return o}var o="undefined"!=typeof window,r=Boolean(o&&window.AndroidBridge),i=Boolean(o&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),p=o&&!r&&!i,a=p&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),u=p?"message":"VKWebAppEvent",d=n(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGeodata","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowCommunityWidgetPreviewBox","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet"],p&&!a?["VKWebAppResizeWindow","VKWebAppAddToMenu"]:[]),s=o?window.AndroidBridge:void 0,f=i?window.webkit.messageHandlers:void 0;function l(e,t){var n=t||{bubbles:!1,cancelable:!1,detail:void 0},o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!n.bubbles,!!n.cancelable,n.detail),o}"undefined"==typeof window||window.CustomEvent||(window.CustomEvent=(l.prototype=Event.prototype,l));var c=function(e){var o=void 0,a=[];function l(e){a.push(e)}"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(u,function(e){if(i||r)return n(a).map(function(t){return t.call(null,e)});if(p&&e&&e.data){var t=e.data,u=t.type,d=t.data,s=t.frameId;u&&"VKWebAppSettings"===u?o=s:n(a).map(function(e){return e({detail:{type:u,data:d}})})}});var c=function(e,n){var o,r,i=(o={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var n=null!=t?t:o.next();return r[n]=e,n},resolve:function(e,t,n){var o=r[e];o&&(n(t)?o.resolve(t):o.reject(t),r[e]=null)}});return n(function(e){if(e.detail&&e.detail.data&&"request_id"in e.detail.data){var t=e.detail.data,n=t.request_id,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(t,["request_id"]);n&&i.resolve(n,o,function(e){return!("error_type"in e)})}}),function(n,o){return void 0===o&&(o={}),new Promise(function(r,p){var a=i.add({resolve:r,reject:p},o.request_id);e(n,t(t({},o),{request_id:a}))})}}(function(e,t){s&&s[e]?s[e](JSON.stringify(t)):f&&f[e]&&"function"==typeof f[e].postMessage?f[e].postMessage(t):p&&parent.postMessage({handler:e,params:t,type:"vk-connect",webFrameId:o,connectVersion:"2.2.2"},"*")},l);return{send:c,sendPromise:c,subscribe:l,unsubscribe:function(e){var t=a.indexOf(e);-1<t&&a.splice(t,1)},supports:function(e){return r?!(!s||"function"!=typeof s[e]):i?!(!f||!f[e]||"function"!=typeof f[e].postMessage):p&&-1<d.indexOf(e)},isWebView:function(){return i||r}}}();e.applyMiddleware=function e(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return n.includes(void 0)||n.includes(null)?e.apply(void 0,n.filter(function(e){return"function"==typeof e})):function(e){if(0===n.length)return e;var o,r={subscribe:e.subscribe,send:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.send.apply(e,t)}};return o=n.filter(function(e){return"function"==typeof e}).map(function(e){return e(r)}).reduce(function(e,t){return function(n){return e(t(n))}})(e.send),t(t({},e),{send:o})}},e.default=c,Object.defineProperty(e,"__esModule",{value:!0})});
},{}],"U1sE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.widgetPreview=l,exports.getUsersData=p,exports.getWallPostsIds=y,exports.getLikesFromPost=g;var e=a(require("@babel/runtime/helpers/toConsumableArray")),t=a(require("@babel/runtime/regenerator")),n=a(require("@babel/runtime/helpers/asyncToGenerator")),r=a(require("fetch-jsonp")),u=a(require("@vkontakte/vk-bridge"));function a(e){return e&&e.__esModule?e:{default:e}}var o="5.107",s="fcd7d10dfcd7d10dfcd7d10da6fca5fd21ffcd7fcd7d10da21cf9e0cd6060f7bc952157",c=new URLSearchParams(window.location.search),i=parseInt(c.get("vk_group_id")),d=setTimeout(function(){document.getElementById("alert").style.display="block",document.getElementById("loader").style.display="none"},5e3);function l(e,t){return f.apply(this,arguments)}function f(){return(f=(0,n.default)(t.default.mark(function e(n,r){var a,o;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.map(function(e){return[{icon_id:"id"+e.id,text:r[e.id].name},{text:e.count}]}),e.next=3,u.default.send("VKWebAppShowCommunityWidgetPreviewBox",{code:'return {\n      "title": "Заголовок для виджета",\n      "head": [\n          {\n              "text": "Пользователь"\n          },\n          {\n              "text": "Лайки",\n          }\n      ],\n      "body": '.concat(JSON.stringify(a),"\n  };"),type:"table",group_id:i}).catch(function(e){return console.log("Widget Error!",e)});case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=(0,n.default)(t.default.mark(function e(n){var r,u;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={v:o,access_token:s,user_ids:n},e.next=3,v("users.get",r);case 3:return u=e.sent,e.abrupt("return",u);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(e){return h.apply(this,arguments)}function h(){return(h=(0,n.default)(t.default.mark(function n(r){var u,a,c,i,d=arguments;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=d.length>1&&void 0!==d[1]?d[1]:1,a={v:o,access_token:s,count:u,owner_id:r},t.next=4,v("wall.get",a);case 4:return c=t.sent,i=c.items.reduce(function(t,n){return[].concat((0,e.default)(t),[n.id])},[]),t.abrupt("return",i);case 7:case"end":return t.stop()}},n)}))).apply(this,arguments)}function g(e,t){return b.apply(this,arguments)}function b(){return(b=(0,n.default)(t.default.mark(function e(n,r){var u,a;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u={v:o,access_token:s,owner_id:n,type:"post",item_id:r,extended:0},e.next=3,v("likes.getList",u);case 3:return a=e.sent,e.abrupt("return",a.items);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function v(e,t){return x.apply(this,arguments)}function x(){return(x=(0,n.default)(t.default.mark(function e(n,u){var a,o,s,c;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams(u).toString(),o="https://api.vk.com/method/".concat(n,"?").concat(a),e.next=4,(0,r.default)(o);case 4:return s=e.sent,e.next=7,s.json();case 7:return c=e.sent,e.abrupt("return",c.response);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}u.default.subscribe(function(e){return console.log(e)}),u.default.send("VKWebAppInit",{}).then(function(){i&&(clearTimeout(d),document.getElementById("main-form").style.display="block",document.getElementById("loader").style.display="none")}).catch(function(e){console.log(e)});
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp","@babel/runtime/regenerator":"PMvg","@babel/runtime/helpers/asyncToGenerator":"agGE","fetch-jsonp":"bmYm","@vkontakte/vk-bridge":"Jvg2"}],"Focm":[function(require,module,exports) {
"use strict";var e=o(require("@babel/runtime/regenerator")),t=o(require("@babel/runtime/helpers/toConsumableArray")),r=o(require("@babel/runtime/helpers/asyncToGenerator")),n=a(require("./vk"));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function o(e){return e&&e.__esModule?e:{default:e}}function i(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=c(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,u,a=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,u=e},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw u}}}}function c(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=document.getElementById("main-form"),f=document.getElementById("loader");function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.default)(e.default.mark(function r(u){var a,o,i,c;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.style.display="none",f.style.display="block",e.next=4,n.getWallPostsIds(u,50);case 4:return a=e.sent,e.next=7,y(u,a);case 7:return o=e.sent,i=o.reduce(function(e,r){return[].concat((0,t.default)(e),[r.id])},[]),e.next=11,b(i);case 11:return c=e.sent,e.next=14,n.widgetPreview(o,c);case 14:f.style.display="none",l.style.display="block";case 16:case"end":return e.stop()}},r)}))).apply(this,arguments)}function y(e,t){return v.apply(this,arguments)}function v(){return(v=(0,r.default)(e.default.mark(function t(r,u){var a,o,c,s,l,f,p,d,y;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a={},o=i(u),e.prev=2,o.s();case 4:if((c=o.n()).done){e.next=13;break}return s=c.value,e.next=8,n.getLikesFromPost(r,s);case 8:l=e.sent,f=i(l);try{for(f.s();!(p=f.n()).done;)d=p.value,void 0===a[d]?a[d]={count:1,id:d}:a[d].count++}catch(t){f.e(t)}finally{f.f()}case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),o.e(e.t0);case 18:return e.prev=18,o.f(),e.finish(18);case 21:return(y=Object.keys(a).map(function(e){return a[e]})).sort(function(e,t){return t.count-e.count}),e.abrupt("return",y.slice(0,10));case 24:case"end":return e.stop()}},t,null,[[2,15,18,21]])}))).apply(this,arguments)}function b(e){return m.apply(this,arguments)}function m(){return(m=(0,r.default)(e.default.mark(function t(r){var u,a;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getUsersData(r);case 2:return u=e.sent,a=u.reduce(function(e,t){return e[t.id]={id:t.id,name:t.first_name+" "+t.last_name},e},{}),e.abrupt("return",a);case 5:case"end":return e.stop()}},t)}))).apply(this,arguments)}l.addEventListener("submit",function(e){e.preventDefault(),p(l["group-id"].value)});
},{"@babel/runtime/regenerator":"PMvg","@babel/runtime/helpers/toConsumableArray":"Fhqp","@babel/runtime/helpers/asyncToGenerator":"agGE","./vk":"U1sE"}]},{},["Focm"], null)
//# sourceMappingURL=/ActiveUsersTest/src.6c6348f7.js.map