"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[14514],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(a),d=l,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90325:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(58168),l=(a(96540),a(15680));const r={},i="Hive",o={unversionedId:"connector-v2/source/Hive",id:"connector-v2/source/Hive",title:"Hive",description:"Hive source connector",source:"@site/docs/connector-v2/source/Hive.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Hive",permalink:"/docs/connector-v2/source/Hive",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Hive.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"HdfsFile",permalink:"/docs/connector-v2/source/HdfsFile"},next:{title:"HiveJdbc",permalink:"/docs/connector-v2/source/HiveJdbc"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"table_name string",id:"table_name-string",level:3},{value:"metastore_uri string",id:"metastore_uri-string",level:3},{value:"hdfs_site_path string",id:"hdfs_site_path-string",level:3},{value:"hive.hadoop.conf map",id:"hivehadoopconf-map",level:3},{value:"hive.hadoop.conf-path string",id:"hivehadoopconf-path-string",level:3},{value:"read_partitions list",id:"read_partitions-list",level:3},{value:"krb5_path string",id:"krb5_path-string",level:3},{value:"kerberos_principal string",id:"kerberos_principal-string",level:3},{value:"kerberos_keytab_path string",id:"kerberos_keytab_path-string",level:3},{value:"read_columns list",id:"read_columns-list",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Example 1: Single table",id:"example-1-single-table",level:3},{value:"Example 2: Multiple tables",id:"example-2-multiple-tables",level:3},{value:"Hive on s3",id:"hive-on-s3",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Hive on oss",id:"hive-on-oss",level:2},{value:"Step 1",id:"step-1-1",level:3},{value:"Step 2",id:"step-2-1",level:3},{value:"Step 3",id:"step-3-1",level:3},{value:"Step 4",id:"step-4-1",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"Next version",id:"next-version",level:3}],c={toc:p},g="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(g,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hive"},"Hive"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Hive source connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Read data from Hive."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"In order to use this connector, You must ensure your spark/flink cluster already integrated hive. The tested hive version is 2.3.9."),(0,l.yg)("p",{parentName:"admonition"},"If you use SeaTunnel Engine, You need put seatunnel-hadoop3-3.1.4-uber.jar and hive-exec-3.1.3.jar and libfb303-0.9.3.jar in $SEATUNNEL_HOME/lib/ dir.")),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("p",null,"Read all the data in a split in a pollNext call. What splits are read will be saved in snapshot."),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json")))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metastore_uri"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"krb5_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"/etc/krb5.conf")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_keytab_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hive_site_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hive.hadoop.conf"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hive.hadoop.conf-path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"read_partitions"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"read_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"none")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,l.yg)("p",null,"Target Hive table name eg: db1.table1"),(0,l.yg)("h3",{id:"metastore_uri-string"},"metastore_uri ","[string]"),(0,l.yg)("p",null,"Hive metastore uri"),(0,l.yg)("h3",{id:"hdfs_site_path-string"},"hdfs_site_path ","[string]"),(0,l.yg)("p",null,"The path of ",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs-site.xml"),", used to load ha configuration of namenodes"),(0,l.yg)("h3",{id:"hivehadoopconf-map"},"hive.hadoop.conf ","[map]"),(0,l.yg)("p",null,"Properties in hadoop conf('core-site.xml', 'hdfs-site.xml', 'hive-site.xml')"),(0,l.yg)("h3",{id:"hivehadoopconf-path-string"},"hive.hadoop.conf-path ","[string]"),(0,l.yg)("p",null,"The specified loading path for the 'core-site.xml', 'hdfs-site.xml', 'hive-site.xml' files"),(0,l.yg)("h3",{id:"read_partitions-list"},"read_partitions ","[list]"),(0,l.yg)("p",null,"The target partitions that user want to read from hive table, if user does not set this parameter, it will read all the data from hive table."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Tips: Every partition in partitions list should have the same directory depth. For example, a hive table has two partitions: par1 and par2, if user sets it like as the following:"),"\n",(0,l.yg)("strong",{parentName:"p"},"read_partitions = ","[par1=xxx, par1=yyy/par2=zzz]",", it is illegal")),(0,l.yg)("h3",{id:"krb5_path-string"},"krb5_path ","[string]"),(0,l.yg)("p",null,"The path of ",(0,l.yg)("inlineCode",{parentName:"p"},"krb5.conf"),", used to authentication kerberos"),(0,l.yg)("h3",{id:"kerberos_principal-string"},"kerberos_principal ","[string]"),(0,l.yg)("p",null,"The principal of kerberos authentication"),(0,l.yg)("h3",{id:"kerberos_keytab_path-string"},"kerberos_keytab_path ","[string]"),(0,l.yg)("p",null,"The keytab file path of kerberos authentication"),(0,l.yg)("h3",{id:"read_columns-list"},"read_columns ","[list]"),(0,l.yg)("p",null,"The read column list of the data source, user can use it to implement field projection."),(0,l.yg)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,l.yg)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"txt: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"json: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"csv: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"orc/parquet:",(0,l.yg)("br",{parentName:"li"}),"automatically recognizes the compression type, no additional settings required.")),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/connector-v2/source-common-options"},"Source Common Options")," for details"),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("h3",{id:"example-1-single-table"},"Example 1: Single table"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'\n  Hive {\n    table_name = "default.seatunnel_orc"\n    metastore_uri = "thrift://namenode001:9083"\n  }\n\n')),(0,l.yg)("h3",{id:"example-2-multiple-tables"},"Example 2: Multiple tables"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'\n  Hive {\n    tables_configs = [\n        {\n          table_name = "default.seatunnel_orc_1"\n          metastore_uri = "thrift://namenode001:9083"\n        },\n        {\n          table_name = "default.seatunnel_orc_2"\n          metastore_uri = "thrift://namenode001:9083"\n        }\n    ]\n  }\n\n')),(0,l.yg)("h2",{id:"hive-on-s3"},"Hive on s3"),(0,l.yg)("h3",{id:"step-1"},"Step 1"),(0,l.yg)("p",null,"Create the lib dir for hive of emr."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ${SEATUNNEL_HOME}/plugins/Hive/lib\n")),(0,l.yg)("h3",{id:"step-2"},"Step 2"),(0,l.yg)("p",null,"Get the jars from maven center to the lib."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd ${SEATUNNEL_HOME}/plugins/Hive/lib\nwget https://repo1.maven.org/maven2/org/apache/hadoop/hadoop-aws/2.6.5/hadoop-aws-2.6.5.jar\nwget https://repo1.maven.org/maven2/org/apache/hive/hive-exec/2.3.9/hive-exec-2.3.9.jar\n")),(0,l.yg)("h3",{id:"step-3"},"Step 3"),(0,l.yg)("p",null,"Copy the jars from your environment on emr to the lib dir."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cp /usr/share/aws/emr/emrfs/lib/emrfs-hadoop-assembly-2.60.0.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\ncp /usr/share/aws/emr/hadoop-state-pusher/lib/hadoop-common-3.3.6-amzn-1.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\ncp /usr/share/aws/emr/hadoop-state-pusher/lib/javax.inject-1.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\ncp /usr/share/aws/emr/hadoop-state-pusher/lib/aopalliance-1.0.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\n")),(0,l.yg)("h3",{id:"step-4"},"Step 4"),(0,l.yg)("p",null,"Run the case."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Hive {\n    table_name = "test_hive.test_hive_sink_on_s3"\n    metastore_uri = "thrift://ip-192-168-0-202.cn-north-1.compute.internal:9083"\n    hive.hadoop.conf-path = "/home/ec2-user/hadoop-conf"\n    hive.hadoop.conf = {\n       bucket="s3://ws-package"\n       fs.s3a.aws.credentials.provider="com.amazonaws.auth.InstanceProfileCredentialsProvider"\n    }\n    read_columns = ["pk_id", "name", "score"]\n  }\n}\n\nsink {\n  Hive {\n    table_name = "test_hive.test_hive_sink_on_s3_sink"\n    metastore_uri = "thrift://ip-192-168-0-202.cn-north-1.compute.internal:9083"\n    hive.hadoop.conf-path = "/home/ec2-user/hadoop-conf"\n    hive.hadoop.conf = {\n       bucket="s3://ws-package"\n       fs.s3a.aws.credentials.provider="com.amazonaws.auth.InstanceProfileCredentialsProvider"\n    }\n  }\n}\n')),(0,l.yg)("h2",{id:"hive-on-oss"},"Hive on oss"),(0,l.yg)("h3",{id:"step-1-1"},"Step 1"),(0,l.yg)("p",null,"Create the lib dir for hive of emr."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ${SEATUNNEL_HOME}/plugins/Hive/lib\n")),(0,l.yg)("h3",{id:"step-2-1"},"Step 2"),(0,l.yg)("p",null,"Get the jars from maven center to the lib."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd ${SEATUNNEL_HOME}/plugins/Hive/lib\nwget https://repo1.maven.org/maven2/org/apache/hive/hive-exec/2.3.9/hive-exec-2.3.9.jar\n")),(0,l.yg)("h3",{id:"step-3-1"},"Step 3"),(0,l.yg)("p",null,"Copy the jars from your environment on emr to the lib dir and delete the conflicting jar."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cp -r /opt/apps/JINDOSDK/jindosdk-current/lib/jindo-*.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\nrm -f ${SEATUNNEL_HOME}/lib/hadoop-aliyun-*.jar\n")),(0,l.yg)("h3",{id:"step-4-1"},"Step 4"),(0,l.yg)("p",null,"Run the case."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Hive {\n    table_name = "test_hive.test_hive_sink_on_oss"\n    metastore_uri = "thrift://master-1-1.c-1009b01725b501f2.cn-wulanchabu.emr.aliyuncs.com:9083"\n    hive.hadoop.conf-path = "/tmp/hadoop"\n    hive.hadoop.conf = {\n        bucket="oss://emr-osshdfs.cn-wulanchabu.oss-dls.aliyuncs.com"\n    }\n  }\n}\n\nsink {\n  Hive {\n    table_name = "test_hive.test_hive_sink_on_oss_sink"\n    metastore_uri = "thrift://master-1-1.c-1009b01725b501f2.cn-wulanchabu.emr.aliyuncs.com:9083"\n    hive.hadoop.conf-path = "/tmp/hadoop"\n    hive.hadoop.conf = {\n        bucket="oss://emr-osshdfs.cn-wulanchabu.oss-dls.aliyuncs.com"\n    }\n  }\n}\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add Hive Source Connector")),(0,l.yg)("h3",{id:"next-version"},"Next version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support kerberos authentication (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3840"},"3840"),")"),(0,l.yg)("li",{parentName:"ul"},"Support user-defined partitions (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3842"},"3842"),")")))}u.isMDXComponent=!0}}]);