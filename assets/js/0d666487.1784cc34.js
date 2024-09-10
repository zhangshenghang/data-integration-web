"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[494],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,y=u["".concat(s,".").concat(g)]||u[g]||d[g]||l;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const l={},i="Hudi",o={unversionedId:"connector-v2/source/Hudi",id:"version-2.2.0-beta/connector-v2/source/Hudi",title:"Hudi",description:"Hudi source connector",source:"@site/versioned_docs/version-2.2.0-beta/connector-v2/source/Hudi.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Hudi",permalink:"/docs/2.2.0-beta/connector-v2/source/Hudi",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector-v2/source/Hudi.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Http",permalink:"/docs/2.2.0-beta/connector-v2/source/Http"},next:{title:"Apache Iceberg",permalink:"/docs/2.2.0-beta/connector-v2/source/Iceberg"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"table.path string",id:"tablepath-string",level:3},{value:"table.type string",id:"tabletype-string",level:3},{value:"conf.files string",id:"conffiles-string",level:3},{value:"use.kerberos boolean",id:"usekerberos-boolean",level:3},{value:"kerberos.principal string",id:"kerberosprincipal-string",level:3},{value:"kerberos.principal.file string",id:"kerberosprincipalfile-string",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hudi"},"Hudi"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Hudi source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to read data from Hudi. Currently, only supports hudi cow table and Snapshot Query with Batch Mode."),(0,a.yg)("p",null,"In order to use this connector, You must ensure your spark/flink cluster already integrated hive. The tested hive version is 2.3.9."),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch"))),(0,a.yg)("p",null,"Currently, only supports hudi cow table and Snapshot Query with Batch Mode"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"schema projection")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"table.path"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"table.type"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"conf.files"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"use.kerberos"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kerberos.principal"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kerberos.principal.file"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"tablepath-string"},"table.path ","[string]"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"table.path")," The hdfs root path of hudi table,such as 'hdfs://nameserivce/data/hudi/hudi_table/'."),(0,a.yg)("h3",{id:"tabletype-string"},"table.type ","[string]"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"table.type")," The type of hudi table. Now we only support 'cow', 'mor' is not support yet."),(0,a.yg)("h3",{id:"conffiles-string"},"conf.files ","[string]"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"conf.files")," The environment conf file path list(local path), which used to init hdfs client to read hudi table file. The example is '/home/test/hdfs-site.xml;/home/test/core-site.xml;/home/test/yarn-site.xml'."),(0,a.yg)("h3",{id:"usekerberos-boolean"},"use.kerberos ","[boolean]"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"use.kerberos")," Whether to enable Kerberos, default is false."),(0,a.yg)("h3",{id:"kerberosprincipal-string"},"kerberos.principal ","[string]"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"kerberos.principal")," When use kerberos, we should set kerberos princal such as 'test_user@xxx'."),(0,a.yg)("h3",{id:"kerberosprincipalfile-string"},"kerberos.principal.file ","[string]"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"kerberos.principal.file")," When use kerberos,  we should set kerberos princal file such as '/home/test/test_user.keytab'."),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n  Hudi {\n    table.path = "hdfs://nameserivce/data/hudi/hudi_table/"\n    table.type = "cow"\n    conf.files = "/home/test/hdfs-site.xml;/home/test/core-site.xml;/home/test/yarn-site.xml"\n    use.kerberos = true\n    kerberos.principal = "test_user@xxx"\n    kerberos.principal.file = "/home/test/test_user.keytab"\n  }\n\n}\n')))}d.isMDXComponent=!0}}]);