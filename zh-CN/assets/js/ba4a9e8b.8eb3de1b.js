"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[48121],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>c});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=o(t),u=l,c=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(c,i(i({ref:n},g),{},{components:t})):a.createElement(c,i({ref:n},g))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=t(58168),l=(t(96540),t(15680));const r={},i="Hive",s={unversionedId:"connector-v2/sink/Hive",id:"connector-v2/sink/Hive",title:"Hive",description:"Hive Sink \u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Hive.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Hive",permalink:"/zh-CN/docs/connector-v2/sink/Hive",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Hive.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hdfs\u6587\u4ef6",permalink:"/zh-CN/docs/connector-v2/sink/HdfsFile"},next:{title:"Http",permalink:"/zh-CN/docs/connector-v2/sink/Http"}},p={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5173\u952e\u7279\u6027",id:"\u5173\u952e\u7279\u6027",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"table_name string",id:"table_name-string",level:3},{value:"metastore_uri string",id:"metastore_uri-string",level:3},{value:"hdfs_site_path string",id:"hdfs_site_path-string",level:3},{value:"hive_site_path string",id:"hive_site_path-string",level:3},{value:"hive.hadoop.conf map",id:"hivehadoopconf-map",level:3},{value:"hive.hadoop.conf-path string",id:"hivehadoopconf-path-string",level:3},{value:"krb5_path string",id:"krb5_path-string",level:3},{value:"kerberos_principal string",id:"kerberos_principal-string",level:3},{value:"kerberos_keytab_path string",id:"kerberos_keytab_path-string",level:3},{value:"abort_drop_partition_metadata boolean",id:"abort_drop_partition_metadata-boolean",level:3},{value:"parquet_avro_write_timestamp_as_int96 boolean",id:"parquet_avro_write_timestamp_as_int96-boolean",level:3},{value:"\u901a\u7528\u9009\u9879",id:"\u901a\u7528\u9009\u9879",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",level:3},{value:"\u793a\u4f8b 2\uff1aKerberos",id:"\u793a\u4f8b-2kerberos",level:3},{value:"Hive on s3",id:"hive-on-s3",level:2},{value:"\u6b65\u9aa4 1",id:"\u6b65\u9aa4-1",level:3},{value:"\u6b65\u9aa4 2",id:"\u6b65\u9aa4-2",level:3},{value:"\u6b65\u9aa4 3",id:"\u6b65\u9aa4-3",level:3},{value:"\u6b65\u9aa4 4",id:"\u6b65\u9aa4-4",level:3},{value:"Hive on oss",id:"hive-on-oss",level:2},{value:"\u6b65\u9aa4 1",id:"\u6b65\u9aa4-1-1",level:3},{value:"\u6b65\u9aa4 2",id:"\u6b65\u9aa4-2-1",level:3},{value:"\u6b65\u9aa4 3",id:"\u6b65\u9aa4-3-1",level:3},{value:"\u6b65\u9aa4 4",id:"\u6b65\u9aa4-4-1",level:3},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",level:3}],g={toc:o},m="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(m,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hive"},"Hive"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Hive Sink \u8fde\u63a5\u5668")),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u5c06\u6570\u636e\u5199\u5165 Hive\u3002"),(0,l.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u4e3a\u4e86\u4f7f\u7528\u6b64\u8fde\u63a5\u5668\uff0c\u60a8\u5fc5\u987b\u786e\u4fdd\u60a8\u7684 Spark/Flink \u96c6\u7fa4\u5df2\u7ecf\u96c6\u6210\u4e86 Hive\u3002\u6d4b\u8bd5\u8fc7\u7684 Hive \u7248\u672c\u662f 2.3.9 \u548c 3.1.3\u3002"),(0,l.yg)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u4f7f\u7528 SeaTunnel \u5f15\u64ce\uff0c\u60a8\u9700\u8981\u5c06 ",(0,l.yg)("inlineCode",{parentName:"p"},"seatunnel-hadoop3-3.1.4-uber.jar"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"hive-exec-3.1.3.jar")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"libfb303-0.9.3.jar")," \u653e\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/lib/")," \u76ee\u5f55\u4e2d\u3002")),(0,l.yg)("h2",{id:"\u5173\u952e\u7279\u6027"},"\u5173\u952e\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u652f\u6301\u591a\u8868\u5199\u5165")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21"))),(0,l.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f7f\u7528 2PC \u63d0\u4ea4\u6765\u786e\u4fdd\u201c\u7cbe\u786e\u4e00\u6b21\u201d\u3002"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6587\u4ef6\u683c\u5f0f",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6587\u672c"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","CSV"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","ORC"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","JSON"))),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u538b\u7f29\u7f16\u89e3\u7801\u5668",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","LZO")))),(0,l.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"metastore_uri"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"none")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hive_site_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hive.hadoop.conf"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hive.hadoop.conf-path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"krb5_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"/etc/krb5.conf")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_keytab_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"abort_drop_partition_metadata"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parquet_avro_write_timestamp_as_int96"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,l.yg)("p",null,"\u76ee\u6807 Hive \u8868\u540d\uff0c\u4f8b\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"db1.table1"),"\u3002\u5982\u679c\u6e90\u662f\u591a\u6a21\u5f0f\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"${database_name}.${table_name}")," \u6765\u751f\u6210\u8868\u540d\uff0c\u5b83\u5c06\u7528\u6e90\u751f\u6210\u7684 CatalogTable \u7684\u503c\u66ff\u6362 ",(0,l.yg)("inlineCode",{parentName:"p"},"${database_name}")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"${table_name}"),"\u3002"),(0,l.yg)("h3",{id:"metastore_uri-string"},"metastore_uri ","[string]"),(0,l.yg)("p",null,"Hive \u5143\u5b58\u50a8 URI"),(0,l.yg)("h3",{id:"hdfs_site_path-string"},"hdfs_site_path ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"hdfs-site.xml")," \u7684\u8def\u5f84\uff0c\u7528\u4e8e\u52a0\u8f7d Namenode \u7684\u9ad8\u53ef\u7528\u914d\u7f6e"),(0,l.yg)("h3",{id:"hive_site_path-string"},"hive_site_path ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"hive-site.xml")," \u7684\u8def\u5f84"),(0,l.yg)("h3",{id:"hivehadoopconf-map"},"hive.hadoop.conf ","[map]"),(0,l.yg)("p",null,"Hadoop \u914d\u7f6e\u4e2d\u7684\u5c5e\u6027\uff08",(0,l.yg)("inlineCode",{parentName:"p"},"core-site.xml"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs-site.xml"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"hive-site.xml"),"\uff09"),(0,l.yg)("h3",{id:"hivehadoopconf-path-string"},"hive.hadoop.conf-path ","[string]"),(0,l.yg)("p",null,"\u6307\u5b9a\u52a0\u8f7d ",(0,l.yg)("inlineCode",{parentName:"p"},"core-site.xml"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs-site.xml"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"hive-site.xml")," \u6587\u4ef6\u7684\u8def\u5f84"),(0,l.yg)("h3",{id:"krb5_path-string"},"krb5_path ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"krb5.conf")," \u7684\u8def\u5f84\uff0c\u7528\u4e8e Kerberos \u8ba4\u8bc1"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"hive-site.xml")," \u7684\u8def\u5f84\uff0c\u7528\u4e8e Hive \u5143\u5b58\u50a8\u8ba4\u8bc1"),(0,l.yg)("h3",{id:"kerberos_principal-string"},"kerberos_principal ","[string]"),(0,l.yg)("p",null,"Kerberos \u7684\u4e3b\u4f53"),(0,l.yg)("h3",{id:"kerberos_keytab_path-string"},"kerberos_keytab_path ","[string]"),(0,l.yg)("p",null,"Kerberos \u7684 keytab \u6587\u4ef6\u8def\u5f84"),(0,l.yg)("h3",{id:"abort_drop_partition_metadata-boolean"},"abort_drop_partition_metadata ","[boolean]"),(0,l.yg)("p",null,"\u5728\u4e2d\u6b62\u64cd\u4f5c\u671f\u95f4\u662f\u5426\u4ece Hive Metastore \u4e2d\u5220\u9664\u5206\u533a\u5143\u6570\u636e\u7684\u6807\u5fd7\u3002\u6ce8\u610f\uff1a\u8fd9\u53ea\u5f71\u54cd\u5143\u5b58\u50a8\u4e2d\u7684\u5143\u6570\u636e\uff0c\u5206\u533a\u4e2d\u7684\u6570\u636e\u5c06\u59cb\u7ec8\u88ab\u5220\u9664\uff08\u540c\u6b65\u8fc7\u7a0b\u4e2d\u751f\u6210\u7684\u6570\u636e\uff09\u3002"),(0,l.yg)("h3",{id:"parquet_avro_write_timestamp_as_int96-boolean"},"parquet_avro_write_timestamp_as_int96 ","[boolean]"),(0,l.yg)("p",null,"\u652f\u6301\u4ece\u65f6\u95f4\u6233\u5199\u5165 Parquet INT96\uff0c\u4ec5\u5bf9 parquet \u6587\u4ef6\u6709\u6548\u3002"),(0,l.yg)("h3",{id:"\u901a\u7528\u9009\u9879"},"\u901a\u7528\u9009\u9879"),(0,l.yg)("p",null,"Sink \u63d2\u4ef6\u7684\u901a\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink-common-options"},"Sink Common Options")," \u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'  Hive {\n    table_name = "default.seatunnel_orc"\n    metastore_uri = "thrift://namenode001:9083"\n  }\n')),(0,l.yg)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,l.yg)("p",null,"\u6211\u4eec\u6709\u4e00\u4e2a\u6e90\u8868\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"create table test_hive_source(\n     test_tinyint                          TINYINT,\n     test_smallint                       SMALLINT,\n     test_int                                INT,\n     test_bigint                           BIGINT,\n     test_boolean                       BOOLEAN,\n     test_float                             FLOAT,\n     test_double                         DOUBLE,\n     test_string                           STRING,\n     test_binary                          BINARY,\n     test_timestamp                  TIMESTAMP,\n     test_decimal                       DECIMAL(8,2),\n     test_char                             CHAR(64),\n     test_varchar                        VARCHAR(64),\n     test_date                             DATE,\n     test_array                            ARRAY<INT>,\n     test_map                              MAP<STRING, FLOAT>,\n     test_struct                           STRUCT<street:STRING, city:STRING, state:STRING, zip:INT>\n     )\nPARTITIONED BY (test_par1 STRING, test_par2 STRING);\n")),(0,l.yg)("p",null,"\u6211\u4eec\u9700\u8981\u4ece\u6e90\u8868\u8bfb\u53d6\u6570\u636e\u5e76\u5199\u5165\u53e6\u4e00\u4e2a\u8868\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"create table test_hive_sink_text_simple(\n     test_tinyint                          TINYINT,\n     test_smallint                       SMALLINT,\n     test_int                                INT,\n     test_bigint                           BIGINT,\n     test_boolean                       BOOLEAN,\n     test_float                             FLOAT,\n     test_double                         DOUBLE,\n     test_string                           STRING,\n     test_binary                          BINARY,\n     test_timestamp                  TIMESTAMP,\n     test_decimal                       DECIMAL(8,2),\n     test_char                             CHAR(64),\n     test_varchar                        VARCHAR(64),\n     test_date                             DATE\n     )\nPARTITIONED BY (test_par1 STRING, test_par2 STRING);\n")),(0,l.yg)("p",null,"\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env {\n  parallelism = 3\n  job.name="test_hive_source_to_hive"\n}\n\nsource {\n  Hive {\n    table_name = "test_hive.test_hive_source"\n    metastore_uri = "thrift://ctyun7:9083"\n  }\n}\n\nsink {\n  # \u9009\u62e9 stdout \u8f93\u51fa\u63d2\u4ef6\u5c06\u6570\u636e\u8f93\u51fa\u5230\u63a7\u5236\u53f0\n\n  Hive {\n    table_name = "test_hive.test_hive_sink_text_simple"\n    metastore_uri = "thrift://ctyun7:9083"\n    hive.hadoop.conf = {\n      bucket = "s3a://mybucket"\n      fs.s3a.aws.credentials.provider="com.amazonaws.auth.InstanceProfileCredentialsProvider"\n    }\n}\n')),(0,l.yg)("h3",{id:"\u793a\u4f8b-2kerberos"},"\u793a\u4f8b 2\uff1aKerberos"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'sink {\n  Hive {\n    table_name = "default.test_hive_sink_on_hdfs_with_kerberos"\n    metastore_uri = "thrift://metastore:9083"\n    hive_site_path = "/tmp/hive-site.xml"\n    kerberos_principal = "hive/metastore.seatunnel@EXAMPLE.COM"\n    kerberos_keytab_path = "/tmp/hive.keytab"\n    krb5_path = "/tmp/krb5.conf"\n  }\n}\n')),(0,l.yg)("p",null,"\u63cf\u8ff0\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"hive_site_path"),"\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"hive-site.xml")," \u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"kerberos_principal"),"\uff1aKerberos \u8ba4\u8bc1\u7684\u4e3b\u4f53\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"kerberos_keytab_path"),"\uff1aKerberos \u8ba4\u8bc1\u7684 keytab \u6587\u4ef6\u8def\u5f84\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"krb5_path"),"\uff1a\u7528\u4e8e Kerberos \u8ba4\u8bc1\u7684 ",(0,l.yg)("inlineCode",{parentName:"li"},"krb5.conf")," \u6587\u4ef6\u8def\u5f84\u3002")),(0,l.yg)("p",null,"\u8fd0\u884c\u6848\u4f8b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        pk_id = bigint\n        name = string\n        score = int\n      }\n      primaryKey {\n        name = "pk_id"\n        columnNames = [pk_id]\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [1, "A", 100]\n      },\n      {\n        kind = INSERT\n        fields = [2, "B", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      }\n    ]\n  }\n}\n\nsink {\n  Hive {\n    table_name = "default.test_hive_sink_on_hdfs_with_kerberos"\n    metastore_uri = "thrift://metastore:9083"\n    hive_site_path = "/tmp/hive-site.xml"\n    kerberos_principal = "hive/metastore.seatunnel@EXAMPLE.COM"\n    kerberos_keytab_path = "/tmp/hive.keytab"\n    krb5_path = "/tmp/krb5.conf"\n  }\n}\n')),(0,l.yg)("h2",{id:"hive-on-s3"},"Hive on s3"),(0,l.yg)("h3",{id:"\u6b65\u9aa4-1"},"\u6b65\u9aa4 1"),(0,l.yg)("p",null,"\u4e3a EMR \u7684 Hive \u521b\u5efa lib \u76ee\u5f55\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ${SEATUNNEL_HOME}/plugins/Hive/lib\n")),(0,l.yg)("h3",{id:"\u6b65\u9aa4-2"},"\u6b65\u9aa4 2"),(0,l.yg)("p",null,"\u4ece Maven \u4e2d\u5fc3\u83b7\u53d6 jar \u6587\u4ef6\u5230 lib\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd ${SEATUNNEL_HOME}/plugins/Hive/lib\nwget https://repo1.maven.org/maven2/org/apache/hadoop/hadoop-aws/2.6.5/hadoop-aws-2.6.5.jar\nwget https://repo1.maven.org/maven2/org/apache/hive/hive-exec/2.3.9/hive-exec-2.3.9.jar\n")),(0,l.yg)("h3",{id:"\u6b65\u9aa4-3"},"\u6b65\u9aa4 3"),(0,l.yg)("p",null,"\u4ece\u60a8\u7684 EMR \u73af\u5883\u4e2d\u590d\u5236 jar \u6587\u4ef6\u5230 lib \u76ee\u5f55\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cp /usr/share/aws/emr/emrfs/lib/emrfs-hadoop-assembly-2.60.0.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\ncp /usr/share/aws/emr/hadoop-state-pusher/lib/hadoop-common-3.3.6-amzn-1.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\ncp /usr/share/aws/emr/hadoop-state-pusher/lib/javax.inject-1.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\ncp /usr/share/aws/emr/hadoop-state-pusher/lib/aopalliance-1.0.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\n")),(0,l.yg)("h3",{id:"\u6b65\u9aa4-4"},"\u6b65\u9aa4 4"),(0,l.yg)("p",null,"\u8fd0\u884c\u6848\u4f8b\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        pk_id = bigint\n        name = string\n        score = int\n      }\n      primaryKey {\n        name = "pk_id"\n        columnNames = [pk_id]\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [1, "A", 100]\n      },\n      {\n        kind = INSERT\n        fields = [2, "B", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      }\n    ]\n  }\n}\n\nsink {\n  Hive {\n    table_name = "test_hive.test_hive_sink_on_s3"\n    metastore_uri = "thrift://ip-192-168-0-202.cn-north-1.compute.internal:9083"\n    hive.hadoop.conf-path = "/home/ec2-user/hadoop-conf"\n    hive.hadoop.conf = {\n       bucket="s3://ws-package"\n       fs.s3a.aws.credentials.provider="com.amazonaws.auth.InstanceProfileCredentialsProvider"\n    }\n  }\n}\n')),(0,l.yg)("h2",{id:"hive-on-oss"},"Hive on oss"),(0,l.yg)("h3",{id:"\u6b65\u9aa4-1-1"},"\u6b65\u9aa4 1"),(0,l.yg)("p",null,"\u4e3a EMR \u7684 Hive \u521b\u5efa lib \u76ee\u5f55\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ${SEATUNNEL_HOME}/plugins/Hive/lib\n")),(0,l.yg)("h3",{id:"\u6b65\u9aa4-2-1"},"\u6b65\u9aa4 2"),(0,l.yg)("p",null,"\u4ece Maven \u4e2d\u5fc3\u83b7\u53d6 jar \u6587\u4ef6\u5230 lib\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd ${SEATUNNEL_HOME}/plugins/Hive/lib\nwget https://repo1.maven.org/maven2/org/apache/hive/hive-exec/2.3.9/hive-exec-2.3.9.jar\n")),(0,l.yg)("h3",{id:"\u6b65\u9aa4-3-1"},"\u6b65\u9aa4 3"),(0,l.yg)("p",null,"\u4ece\u60a8\u7684 EMR \u73af\u5883\u4e2d\u590d\u5236 jar \u6587\u4ef6\u5230 lib \u76ee\u5f55\u5e76\u5220\u9664\u51b2\u7a81\u7684 jar\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cp -r /opt/apps/JINDOSDK/jindosdk-current/lib/jindo-*.jar ${SEATUNNEL_HOME}/plugins/Hive/lib\nrm -f ${SEATUNNEL_HOME}/lib/hadoop-aliyun-*.jar\n")),(0,l.yg)("h3",{id:"\u6b65\u9aa4-4-1"},"\u6b65\u9aa4 4"),(0,l.yg)("p",null,"\u8fd0\u884c\u6848\u4f8b\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        pk_id = bigint\n        name = string\n        score = int\n      }\n      primaryKey {\n        name = "pk_id"\n        columnNames = [pk_id]\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [1, "A", 100]\n      },\n      {\n        kind = INSERT\n        fields = [2, "B", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      }\n    ]\n  }\n}\n\nsink {\n  Hive {\n    table_name = "test_hive.test_hive_sink_on_oss"\n    metastore_uri = "thrift://master-1-1.c-1009b01725b501f2.cn-wulanchabu.emr.aliyuncs.com:9083"\n    hive.hadoop.conf-path = "/tmp/hadoop"\n    hive.hadoop.conf = {\n        bucket="oss://emr-osshdfs.cn-wulanchabu.oss-dls.aliyuncs.com"\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,l.yg)("p",null,"\u6211\u4eec\u6709\u591a\u4e2a\u6e90\u8868\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"create table test_1(\n)\nPARTITIONED BY (xx);\n\ncreate table test_2(\n)\nPARTITIONED BY (xx);\n...\n")),(0,l.yg)("p",null,"\u6211\u4eec\u9700\u8981\u4ece\u8fd9\u4e9b\u6e90\u8868\u8bfb\u53d6\u6570\u636e\u5e76\u5199\u5165\u5176\u4ed6\u8868\uff1a"),(0,l.yg)("p",null,"\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env {\n  # \u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u8bbe\u7f6e Flink \u914d\u7f6e\n  parallelism = 3\n  job.name="test_hive_source_to_hive"\n}\n\nsource {\n  Hive {\n    tables_configs = [\n      {\n        table_name = "test_hive.test_1"\n        metastore_uri = "thrift://ctyun6:9083"\n      },\n      {\n        table_name = "test_hive.test_2"\n        metastore_uri = "thrift://ctyun7:9083"\n      }\n    ]\n  }\n}\n\nsink {\n  # \u9009\u62e9 stdout \u8f93\u51fa\u63d2\u4ef6\u5c06\u6570\u636e\u8f93\u51fa\u5230\u63a7\u5236\u53f0\n  Hive {\n    table_name = "${database_name}.${table_name}"\n    metastore_uri = "thrift://ctyun7:9083"\n  }\n}\n')))}d.isMDXComponent=!0}}]);