"use strict";(self.webpackChunkcloudmon_docs=self.webpackChunkcloudmon_docs||[]).push([[558],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,g=s["".concat(a,".").concat(d)]||s[d]||f[d]||i;return n?r.createElement(g,u(u({ref:t},l),{},{components:n})):r.createElement(g,u({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=s;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var p=2;p<i;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3022:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],c={},a="Purging",p={unversionedId:"reference/backup-definition/purging",id:"reference/backup-definition/purging",title:"Purging",description:"Purging is the process of deleting superfluous or outdated backups. By default, purging is disabled. You have to explicitly define a purge policy.",source:"@site/docs/reference/20-backup-definition/30-purging.md",sourceDirName:"reference/20-backup-definition",slug:"/reference/backup-definition/purging",permalink:"/cloudmon-docs/reference/backup-definition/purging",draft:!1,editUrl:"https://github.com/dreitier/cloudmon-docs/tree/main/docs/docs/reference/20-backup-definition/30-purging.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Substitutions",permalink:"/cloudmon-docs/reference/backup-definition/substitutions"},next:{title:"Metrics",permalink:"/cloudmon-docs/reference/metrics"}},l={},f=[],s={toc:f};function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"purging"},"Purging"),(0,i.kt)("p",null,"Purging is the process of deleting superfluous or outdated backups. By default, purging is disabled. You have to explicitly define a purge policy."),(0,i.kt)("p",null,"A purge policy is based upon two values:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("em",{parentName:"li"},"retention age")," "),(0,i.kt)("li",{parentName:"ol"},"and the ",(0,i.kt)("em",{parentName:"li"},"retention count"),".")),(0,i.kt)("p",null,"Both values can be configured in the ",(0,i.kt)("a",{parentName:"p",href:"overview#retention"},(0,i.kt)("em",{parentName:"a"},"backup definition")),"."))}d.isMDXComponent=!0}}]);