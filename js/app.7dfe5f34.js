(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],p=0,f=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/whatsapp-sender-vue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"387c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("h1",[e._v("Hello Sender")]),n("div",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.num,expression:"num"}],staticClass:"phone-input input-field",attrs:{type:"text",placeholder:"Enter phone number"},domProps:{value:e.num},on:{input:function(t){t.target.composing||(e.num=t.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.txt,expression:"txt"}],staticClass:"text-input input-field",attrs:{name:"body",placeholder:"Enter message body"},domProps:{value:e.txt},on:{input:function(t){t.target.composing||(e.txt=t.target.value)}}}),n("button",{staticClass:"link-btn",on:{click:function(t){return e.openLink()}}},[e._v("Send Message")]),n("div",{staticClass:"error-msg"},[e._v(e._s(e.error))])])])},i=[];n("99af"),n("a623"),n("a15b"),n("ac1f"),n("2532"),n("1276");function a(e){var t="";return t=e.split("-").join(""),"0"===t.charAt(0)&&10===t.length&&(t="972"+t.substr(1)),t}function u(e){if(e&&!(e.length<10)){var t="0123456789+";return e.split("").every((function(e){return t.includes(e)}))}}function c(e){var t=e.replaceAll(/\n/g,"%0D%0A");return console.log("New Txt",t),t}var s={formatNumber:a,validateNumber:u,formatTxt:c},l={name:"App",data:function(){return{num:"",txt:"",link:"",error:""}},computed:{phoneNum:function(){return"https://api.whatsapp.com/send?phone=".concat(this.num,"&text=").concat(this.formatedTxt,"&source=&data=&app_absent=")},formatedTxt:function(){return this.txt.replaceAll(/\n/g,"%0D%0A")}},methods:{openLink:function(){this.txt=s.formatTxt(this.txt);var e=s.validateNumber(this.num);if(!e)return this.error="The number is invalid";this.num=s.formatNumber(this.num),window.open(this.phoneNum,"_blank")}},watch:{txt:function(){}}},p=l,f=(n("8cd1"),n("2877")),d=Object(f["a"])(p,o,i,!1,null,"5c6a1e84",null),m=d.exports,v=n("9483");Object(v["a"])("".concat("/whatsapp-sender-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)}}).$mount("#app")},"8cd1":function(e,t,n){"use strict";var r=n("387c"),o=n.n(r);o.a}});
//# sourceMappingURL=app.7dfe5f34.js.map