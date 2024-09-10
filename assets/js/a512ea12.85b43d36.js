"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[72287],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),s=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(g.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),y=r,d=m["".concat(g,".").concat(y)]||m[y]||p[y]||l;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const l={},i="InfluxDB",o={unversionedId:"connector-v2/sink/InfluxDB",id:"connector-v2/sink/InfluxDB",title:"InfluxDB",description:"InfluxDB sink connector",source:"@site/docs/connector-v2/sink/InfluxDB.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/InfluxDB",permalink:"/docs/connector-v2/sink/InfluxDB",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/InfluxDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Apache Iceberg",permalink:"/docs/connector-v2/sink/Iceberg"},next:{title:"IoTDB",permalink:"/docs/connector-v2/sink/IoTDB"}},g={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url",id:"url",level:3},{value:"database string",id:"database-string",level:3},{value:"measurement string",id:"measurement-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"key_time string",id:"key_time-string",level:3},{value:"key_tags array",id:"key_tags-array",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"max_retries int",id:"max_retries-int",level:3},{value:"retry_backoff_multiplier_ms int",id:"retry_backoff_multiplier_ms-int",level:3},{value:"max_retry_backoff_ms int",id:"max_retry_backoff_ms-int",level:3},{value:"connect_timeout_ms long",id:"connect_timeout_ms-long",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Multiple table",id:"multiple-table",level:3},{value:"example1",id:"example1",level:4},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],u={toc:s},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"influxdb"},"InfluxDB"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"InfluxDB sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data to InfluxDB."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support multiple table write"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"measurement"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_time"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"processing time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_tags"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"exclude ",(0,r.yg)("inlineCode",{parentName:"td"},"field")," & ",(0,r.yg)("inlineCode",{parentName:"td"},"key_time"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1024")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect_timeout_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"15000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"url"},"url"),(0,r.yg)("p",null,"the url to connect to influxDB e.g."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"http://influxdb-host:8086\n")),(0,r.yg)("h3",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,"The name of ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," database"),(0,r.yg)("h3",{id:"measurement-string"},"measurement ","[string]"),(0,r.yg)("p",null,"The name of ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," measurement"),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," user username"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," user password"),(0,r.yg)("h3",{id:"key_time-string"},"key_time ","[string]"),(0,r.yg)("p",null,"Specify field-name of the ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," measurement timestamp in SeaTunnelRow. If not specified, use processing-time as timestamp"),(0,r.yg)("h3",{id:"key_tags-array"},"key_tags ","[array]"),(0,r.yg)("p",null,"Specify field-name of the ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," measurement tags in SeaTunnelRow.\nIf not specified, include all fields with ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")," measurement field"),(0,r.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"checkpoint.interval"),", the data will be flushed into the influxDB"),(0,r.yg)("h3",{id:"max_retries-int"},"max_retries ","[int]"),(0,r.yg)("p",null,"The number of retries to flush failed"),(0,r.yg)("h3",{id:"retry_backoff_multiplier_ms-int"},"retry_backoff_multiplier_ms ","[int]"),(0,r.yg)("p",null,"Using as a multiplier for generating the next delay for backoff"),(0,r.yg)("h3",{id:"max_retry_backoff_ms-int"},"max_retry_backoff_ms ","[int]"),(0,r.yg)("p",null,"The amount of time to wait before attempting to retry a request to ",(0,r.yg)("inlineCode",{parentName:"p"},"influxDB")),(0,r.yg)("h3",{id:"connect_timeout_ms-long"},"connect_timeout_ms ","[long]"),(0,r.yg)("p",null,"the timeout for connecting to InfluxDB, in milliseconds"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/connector-v2/sink-common-options"},"Sink Common Options")," for details"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    InfluxDB {\n        url = "http://influxdb-host:8086"\n        database = "test"\n        measurement = "sink"\n        key_time = "time"\n        key_tags = ["label"]\n        batch_size = 1\n    }\n}\n\n')),(0,r.yg)("h3",{id:"multiple-table"},"Multiple table"),(0,r.yg)("h4",{id:"example1"},"example1"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    \n    table-names = ["seatunnel.role","seatunnel.user","galileo.Bucket"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  InfluxDB {\n    url = "http://influxdb-host:8086"\n    database = "test"\n    measurement = "${table_name}_test"\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add InfluxDB Sink Connector")))}p.isMDXComponent=!0}}]);