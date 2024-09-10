"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[29441],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),g=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=g(e.components);return a.createElement(i.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=g(t),y=r,m=s["".concat(i,".").concat(y)]||s[y]||u[y]||l;return t?a.createElement(m,c(c({ref:n},p),{},{components:t})):a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[s]="string"==typeof e?e:r,c[1]=o;for(var g=2;g<l;g++)c[g]=t[g];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},58754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=t(58168),r=(t(96540),t(15680));const l={},c="Hbase",o={unversionedId:"connector-v2/source/Hbase",id:"version-2.3.6/connector-v2/source/Hbase",title:"Hbase",description:"Hbase \u6e90\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/connector-v2/source/Hbase.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Hbase",permalink:"/zh-CN/docs/2.3.6/connector-v2/source/Hbase",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/connector-v2/source/Hbase.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"Greenplum",permalink:"/zh-CN/docs/2.3.6/connector-v2/source/Greenplum"},next:{title:"Hdfs\u6587\u4ef6",permalink:"/zh-CN/docs/2.3.6/connector-v2/source/HdfsFile"}},i={},g=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u529f\u80fd",id:"\u4e3b\u8981\u529f\u80fd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"zookeeper_quorum string",id:"zookeeper_quorum-string",level:3},{value:"table string",id:"table-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"hbase_extra_config config",id:"hbase_extra_config-config",level:3},{value:"caching",id:"caching",level:3},{value:"batch",id:"batch",level:3},{value:"cache_blocks",id:"cache_blocks",level:3},{value:"\u5e38\u7528\u9009\u9879",id:"\u5e38\u7528\u9009\u9879",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],p={toc:g},s="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hbase"},"Hbase"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Hbase \u6e90\u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u4ece Apache Hbase \u8bfb\u53d6\u6570\u636e\u3002"),(0,r.yg)("h2",{id:"\u4e3b\u8981\u529f\u80fd"},"\u4e3b\u8981\u529f\u80fd"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.6/concept/connector-v2-features"},"\u6279\u5904\u7406")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.6/concept/connector-v2-features"},"\u6d41\u5904\u7406")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.6/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.6/concept/connector-v2-features"},"Schema")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.6/concept/connector-v2-features"},"\u5e76\u884c\u5ea6")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.6/concept/connector-v2-features"},"\u652f\u6301\u7528\u6237\u5b9a\u4e49\u7684\u62c6\u5206"))),(0,r.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"zookeeper_quorum"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hbase_extra_config"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"caching"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cache_blocks"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"zookeeper_quorum-string"},"zookeeper_quorum ","[string]"),(0,r.yg)("p",null,"hbase\u7684zookeeper\u96c6\u7fa4\u4e3b\u673a\uff0c\u4f8b\u5982\uff1a\u201chadoop001:2181,hadoop002:2181,hadoop003:2181\u201d"),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"\u8981\u5199\u5165\u7684\u8868\u540d\uff0c\u4f8b\u5982\uff1a\u201cseatunnel\u201d"),(0,r.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,r.yg)("p",null,"Hbase \u4f7f\u7528\u5b57\u8282\u6570\u7ec4\u8fdb\u884c\u5b58\u50a8\u3002\u56e0\u6b64\uff0c\u60a8\u9700\u8981\u4e3a\u8868\u4e2d\u7684\u6bcf\u4e00\u5217\u914d\u7f6e\u6570\u636e\u7c7b\u578b\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.6/concept/schema-feature#how-to-declare-type-supported"},"guide"),"\u3002"),(0,r.yg)("h3",{id:"hbase_extra_config-config"},"hbase_extra_config ","[config]"),(0,r.yg)("p",null,"hbase \u7684\u989d\u5916\u914d\u7f6e"),(0,r.yg)("h3",{id:"caching"},"caching"),(0,r.yg)("p",null,"caching \u53c2\u6570\u7528\u4e8e\u8bbe\u7f6e\u5728\u626b\u63cf\u8fc7\u7a0b\u4e2d\u4e00\u6b21\u4ece\u670d\u52a1\u5668\u7aef\u83b7\u53d6\u7684\u884c\u6570\u3002\u8fd9\u53ef\u4ee5\u51cf\u5c11\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u5f80\u8fd4\u6b21\u6570\uff0c\u4ece\u800c\u63d0\u9ad8\u626b\u63cf\u6548\u7387\u3002\u9ed8\u8ba4\u503c:-1"),(0,r.yg)("h3",{id:"batch"},"batch"),(0,r.yg)("p",null,"batch \u53c2\u6570\u7528\u4e8e\u8bbe\u7f6e\u5728\u626b\u63cf\u8fc7\u7a0b\u4e2d\u6bcf\u6b21\u8fd4\u56de\u7684\u6700\u5927\u5217\u6570\u3002\u8fd9\u5bf9\u4e8e\u5904\u7406\u6709\u5f88\u591a\u5217\u7684\u884c\u7279\u522b\u6709\u7528\uff0c\u53ef\u4ee5\u907f\u514d\u4e00\u6b21\u6027\u8fd4\u56de\u8fc7\u591a\u6570\u636e\uff0c\u4ece\u800c\u8282\u7701\u5185\u5b58\u5e76\u63d0\u9ad8\u6027\u80fd\u3002"),(0,r.yg)("h3",{id:"cache_blocks"},"cache_blocks"),(0,r.yg)("p",null,"cache_blocks \u53c2\u6570\u7528\u4e8e\u8bbe\u7f6e\u5728\u626b\u63cf\u8fc7\u7a0b\u4e2d\u662f\u5426\u7f13\u5b58\u6570\u636e\u5757\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHBase \u4f1a\u5728\u626b\u63cf\u65f6\u5c06\u6570\u636e\u5757\u7f13\u5b58\u5230\u5757\u7f13\u5b58\u4e2d\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a false\uff0c\u5219\u5728\u626b\u63cf\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u7f13\u5b58\u6570\u636e\u5757\uff0c\u4ece\u800c\u51cf\u5c11\u5185\u5b58\u7684\u4f7f\u7528\u3002\u5728SeaTunnel\u4e2d\u9ed8\u8ba4\u503c\u4e3a: false"),(0,r.yg)("h3",{id:"\u5e38\u7528\u9009\u9879"},"\u5e38\u7528\u9009\u9879"),(0,r.yg)("p",null,"Source \u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.6/connector-v2/source/common-options"},"Source \u5e38\u7528\u9009\u9879")),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n  Hbase {\n    zookeeper_quorum = "hadoop001:2181,hadoop002:2181,hadoop003:2181" \n    table = "seatunnel_test" \n    caching = 1000 \n    batch = 100 \n    cache_blocks = false \n    schema = {\n      columns = [\n        { \n          name = "rowkey" \n          type = string \n        },\n        {\n          name = "columnFamily1:column1"\n          type = boolean\n        },\n        {\n          name = "columnFamily1:column2" \n          type = double\n        },\n        {\n          name = "columnFamily2:column1"\n          type = bigint\n        }\n      ]\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);