"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[18267],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=g(n),u=r,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<l;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={},o="MongoDB CDC",i={unversionedId:"connector-v2/source/MongoDB-CDC",id:"version-2.3.3/connector-v2/source/MongoDB-CDC",title:"MongoDB CDC",description:"MongoDB CDC source connector",source:"@site/versioned_docs/version-2.3.3/connector-v2/source/MongoDB-CDC.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/MongoDB-CDC",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/MongoDB-CDC",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.3/connector-v2/source/MongoDB-CDC.md",tags:[],version:"2.3.3",frontMatter:{},sidebar:"docs",previous:{title:"Maxcompute",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/Maxcompute"},next:{title:"MongoDB",permalink:"/zh-CN/docs/2.3.3/connector-v2/source/MongoDB"}},s={},g=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Availability Settings",id:"availability-settings",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Tips:",id:"tips",level:3},{value:"How to Create a MongoDB CDC Data Synchronization Jobs",id:"how-to-create-a-mongodb-cdc-data-synchronization-jobs",level:2},{value:"CDC Data Print to Client",id:"cdc-data-print-to-client",level:3},{value:"CDC Data Write to MysqlDB",id:"cdc-data-write-to-mysqldb",level:2},{value:"Multi-table Synchronization",id:"multi-table-synchronization",level:2},{value:"Tips:",id:"tips-1",level:3},{value:"Regular Expression Matching for Multiple Tables",id:"regular-expression-matching-for-multiple-tables",level:2},{value:"Format of real-time streaming data",id:"format-of-real-time-streaming-data",level:2}],p={toc:g},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mongodb-cdc"},"MongoDB CDC"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"MongoDB CDC source connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"The MongoDB CDC connector allows for reading snapshot data and incremental data from MongoDB database."),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("p",null,"In order to use the Mongodb CDC connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Dependency"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MongoDB"),(0,r.yg)("td",{parentName:"tr",align:null},"universal"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/seatunnel-connectors-v2/connector-cdc-mongodb"},"Download"))))),(0,r.yg)("h2",{id:"availability-settings"},"Availability Settings"),(0,r.yg)("p",null,"1.MongoDB version: MongoDB version >= 4.0."),(0,r.yg)("p",null,"2.Cluster deployment: replica sets or sharded clusters."),(0,r.yg)("p",null,"3.Storage Engine: WiredTiger Storage Engine."),(0,r.yg)("p",null,"4.Permissions:changeStream and read"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'use admin;\ndb.createRole(\n    {\n        role: "strole",\n        privileges: [{\n            resource: { db: "", collection: "" },\n            actions: [\n                "splitVector",\n                "listDatabases",\n                "listCollections",\n                "collStats",\n                "find",\n                "changeStream" ]\n        }],\n        roles: [\n            { role: \'read\', db: \'config\' }\n        ]\n    }\n);\n\ndb.createUser(\n  {\n      user: \'stuser\',\n      pwd: \'stpw\',\n      roles: [\n         { role: \'strole\', db: \'admin\' }\n      ]\n  }\n);\n')),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("p",null,"The following table lists the field data type mapping from MongoDB BSON type to Seatunnel data type."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"MongoDB BSON type"),(0,r.yg)("th",{parentName:"tr",align:null},"Seatunnel Data type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ObjectId"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Binary"),(0,r.yg)("td",{parentName:"tr",align:null},"BINARY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int32"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int64"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Decimal128"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Object"),(0,r.yg)("td",{parentName:"tr",align:null},"ROW")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")))),(0,r.yg)("p",null,"For specific types in MongoDB, we use Extended JSON format to map them to Seatunnel STRING type."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"MongoDB BSON type"),(0,r.yg)("th",{parentName:"tr",align:null},"Seatunnel STRING"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Symbol"),(0,r.yg)("td",{parentName:"tr",align:null},'{"_value": {"$symbol": "12"}}')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RegularExpression"),(0,r.yg)("td",{parentName:"tr",align:null},'{"_value": {"$regularExpression": {"pattern": "^9$", "options": "i"}}}')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JavaScript"),(0,r.yg)("td",{parentName:"tr",align:null},'{"_value": {"$code": "function() { return 10; }"}}')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DbPointer"),(0,r.yg)("td",{parentName:"tr",align:null},'{"_value": {"$dbPointer": {"$ref": "db.coll", "$id": {"$oid": "63932a00da01604af329e33c"}}}}')))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Tips")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"1.When using the DECIMAL type in SeaTunnel, be aware that the maximum range cannot exceed 34 digits, which means you should use decimal(34, 18).",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hosts"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The comma-separated list of hostname and port pairs of the MongoDB servers. eg. ",(0,r.yg)("inlineCode",{parentName:"td"},"localhost:27017,localhost:27018"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the database user to be used when connecting to MongoDB.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Password to be used when connecting to MongoDB.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"List"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the database to watch for changes. If not set then all databases will be captured. The database also supports regular expressions to monitor multiple databases matching the regular expression. eg. ",(0,r.yg)("inlineCode",{parentName:"td"},"db1,db2"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"collection"),(0,r.yg)("td",{parentName:"tr",align:null},"List"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the collection in the database to watch for changes. If not set then all collections will be captured. The collection also supports regular expressions to monitor multiple collections matching fully-qualified collection identifiers. eg. ",(0,r.yg)("inlineCode",{parentName:"td"},"db1.coll1,db2.coll2"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection.options"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The ampersand-separated connection options of MongoDB.  eg. ",(0,r.yg)("inlineCode",{parentName:"td"},"replicaSet=test&connectTimeoutMS=300000"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"The cursor batch size.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"poll.max.batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum number of change stream documents to include in a single batch when polling for new data.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"poll.await.time.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"The amount of time to wait before checking for new results on the change stream.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"heartbeat.interval.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"The length of time in milliseconds between sending heartbeat messages. Use 0 to disable.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"incremental.snapshot.chunk.size.mb"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"64"),(0,r.yg)("td",{parentName:"tr",align:null},"The chunk size mb of incremental snapshot.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.3/connector-v2/source/common-options"},"Source Common Options")," for details.")))),(0,r.yg)("h3",{id:"tips"},"Tips:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"1.If the collection changes at a slow pace, it is strongly recommended to set an appropriate value greater than 0 for the heartbeat.interval.ms parameter. When we recover a Seatunnel job from a checkpoint or savepoint, the heartbeat events can push the resumeToken forward to avoid its expiration.",(0,r.yg)("br",null),"\n2.MongoDB has a limit of 16MB for a single document. Change documents include additional information, so even if the original document is not larger than 15MB, the change document may exceed the 16MB limit, resulting in the termination of the Change Stream operation.",(0,r.yg)("br",null),"\n3.It is recommended to use immutable shard keys. In MongoDB, shard keys allow modifications after transactions are enabled, but changing the shard key can cause frequent shard migrations, resulting in additional performance overhead. Additionally, modifying the shard key can also cause the Update Lookup feature to become ineffective, leading to inconsistent results in CDC (Change Data Capture) scenarios.",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"how-to-create-a-mongodb-cdc-data-synchronization-jobs"},"How to Create a MongoDB CDC Data Synchronization Jobs"),(0,r.yg)("h3",{id:"cdc-data-print-to-client"},"CDC Data Print to Client"),(0,r.yg)("p",null,"The following example demonstrates how to create a data synchronization job that reads cdc data from MongoDB and prints it on the local client:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  # You can set engine configuration here\n  execution.parallelism = 1\n  job.mode = "STREAMING"\n  execution.checkpoint.interval = 5000\n}\n\nsource {\n  MongoDB-CDC {\n    hosts = "mongo0:27017"\n    database = ["inventory"]\n    collection = ["inventory.products"]\n    username = stuser\n    password = stpw\n    schema = {\n      fields {\n        "_id" : string,\n        "name" : string,\n        "description" : string,\n        "weight" : string\n      }\n    }\n  }\n}\n\n# Console printing of the read Mongodb data\nsink {\n  Console {\n    parallelism = 1\n  }\n}\n')),(0,r.yg)("h2",{id:"cdc-data-write-to-mysqldb"},"CDC Data Write to MysqlDB"),(0,r.yg)("p",null,"The following example demonstrates how to create a data synchronization job that reads cdc data from MongoDB and write to mysql database:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  # You can set engine configuration here\n  execution.parallelism = 1\n  job.mode = "STREAMING"\n  execution.checkpoint.interval = 5000\n}\n\nsource {\n  MongoDB-CDC {\n    hosts = "mongo0:27017"\n    database = ["inventory"]\n    collection = ["inventory.products"]\n    username = stuser\n    password = stpw\n  }\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://mysql_cdc_e2e:3306"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "st_user"\n    password = "seatunnel"\n\n    generate_sink_sql = true\n    # You need to configure both database and table\n    database = mongodb_cdc\n    table = products\n    primary_keys = ["_id"]\n  }\n}\n')),(0,r.yg)("h2",{id:"multi-table-synchronization"},"Multi-table Synchronization"),(0,r.yg)("p",null,"The following example demonstrates how to create a data synchronization job that read the cdc data of multiple library tables mongodb and prints it on the local client:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  # You can set engine configuration here\n  execution.parallelism = 1\n  job.mode = "STREAMING"\n  execution.checkpoint.interval = 5000\n}\n\nsource {\n  MongoDB-CDC {\n    hosts = "mongo0:27017"\n    database = ["inventory","crm"]\n    collection = ["inventory.products","crm.test"]\n    username = stuser\n    password = stpw\n  }\n}\n\n# Console printing of the read Mongodb data\nsink {\n  Console {\n    parallelism = 1\n  }\n}\n')),(0,r.yg)("h3",{id:"tips-1"},"Tips:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"1.The cdc synchronization of multiple library tables cannot specify the schema, and can only output json data downstream.\nThis is because MongoDB does not provide metadata information for querying, so if you want to support multiple tables, all tables can only be read as one structure.")),(0,r.yg)("h2",{id:"regular-expression-matching-for-multiple-tables"},"Regular Expression Matching for Multiple Tables"),(0,r.yg)("p",null,"The following example demonstrates how to create a data synchronization job that through regular expression read the data of multiple library tables mongodb and prints it on the local client:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Matching example"),(0,r.yg)("th",{parentName:"tr",align:null},"Expressions"),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},"Describe"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Prefix matching"),(0,r.yg)("td",{parentName:"tr",align:null},"^(test).*"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Match the database name or table name with the prefix test, such as test1, test2, etc.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Suffix matching"),(0,r.yg)("td",{parentName:"tr",align:null},".*","[p$]"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Match the database name or table name with the suffix p, such as cdcp, edcp, etc.")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  # You can set engine configuration here\n  execution.parallelism = 1\n  job.mode = "STREAMING"\n  execution.checkpoint.interval = 5000\n}\n\nsource {\n  MongoDB-CDC {\n    hosts = "mongo0:27017"\n    # So this example is used (^(test).*|^(tpc).*|txc|.*[p$]|t{2}).(t[5-8]|tt),matching txc.tt\u3001test2.test5.\n    database = ["(^(test).*|^(tpc).*|txc|.*[p$]|t{2})"]\n    collection = ["(t[5-8]|tt)"]\n    username = stuser\n    password = stpw\n  }\n}\n\n# Console printing of the read Mongodb data\nsink {\n  Console {\n    parallelism = 1\n  }\n}\n')),(0,r.yg)("h2",{id:"format-of-real-time-streaming-data"},"Format of real-time streaming data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'{\n   _id : { <BSON Object> },        // Identifier of the open change stream, can be assigned to the \'resumeAfter\' parameter for subsequent resumption of this change stream\n   "operationType" : "<operation>",        // The type of change operation that occurred, such as: insert, delete, update, etc.\n   "fullDocument" : { <document> },      // The full document data involved in the change operation. This field does not exist in delete operations\n   "ns" : {   \n      "db" : "<database>",         // The database where the change operation occurred\n      "coll" : "<collection>"     // The collection where the change operation occurred\n   },\n   "to" : {   // These fields are displayed only when the operation type is \'rename\'\n      "db" : "<database>",         // The new database name after the change\n      "coll" : "<collection>"     // The new collection name after the change\n   },\n   "source":{\n        "ts_ms":"<timestamp>",     // The timestamp when the change operation occurred\n        "table":"<collection>"     // The collection where the change operation occurred\n        "db":"<database>",         // The database where the change operation occurred\n        "snapshot":"false"         // Identify the current stage of data synchronization\n    },\n   "documentKey" : { "_id" : <value> },  // The _id field value of the document involved in the change operation\n   "updateDescription" : {    // Description of the update operation\n      "updatedFields" : { <document> },  // The fields and values that the update operation modified\n      "removedFields" : [ "<field>", ... ]     // The fields and values that the update operation removed\n   }\n   "clusterTime" : <Timestamp>,     // The timestamp of the Oplog log entry corresponding to the change operation\n   "txnNumber" : <NumberLong>,    // If the change operation is executed in a multi-document transaction, this field and value are displayed, representing the transaction number\n   "lsid" : {          // Represents information related to the Session in which the transaction is located\n      "id" : <UUID>,  \n      "uid" : <BinData> \n   }\n}\n')))}d.isMDXComponent=!0}}]);