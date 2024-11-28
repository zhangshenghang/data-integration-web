"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[65646],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>b});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),y=o,b=s["".concat(u,".").concat(y)]||s[y]||f[y]||c;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},50703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(58168),o=(n(96540),n(15680));const c={},a="\u5f00\u53d1\u81ea\u5df1\u7684Connector",i={unversionedId:"contribution/how-to-create-your-connector",id:"contribution/how-to-create-your-connector",title:"\u5f00\u53d1\u81ea\u5df1\u7684Connector",description:"\u5982\u679c\u4f60\u60f3\u9488\u5bf9SeaTunnel\u65b0\u7684\u8fde\u63a5\u5668API\u5f00\u53d1\u81ea\u5df1\u7684\u8fde\u63a5\u5668\uff08Connector V2\uff09\uff0c\u8bf7\u67e5\u770b\u8fd9\u91cc \u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/contribution/how-to-create-your-connector.md",sourceDirName:"contribution",slug:"/contribution/how-to-create-your-connector",permalink:"/zh-CN/docs/contribution/how-to-create-your-connector",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/contribution/how-to-create-your-connector.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u8d21\u732e Transform \u6307\u5357",permalink:"/zh-CN/docs/contribution/contribute-transform-v2-guide"},next:{title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",permalink:"/zh-CN/docs/faq"}},u={},l=[],p={toc:l},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u5f00\u53d1\u81ea\u5df1\u7684connector"},"\u5f00\u53d1\u81ea\u5df1\u7684Connector"),(0,o.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u9488\u5bf9SeaTunnel\u65b0\u7684\u8fde\u63a5\u5668API\u5f00\u53d1\u81ea\u5df1\u7684\u8fde\u63a5\u5668\uff08Connector V2\uff09\uff0c\u8bf7\u67e5\u770b",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/seatunnel-connectors-v2/README.zh.md"},"\u8fd9\u91cc")," \u3002"))}f.isMDXComponent=!0}}]);