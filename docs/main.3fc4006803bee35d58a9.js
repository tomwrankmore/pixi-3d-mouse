!function(e){function n(n){for(var r,a,u=n[0],d=n[1],l=n[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(c&&c(n);p.length;)p.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,u=1;u<t.length;u++){var d=t[u];0!==i[d]&&(r=!1)}r&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},i={0:0},o=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var c=d;o.push([9,1]),t()}({10:function(e,n,t){},9:function(e,n,t){"use strict";t.r(n);t(10),t(11);var r=t(2),i=new r.a({width:window.innerWidth,height:window.innerHeight});document.body.appendChild(i.view);var o=new r.b.from("assets/images/fred-hampton.png");o.width=window.innerWidth,o.height=window.innerHeight,i.stage.addChild(o);var a=new r.b.from("assets/images/fred-hampton-map.png");a.width=window.innerWidth,a.height=window.innerHeight,i.stage.addChild(a);var u=new r.c.DisplacementFilter(a);i.stage.filters=[u],window.onmousemove=function(e){u.scale.x=(window.innerWidth/2-e.clientX)/100,u.scale.y=(window.innerWidth/2-e.clientY)/100},new MobileMenu}});