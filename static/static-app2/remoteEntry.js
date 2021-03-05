var app2;(()=>{"use strict";var e,r,t,n,a={652:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof basic)return e();t.l("/static-basic/remoteEntry.js",(t=>{if("undefined"!=typeof basic)return e();var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+i+")",n.name="ScriptExternalLoadError",n.type=a,n.request=i,r(n)}),"basic")})).then((()=>basic))}},i={};function o(e){if(i[e])return i[e].exports;var r=i[e]={exports:{}};return a[e](r,r.exports,o),r.exports}o.m=a,o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="app2:",o.l=(t,n,a,i)=>{if(e[t])e[t].push(n);else{var s,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),p=0;p<l.length;p++){var c=l[p];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+a){s=c;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",r+a),s.src=t),e[t]=[n];var d=(r,n)=>{s.onerror=s.onload=null,clearTimeout(f);var a=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),r)return r(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={src_pages_Page1_index_js:[288]},n={288:["default","./utils",652]},o.f.remotes=(e,r)=>{o.o(t,e)&&t[e].forEach((e=>{var t=o.R;t||(t=[]);var i=n[e];if(!(t.indexOf(i)>=0)){if(t.push(i),i.p)return r.push(i.p);var s=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+i[1]+'" from '+i[2]),a[e]=()=>{throw r},i.p=0},u=(e,t,n,a,o,u)=>{try{var l=e(t,n);if(!l||!l.then)return o(l,a,u);var p=l.then((e=>o(e,a)),s);if(!u)return p;r.push(i.p=p)}catch(e){s(e)}},l=(e,r,n)=>u(r.get,i[1],t,0,p,n),p=r=>{i.p=1,a[e]=e=>{e.exports=r()}};u(o,i[2],0,0,((e,r,t)=>e?u(o.I,i[0],0,e,l,t):s()),1)}}))},(()=>{o.S={};var e={},r={};o.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];o.o(o.S,t)||(o.S[t]={}),o.S[t];var i=[];switch(t){case"default":(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=o(652);if(!a)return;var s=e=>e&&e.init&&e.init(o.S[t],n);if(a.then)return i.push(a.then(s,r));var u=s(a);u&&u.then&&i.push(u.catch(r))}catch(e){r(e)}})()}return i.length?e[t]=Promise.all(i).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={app2:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var i=o.p+o.u(r),s=new Error;o.l(i,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var n,a,[i,s,u]=t,l=0,p=[];l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&p.push(e[a][0]),e[a]=0;for(n in s)o.o(s,n)&&(o.m[n]=s[n]);for(u&&u(o),r&&r(t);p.length;)p.shift()()},t=self.webpackChunkapp2=self.webpackChunkapp2||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var s,u,l,p,c={};s=c,u={"./router":()=>o.e("src_router_js").then((()=>()=>o(910)))},l=(e,r)=>(o.R=r,r=o.o(u,e)?u[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),o.R=void 0,r),p=(e,r)=>{if(o.S){var t=o.S.default,n="default";if(t&&t!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return o.S[n]=e,o.I(n,r)}},o.d(s,{get:()=>l,init:()=>p}),app2=c})();