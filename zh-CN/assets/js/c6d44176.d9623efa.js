"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[67866],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>s});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,s=u["".concat(p,".").concat(m)]||u[m]||y[m]||r;return n?a.createElement(s,i(i({ref:t},g),{},{components:n})):a.createElement(s,i({ref:t},g))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(58168),l=(n(96540),n(15680));const r={},i="SelectDB Cloud",o={unversionedId:"connector-v2/sink/SelectDB-Cloud",id:"connector-v2/sink/SelectDB-Cloud",title:"SelectDB Cloud",description:"SelectDB Cloud sink connector",source:"@site/docs/connector-v2/sink/SelectDB-Cloud.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/SelectDB-Cloud",permalink:"/zh-CN/docs/connector-v2/sink/SelectDB-Cloud",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/SelectDB-Cloud.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"S3File",permalink:"/zh-CN/docs/connector-v2/sink/S3File"},next:{title:"Sentry",permalink:"/zh-CN/docs/connector-v2/sink/Sentry"}},p={},d=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Supported import data formats",id:"supported-import-data-formats",level:4},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Use JSON format to import data",id:"use-json-format-to-import-data",level:3},{value:"Use CSV format to import data",id:"use-csv-format-to-import-data",level:3}],g={toc:d},u="wrapper";function y(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"selectdb-cloud"},"SelectDB Cloud"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"SelectDB Cloud sink connector")),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"key-features"},"Key Features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"cdc"))),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Used to send data to SelectDB Cloud. Both support streaming and batch mode.\nThe internal implementation of SelectDB Cloud sink connector upload after batch caching and commit the CopyInto sql to load data into the table."),(0,l.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Version Supported"),(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"supported  ",(0,l.yg)("inlineCode",{parentName:"li"},"SelectDB Cloud version is >= 2.2.x")))),(0,l.yg)("h2",{id:"sink-options"},"Sink Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"load-url"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"SelectDB Cloud")," warehouse http address, the format is ",(0,l.yg)("inlineCode",{parentName:"td"},"warehouse_ip:http_port"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"jdbc-url"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"SelectDB Cloud")," warehouse jdbc address, the format is ",(0,l.yg)("inlineCode",{parentName:"td"},"warehouse_ip:mysql_port"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cluster-name"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"SelectDB Cloud")," cluster name")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"SelectDB Cloud")," user username")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"SelectDB Cloud")," user password")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.enable-2pc"),(0,l.yg)("td",{parentName:"tr",align:null},"bool"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to enable two-phase commit (2pc), the default is true, to ensure Exactly-Once semantics. SelectDB uses cache files to load data. When the amount of data is large, cached data may become invalid (the default expiration time is 1 hour). If you encounter a large amount of data write loss, please configure sink.enable-2pc to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table.identifier"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The name of ",(0,l.yg)("inlineCode",{parentName:"td"},"SelectDB Cloud")," table, the format is ",(0,l.yg)("inlineCode",{parentName:"td"},"database.table"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,l.yg)("td",{parentName:"tr",align:null},"bool"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to enable deletion. This option requires SelectDB Cloud table to enable batch delete function, and only supports Unique model.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"the max retry times if writing records to database failed")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"10 ",(0,l.yg)("em",{parentName:"td"}," 1024 ")," 1024 (1MB)"),(0,l.yg)("td",{parentName:"tr",align:null},"the buffer size to cache data for stream load.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-count"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"10000"),(0,l.yg)("td",{parentName:"tr",align:null},"the buffer count to cache data for stream load.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"selectdb.config"),(0,l.yg)("td",{parentName:"tr",align:null},"map"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"This option is used to support operations such as ",(0,l.yg)("inlineCode",{parentName:"td"},"insert"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"delete"),", and ",(0,l.yg)("inlineCode",{parentName:"td"},"update")," when automatically generate sql,and supported formats.")))),(0,l.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"SelectDB Cloud Data type"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT",(0,l.yg)("br",null),"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT",(0,l.yg)("br",null),"SMALLINT",(0,l.yg)("br",null),"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT",(0,l.yg)("br",null),"INT",(0,l.yg)("br",null),"SMALLINT",(0,l.yg)("br",null),"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT",(0,l.yg)("br",null),"INT",(0,l.yg)("br",null),"SMALLINT",(0,l.yg)("br",null),"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,l.yg)("br",null),"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL",(0,l.yg)("br",null),"DOUBLE",(0,l.yg)("br",null),"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"MAP"),(0,l.yg)("td",{parentName:"tr",align:null},"MAP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"JSON"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"HLL"),(0,l.yg)("td",{parentName:"tr",align:null},"Not supported yet")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BITMAP"),(0,l.yg)("td",{parentName:"tr",align:null},"Not supported yet")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"QUANTILE_STATE"),(0,l.yg)("td",{parentName:"tr",align:null},"Not supported yet")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRUCT"),(0,l.yg)("td",{parentName:"tr",align:null},"Not supported yet")))),(0,l.yg)("h4",{id:"supported-import-data-formats"},"Supported import data formats"),(0,l.yg)("p",null,"The supported formats include CSV and JSON"),(0,l.yg)("h2",{id:"task-example"},"Task Example"),(0,l.yg)("h3",{id:"simple"},"Simple:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"The following example describes writing multiple data types to SelectDBCloud, and users need to create corresponding tables downstream")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval = 10000\n}\n\nsource {\n  FakeSource {\n    row.num = 10\n    map.size = 10\n    array.size = 10\n    bytes.length = 10\n    string.length = 10\n    schema = {\n      fields {\n        c_map = "map<string, array<int>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(16, 1)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n    }\n}\n\nsink {\n  SelectDBCloud {\n    load-url = "warehouse_ip:http_port"\n    jdbc-url = "warehouse_ip:mysql_port"\n    cluster-name = "Cluster"\n    table.identifier = "test.test"\n    username = "admin"\n    password = "******"\n    selectdb.config {\n        file.type = "json"\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"use-json-format-to-import-data"},"Use JSON format to import data"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n  SelectDBCloud {\n    load-url = "warehouse_ip:http_port"\n    jdbc-url = "warehouse_ip:mysql_port"\n    cluster-name = "Cluster"\n    table.identifier = "test.test"\n    username = "admin"\n    password = "******"\n    selectdb.config {\n        file.type = "json"\n    }\n  }\n}\n\n')),(0,l.yg)("h3",{id:"use-csv-format-to-import-data"},"Use CSV format to import data"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n  SelectDBCloud {\n    load-url = "warehouse_ip:http_port"\n    jdbc-url = "warehouse_ip:mysql_port"\n    cluster-name = "Cluster"\n    table.identifier = "test.test"\n    username = "admin"\n    password = "******"\n    selectdb.config {\n        file.type = "csv"\n        file.column_separator = "," \n        file.line_delimiter = "\\n" \n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);