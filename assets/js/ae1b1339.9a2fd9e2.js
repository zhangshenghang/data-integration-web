"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[20108],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>d});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=l,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(d,i(i({ref:t},g),{},{components:a})):n.createElement(d,i({ref:t},g))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(58168),l=(a(96540),a(15680));const r={},i="Apache Iceberg",o={unversionedId:"connector-v2/source/Iceberg",id:"version-2.3.0/connector-v2/source/Iceberg",title:"Apache Iceberg",description:"Apache Iceberg source connector",source:"@site/versioned_docs/version-2.3.0/connector-v2/source/Iceberg.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Iceberg",permalink:"/docs/2.3.0/connector-v2/source/Iceberg",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0/connector-v2/source/Iceberg.md",tags:[],version:"2.3.0",frontMatter:{},sidebar:"docs",previous:{title:"Hudi",permalink:"/docs/2.3.0/connector-v2/source/Hudi"},next:{title:"InfluxDB",permalink:"/docs/2.3.0/connector-v2/source/InfluxDB"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"catalog_name string",id:"catalog_name-string",level:3},{value:"catalog_type string",id:"catalog_type-string",level:3},{value:"uri string",id:"uri-string",level:3},{value:"warehouse string",id:"warehouse-string",level:3},{value:"namespace string",id:"namespace-string",level:3},{value:"table string",id:"table-string",level:3},{value:"case_sensitive boolean",id:"case_sensitive-boolean",level:3},{value:"fields array",id:"fields-array",level:3},{value:"start_snapshot_id long",id:"start_snapshot_id-long",level:3},{value:"start_snapshot_timestamp long",id:"start_snapshot_timestamp-long",level:3},{value:"end_snapshot_id long",id:"end_snapshot_id-long",level:3},{value:"use_snapshot_id long",id:"use_snapshot_id-long",level:3},{value:"use_snapshot_timestamp long",id:"use_snapshot_timestamp-long",level:3},{value:"stream_scan_strategy enum",id:"stream_scan_strategy-enum",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3}],g={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(c,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"apache-iceberg"},"Apache Iceberg"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Apache Iceberg source connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Source connector for Apache Iceberg. It can support batch and stream mode."),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.0/concept/connector-v2-features"},"batch"))),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.0/concept/connector-v2-features"},"stream"))),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.0/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.0/concept/connector-v2-features"},"schema projection"))),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.0/concept/connector-v2-features"},"parallelism"))),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.0/concept/connector-v2-features"},"support user-defined split"))),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","data format"),(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","avro"))),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","iceberg catalog"),(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","hadoop(2.7.1 , 2.7.5 , 3.1.3)"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","hive(2.3.9 , 3.1.2)")))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"catalog_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"catalog_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"uri"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"warehouse"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"namespace"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"case_sensitive"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"start_snapshot_timestamp"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"start_snapshot_id"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"end_snapshot_id"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"use_snapshot_id"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"use_snapshot_timestamp"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"stream_scan_strategy"),(0,l.yg)("td",{parentName:"tr",align:null},"enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"FROM_LATEST_SNAPSHOT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"catalog_name-string"},"catalog_name ","[string]"),(0,l.yg)("p",null,"User-specified catalog name."),(0,l.yg)("h3",{id:"catalog_type-string"},"catalog_type ","[string]"),(0,l.yg)("p",null,"The optional values are:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"hive: The hive metastore catalog."),(0,l.yg)("li",{parentName:"ul"},"hadoop: The hadoop catalog.")),(0,l.yg)("h3",{id:"uri-string"},"uri ","[string]"),(0,l.yg)("p",null,"The Hive metastore\u2019s thrift URI."),(0,l.yg)("h3",{id:"warehouse-string"},"warehouse ","[string]"),(0,l.yg)("p",null,"The location to store metadata files and data files."),(0,l.yg)("h3",{id:"namespace-string"},"namespace ","[string]"),(0,l.yg)("p",null,"The iceberg database name in the backend catalog."),(0,l.yg)("h3",{id:"table-string"},"table ","[string]"),(0,l.yg)("p",null,"The iceberg table name in the backend catalog."),(0,l.yg)("h3",{id:"case_sensitive-boolean"},"case_sensitive ","[boolean]"),(0,l.yg)("p",null,"If data columns where selected via fields(Collection), controls whether the match to the schema will be done with case sensitivity."),(0,l.yg)("h3",{id:"fields-array"},"fields ","[array]"),(0,l.yg)("p",null,"Use projection to select data columns and columns order."),(0,l.yg)("h3",{id:"start_snapshot_id-long"},"start_snapshot_id ","[long]"),(0,l.yg)("p",null,"Instructs this scan to look for changes starting from a particular snapshot (exclusive)."),(0,l.yg)("h3",{id:"start_snapshot_timestamp-long"},"start_snapshot_timestamp ","[long]"),(0,l.yg)("p",null,"Instructs this scan to look for changes starting from  the most recent snapshot for the table as of the timestamp. timestamp \u2013 the timestamp in millis since the Unix epoch"),(0,l.yg)("h3",{id:"end_snapshot_id-long"},"end_snapshot_id ","[long]"),(0,l.yg)("p",null,"Instructs this scan to look for changes up to a particular snapshot (inclusive)."),(0,l.yg)("h3",{id:"use_snapshot_id-long"},"use_snapshot_id ","[long]"),(0,l.yg)("p",null,"Instructs this scan to look for use the given snapshot ID."),(0,l.yg)("h3",{id:"use_snapshot_timestamp-long"},"use_snapshot_timestamp ","[long]"),(0,l.yg)("p",null,"Instructs this scan to look for use the most recent snapshot as of the given time in milliseconds. timestamp \u2013 the timestamp in millis since the Unix epoch"),(0,l.yg)("h3",{id:"stream_scan_strategy-enum"},"stream_scan_strategy ","[enum]"),(0,l.yg)("p",null,"Starting strategy for stream mode execution, Default to use ",(0,l.yg)("inlineCode",{parentName:"p"},"FROM_LATEST_SNAPSHOT")," if don\u2019t specify any value.\nThe optional values are:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"TABLE_SCAN_THEN_INCREMENTAL: Do a regular table scan then switch to the incremental mode."),(0,l.yg)("li",{parentName:"ul"},"FROM_LATEST_SNAPSHOT: Start incremental mode from the latest snapshot inclusive."),(0,l.yg)("li",{parentName:"ul"},"FROM_EARLIEST_SNAPSHOT: Start incremental mode from the earliest snapshot inclusive."),(0,l.yg)("li",{parentName:"ul"},"FROM_SNAPSHOT_ID: Start incremental mode from a snapshot with a specific id inclusive."),(0,l.yg)("li",{parentName:"ul"},"FROM_SNAPSHOT_TIMESTAMP: Start incremental mode from a snapshot with a specific timestamp inclusive.")),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.0/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("p",null,"simple"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Iceberg {\n    catalog_name = "seatunnel"\n    catalog_type = "hadoop"\n    warehouse = "hdfs://your_cluster//tmp/seatunnel/iceberg/"\n    namespace = "your_iceberg_database"\n    table = "your_iceberg_table"\n  }\n}\n')),(0,l.yg)("p",null,"Or"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Iceberg {\n    catalog_name = "seatunnel"\n    catalog_type = "hive"\n    uri = "thrift://localhost:9083"\n    warehouse = "hdfs://your_cluster//tmp/seatunnel/iceberg/"\n    namespace = "your_iceberg_database"\n    table = "your_iceberg_table"\n  }\n}\n')),(0,l.yg)("p",null,"schema projection"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Iceberg {\n    catalog_name = "seatunnel"\n    catalog_type = "hadoop"\n    warehouse = "hdfs://your_cluster/tmp/seatunnel/iceberg/"\n    namespace = "your_iceberg_database"\n    table = "your_iceberg_table"\n\n    fields {\n      f2 = "boolean"\n      f1 = "bigint"\n      f3 = "int"\n      f4 = "bigint"\n    }\n  }\n}\n')),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"In order to be compatible with different versions of Hadoop and Hive, the scope of hive-exec and flink-shaded-hadoop-2 in the project pom file are provided, so if you use the Flink engine, first you may need to add the following Jar packages to <FLINK_HOME>/lib directory, if you are using the Spark engine and integrated with Hadoop, then you do not need to add the following Jar packages.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"flink-shaded-hadoop-x-xxx.jar\nhive-exec-xxx.jar\nlibfb303-xxx.jar\n")),(0,l.yg)("p",null,"Some versions of the hive-exec package do not have libfb303-xxx.jar, so you also need to manually import the Jar package. "),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add Iceberg Source Connector")),(0,l.yg)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Feature]"," Support Hadoop3.x (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3046"},"3046"),")")))}u.isMDXComponent=!0}}]);