"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[48149],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(y,a(a({ref:n},s),{},{components:t})):r.createElement(y,a({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const i={},a="\u901f\u5ea6\u63a7\u5236",l={unversionedId:"concept/speed-limit",id:"version-2.3.6/concept/speed-limit",title:"\u901f\u5ea6\u63a7\u5236",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/concept/speed-limit.md",sourceDirName:"concept",slug:"/concept/speed-limit",permalink:"/zh-CN/docs/2.3.6/concept/speed-limit",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/concept/speed-limit.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"SQL\u914d\u7f6e\u6587\u4ef6",permalink:"/zh-CN/docs/2.3.6/concept/sql-config"},next:{title:"\u4e8b\u4ef6\u76d1\u542c\u5668",permalink:"/zh-CN/docs/2.3.6/concept/event-listener"}},c={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u8fd9\u4e9b\u5f15\u64ce",id:"\u652f\u6301\u8fd9\u4e9b\u5f15\u64ce",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u901f\u5ea6\u63a7\u5236"},"\u901f\u5ea6\u63a7\u5236"),(0,o.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.yg)("p",null,"SeaTunnel\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u901f\u5ea6\u63a7\u5236\u529f\u80fd\u5141\u8bb8\u4f60\u7ba1\u7406\u6570\u636e\u540c\u6b65\u7684\u901f\u7387\u3002\u5f53\u4f60\u9700\u8981\u786e\u4fdd\u5728\u7cfb\u7edf\u4e4b\u95f4\u6570\u636e\u4f20\u8f93\u7684\u9ad8\u6548\u548c\u53ef\u63a7\u8fd9\u4e2a\u529f\u80fd\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002\n\u901f\u5ea6\u63a7\u5236\u4e3b\u8981\u7531\u4e24\u4e2a\u5173\u952e\u53c2\u6570\u63a7\u5236\uff1a",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.rows_per_second")," \u548c ",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.bytes_per_second"),"\u3002\n\u672c\u6587\u6863\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b\u53c2\u6570\u4ee5\u53ca\u5982\u4f55\u6709\u6548\u5730\u5229\u7528\u5b83\u4eec\u3002"),(0,o.yg)("h2",{id:"\u652f\u6301\u8fd9\u4e9b\u5f15\u64ce"},"\u652f\u6301\u8fd9\u4e9b\u5f15\u64ce"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,o.yg)("br",null),"\nFlink",(0,o.yg)("br",null),"\nSpark",(0,o.yg)("br",null))),(0,o.yg)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.yg)("p",null,"\u8981\u4f7f\u7528\u901f\u5ea6\u63a7\u5236\u529f\u80fd\uff0c\u4f60\u9700\u8981\u5728job\u914d\u7f6e\u4e2d\u8bbe\u7f6e",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.rows_per_second")," \u6216 ",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.bytes_per_second"),"\u53c2\u6570\u3002"),(0,o.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6\u4e2denv\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},"env {\n    job.mode=STREAMING\n    job.name=SeaTunnel_Job\n    read_limit.bytes_per_second=7000000\n    read_limit.rows_per_second=400\n}\nsource {\n    MySQL-CDC {\n      // ignore...\n    }\n}\ntransform {\n}\nsink {\n    Console {\n    }\n}\n")),(0,o.yg)("p",null,"\u6211\u4eec\u5728",(0,o.yg)("inlineCode",{parentName:"p"},"env"),"\u53c2\u6570\u4e2d\u653e\u4e86",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.bytes_per_second")," \u548c ",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.rows_per_second"),"\u6765\u5b8c\u6210\u901f\u5ea6\u63a7\u5236\u7684\u914d\u7f6e\u3002\n\u4f60\u53ef\u4ee5\u540c\u65f6\u914d\u7f6e\u8fd9\u4e24\u4e2a\u53c2\u6570\uff0c\u6216\u8005\u53ea\u914d\u7f6e\u5176\u4e2d\u4e00\u4e2a\u3002\u6bcf\u4e2a",(0,o.yg)("inlineCode",{parentName:"p"},"value"),"\u7684\u503c\u4ee3\u8868\u6bcf\u4e2a\u7ebf\u7a0b\u88ab\u9650\u5236\u7684\u6700\u5927\u901f\u7387\u3002\n\u56e0\u6b64\uff0c\u5728\u914d\u7f6e\u5404\u4e2a\u503c\u65f6\uff0c\u8fd8\u9700\u8981\u540c\u65f6\u8003\u8651\u4f60\u4efb\u52a1\u7684\u5e76\u884c\u6027\u3002"))}d.isMDXComponent=!0}}]);