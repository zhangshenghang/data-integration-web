"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[16077],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),g=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=g(n),d=r,s=c["".concat(u,".").concat(d)]||c[d]||y[d]||l;return n?a.createElement(s,i(i({ref:t},p),{},{components:n})):a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={},i="Vertica",o={unversionedId:"connector-v2/source/Vertica",id:"version-2.3.4/connector-v2/source/Vertica",title:"Vertica",description:"JDBC Vertica Source Connector",source:"@site/versioned_docs/version-2.3.4/connector-v2/source/Vertica.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Vertica",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/Vertica",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/connector-v2/source/Vertica.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"TDengine",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/TDengine"},next:{title:"Source Common Options",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/common-options"}},u={},g=[{value:"Description",id:"description",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:3},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:3},{value:"Key Features",id:"key-features",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Tips",id:"tips",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Parallel:",id:"parallel",level:3},{value:"Parallel Boundary:",id:"parallel-boundary",level:3}],p={toc:g},c="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"vertica"},"Vertica"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC Vertica Source Connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read external data source data through JDBC."),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"using-dependency"},"Using Dependency"),(0,r.yg)("h3",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://www.vertica.com/download/vertica/client-drivers/"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,r.yg)("h3",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://www.vertica.com/download/vertica/client-drivers/"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"supports query SQL and can achieve projection effect.")),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Driver"),(0,r.yg)("th",{parentName:"tr",align:null},"Url"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Vertica"),(0,r.yg)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,r.yg)("td",{parentName:"tr",align:null},"com.vertica.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:vertica://localhost:5433/vertica"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.vertica.com/download/vertica/client-drivers/"},"Download"))))),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Vertical Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIT"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT",(0,r.yg)("br",null),"TINYINT UNSIGNED",(0,r.yg)("br",null),"SMALLINT",(0,r.yg)("br",null),"SMALLINT UNSIGNED",(0,r.yg)("br",null),"MEDIUMINT",(0,r.yg)("br",null),"MEDIUMINT UNSIGNED",(0,r.yg)("br",null),"INT",(0,r.yg)("br",null),"INTEGER",(0,r.yg)("br",null),"YEAR"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT UNSIGNED",(0,r.yg)("br",null),"INTEGER UNSIGNED",(0,r.yg)("br",null),"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"LONG")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(20,0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.<38)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.>38)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL((Get the designated column's specified column size)+1,",(0,r.yg)("br",null),"(Gets the designated column's number of digits to right of the decimal point.)))")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT",(0,r.yg)("br",null),"FLOAT UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,r.yg)("br",null),"DOUBLE UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"TINYTEXT",(0,r.yg)("br",null),"MEDIUMTEXT",(0,r.yg)("br",null),"TEXT",(0,r.yg)("br",null),"LONGTEXT",(0,r.yg)("br",null),"JSON"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME",(0,r.yg)("br",null),"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYBLOB",(0,r.yg)("br",null),"MEDIUMBLOB",(0,r.yg)("br",null),"BLOB",(0,r.yg)("br",null),"LONGBLOB",(0,r.yg)("br",null),"BINARY",(0,r.yg)("br",null),"VARBINAR",(0,r.yg)("br",null),"BIT(n)"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GEOMETRY",(0,r.yg)("br",null),"UNKNOWN"),(0,r.yg)("td",{parentName:"tr",align:null},"Not supported yet")))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc:vertica://localhost:5433/vertica")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source,",(0,r.yg)("br",null)," if you use Vertica the value is ",(0,r.yg)("inlineCode",{parentName:"td"},"com.vertica.jdbc.Driver"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Query statement")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_column"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The column name for parallelism's partition, only support numeric type,Only support numeric type primary key, and only can config one column.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_lower_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"BigDecimal"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The partition_column min value for scan, if not set SeaTunnel will query database get min value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_upper_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"BigDecimal"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The partition_column max value for scan, if not set SeaTunnel will query database get max value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_num"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"job parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of partition count, only support positive integer. default value is job parallelism")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fetch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"For queries that return a large number of objects,you can configure",(0,r.yg)("br",null)," the row fetch size used in the query toimprove performance by",(0,r.yg)("br",null)," reducing the number database hits required to satisfy the selection criteria.",(0,r.yg)("br",null)," Zero means use jdbc default value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"properties"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Additional connection configuration parameters,when properties and URL have the same parameters, the priority is determined by the ",(0,r.yg)("br",null),"specific implementation of the driver. For example, in MySQL, properties take precedence over the URL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.4/connector-v2/source/common-options"},"Source Common Options")," for details")))),(0,r.yg)("h3",{id:"tips"},"Tips"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed  in parallel according to the concurrency of tasks.")),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This example queries type_bin 'table' 16 data in your test \"database\" in single parallel and queries all of its fields. You can also specify which fields to query for final output to the console.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n  parallelism = 2\n  job.mode = "BATCH"\n}\nsource{\n    Jdbc {\n        url = "jdbc:vertica://localhost:5433/vertica"\n        driver = "com.vertica.jdbc.Driver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        query = "select * from type_bin limit 16"\n    }\n}\n\ntransform {\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/transform-v2/sql\n}\n\nsink {\n    Console {}\n}\n')),(0,r.yg)("h3",{id:"parallel"},"Parallel:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Read your query table in parallel with the shard field you configured and the shard data  You can do this if you want to read the whole table")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'source {\n    Jdbc {\n        url = "jdbc:vertica://localhost:5433/vertica"\n        driver = "com.vertica.jdbc.Driver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        # Define query logic as required\n        query = "select * from type_bin"\n        # Parallel sharding reads fields\n        partition_column = "id"\n        # Number of fragments\n        partition_num = 10\n    }\n}\n')),(0,r.yg)("h3",{id:"parallel-boundary"},"Parallel Boundary:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"It is more efficient to specify the data within the upper and lower bounds of the query It is more efficient to read your data source according to the upper and lower boundaries you configured")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'source {\n    Jdbc {\n        url = "jdbc:vertica://localhost:5433/vertica"\n        driver = "com.vertica.jdbc.Driver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        # Define query logic as required\n        query = "select * from type_bin"\n        partition_column = "id"\n        # Read start boundary\n        partition_lower_bound = 1\n        # Read end boundary\n        partition_upper_bound = 500\n        partition_num = 10\n    }\n}\n')))}y.isMDXComponent=!0}}]);