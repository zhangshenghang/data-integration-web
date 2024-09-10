"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[96424],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(y,i(i({ref:t},g),{},{components:a})):n.createElement(y,i({ref:t},g))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},52546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={},i="StarRocks",o={unversionedId:"connector-v2/sink/StarRocks",id:"version-2.3.2/connector-v2/sink/StarRocks",title:"StarRocks",description:"StarRocks sink connector",source:"@site/versioned_docs/version-2.3.2/connector-v2/sink/StarRocks.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/StarRocks",permalink:"/zh-CN/docs/2.3.2/connector-v2/sink/StarRocks",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/connector-v2/sink/StarRocks.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"Socket",permalink:"/zh-CN/docs/2.3.2/connector-v2/sink/Socket"},next:{title:"TDengine",permalink:"/zh-CN/docs/2.3.2/connector-v2/sink/TDengine"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"node_urls list",id:"node_urls-list",level:3},{value:"base-url string",id:"base-url-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"labelPrefix string",id:"labelprefix-string",level:3},{value:"batch_max_rows long",id:"batch_max_rows-long",level:3},{value:"batch_max_bytes int",id:"batch_max_bytes-int",level:3},{value:"batch_interval_ms int",id:"batch_interval_ms-int",level:3},{value:"max_retries int",id:"max_retries-int",level:3},{value:"retry_backoff_multiplier_ms int",id:"retry_backoff_multiplier_ms-int",level:3},{value:"max_retry_backoff_ms int",id:"max_retry_backoff_ms-int",level:3},{value:"enable_upsert_delete boolean",id:"enable_upsert_delete-boolean",level:3},{value:"save_mode_create_template string",id:"save_mode_create_template-string",level:3},{value:"starrocks.config  map",id:"starrocksconfig--map",level:3},{value:"Supported import data formats",id:"supported-import-data-formats",level:4},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],g={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"starrocks"},"StarRocks"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"StarRocks sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to send data to StarRocks. Both support streaming and batch mode.\nThe internal implementation of StarRocks sink connector is cached and imported by stream load in batches."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.2/concept/connector-v2-features"},"cdc"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_urls"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"base-url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"labelPrefix"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_max_rows"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1024")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_max_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"5 ",(0,r.yg)("em",{parentName:"td"}," 1024 ")," 1024")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retry_backoff_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_upsert_delete"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"save_mode_create_template"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"see below")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"starrocks.config"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"node_urls-list"},"node_urls ","[list]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," cluster address, the format is ",(0,r.yg)("inlineCode",{parentName:"p"},'["fe_ip:fe_http_port", ...]')),(0,r.yg)("h3",{id:"base-url-string"},"base-url ","[string]"),(0,r.yg)("p",null,"The JDBC URL like ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost:9030/")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost:9030")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost:9030/db")),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," user username"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")," user password"),(0,r.yg)("h3",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,"The name of StarRocks database"),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"The name of StarRocks table, If not set, the table name will be the name of the upstream table"),(0,r.yg)("h3",{id:"labelprefix-string"},"labelPrefix ","[string]"),(0,r.yg)("p",null,"The prefix of StarRocks stream load label"),(0,r.yg)("h3",{id:"batch_max_rows-long"},"batch_max_rows ","[long]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_rows")," or the byte size of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_bytes")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the StarRocks"),(0,r.yg)("h3",{id:"batch_max_bytes-int"},"batch_max_bytes ","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_rows")," or the byte size of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_bytes")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the StarRocks"),(0,r.yg)("h3",{id:"batch_interval_ms-int"},"batch_interval_ms ","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_rows")," or the byte size of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_bytes")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the StarRocks"),(0,r.yg)("h3",{id:"max_retries-int"},"max_retries ","[int]"),(0,r.yg)("p",null,"The number of retries to flush failed"),(0,r.yg)("h3",{id:"retry_backoff_multiplier_ms-int"},"retry_backoff_multiplier_ms ","[int]"),(0,r.yg)("p",null,"Using as a multiplier for generating the next delay for backoff"),(0,r.yg)("h3",{id:"max_retry_backoff_ms-int"},"max_retry_backoff_ms ","[int]"),(0,r.yg)("p",null,"The amount of time to wait before attempting to retry a request to ",(0,r.yg)("inlineCode",{parentName:"p"},"StarRocks")),(0,r.yg)("h3",{id:"enable_upsert_delete-boolean"},"enable_upsert_delete ","[boolean]"),(0,r.yg)("p",null,"Whether to enable upsert/delete, only supports PrimaryKey model."),(0,r.yg)("h3",{id:"save_mode_create_template-string"},"save_mode_create_template ","[string]"),(0,r.yg)("p",null,"We use templates to automatically create starrocks tables,\nwhich will create corresponding table creation statements based on the type of upstream data and schema type,\nand the default template can be modified according to the situation. Only work on multi-table mode at now."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS `${database}`.`${table_name}`\n(\n    ${rowtype_fields}\n) ENGINE = OLAP DISTRIBUTED BY HASH (${rowtype_primary_key})\n    PROPERTIES\n(\n    "replication_num" = "1"\n);\n')),(0,r.yg)("p",null,"If a custom field is filled in the template, such as adding an ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," field"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS `${database}`.`${table_name}`\n(   \n    id,\n    ${rowtype_fields}\n) ENGINE = OLAP DISTRIBUTED BY HASH (${rowtype_primary_key})\n    PROPERTIES\n(\n    "replication_num" = "1"\n);\n')),(0,r.yg)("p",null,"The connector will automatically obtain the corresponding type from the upstream to complete the filling,\nand remove the id field from ",(0,r.yg)("inlineCode",{parentName:"p"},"rowtype_fields"),". This method can be used to customize the modification of field types and attributes."),(0,r.yg)("p",null,"You can use the following placeholders"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"database: Used to get the database in the upstream schema"),(0,r.yg)("li",{parentName:"ul"},"table_name: Used to get the table name in the upstream schema"),(0,r.yg)("li",{parentName:"ul"},"rowtype_fields: Used to get all the fields in the upstream schema, we will automatically map to the field\ndescription of StarRocks"),(0,r.yg)("li",{parentName:"ul"},"rowtype_primary_key: Used to get the primary key in the upstream schema (maybe a list)")),(0,r.yg)("h3",{id:"starrocksconfig--map"},"starrocks.config  ","[map]"),(0,r.yg)("p",null,"The parameter of the stream load ",(0,r.yg)("inlineCode",{parentName:"p"},"data_desc")),(0,r.yg)("h4",{id:"supported-import-data-formats"},"Supported import data formats"),(0,r.yg)("p",null,"The supported formats include CSV and JSON. Default value: JSON"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"Use JSON format to import data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    batch_max_rows = 10\n    starrocks.config = {\n      format = "JSON"\n      strip_outer_array = true\n    }\n  }\n}\n\n')),(0,r.yg)("p",null,"Use CSV format to import data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    batch_max_rows = 10\n    starrocks.config = {\n      format = "CSV"\n      column_separator = "\\\\x01"\n      row_delimiter = "\\\\x02"\n    }\n  }\n}\n')),(0,r.yg)("p",null,"Support write cdc changelog event(INSERT/UPDATE/DELETE)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    ...\n    \n    // Support upsert/delete event synchronization (enable_upsert_delete=true), only supports PrimaryKey model.\n    enable_upsert_delete = true\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add StarRocks Sink Connector"),(0,r.yg)("li",{parentName:"ul"},"[Improve]"," Change Connector Custom Config Prefix To Map ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3719"},"3719")),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support write cdc changelog event(INSERT/UPDATE/DELETE) ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3865"},"3865"))))}d.isMDXComponent=!0}}]);