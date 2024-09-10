"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[17485],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(y,i(i({ref:n},p),{},{components:t})):a.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var g={};for(var o in n)hasOwnProperty.call(n,o)&&(g[o]=n[o]);g.originalType=e,g[u]="string"==typeof e?e:r,i[1]=g;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const l={},i="InfluxDB",g={unversionedId:"connector/sink/InfluxDB",id:"version-2.3.0-beta/connector/sink/InfluxDB",title:"InfluxDB",description:"InfluxDB sink connector",source:"@site/versioned_docs/version-2.3.0-beta/connector/sink/InfluxDB.md",sourceDirName:"connector/sink",slug:"/connector/sink/InfluxDB",permalink:"/docs/2.3.0-beta/connector/sink/InfluxDB",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector/sink/InfluxDB.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Iceberg",permalink:"/docs/2.3.0-beta/connector/sink/Iceberg"},next:{title:"Jdbc",permalink:"/docs/2.3.0-beta/connector/sink/Jdbc"}},o={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"server_url String",id:"server_url-string",level:3},{value:"username String",id:"username-string",level:3},{value:"password String",id:"password-string",level:3},{value:"database String",id:"database-string",level:3},{value:"measurement String",id:"measurement-string",level:3},{value:"tags List<String>",id:"tags-liststring",level:3},{value:"fields List<String>",id:"fields-liststring",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Auth",id:"auth",level:3}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"influxdb"},"InfluxDB"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"InfluxDB sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data to InfluxDB."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Spark"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: InfluxDB"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"server_url"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"measurement"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tags"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"List<String>")),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fields"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"List<String>")),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Int")),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"server_url-string"},"server_url ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.yg)("p",null,"The URL of InfluxDB Server."),(0,r.yg)("h3",{id:"username-string"},"username ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.yg)("p",null,"The username of InfluxDB Server."),(0,r.yg)("h3",{id:"password-string"},"password ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.yg)("p",null,"The password of InfluxDB Server."),(0,r.yg)("h3",{id:"database-string"},"database ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.yg)("p",null,"The database name in InfluxDB."),(0,r.yg)("h3",{id:"measurement-string"},"measurement ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,r.yg)("p",null,"The Measurement name in InfluxDB."),(0,r.yg)("h3",{id:"tags-liststring"},"tags ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"List<String>"),"]"),(0,r.yg)("p",null,"The list of Tag in InfluxDB."),(0,r.yg)("h3",{id:"fields-liststring"},"fields ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"List<String>"),"]"),(0,r.yg)("p",null,"The list of Field in InfluxDB."),(0,r.yg)("h3",{id:"parallelism-int"},"parallelism ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,r.yg)("p",null,"The parallelism of an individual operator, for InfluxDbSink"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("h3",{id:"simple"},"Simple"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'InfluxDbSink {\n  server_url = "http://127.0.0.1:8086/"\n  database = "influxdb"\n  measurement = "m"\n  tags = ["country", "city"]\n  fields = ["count"]\n}\n')),(0,r.yg)("h3",{id:"auth"},"Auth"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'InfluxDbSink {\n  server_url = "http://127.0.0.1:8086/"\n  username = "admin"\n  password = "password"\n  database = "influxdb"\n  measurement = "m"\n  tags = ["country", "city"]\n  fields = ["count"]\n}\n')))}d.isMDXComponent=!0}}]);