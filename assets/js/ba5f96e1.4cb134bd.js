"use strict";(self.webpackChunkcloudmon_docs=self.webpackChunkcloudmon_docs||[]).push([[724],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,s=d["".concat(u,".").concat(m)]||d[m]||f[m]||i;return t?r.createElement(s,c(c({ref:n},p),{},{components:t})):r.createElement(s,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7246:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],a={},u="Overview",l={unversionedId:"reference/cloudmon-configuration/overview",id:"reference/cloudmon-configuration/overview",title:"Overview",description:"On the cloudmon host you have to set up a cloudmon configuration file. In it, you specify which S3 buckets have to be monitored.",source:"@site/docs/reference/10-cloudmon-configuration/overview.md",sourceDirName:"reference/10-cloudmon-configuration",slug:"/reference/cloudmon-configuration/overview",permalink:"/cloudmon-docs/reference/cloudmon-configuration/overview",draft:!1,editUrl:"https://github.com/dreitier/cloudmon-docs/tree/main/docs/docs/reference/10-cloudmon-configuration/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/cloudmon-docs/category/configuration"},next:{title:"Storage",permalink:"/cloudmon-docs/reference/cloudmon-configuration/storage"}},p={},f=[],d={toc:f};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"On the ",(0,i.kt)("em",{parentName:"p"},"cloudmon")," host you have to set up a ",(0,i.kt)("em",{parentName:"p"},"cloudmon")," configuration file. In it, you specify which S3 buckets have to be monitored.\n",(0,i.kt)("em",{parentName:"p"},"cloudmon")," inspects each configured S3 bucket. If a ",(0,i.kt)("a",{parentName:"p",href:"/cloudmon-docs/reference/backup-definition/overview"},"backup definition")," is found in there, it is used."),(0,i.kt)("p",null,"cloudmon tries to locate the configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," in the following directories (priority in the defined order):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"local directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"${HOME}/.cloudmon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/etc/cloudmon"))),(0,i.kt)("p",null,"In the configuration file, you can use environment placeholders ",(0,i.kt)("inlineCode",{parentName:"p"},"${VAR}"),". Those placeholders will be replaced during the startup of ",(0,i.kt)("em",{parentName:"p"},"cloudmon")," with the corresponding environment variables. You have to place the configuration file at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/cloudmon/config-raw.yaml"),"."))}m.isMDXComponent=!0}}]);