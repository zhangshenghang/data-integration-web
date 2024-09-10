"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[80026],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),g=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=g(t),m=a,y=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var g=2;g<l;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=t(58168),a=(t(96540),t(15680));const l={},i="InfluxDb",o={unversionedId:"connector/source/InfluxDb",id:"version-2.2.0-beta/connector/source/InfluxDb",title:"InfluxDb",description:"InfluxDb source connector",source:"@site/versioned_docs/version-2.2.0-beta/connector/source/InfluxDb.md",sourceDirName:"connector/source",slug:"/connector/source/InfluxDb",permalink:"/zh-CN/docs/2.2.0-beta/connector/source/InfluxDb",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector/source/InfluxDb.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Iceberg",permalink:"/zh-CN/docs/2.2.0-beta/connector/source/Iceberg"},next:{title:"Jdbc",permalink:"/zh-CN/docs/2.2.0-beta/connector/source/Jdbc"}},u={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"server_url String",id:"server_url-string",level:3},{value:"username String",id:"username-string",level:3},{value:"password String",id:"password-string",level:3},{value:"database String",id:"database-string",level:3},{value:"measurement String",id:"measurement-string",level:3},{value:"fields List<String>",id:"fields-liststring",level:3},{value:"field_types List<String>",id:"field_types-liststring",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Auth",id:"auth",level:3}],p={toc:g},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"influxdb"},"InfluxDb"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"InfluxDb source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Read data from InfluxDB."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,a.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Spark"),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: InfluxDb"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"server_url"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"username"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"password"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"database"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"measurement"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fields"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"List<String>")),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"field_types"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"List<String>")),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Int")),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"server_url-string"},"server_url ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.yg)("p",null,"The URL of InfluxDB Server."),(0,a.yg)("h3",{id:"username-string"},"username ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.yg)("p",null,"The username of InfluxDB Server."),(0,a.yg)("h3",{id:"password-string"},"password ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.yg)("p",null,"The password of InfluxDB Server."),(0,a.yg)("h3",{id:"database-string"},"database ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.yg)("p",null,"The database name in InfluxDB."),(0,a.yg)("h3",{id:"measurement-string"},"measurement ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.yg)("p",null,"The Measurement name in InfluxDB."),(0,a.yg)("h3",{id:"fields-liststring"},"fields ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"List<String>"),"]"),(0,a.yg)("p",null,"The list of Field in InfluxDB."),(0,a.yg)("h3",{id:"field_types-liststring"},"field_types ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"List<String>"),"]"),(0,a.yg)("p",null,"The list of Field Types in InfluxDB."),(0,a.yg)("h3",{id:"parallelism-int"},"parallelism ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,a.yg)("p",null,"The parallelism of an individual operator, for InfluxDbSource."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("h3",{id:"simple"},"Simple"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'InfluxDbSource {\n  server_url = "http://127.0.0.1:8086/"\n  database = "influxdb"\n  measurement = "m"\n  fields = ["time", "temperature"]\n  field_types = ["STRING", "DOUBLE"]\n}\n')),(0,a.yg)("h3",{id:"auth"},"Auth"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'InfluxDbSource {\n  server_url = "http://127.0.0.1:8086/"\n  username = "admin"\n  password = "password"\n  database = "influxdb"\n  measurement = "m"\n  fields = ["time", "temperature"]\n  field_types = ["STRING", "DOUBLE"]\n}\n')))}d.isMDXComponent=!0}}]);