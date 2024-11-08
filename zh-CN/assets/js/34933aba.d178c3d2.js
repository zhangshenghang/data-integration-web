"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[30081],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var y=a.createContext({}),p=function(e){var n=a.useContext(y),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(y.Provider,{value:n},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),o=p(t),s=l,m=o["".concat(y,".").concat(s)]||o[s]||u[s]||r;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=s;var g={};for(var y in n)hasOwnProperty.call(n,y)&&(g[y]=n[y]);g.originalType=e,g[o]="string"==typeof e?e:l,i[1]=g;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},29355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>g,toc:()=>p});var a=t(58168),l=(t(96540),t(15680));const r={},i="Redis",g={unversionedId:"connector-v2/sink/Redis",id:"connector-v2/sink/Redis",title:"Redis",description:"Redis sink connector",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Redis.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Redis",permalink:"/zh-CN/docs/connector-v2/sink/Redis",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Redis.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Rabbitmq",permalink:"/zh-CN/docs/connector-v2/sink/Rabbitmq"},next:{title:"Redshift",permalink:"/zh-CN/docs/connector-v2/sink/Redshift"}},y={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u529f\u80fd",id:"\u4e3b\u8981\u529f\u80fd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"key string",id:"key-string",level:3},{value:"data_type string",id:"data_type-string",level:3},{value:"user string",id:"user-string",level:3},{value:"auth string",id:"auth-string",level:3},{value:"db_num int",id:"db_num-int",level:3},{value:"mode string",id:"mode-string",level:3},{value:"nodes list",id:"nodes-list",level:3},{value:"format string",id:"format-string",level:3},{value:"expire long",id:"expire-long",level:3},{value:"support_custom_key boolean",id:"support_custom_key-boolean",level:3},{value:"value_field string",id:"value_field-string",level:3},{value:"hash_key_field string",id:"hash_key_field-string",level:3},{value:"hash_value_field string",id:"hash_value_field-string",level:3},{value:"common options",id:"common-options",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u66f4\u65b0\u65e5\u5fd7",id:"\u66f4\u65b0\u65e5\u5fd7",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"\u4e0b\u4e00\u4e2a\u7248\u672c",id:"\u4e0b\u4e00\u4e2a\u7248\u672c",level:3}],d={toc:p},o="wrapper";function u(e){let{components:n,...t}=e;return(0,l.yg)(o,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"redis"},"Redis"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Redis sink connector")),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u7528\u4e8e\u5c06\u6570\u636e\u5199\u5165 Redis\u3002"),(0,l.yg)("h2",{id:"\u4e3b\u8981\u529f\u80fd"},"\u4e3b\u8981\u529f\u80fd"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"host"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"port"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"key"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"10")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auth"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"db_num"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"single")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"nodes"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"yes when mode=cluster"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"json")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"expire"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"support_custom_key"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"value_field"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hash_key_field"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hash_value_field"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"host-string"},"host ","[string]"),(0,l.yg)("p",null,"Redis \u4e3b\u673a\u5730\u5740"),(0,l.yg)("h3",{id:"port-int"},"port ","[int]"),(0,l.yg)("p",null,"Redis \u7aef\u53e3"),(0,l.yg)("h3",{id:"key-string"},"key ","[string]"),(0,l.yg)("p",null,"\u8981\u5199\u5165 Redis \u7684\u952e\u503c\u3002"),(0,l.yg)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u60f3\u4f7f\u7528\u4e0a\u6e38\u6570\u636e\u4e2d\u7684\u67d0\u4e2a\u5b57\u6bb5\u503c\u4f5c\u4e3a\u952e\u503c\uff0c\u53ef\u4ee5\u5c06\u8be5\u5b57\u6bb5\u540d\u79f0\u6307\u5b9a\u7ed9 key\u3002"),(0,l.yg)("p",null,"\u4e0a\u6e38\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6210\u529f"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"500"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef"),(0,l.yg)("td",{parentName:"tr",align:null},"false")))),(0,l.yg)("p",null,"\u5982\u679c\u5c06\u5b57\u6bb5\u540d\u79f0\u6307\u5b9a\u4e3a code \u5e76\u5c06 data_type \u8bbe\u7f6e\u4e3a key\uff0c\u5c06\u6709\u4e24\u4e2a\u6570\u636e\u5199\u5165 Redis\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"200 -> {code: 200, data: \u83b7\u53d6\u6210\u529f, success: true}")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"500 -> {code: 500, data: \u5185\u90e8\u9519\u8bef, success: false}"))),(0,l.yg)("p",null,"\u5982\u679c\u5c06\u5b57\u6bb5\u540d\u79f0\u6307\u5b9a\u4e3a value \u5e76\u5c06 data_type \u8bbe\u7f6e\u4e3a key\uff0c\u5219\u7531\u4e8e\u4e0a\u6e38\u6570\u636e\u7684\u5b57\u6bb5\u4e2d\u6ca1\u6709 value \u5b57\u6bb5\uff0c\u5c06\u53ea\u6709\u4e00\u4e2a\u6570\u636e\u5199\u5165 Redis\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"value -> {code: 500, data: \u5185\u90e8\u9519\u8bef, success: false}"))),(0,l.yg)("p",null,"\u8bf7\u53c2\u89c1 data_type \u90e8\u5206\u4ee5\u4e86\u89e3\u5177\u4f53\u7684\u5199\u5165\u89c4\u5219\u3002"),(0,l.yg)("p",null,"\u5f53\u7136\uff0c\u8fd9\u91cc\u5199\u5165\u7684\u6570\u636e\u683c\u5f0f\u53ea\u662f\u4ee5 json \u4e3a\u4f8b\uff0c\u5177\u4f53\u683c\u5f0f\u4ee5\u7528\u6237\u914d\u7f6e\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"format")," \u4e3a\u51c6\u3002"),(0,l.yg)("h3",{id:"data_type-string"},"data_type ","[string]"),(0,l.yg)("p",null,"Redis \u6570\u636e\u7c7b\u578b\uff0c\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"key")," ",(0,l.yg)("inlineCode",{parentName:"p"},"hash")," ",(0,l.yg)("inlineCode",{parentName:"p"},"list")," ",(0,l.yg)("inlineCode",{parentName:"p"},"set")," ",(0,l.yg)("inlineCode",{parentName:"p"},"zset")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"key")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6bcf\u4e2a\u6765\u81ea\u4e0a\u6e38\u7684\u6570\u636e\u90fd\u4f1a\u66f4\u65b0\u5230\u914d\u7f6e\u7684 key\uff0c\u8fd9\u610f\u5473\u7740\u540e\u9762\u7684\u6570\u636e\u4f1a\u8986\u76d6\u524d\u9762\u7684\u6570\u636e\uff0c\u53ea\u6709\u6700\u540e\u7684\u6570\u636e\u4f1a\u5b58\u50a8\u5728\u8be5 key \u4e2d\u3002")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"hash")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6bcf\u4e2a\u6765\u81ea\u4e0a\u6e38\u7684\u6570\u636e\u4f1a\u6839\u636e\u5b57\u6bb5\u62c6\u5206\u5e76\u5199\u5165 hash key\uff0c\u540e\u9762\u7684\u6570\u636e\u4f1a\u8986\u76d6\u524d\u9762\u7684\u6570\u636e\u3002")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"list")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6bcf\u4e2a\u6765\u81ea\u4e0a\u6e38\u7684\u6570\u636e\u90fd\u4f1a\u88ab\u6dfb\u52a0\u5230\u914d\u7f6e\u7684 list key \u4e2d\u3002")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"set")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6bcf\u4e2a\u6765\u81ea\u4e0a\u6e38\u7684\u6570\u636e\u90fd\u4f1a\u88ab\u6dfb\u52a0\u5230\u914d\u7f6e\u7684 set key \u4e2d\u3002")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"zset")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6bcf\u4e2a\u6765\u81ea\u4e0a\u6e38\u7684\u6570\u636e\u90fd\u4f1a\u4ee5\u6743\u91cd\u4e3a 1 \u7684\u65b9\u5f0f\u6dfb\u52a0\u5230\u914d\u7f6e\u7684 zset key \u4e2d\u3002\u56e0\u6b64\uff0czset \u4e2d\u6570\u636e\u7684\u987a\u5e8f\u57fa\u4e8e\u6570\u636e\u7684\u6d88\u8d39\u987a\u5e8f\u3002")),(0,l.yg)("h3",{id:"user-string"},"user ","[string]"),(0,l.yg)("p",null,"Redis \u8ba4\u8bc1\u7528\u6237\uff0c\u8fde\u63a5\u52a0\u5bc6\u96c6\u7fa4\u65f6\u9700\u8981"),(0,l.yg)("h3",{id:"auth-string"},"auth ","[string]"),(0,l.yg)("p",null,"Redis \u8ba4\u8bc1\u5bc6\u7801\uff0c\u8fde\u63a5\u52a0\u5bc6\u96c6\u7fa4\u65f6\u9700\u8981"),(0,l.yg)("h3",{id:"db_num-int"},"db_num ","[int]"),(0,l.yg)("p",null,"Redis \u6570\u636e\u5e93\u7d22\u5f15 ID\uff0c\u9ed8\u8ba4\u8fde\u63a5\u5230 db 0"),(0,l.yg)("h3",{id:"mode-string"},"mode ","[string]"),(0,l.yg)("p",null,"Redis \u6a21\u5f0f\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"single")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"p"},"cluster"),"\uff0c\u9ed8\u8ba4\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"single")),(0,l.yg)("h3",{id:"nodes-list"},"nodes ","[list]"),(0,l.yg)("p",null,"Redis \u8282\u70b9\u4fe1\u606f\uff0c\u5728\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u4f7f\u7528\uff0c\u5fc5\u987b\u6309\u5982\u4e0b\u683c\u5f0f\uff1a"),(0,l.yg)("p",null,'["host1:port1", "host2:port2"]'),(0,l.yg)("h3",{id:"format-string"},"format ","[string]"),(0,l.yg)("p",null,"\u4e0a\u6e38\u6570\u636e\u7684\u683c\u5f0f\uff0c\u76ee\u524d\u53ea\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"json"),"\uff0c\u4ee5\u540e\u4f1a\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"text"),"\uff0c\u9ed8\u8ba4 ",(0,l.yg)("inlineCode",{parentName:"p"},"json"),"\u3002"),(0,l.yg)("p",null,"\u5f53\u4f60\u6307\u5b9a\u683c\u5f0f\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"json")," \u65f6\uff0c\u4f8b\u5982\uff1a"),(0,l.yg)("p",null,"\u4e0a\u6e38\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6210\u529f"),(0,l.yg)("td",{parentName:"tr",align:null},"true")))),(0,l.yg)("p",null,"\u8fde\u63a5\u5668\u4f1a\u751f\u6210\u5982\u4e0b\u6570\u636e\u5e76\u5199\u5165 Redis\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{"code":  200, "data":  "\u83b7\u53d6\u6210\u529f", "success":  "true"}\n')),(0,l.yg)("h3",{id:"expire-long"},"expire ","[long]"),(0,l.yg)("p",null,"\u8bbe\u7f6e Redis \u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\u9ed8\u8ba4\u503c\u4e3a -1\uff0c\u8868\u793a\u952e\u4e0d\u4f1a\u81ea\u52a8\u8fc7\u671f\u3002"),(0,l.yg)("h3",{id:"support_custom_key-boolean"},"support_custom_key ","[boolean]"),(0,l.yg)("p",null,"\u8bbe\u7f6e\u4e3atrue\uff0c\u8868\u793a\u542f\u7528\u81ea\u5b9a\u4e49Key\u3002"),(0,l.yg)("p",null,"\u4e0a\u6e38\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6210\u529f"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"500"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef"),(0,l.yg)("td",{parentName:"tr",align:null},"false")))),(0,l.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"{"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"}"),"\u7b26\u53f7\u81ea\u5b9a\u4e49Redis\u952e\u540d\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"{}"),"\u4e2d\u7684\u5b57\u6bb5\u540d\u4f1a\u88ab\u89e3\u6790\u66ff\u6362\u4e3a\u4e0a\u6e38\u6570\u636e\u4e2d\u7684\u67d0\u4e2a\u5b57\u6bb5\u503c\uff0c\u4f8b\u5982\uff1a\u5c06\u5b57\u6bb5\u540d\u79f0\u6307\u5b9a\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"{code}")," \u5e76\u5c06 data_type \u8bbe\u7f6e\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"key"),"\uff0c\u5c06\u6709\u4e24\u4e2a\u6570\u636e\u5199\u5165 Redis\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"200 -> {code: 200, data: \u83b7\u53d6\u6210\u529f, success: true}")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"500 -> {code: 500, data: \u5185\u90e8\u9519\u8bef, success: false}"))),(0,l.yg)("p",null,"Redis\u952e\u540d\u53ef\u4ee5\u7531\u56fa\u5b9a\u90e8\u5206\u548c\u53d8\u5316\u90e8\u5206\u7ec4\u6210\uff0c\u901a\u8fc7Redis\u5206\u7ec4\u7b26\u53f7:\u8fde\u63a5\uff0c\u4f8b\u5982\uff1a\u5c06\u5b57\u6bb5\u540d\u79f0\u6307\u5b9a\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"code:{code}")," \u5e76\u5c06 data_type \u8bbe\u7f6e\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"key"),"\uff0c\u5c06\u6709\u4e24\u4e2a\u6570\u636e\u5199\u5165 Redis\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"code:200 -> {code: 200, data: \u83b7\u53d6\u6210\u529f, success: true}")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"code:500 -> {code: 500, data: \u5185\u90e8\u9519\u8bef, success: false}"))),(0,l.yg)("h3",{id:"value_field-string"},"value_field ","[string]"),(0,l.yg)("p",null,"\u8981\u5199\u5165Redis\u7684\u503c\u7684\u5b57\u6bb5\uff0c ",(0,l.yg)("inlineCode",{parentName:"p"},"data_type")," \u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"key")," ",(0,l.yg)("inlineCode",{parentName:"p"},"list")," ",(0,l.yg)("inlineCode",{parentName:"p"},"set")," ",(0,l.yg)("inlineCode",{parentName:"p"},"zset"),"."),(0,l.yg)("p",null,"\u5f53\u4f60\u6307\u5b9aRedis\u952e\u540d\u5b57\u6bb5",(0,l.yg)("inlineCode",{parentName:"p"},"key"),"\u6307\u5b9a\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"value"),"\uff0c\u503c\u5b57\u6bb5",(0,l.yg)("inlineCode",{parentName:"p"},"value_field"),"\u6307\u5b9a\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"data"),"\uff0c\u5e76\u5c06",(0,l.yg)("inlineCode",{parentName:"p"},"data_type"),"\u6307\u5b9a\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"key"),"\u65f6,"),(0,l.yg)("p",null,"\u4e0a\u6e38\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6210\u529f"),(0,l.yg)("td",{parentName:"tr",align:null},"true")))),(0,l.yg)("p",null,"\u5982\u4e0b\u7684\u6570\u636e\u4f1a\u88ab\u5199\u5165Redis:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"value -> \u83b7\u53d6\u6210\u529f"))),(0,l.yg)("h3",{id:"hash_key_field-string"},"hash_key_field ","[string]"),(0,l.yg)("p",null,"\u8981\u5199\u5165Redis\u7684hash\u952e\u5b57\u6bb5, ",(0,l.yg)("inlineCode",{parentName:"p"},"data_type")," \u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"hash")),(0,l.yg)("h3",{id:"hash_value_field-string"},"hash_value_field ","[string]"),(0,l.yg)("p",null,"\u8981\u5199\u5165Redis\u7684hash\u503c\u5b57\u6bb5, ",(0,l.yg)("inlineCode",{parentName:"p"},"data_type")," \u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"p"},"hash")),(0,l.yg)("p",null,"\u5f53\u4f60\u6307\u5b9aRedis\u952e\u540d\u5b57\u6bb5",(0,l.yg)("inlineCode",{parentName:"p"},"key"),"\u6307\u5b9a\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"value"),"\uff0chash\u952e\u5b57\u6bb5",(0,l.yg)("inlineCode",{parentName:"p"},"hash_key_field"),"\u6307\u5b9a\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"data"),"\uff0chash\u503c\u5b57\u6bb5",(0,l.yg)("inlineCode",{parentName:"p"},"hash_value_field"),"\u6307\u5b9a\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"success"),"\uff0c\u5e76\u5c06",(0,l.yg)("inlineCode",{parentName:"p"},"data_type"),"\u6307\u5b9a\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"hash"),"\u65f6,"),(0,l.yg)("p",null,"\u4e0a\u6e38\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6210\u529f"),(0,l.yg)("td",{parentName:"tr",align:null},"true")))),(0,l.yg)("p",null,"\u5982\u4e0b\u7684\u6570\u636e\u4f1a\u88ab\u5199\u5165Redis:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"value -> \u83b7\u53d6\u6210\u529f | true"))),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Sink \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink-common-options"},"Sink Common Options")," \u83b7\u53d6\u8be6\u60c5"),(0,l.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.yg)("p",null,"\u7b80\u5355\u793a\u4f8b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},"Redis {\n  host = localhost\n  port = 6379\n  key = age\n  data_type = list\n}\n")),(0,l.yg)("p",null,"\u81ea\u5b9a\u4e49Key\u793a\u4f8b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'Redis {\n  host = localhost\n  port = 6379\n  key = "name:{name}"\n  support_custom_key = true\n  data_type = key\n}\n')),(0,l.yg)("p",null,"\u81ea\u5b9a\u4e49Value\u793a\u4f8b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'Redis {\n  host = localhost\n  port = 6379\n  key = person\n  value_field = "name"\n  data_type = key\n}\n')),(0,l.yg)("p",null,"\u81ea\u5b9a\u4e49HashKey\u548cHashValue\u793a\u4f8b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'Redis {\n  host = localhost\n  port = 6379\n  key = person\n  hash_key_field = "name"\n  hash_value_field = "age"\n  data_type = hash\n}\n')),(0,l.yg)("h2",{id:"\u66f4\u65b0\u65e5\u5fd7"},"\u66f4\u65b0\u65e5\u5fd7"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6dfb\u52a0 Redis Sink Connector")),(0,l.yg)("h3",{id:"\u4e0b\u4e00\u4e2a\u7248\u672c"},"\u4e0b\u4e00\u4e2a\u7248\u672c"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[\u6539\u8fdb]"," \u652f\u6301 Redis \u96c6\u7fa4\u6a21\u5f0f\u8fde\u63a5\u548c\u7528\u6237\u8ba4\u8bc1 ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3188"},"3188"))))}u.isMDXComponent=!0}}]);