"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[70688],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),y=r,d=m["".concat(g,".").concat(y)]||m[y]||u[y]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},81291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={},i="Neo4j",o={unversionedId:"connector-v2/sink/Neo4j",id:"version-2.3.7/connector-v2/sink/Neo4j",title:"Neo4j",description:"Neo4j sink connector",source:"@site/versioned_docs/version-2.3.7/connector-v2/sink/Neo4j.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Neo4j",permalink:"/docs/2.3.7/connector-v2/sink/Neo4j",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.7/connector-v2/sink/Neo4j.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"MySQL",permalink:"/docs/2.3.7/connector-v2/sink/Mysql"},next:{title:"ObsFile",permalink:"/docs/2.3.7/connector-v2/sink/ObsFile"}},g={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"uri string",id:"uri-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"max_batch_sizeInteger",id:"max_batch_sizeinteger",level:3},{value:"write_mode",id:"write_mode",level:3},{value:"bearer_token string",id:"bearer_token-string",level:3},{value:"kerberos_ticket string",id:"kerberos_ticket-string",level:3},{value:"database string",id:"database-string",level:3},{value:"query string",id:"query-string",level:3},{value:"queryParamPosition object",id:"queryparamposition-object",level:3},{value:"max_transaction_retry_time long",id:"max_transaction_retry_time-long",level:3},{value:"max_connection_timeout long",id:"max_connection_timeout-long",level:3},{value:"common options",id:"common-options",level:3},{value:"WriteOneByOneExample",id:"writeonebyoneexample",level:2},{value:"WriteBatchExample",id:"writebatchexample",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"neo4j"},"Neo4j"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Neo4j sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data to Neo4j."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"neo4j-java-driver")," version 4.4.9"),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"exactly-once"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uri"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"write_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"OneByOne")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bearer_token"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kerberos_ticket"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queryParamPosition"),(0,r.yg)("td",{parentName:"tr",align:null},"Object"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_transaction_retry_time"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_connection_timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"uri-string"},"uri ","[string]"),(0,r.yg)("p",null,"The URI of the Neo4j database. Refer to a case: ",(0,r.yg)("inlineCode",{parentName:"p"},"neo4j://localhost:7687")),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,"username of the Neo4j"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,"password of the Neo4j. required if ",(0,r.yg)("inlineCode",{parentName:"p"},"username")," is provided"),(0,r.yg)("h3",{id:"max_batch_sizeinteger"},"max_batch_size","[Integer]"),(0,r.yg)("p",null,"max_batch_size refers to the maximum number of data entries that can be written in a single transaction when writing to a database."),(0,r.yg)("h3",{id:"write_mode"},"write_mode"),(0,r.yg)("p",null,'The default value is oneByOne, or set it to "Batch" if you want to have the ability to write in batches'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cypher"},"unwind $ttt as row create (n:Label) set n.name = row.name,n.age = rw.age\n")),(0,r.yg)("p",null,'"ttt" represents a batch of data.,"ttt" can be any arbitrary string as long as it matches the configured "batch_data_variable".'),(0,r.yg)("h3",{id:"bearer_token-string"},"bearer_token ","[string]"),(0,r.yg)("p",null,"base64 encoded bearer token of the Neo4j. for Auth."),(0,r.yg)("h3",{id:"kerberos_ticket-string"},"kerberos_ticket ","[string]"),(0,r.yg)("p",null,"base64 encoded kerberos ticket of the Neo4j. for Auth."),(0,r.yg)("h3",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,"database name."),(0,r.yg)("h3",{id:"query-string"},"query ","[string]"),(0,r.yg)("p",null,"Query statement. contain parameter placeholders that are substituted with the corresponding values at runtime"),(0,r.yg)("h3",{id:"queryparamposition-object"},"queryParamPosition ","[object]"),(0,r.yg)("p",null,"position mapping information for query parameters."),(0,r.yg)("p",null,"key name is parameter placeholder name."),(0,r.yg)("p",null,"associated value is position of field in input data row."),(0,r.yg)("h3",{id:"max_transaction_retry_time-long"},"max_transaction_retry_time ","[long]"),(0,r.yg)("p",null,"maximum transaction retry time(seconds). transaction fail if exceeded"),(0,r.yg)("h3",{id:"max_connection_timeout-long"},"max_connection_timeout ","[long]"),(0,r.yg)("p",null,"The maximum amount of time to wait for a TCP connection to be established (seconds)"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.7/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.yg)("h2",{id:"writeonebyoneexample"},"WriteOneByOneExample"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n  Neo4j {\n    uri = "neo4j://localhost:7687"\n    username = "neo4j"\n    password = "1234"\n    database = "neo4j"\n\n    max_transaction_retry_time = 10\n    max_connection_timeout = 10\n\n    query = "CREATE (a:Person {name: $name, age: $age})"\n    queryParamPosition = {\n        name = 0\n        age = 1\n    }\n  }\n}\n')),(0,r.yg)("h2",{id:"writebatchexample"},"WriteBatchExample"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The unwind keyword provided by cypher supports batch writing, and the default variable for a batch of data is batch. If you write a batch write statement, then you should declare cypher:unwind $batch as row to do someting"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre"},'sink {\n  Neo4j {\n    uri = "bolt://localhost:7687"\n    username = "neo4j"\n    password = "neo4j"\n    database = "neo4j"\n    max_batch_size = 1000\n    write_mode = "BATCH"\n'))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'max_transaction_retry_time = 3\nmax_connection_timeout = 10\n\nquery = "unwind $batch as row  create(n:MyLabel) set n.name = row.name,n.age = row.age"\n')),(0,r.yg)("p",null,"  }\n}"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\n## Changelog\n\n### 2.2.0-beta 2022-09-26\n\n- Add Neo4j Sink Connector\n\n### issue ##4835\n\n- Sink supports batch write\n")))}u.isMDXComponent=!0}}]);