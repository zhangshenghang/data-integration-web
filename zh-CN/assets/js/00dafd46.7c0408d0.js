"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[73350],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),y=l,m=u["".concat(c,".").concat(y)]||u[y]||g[y]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},94595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(58168),l=(a(96540),a(15680));const r={},i="LocalFile",o={unversionedId:"connector-v2/source/LocalFile",id:"version-2.2.0-beta/connector-v2/source/LocalFile",title:"LocalFile",description:"Local file source connector",source:"@site/versioned_docs/version-2.2.0-beta/connector-v2/source/LocalFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/LocalFile",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/source/LocalFile",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector-v2/source/LocalFile.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Kudu",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/source/Kudu"},next:{title:"MongoDb",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/source/MongoDB"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"path string",id:"path-string",level:3},{value:"type string",id:"type-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...a}=e;return(0,l.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"localfile"},"LocalFile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Local file source connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Read data from local file system."),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,l.yg)("p",null,"Read all the data in a split in a pollNext call. What splits are read will be saved in snapshot."),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"schema projection")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json")))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"path-string"},"path ","[string]"),(0,l.yg)("p",null,"The source file path."),(0,l.yg)("h3",{id:"type-string"},"type ","[string]"),(0,l.yg)("p",null,"File type, supported as the following file types:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"p"},"json")),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option to tell connector how to parse data to the row you want."),(0,l.yg)("p",null,"For example:"),(0,l.yg)("p",null,"upstream data is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,l.yg)("p",null,"You can also save multiple pieces of data in one file and split them by newline:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'\n{"code":  200, "data":  "get success", "success":  true}\n{"code":  300, "data":  "get failed", "success":  false}\n\n')),(0,l.yg)("p",null,"you should assign schema as the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,l.yg)("p",null,"connector will generate data as the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"get success"),(0,l.yg)("td",{parentName:"tr",align:null},"true")))),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc"),", schema option not required, connector can find the schema of upstream data automatically."),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv"),", schema option not supported temporarily, but the subsequent features will support."),(0,l.yg)("p",null,"Now connector will treat the upstream data as the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"lines"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"The content of every line in file")))),(0,l.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,l.yg)("p",null,"The schema information of upstream data."),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nLocalFile {\n  path = "/apps/hive/demo/student"\n  type = "parquet"\n}\n\n')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nLocalFile {\n  schema {\n    fields {\n      name = string\n      age = int\n    }\n  }\n  path = "/apps/hive/demo/student"\n  type = "json"\n}\n\n')))}g.isMDXComponent=!0}}]);