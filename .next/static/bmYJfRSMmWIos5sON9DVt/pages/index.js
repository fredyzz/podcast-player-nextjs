(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var r=n("o0o1"),o=n.n(r),a=n("HaE+");function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=n("q1tI"),f=n.n(p),d=n("Y0NT"),h=n("5Yp1"),m=n("MX0m"),y=n.n(m),b=(n("YFqc"),n("8cHP")),x=n("mqlx"),g=f.a.createElement,v=function(t){var e=t.channel;return g(f.a.Fragment,null,g(b.Link,{route:"channel",params:{slug:Object(x.a)(e.title),id:e.id},key:e.id},g("a",{className:"jsx-3591462850 channel"},g("img",{src:e.urls.logo_image.original,alt:"channel image",className:"jsx-3591462850"}),g("h3",{className:"jsx-3591462850"},e.title))),g(y.a,{id:"3591462850"},[".channel.jsx-3591462850{display:block;border-radius:10px;box-shadow:7px 7px 14px #1b1c1e,-7px -7px 14px #292c2e;margin-bottom:0.5em;}","a.channel.jsx-3591462850{display:block;margin-bottom:0.5em;color:white;-webkit-text-decoration:none;text-decoration:none;}",".channel.jsx-3591462850 img.jsx-3591462850{width:100%;border-radius:10px;}","h3.jsx-3591462850{font-size:12px;padding:5px;text-align:center;}"]))},w=f.a.createElement,j=function(t){var e=t.channels;return w(f.a.Fragment,null,w("div",{className:"jsx-2363198337 channels"},e.map((function(t,e){return w(v,{channel:t,key:e})}))),w(y.a,{id:"2363198337"},[".channels.jsx-2363198337{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}"]))},_=f.a.createElement;function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var O=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(s,t);var e,n,r,u=k(s);function s(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),u.apply(this,arguments)}return e=s,n=[{key:"render",value:function(){var t=this.props,e=t.channels,n=t.statusCode;return 200!==n?_(d.default,{statusCode:n}):_(h.default,{title:"Podcasts"},_(j,{channels:e}))}}],r=[{key:"getInitialProps",value:function(){var t=Object(a.a)(o.a.mark((function t(e){var n,r,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.res,t.prev=1,t.next=4,fetch("https://api.audioboom.com/channels/recommended");case 4:return r=t.sent,t.next=7,r.json();case 7:return a=t.sent,c=a.body,t.abrupt("return",{channels:c,statusCode:200});case 12:return t.prev=12,t.t0=t.catch(1),n.statusCode=503,t.abrupt("return",{channels:null,statusCode:503});case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()}],n&&c(e.prototype,n),r&&c(e,r),s}(f.a.Component)},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3,4,5]]]);