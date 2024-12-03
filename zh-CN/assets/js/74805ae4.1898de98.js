"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[96003],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>u});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,u=c["".concat(s,".").concat(g)]||c[g]||m[g]||l;return n?t.createElement(u,o(o({ref:a},d),{},{components:n})):t.createElement(u,o({ref:a},d))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},10467:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const l={},o="Paimon",i={unversionedId:"connector-v2/source/Paimon",id:"connector-v2/source/Paimon",title:"Paimon",description:"Paimon source connector",source:"@site/docs/connector-v2/source/Paimon.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Paimon",permalink:"/zh-CN/docs/connector-v2/source/Paimon",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Paimon.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"OssJindoFile",permalink:"/zh-CN/docs/connector-v2/source/OssJindoFile"},next:{title:"Persistiq",permalink:"/zh-CN/docs/connector-v2/source/Persistiq"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"warehouse string",id:"warehouse-string",level:3},{value:"catalog_type string",id:"catalog_type-string",level:3},{value:"catalog_uri string",id:"catalog_uri-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"hdfs_site_path string",id:"hdfs_site_path-string",level:3},{value:"query string",id:"query-string",level:3},{value:"paimon.hadoop.conf string",id:"paimonhadoopconf-string",level:3},{value:"paimon.hadoop.conf-path string",id:"paimonhadoopconf-path-string",level:3},{value:"Filesystems",id:"filesystems",level:2},{value:"Examples",id:"examples",level:2},{value:"Simple example",id:"simple-example",level:3},{value:"Filter example",id:"filter-example",level:3},{value:"S3 example",id:"s3-example",level:3},{value:"Hadoop conf example",id:"hadoop-conf-example",level:3},{value:"Hive catalog example",id:"hive-catalog-example",level:3},{value:"Changelog",id:"changelog",level:2},{value:"Note",id:"note",level:3},{value:"Streaming read example",id:"streaming-read-example",level:3}],d={toc:p},c="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(c,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"paimon"},"Paimon"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Paimon source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read data from Apache Paimon."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"warehouse"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_type"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"filesystem")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_uri"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf-path"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"warehouse-string"},"warehouse ","[string]"),(0,r.yg)("p",null,"Paimon warehouse path"),(0,r.yg)("h3",{id:"catalog_type-string"},"catalog_type ","[string]"),(0,r.yg)("p",null,"Catalog type of Paimon, support filesystem and hive"),(0,r.yg)("h3",{id:"catalog_uri-string"},"catalog_uri ","[string]"),(0,r.yg)("p",null,"Catalog uri of Paimon, only needed when catalog_type is hive"),(0,r.yg)("h3",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,"The database you want to access"),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"The table you want to access"),(0,r.yg)("h3",{id:"hdfs_site_path-string"},"hdfs_site_path ","[string]"),(0,r.yg)("p",null,"The file path of ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs-site.xml")),(0,r.yg)("h3",{id:"query-string"},"query ","[string]"),(0,r.yg)("p",null,"The filter condition of the table read. For example: ",(0,r.yg)("inlineCode",{parentName:"p"},"select * from st_test where id > 100"),". If not specified, all rows are read.\nCurrently, where conditions only support <, <=, >, >=, =, !=, or, and,is null, is not null, and others are not supported.\nThe Having, Group By, Order By clauses are currently unsupported, because these clauses are not supported by Paimon.\nThe projection and limit will be supported in the future."),(0,r.yg)("p",null,"Note: When the field after the where condition is a string or boolean value, its value must be enclosed in single quotes, otherwise an error will be reported. ",(0,r.yg)("inlineCode",{parentName:"p"},"For example: name='abc' or tag='true'"),"\nThe field data types currently supported by where conditions are as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"string"),(0,r.yg)("li",{parentName:"ul"},"boolean"),(0,r.yg)("li",{parentName:"ul"},"tinyint"),(0,r.yg)("li",{parentName:"ul"},"smallint"),(0,r.yg)("li",{parentName:"ul"},"int"),(0,r.yg)("li",{parentName:"ul"},"bigint"),(0,r.yg)("li",{parentName:"ul"},"float"),(0,r.yg)("li",{parentName:"ul"},"double"),(0,r.yg)("li",{parentName:"ul"},"date"),(0,r.yg)("li",{parentName:"ul"},"timestamp")),(0,r.yg)("h3",{id:"paimonhadoopconf-string"},"paimon.hadoop.conf ","[string]"),(0,r.yg)("p",null,"Properties in hadoop conf"),(0,r.yg)("h3",{id:"paimonhadoopconf-path-string"},"paimon.hadoop.conf-path ","[string]"),(0,r.yg)("p",null,"The specified loading path for the 'core-site.xml', 'hdfs-site.xml', 'hive-site.xml' files"),(0,r.yg)("h2",{id:"filesystems"},"Filesystems"),(0,r.yg)("p",null,"The Paimon connector supports writing data to multiple file systems. Currently, the supported file systems are hdfs and s3.\nIf you use the s3 filesystem. You can configure the ",(0,r.yg)("inlineCode",{parentName:"p"},"fs.s3a.access-key"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"fs.s3a.secret-key"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"fs.s3a.endpoint"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"fs.s3a.path.style.access"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"fs.s3a.aws.credentials.provider")," properties in the ",(0,r.yg)("inlineCode",{parentName:"p"},"paimon.hadoop.conf")," option.\nBesides, the warehouse should start with ",(0,r.yg)("inlineCode",{parentName:"p"},"s3a://"),"."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("h3",{id:"simple-example"},"Simple example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n Paimon {\n     warehouse = "/tmp/paimon"\n     database = "default"\n     table = "st_test"\n   }\n}\n')),(0,r.yg)("h3",{id:"filter-example"},"Filter example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Paimon {\n    warehouse = "/tmp/paimon"\n    database = "full_type"\n    table = "st_test"\n    query = "select c_boolean, c_tinyint from st_test where c_boolean= \'true\' and c_tinyint > 116 and c_smallint = 15987 or c_decimal=\'2924137191386439303744.39292213\'"\n  }\n}\n')),(0,r.yg)("h3",{id:"s3-example"},"S3 example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Paimon {\n    warehouse = "s3a://test/"\n    database = "seatunnel_namespace11"\n    table = "st_test"\n    paimon.hadoop.conf = {\n        fs.s3a.access-key=G52pnxg67819khOZ9ezX\n        fs.s3a.secret-key=SHJuAQqHsLrgZWikvMa3lJf5T0NfM5LMFliJh9HF\n        fs.s3a.endpoint="http://minio4:9000"\n        fs.s3a.path.style.access=true\n        fs.s3a.aws.credentials.provider=org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider\n    }\n  }\n}\n\nsink {\n  Console{}\n}\n')),(0,r.yg)("h3",{id:"hadoop-conf-example"},"Hadoop conf example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="hdfs:///tmp/paimon"\n    database="seatunnel_namespace1"\n    table="st_test"\n    query = "select * from st_test where pk_id is not null and pk_id < 3"\n    paimon.hadoop.conf = {\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"hive-catalog-example"},"Hive catalog example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Paimon {\n    catalog_name="seatunnel_test"\n    catalog_type="hive"\n    catalog_uri="thrift://hadoop04:9083"\n    warehouse="hdfs:///tmp/seatunnel"\n    database="seatunnel_test"\n    table="st_test3"\n    paimon.hadoop.conf = {\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n    }\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("p",null,"If you want to read the changelog of the Paimon table, first set the ",(0,r.yg)("inlineCode",{parentName:"p"},"changelog-producer")," for the Paimon source table and then use the SeaTunnel stream task to read it."),(0,r.yg)("h3",{id:"note"},"Note"),(0,r.yg)("p",null,"Currently, batch reads are always the latest snapshot read, so to read full changelog data, you need to use stream reads and start stream reads before writing data to the Piamon table, and to ensure order, the parallelism of the stream read task should be set to 1."),(0,r.yg)("h3",{id:"streaming-read-example"},"Streaming read example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "Streaming"\n}\n\nsource {\n  Paimon {\n    warehouse = "/tmp/paimon"\n    database = "full_type"\n    table = "st_test"\n  }\n}\n\nsink {\n  Paimon {\n    warehouse = "/tmp/paimon"\n    database = "full_type"\n    table = "st_test_sink"\n    paimon.table.primary-keys = "c_tinyint"\n  }\n}\n')))}m.isMDXComponent=!0}}]);