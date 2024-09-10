"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[96309],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,m=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return n?r.createElement(m,o(o({ref:t},g),{},{components:n})):r.createElement(m,o({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const l={},o="OpenMldb",i={unversionedId:"connector-v2/source/OpenMldb",id:"connector-v2/source/OpenMldb",title:"OpenMldb",description:"OpenMldb source connector",source:"@site/docs/connector-v2/source/OpenMldb.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/OpenMldb",permalink:"/zh-CN/docs/connector-v2/source/OpenMldb",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/OpenMldb.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"OneSignal",permalink:"/zh-CN/docs/connector-v2/source/OneSignal"},next:{title:"Opengauss CDC",permalink:"/zh-CN/docs/connector-v2/source/Opengauss-CDC"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"cluster_mode string",id:"cluster_mode-string",level:3},{value:"sql string",id:"sql-string",level:3},{value:"database string",id:"database-string",level:3},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"zk_host string",id:"zk_host-string",level:3},{value:"zk_path string",id:"zk_path-string",level:3},{value:"session_timeout int",id:"session_timeout-int",level:3},{value:"request_timeout int",id:"request_timeout-int",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2}],g={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"openmldb"},"OpenMldb"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"OpenMldb source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to read data from OpenMldb."),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cluster_mode"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sql"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"database"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"host"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"port"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"zk_path"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"zk_host"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"session_timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"10000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"request_timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"60000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"cluster_mode-string"},"cluster_mode ","[string]"),(0,a.yg)("p",null,"OpenMldb is or not cluster mode"),(0,a.yg)("h3",{id:"sql-string"},"sql ","[string]"),(0,a.yg)("p",null,"Sql statement"),(0,a.yg)("h3",{id:"database-string"},"database ","[string]"),(0,a.yg)("p",null,"Database name"),(0,a.yg)("h3",{id:"host-string"},"host ","[string]"),(0,a.yg)("p",null,"OpenMldb host, only supported on OpenMldb single mode"),(0,a.yg)("h3",{id:"port-int"},"port ","[int]"),(0,a.yg)("p",null,"OpenMldb port, only supported on OpenMldb single mode"),(0,a.yg)("h3",{id:"zk_host-string"},"zk_host ","[string]"),(0,a.yg)("p",null,"Zookeeper host, only supported on OpenMldb cluster mode"),(0,a.yg)("h3",{id:"zk_path-string"},"zk_path ","[string]"),(0,a.yg)("p",null,"Zookeeper path, only supported on OpenMldb cluster mode"),(0,a.yg)("h3",{id:"session_timeout-int"},"session_timeout ","[int]"),(0,a.yg)("p",null,"OpenMldb session timeout(ms), default 60000"),(0,a.yg)("h3",{id:"request_timeout-int"},"request_timeout ","[int]"),(0,a.yg)("p",null,"OpenMldb request timeout(ms), default 10000"),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Source plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"../source-common-options.md"},"Source Common Options")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  OpenMldb {\n    host = "172.17.0.2"\n    port = 6527\n    sql = "select * from demo_table1"\n    database = "demo_db"\n    cluster_mode = false\n  }\n\n')))}d.isMDXComponent=!0}}]);