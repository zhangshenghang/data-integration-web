"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[92914],{15680:(n,e,t)=>{t.d(e,{xA:()=>u,yg:()=>y});var r=t(96540);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),p=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(s.Provider,{value:e},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),c=p(t),m=a,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(y,l(l({ref:e},u),{},{components:t})):r.createElement(y,l({ref:e},u))}));function y(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i[c]="string"==typeof n?n:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22200:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={},l="RowKindExtractor",i={unversionedId:"transform-v2/rowkind-extractor",id:"transform-v2/rowkind-extractor",title:"RowKindExtractor",description:"RowKindExtractor transform plugin",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/transform-v2/rowkind-extractor.md",sourceDirName:"transform-v2",slug:"/transform-v2/rowkind-extractor",permalink:"/zh-CN/docs/transform-v2/rowkind-extractor",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/transform-v2/rowkind-extractor.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u66ff\u6362",permalink:"/zh-CN/docs/transform-v2/replace"},next:{title:"\u62c6\u5206",permalink:"/zh-CN/docs/transform-v2/split"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"custom_field_name string",id:"custom_field_name-string",level:3},{value:"transform_type enum",id:"transform_type-enum",level:3},{value:"Examples",id:"examples",level:2}],u={toc:p},c="wrapper";function d(n){let{components:e,...t}=n;return(0,a.yg)(c,(0,r.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"rowkindextractor"},"RowKindExtractor"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"RowKindExtractor transform plugin")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u5c06CDC Row \u8f6c\u6362\u4e3a Append only Row, \u8f6c\u6362\u540e\u7684\u884c\u6269\u5c55\u4e86RowKind\u5b57\u6bb5 ",(0,a.yg)("br",null),"\nExample: ",(0,a.yg)("br",null),"\nCDC row: -D 1, test1, test2 ",(0,a.yg)("br",null),"\ntransformed Row: +I 1,test1,test2,DELETE"),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"custom_field_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"row_kind")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"transform_type"),(0,a.yg)("td",{parentName:"tr",align:null},"enum"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"SHORT")))),(0,a.yg)("h3",{id:"custom_field_name-string"},"custom_field_name ","[string]"),(0,a.yg)("p",null,"RowKind\u5217\u7684\u81ea\u5b9a\u4e49\u540d"),(0,a.yg)("h3",{id:"transform_type-enum"},"transform_type ","[enum]"),(0,a.yg)("p",null,"\u683c\u5f0f\u5316RowKind\u503c , \u914d\u7f6e\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"SHORT")," \u6216 ",(0,a.yg)("inlineCode",{parentName:"p"},"FULL")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SHORT")," : +I, -U , +U, -D\n",(0,a.yg)("inlineCode",{parentName:"p"},"FULL")," : INSERT, UPDATE_BEFORE, UPDATE_AFTER , DELETE"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'\nenv {\n    parallelism = 1\n    job.mode = "BATCH"\n}\n\nsource {\n    FakeSource {\n        schema = {\n            fields {\n                pk_id = bigint\n                name = string\n                score = int\n            }\n            primaryKey {\n                name = "pk_id"\n                columnNames = [pk_id]\n            }\n        }\n        rows = [\n            {\n                kind = INSERT\n                fields = [1, "A", 100]\n            },\n            {\n                kind = INSERT\n                fields = [2, "B", 100]\n            },\n            {\n                kind = INSERT\n                fields = [3, "C", 100]\n            },\n            {\n                kind = INSERT\n                fields = [4, "D", 100]\n            },\n            {\n                kind = UPDATE_BEFORE\n                fields = [1, "A", 100]\n            },\n            {\n                kind = UPDATE_AFTER\n                fields = [1, "F", 100]\n            }\n            {\n                kind = UPDATE_BEFORE\n                fields = [2, "B", 100]\n            },\n            {\n                kind = UPDATE_AFTER\n                fields = [2, "G", 100]\n            },\n            {\n                kind = DELETE\n                fields = [3, "C", 100]\n            },\n            {\n                kind = DELETE\n                fields = [4, "D", 100]\n            }\n        ]\n    }\n}\n\ntransform {\n  RowKindExtractor {\n        custom_field_name = "custom_name"\n        transform_type = FULL\n        result_table_name = "trans_result"\n    }\n}\n\nsink {\n  Console {\n    source_table_name = "custom_name"\n  }\n}\n\n')))}d.isMDXComponent=!0}}]);