(function(e){function t(t){for(var a,r,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-37089cd2":"47098541","chunk-3ac2e5e6":"060340f6","chunk-6e4e5f82":"8f68c57b"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-37089cd2":1,"chunk-3ac2e5e6":1,"chunk-6e4e5f82":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-37089cd2":"36a4c604","chunk-3ac2e5e6":"6ef1df0d","chunk-6e4e5f82":"1e535e0a"}[e]+".css",c=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===a||s===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d28":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("f2bf"),r=Object(a["n"])("i",{class:"el-icon-s-home"},null,-1),c=Object(a["n"])("span",null,"首页",-1),o=Object(a["n"])("i",{class:"el-icon-food"},null,-1),i=Object(a["n"])("span",null,"技艺",-1),u=Object(a["n"])("i",{class:"el-icon-mouse"},null,-1),l=Object(a["n"])("span",null,"CPS",-1),s=Object(a["n"])("i",{class:"el-icon-notebook-1"},null,-1),d=Object(a["n"])("span",null,"小本本",-1),f=Object(a["n"])("p",null,"请使用其它浏览器打开",-1);function b(e,t,n,b,p,h){var m=Object(a["N"])("el-menu-item"),v=Object(a["N"])("el-menu"),g=Object(a["N"])("router-view"),j=Object(a["N"])("el-dialog");return Object(a["E"])(),Object(a["j"])(a["b"],null,[Object(a["n"])(v,{class:"el-menu-demo",mode:"horizontal",router:""},{default:Object(a["cb"])((function(){return[Object(a["n"])(m,{index:"/"},{default:Object(a["cb"])((function(){return[r,c]})),_:1}),Object(a["n"])(m,{index:"/page-skill"},{default:Object(a["cb"])((function(){return[o,i]})),_:1}),Object(a["n"])(m,{index:"/page-cps"},{default:Object(a["cb"])((function(){return[u,l]})),_:1}),Object(a["n"])(m,{index:"/page-teamlist"},{default:Object(a["cb"])((function(){return[s,d]})),_:1})]})),_:1}),Object(a["n"])(g),Object(a["n"])(j,{title:"提示",modelValue:p.isInvalidBrowser,"onUpdate:modelValue":t[1]||(t[1]=function(e){return p.isInvalidBrowser=e}),fullscreen:"","show-close":!1},{default:Object(a["cb"])((function(){return[f,Object(a["n"])("p",null,"当前浏览器 "+Object(a["R"])(p.currentBrowser),1)]})),_:1},8,["modelValue"])],64)}var p={name:"app",mounted:function(){this.checkBrowser()||(this.isInvalidBrowser=!0)},data:function(){return{isInvalidBrowser:!1,currentBrowser:""}},methods:{checkBrowser:function(){var e=navigator.userAgent;return!~e.indexOf("MicroMessenger")||(this.currentBrowser="Weixin",!1)}}};n("a9b4");p.render=b;var h=p,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),v=Object(a["n"])("h1",{style:{"text-align":"center"}},"Welcome",-1),g=Object(a["n"])("div",{style:{"text-align":"center"}},[Object(a["n"])("strong",null,"系统信息")],-1);function j(e,t,n,r,c,o){var i=Object(a["N"])("el-table-column"),u=Object(a["N"])("el-table"),l=Object(a["N"])("el-card");return Object(a["E"])(),Object(a["j"])("div",null,[v,Object(a["n"])(l,{shadow:"always"},{default:Object(a["cb"])((function(){return[g,Object(a["n"])(u,{data:c.tableData,style:{width:"100%"}},{default:Object(a["cb"])((function(){return[Object(a["n"])(i,{prop:"name",label:"属性",width:"100"}),Object(a["n"])(i,{prop:"data",label:"值"})]})),_:1},8,["data"])]})),_:1})])}n("99af");function O(){var e=[];if(void 0!==window.screen.deviceXDPI)e[0]=window.screen.deviceXDPI,e[1]=window.screen.deviceYDPI;else{var t=document.createElement("DIV");t.style.cssText="width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden",document.body.appendChild(t),e[0]=parseInt(t.offsetWidth),e[1]=parseInt(t.offsetHeight),t.parentNode.removeChild(t)}return e}var w={name:"Home",data:function(){return{activeName:"first",tableData:[{name:"Platform",data:""},{name:"Language",data:""},{name:"Screen",data:""},{name:"DPI",data:""},{name:"Name",data:""},{name:"UserAgent",data:""}]}},mounted:function(){var e=O();this.tableData[0].data=navigator.platform,this.tableData[1].data=navigator.language,this.tableData[2].data="(".concat(window.screen.width,", ").concat(window.screen.height,", ").concat(window.devicePixelRatio,")"),this.tableData[3].data="(".concat(e[0],", ").concat(e[1],")"),this.tableData[4].data=navigator.appName,this.tableData[5].data=navigator.userAgent}};w.render=j;var y=w,k=[{path:"/",name:"Home",component:y},{path:"/page-skill",name:"PageSkill",component:function(){return n.e("chunk-6e4e5f82").then(n.bind(null,"3837"))}},{path:"/page-cps",name:"PageCPS",component:function(){return n.e("chunk-3ac2e5e6").then(n.bind(null,"8e92"))}},{path:"/page-teamlist",name:"PageTeamlist",component:function(){return n.e("chunk-37089cd2").then(n.bind(null,"07fe"))}}],P=Object(m["a"])({history:Object(m["b"])(),routes:k}),x=P,_=n("3fd4"),N=(n("7dd6"),Object(a["i"])(h));N.use(x).use(_["a"]),N.mount("#app")},a9b4:function(e,t,n){"use strict";n("0d28")}});
//# sourceMappingURL=app.2e934bc8.js.map