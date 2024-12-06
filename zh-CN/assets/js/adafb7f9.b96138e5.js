"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[29419],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),y=a,m=d["".concat(u,".").concat(y)]||d[y]||s[y]||l;return r?t.createElement(m,i(i({ref:n},c),{},{components:r})):t.createElement(m,i({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},19850:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=r(58168),a=(r(96540),r(15680));const l={},i="\u884c\u7c7b\u578b\u8fc7\u6ee4",o={unversionedId:"transform-v2/filter-rowkind",id:"transform-v2/filter-rowkind",title:"\u884c\u7c7b\u578b\u8fc7\u6ee4",description:"\u884c\u7c7b\u578b\u8f6c\u6362\u63d2\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/transform-v2/filter-rowkind.md",sourceDirName:"transform-v2",slug:"/transform-v2/filter-rowkind",permalink:"/zh-CN/docs/transform-v2/filter-rowkind",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/transform-v2/filter-rowkind.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"FieldRename",permalink:"/zh-CN/docs/transform-v2/field-rename"},next:{title:"\u8fc7\u6ee4\u5668",permalink:"/zh-CN/docs/transform-v2/filter"}},u={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:2},{value:"include_kinds array",id:"include_kinds-array",level:3},{value:"exclude_kinds array",id:"exclude_kinds-array",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:p},d="wrapper";function s(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u884c\u7c7b\u578b\u8fc7\u6ee4"},"\u884c\u7c7b\u578b\u8fc7\u6ee4"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u884c\u7c7b\u578b\u8f6c\u6362\u63d2\u4ef6")),(0,a.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"\u6309\u884c\u7c7b\u578b\u8fc7\u6ee4\u6570\u636e"),(0,a.yg)("h2",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"include_kinds"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"exclude_kinds"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("h3",{id:"include_kinds-array"},"include_kinds ","[array]"),(0,a.yg)("p",null,"\u8981\u5305\u542b\u7684\u884c\u7c7b\u578b"),(0,a.yg)("h3",{id:"exclude_kinds-array"},"exclude_kinds ","[array]"),(0,a.yg)("p",null,"\u8981\u6392\u9664\u7684\u884c\u7c7b\u578b\u3002"),(0,a.yg)("p",null,"\u60a8\u53ea\u80fd\u914d\u7f6e ",(0,a.yg)("inlineCode",{parentName:"p"},"include_kinds")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"exclude_kinds")," \u4e2d\u7684\u4e00\u4e2a\u3002"),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"\u8f6c\u6362\u63d2\u4ef6\u7684\u5e38\u89c1\u53c2\u6570, \u8bf7\u53c2\u8003  ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/transform-v2/common-options"},"Transform Plugin")," \u4e86\u89e3\u8be6\u60c5"),(0,a.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.yg)("p",null,"FakeSource \u751f\u6210\u7684\u6570\u636e\u7684\u884c\u7c7b\u578b\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT"),"\u3002\u5982\u679c\u6211\u4eec\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"FilterRowKink")," \u8f6c\u6362\u5e76\u6392\u9664 ",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT")," \u6570\u636e\uff0c\u6211\u4eec\u5c06\u4e0d\u4f1a\u5411\u63a5\u6536\u5668\u5199\u5165\u4efb\u4f55\u884c\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'\nenv {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    plugin_output = "fake"\n    row.num = 100\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\ntransform {\n  FilterRowKind {\n    plugin_input = "fake"\n    plugin_output = "fake1"\n    exclude_kinds = ["INSERT"]\n  }\n}\n\nsink {\n  Console {\n    plugin_input = "fake1"\n  }\n}\n')))}s.isMDXComponent=!0}}]);