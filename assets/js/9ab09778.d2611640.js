"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[51250],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(n),u=r,y=g["".concat(s,".").concat(u)]||g[u]||m[u]||l;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},i="Doris",o={unversionedId:"connector-v2/sink/Doris",id:"connector-v2/sink/Doris",title:"Doris",description:"Doris sink connector",source:"@site/docs/connector-v2/sink/Doris.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Doris",permalink:"/docs/connector-v2/sink/Doris",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Doris.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DingTalk",permalink:"/docs/connector-v2/sink/DingTalk"},next:{title:"Druid",permalink:"/docs/connector-v2/sink/Druid"}},s={},p=[{value:"Support Doris Version",id:"support-doris-version",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"schema_save_modeEnum",id:"schema_save_modeenum",level:3},{value:"data_save_modeEnum",id:"data_save_modeenum",level:3},{value:"save_mode_create_template",id:"save_mode_create_template",level:3},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Supported import data formats",id:"supported-import-data-formats",level:4},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"CDC(Change Data Capture) Event:",id:"cdcchange-data-capture-event",level:3},{value:"Use JSON format to import data",id:"use-json-format-to-import-data",level:3},{value:"Use CSV format to import data",id:"use-csv-format-to-import-data",level:3},{value:"Multiple table",id:"multiple-table",level:3},{value:"example1",id:"example1",level:4},{value:"example2",id:"example2",level:4},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"Next version",id:"next-version",level:3}],d={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"doris"},"Doris"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Doris sink connector")),(0,r.yg)("h2",{id:"support-doris-version"},"Support Doris Version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"exactly-once & cdc supported  ",(0,r.yg)("inlineCode",{parentName:"li"},"Doris version is >= 1.1.x")),(0,r.yg)("li",{parentName:"ul"},"Array data type supported  ",(0,r.yg)("inlineCode",{parentName:"li"},"Doris version is >= 1.2.x")),(0,r.yg)("li",{parentName:"ul"},"Map data type will be support in ",(0,r.yg)("inlineCode",{parentName:"li"},"Doris version is 2.x"))),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"cdc")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support multiple table write"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to send data to Doris. Both support streaming and batch mode.\nThe internal implementation of Doris sink connector is cached and imported by stream load in batches."),(0,r.yg)("h2",{id:"sink-options"},"Sink Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Doris")," cluster fenodes address, the format is ",(0,r.yg)("inlineCode",{parentName:"td"},'"fe_ip:fe_http_port, ..."'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query-port"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"9030"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Doris")," Fenodes query_port")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Doris")," user username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Doris")," user password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The database name of ",(0,r.yg)("inlineCode",{parentName:"td"},"Doris")," table, use ",(0,r.yg)("inlineCode",{parentName:"td"},"${database_name}")," to represent the upstream table name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The table name of ",(0,r.yg)("inlineCode",{parentName:"td"},"Doris")," table,  use ",(0,r.yg)("inlineCode",{parentName:"td"},"${table_name}")," to represent the upstream table name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table.identifier"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of ",(0,r.yg)("inlineCode",{parentName:"td"},"Doris")," table, it will deprecate after version 2.3.5, please use ",(0,r.yg)("inlineCode",{parentName:"td"},"database")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"table")," instead.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.label-prefix"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The label prefix used by stream load imports. In the 2pc scenario, global uniqueness is required to ensure the EOS semantics of SeaTunnel.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.enable-2pc"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable two-phase commit (2pc), the default is false. For two-phase commit, please refer to ",(0,r.yg)("a",{parentName:"td",href:"https://doris.apache.org/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/Load/STREAM-LOAD/"},"here"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable deletion. This option requires Doris table to enable batch delete function (0.15+ version is enabled by default), and only supports Unique model. you can get more detail at this ",(0,r.yg)("a",{parentName:"td",href:"https://doris.apache.org/docs/dev/data-operate/delete/batch-delete-manual/"},"link"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.check-interval"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"check exception with the interval while loading")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"the max retry times if writing records to database failed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"256 * 1024"),(0,r.yg)("td",{parentName:"tr",align:null},"the buffer size to cache data for stream load.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.buffer-count"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"the buffer count to cache data for stream load.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"the batch size of the write to doris each http request, when the row reaches the size or checkpoint is executed, the data of cached will write to server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"needs_unsupported_type_casting"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable the unsupported type casting, such as Decimal64 to Double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,r.yg)("td",{parentName:"tr",align:null},"the schema save mode, please refer to ",(0,r.yg)("inlineCode",{parentName:"td"},"schema_save_mode")," below")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,r.yg)("td",{parentName:"tr",align:null},"the data save mode, please refer to ",(0,r.yg)("inlineCode",{parentName:"td"},"data_save_mode")," below")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"save_mode_create_template"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"see below"),(0,r.yg)("td",{parentName:"tr",align:null},"see below")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_sql"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"When data_save_mode selects CUSTOM_PROCESSING, you should fill in the CUSTOM_SQL parameter. This parameter usually fills in a SQL that can be executed. SQL will be executed before synchronization tasks.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.config"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"This option is used to support operations such as ",(0,r.yg)("inlineCode",{parentName:"td"},"insert"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"delete"),", and ",(0,r.yg)("inlineCode",{parentName:"td"},"update")," when automatically generate sql,and supported formats.")))),(0,r.yg)("h3",{id:"schema_save_modeenum"},"schema_save_mode","[Enum]"),(0,r.yg)("p",null,"Before the synchronous task is turned on, different treatment schemes are selected for the existing surface structure of the target side.",(0,r.yg)("br",{parentName:"p"}),"\n","Option introduction\uff1a",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"RECREATE_SCHEMA")," \uff1aWill create when the table does not exist, delete and rebuild when the table is saved",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE_SCHEMA_WHEN_NOT_EXIST")," \uff1aWill Created when the table does not exist, skipped when the table is saved",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_SCHEMA_NOT_EXIST")," \uff1aError will be reported when the table does not exist",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"IGNORE")," \uff1aIgnore the treatment of the table"),(0,r.yg)("h3",{id:"data_save_modeenum"},"data_save_mode","[Enum]"),(0,r.yg)("p",null,"Before the synchronous task is turned on, different processing schemes are selected for data existing data on the target side.",(0,r.yg)("br",{parentName:"p"}),"\n","Option introduction\uff1a",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"DROP_DATA"),"\uff1a Preserve database structure and delete data",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"APPEND_DATA"),"\uff1aPreserve database structure, preserve data",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"CUSTOM_PROCESSING"),"\uff1aUser defined processing",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_DATA_EXISTS"),"\uff1aWhen there is data, an error is reported"),(0,r.yg)("h3",{id:"save_mode_create_template"},"save_mode_create_template"),(0,r.yg)("p",null,"We use templates to automatically create Doris tables,\nwhich will create corresponding table creation statements based on the type of upstream data and schema type,\nand the default template can be modified according to the situation."),(0,r.yg)("p",null,"Default template:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS `${database}`.`${table}` (\n${rowtype_primary_key},\n${rowtype_fields}\n) ENGINE=OLAP\n UNIQUE KEY (${rowtype_primary_key})\nDISTRIBUTED BY HASH (${rowtype_primary_key})\n PROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2",\n"disable_auto_compaction" = "false"\n)\n')),(0,r.yg)("p",null,"If a custom field is filled in the template, such as adding an ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," field"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS `${database}`.`${table}`\n(   \n    id,\n    ${rowtype_fields}\n) ENGINE = OLAP UNIQUE KEY (${rowtype_primary_key})\n    DISTRIBUTED BY HASH (${rowtype_primary_key})\n    PROPERTIES\n(\n    "replication_num" = "1"\n);\n')),(0,r.yg)("p",null,"The connector will automatically obtain the corresponding type from the upstream to complete the filling,\nand remove the id field from ",(0,r.yg)("inlineCode",{parentName:"p"},"rowtype_fields"),". This method can be used to customize the modification of field types and attributes."),(0,r.yg)("p",null,"You can use the following placeholders"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"database: Used to get the database in the upstream schema"),(0,r.yg)("li",{parentName:"ul"},"table_name: Used to get the table name in the upstream schema"),(0,r.yg)("li",{parentName:"ul"},"rowtype_fields: Used to get all the fields in the upstream schema, we will automatically map to the field\ndescription of Doris"),(0,r.yg)("li",{parentName:"ul"},"rowtype_primary_key: Used to get the primary key in the upstream schema (maybe a list)"),(0,r.yg)("li",{parentName:"ul"},"rowtype_unique_key: Used to get the unique key in the upstream schema (maybe a list)"),(0,r.yg)("li",{parentName:"ul"},"rowtype_duplicate_key: Used to get the duplicate key in the upstream schema (only for doris source, maybe a list)")),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT",(0,r.yg)("br",null),"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT",(0,r.yg)("br",null),"SMALLINT",(0,r.yg)("br",null),"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT",(0,r.yg)("br",null),"INT",(0,r.yg)("br",null),"SMALLINT",(0,r.yg)("br",null),"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT",(0,r.yg)("br",null),"INT",(0,r.yg)("br",null),"SMALLINT",(0,r.yg)("br",null),"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,r.yg)("br",null),"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL",(0,r.yg)("br",null),"DOUBLE",(0,r.yg)("br",null),"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JSON"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"HLL"),(0,r.yg)("td",{parentName:"tr",align:null},"Not supported yet")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BITMAP"),(0,r.yg)("td",{parentName:"tr",align:null},"Not supported yet")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"QUANTILE_STATE"),(0,r.yg)("td",{parentName:"tr",align:null},"Not supported yet")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT"),(0,r.yg)("td",{parentName:"tr",align:null},"Not supported yet")))),(0,r.yg)("h4",{id:"supported-import-data-formats"},"Supported import data formats"),(0,r.yg)("p",null,"The supported formats include CSV and JSON"),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The following example describes writing multiple data types to Doris, and users need to create corresponding tables downstream")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval = 10000\n}\n\nsource {\n  FakeSource {\n    row.num = 10\n    map.size = 10\n    array.size = 10\n    bytes.length = 10\n    string.length = 10\n    schema = {\n      fields {\n        c_map = "map<string, array<int>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(16, 1)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n    }\n}\n\nsink {\n  Doris {\n    fenodes = "doris_cdc_e2e:8030"\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    sink.label-prefix = "test-cdc"\n    sink.enable-2pc = "true"\n    sink.enable-delete = "true"\n    doris.config {\n      format = "json"\n      read_json_by_line = "true"\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"cdcchange-data-capture-event"},"CDC(Change Data Capture) Event:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This example defines a SeaTunnel synchronization task that automatically generates data through FakeSource and sends it to Doris Sink,FakeSource simulates CDC data with schema, score (int type),Doris needs to create a table sink named test.e2e_table_sink and a corresponding table for it.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval = 10000\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        pk_id = bigint\n        name = string\n        score = int\n        sex = boolean\n        number = tinyint\n        height = float\n        sight = double\n        create_time = date\n        update_time = timestamp\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [1, "A", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      },\n      {\n        kind = INSERT\n        fields = [2, "B", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      },\n      {\n        kind = UPDATE_BEFORE\n        fields = [1, "A", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      },\n      {\n        kind = UPDATE_AFTER\n        fields = [1, "A_1", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      },\n      {\n        kind = DELETE\n        fields = [2, "B", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      }\n    ]\n  }\n}\n\nsink {\n  Doris {\n    fenodes = "doris_cdc_e2e:8030"\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    sink.label-prefix = "test-cdc"\n    sink.enable-2pc = "true"\n    sink.enable-delete = "true"\n    doris.config {\n      format = "json"\n      read_json_by_line = "true"\n    }\n  }\n}\n\n')),(0,r.yg)("h3",{id:"use-json-format-to-import-data"},"Use JSON format to import data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        fenodes = "e2e_dorisdb:8030"\n        username = root\n        password = ""\n        database = "test"\n        table = "e2e_table_sink"\n        sink.enable-2pc = "true"\n        sink.label-prefix = "test_json"\n        doris.config = {\n            format="json"\n            read_json_by_line="true"\n        }\n    }\n}\n\n')),(0,r.yg)("h3",{id:"use-csv-format-to-import-data"},"Use CSV format to import data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        fenodes = "e2e_dorisdb:8030"\n        username = root\n        password = ""\n        database = "test"\n        table = "e2e_table_sink"\n        sink.enable-2pc = "true"\n        sink.label-prefix = "test_csv"\n        doris.config = {\n          format = "csv"\n          column_separator = ","\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"multiple-table"},"Multiple table"),(0,r.yg)("h4",{id:"example1"},"example1"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    \n    table-names = ["seatunnel.role","seatunnel.user","galileo.Bucket"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Doris {\n    fenodes = "doris_cdc_e2e:8030"\n    username = root\n    password = ""\n    database = "${database_name}_test"\n    table = "${table_name}_test"\n    sink.label-prefix = "test-cdc"\n    sink.enable-2pc = "true"\n    sink.enable-delete = "true"\n    doris.config {\n      format = "json"\n      read_json_by_line = "true"\n    }\n  }\n}\n')),(0,r.yg)("h4",{id:"example2"},"example2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Jdbc {\n    driver = oracle.jdbc.driver.OracleDriver\n    url = "jdbc:oracle:thin:@localhost:1521/XE"\n    user = testUser\n    password = testPassword\n\n    table_list = [\n      {\n        table_path = "TESTSCHEMA.TABLE_1"\n      },\n      {\n        table_path = "TESTSCHEMA.TABLE_2"\n      }\n    ]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Doris {\n    fenodes = "doris_cdc_e2e:8030"\n    username = root\n    password = ""\n    database = "${schema_name}_test"\n    table = "${table_name}_test"\n    sink.label-prefix = "test-cdc"\n    sink.enable-2pc = "true"\n    sink.enable-delete = "true"\n    doris.config {\n      format = "json"\n      read_json_by_line = "true"\n    }\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Doris Sink Connector")),(0,r.yg)("h3",{id:"next-version"},"Next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"[Improve]"," Change Doris Config Prefix ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/pull/3856"},"3856"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"[Improve]"," Refactor some Doris Sink code as well as support 2pc and cdc ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/pull/4235"},"4235")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"PR 4235 is an incompatible modification to PR 3856. Please refer to PR 4235 to use the new Doris connector")))}m.isMDXComponent=!0}}]);