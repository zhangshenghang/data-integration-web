"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[26221],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>u});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=s(a),c=l,u=g["".concat(p,".").concat(c)]||g[c]||d[c]||r;return a?t.createElement(u,o(o({ref:n},m),{},{components:a})):t.createElement(u,o({ref:n},m))}));function u(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[g]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},130:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=a(58168),l=(a(96540),a(15680));const r={},o="Paimon",i={unversionedId:"connector-v2/sink/Paimon",id:"connector-v2/sink/Paimon",title:"Paimon",description:"Paimon \u6570\u636e\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Paimon.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Paimon",permalink:"/zh-CN/docs/connector-v2/sink/Paimon",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Paimon.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"OssJindoFile",permalink:"/zh-CN/docs/connector-v2/sink/OssJindoFile"},next:{title:"Phoenix",permalink:"/zh-CN/docs/connector-v2/sink/Phoenix"}},p={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",level:2},{value:"\u6570\u636e\u6e90\u4f9d\u8d56",id:"\u6570\u636e\u6e90\u4f9d\u8d56",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u8fde\u63a5\u5668\u9009\u9879",id:"\u8fde\u63a5\u5668\u9009\u9879",level:2},{value:"\u66f4\u65b0\u65e5\u5fd7",id:"\u66f4\u65b0\u65e5\u5fd7",level:2},{value:"\u6587\u4ef6\u7cfb\u7edf",id:"\u6587\u4ef6\u7cfb\u7edf",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5355\u8868",id:"\u5355\u8868",level:3},{value:"\u5355\u8868(\u57fa\u4e8eS3\u6587\u4ef6\u7cfb\u7edf)",id:"\u5355\u8868\u57fa\u4e8es3\u6587\u4ef6\u7cfb\u7edf",level:3},{value:"\u5355\u8868(\u6307\u5b9ahadoop HA\u914d\u7f6e\u548ckerberos\u914d\u7f6e)",id:"\u5355\u8868\u6307\u5b9ahadoop-ha\u914d\u7f6e\u548ckerberos\u914d\u7f6e",level:3},{value:"\u5355\u8868(\u4f7f\u7528Hive catalog)",id:"\u5355\u8868\u4f7f\u7528hive-catalog",level:3},{value:"\u6307\u5b9apaimon\u7684\u5199\u5c5e\u6027\u7684\u5355\u8868",id:"\u6307\u5b9apaimon\u7684\u5199\u5c5e\u6027\u7684\u5355\u8868",level:3},{value:"\u4f7f\u7528<code>changelog-producer</code>\u5c5e\u6027\u5199\u5165",id:"\u4f7f\u7528changelog-producer\u5c5e\u6027\u5199\u5165",level:4},{value:"\u52a8\u6001\u5206\u6876paimon\u5355\u8868",id:"\u52a8\u6001\u5206\u6876paimon\u5355\u8868",level:3},{value:"\u6838\u5fc3\u53c2\u6570\uff1a\u53c2\u8003\u5b98\u7f51",id:"\u6838\u5fc3\u53c2\u6570\u53c2\u8003\u5b98\u7f51",level:4},{value:"\u591a\u8868",id:"\u591a\u8868",level:3},{value:"\u793a\u4f8b1",id:"\u793a\u4f8b1",level:4},{value:"\u793a\u4f8b2",id:"\u793a\u4f8b2",level:4}],m={toc:s},g="wrapper";function d(e){let{components:n,...a}=e;return(0,l.yg)(g,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"paimon"},"Paimon"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Paimon \u6570\u636e\u8fde\u63a5\u5668")),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"Apache Paimon\u6570\u636e\u8fde\u63a5\u5668\u3002\u652f\u6301cdc\u5199\u4ee5\u53ca\u81ea\u52a8\u5efa\u8868\u3002"),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,l.yg)("th",{parentName:"tr",align:null},"\u4f9d\u8d56"),(0,l.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Paimon"),(0,l.yg)("td",{parentName:"tr",align:null},"hive-exec"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.hive/hive-exec"},"Download"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Paimon"),(0,l.yg)("td",{parentName:"tr",align:null},"libfb303"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.thrift/libfb303"},"Download"))))),(0,l.yg)("h2",{id:"\u6570\u636e\u6e90\u4f9d\u8d56"},"\u6570\u636e\u6e90\u4f9d\u8d56"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u517c\u5bb9\u4e0d\u540c\u7248\u672c\u7684Hadoop\u548cHive\uff0c\u5728\u9879\u76eepom\u6587\u4ef6\u4e2dHive -exec\u7684\u4f5c\u7528\u57df\u4e3aprovided\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u4f7f\u7528Flink\u5f15\u64ce\uff0c\u9996\u5148\u53ef\u80fd\u9700\u8981\u5c06\u4ee5\u4e0bJar\u5305\u6dfb\u52a0\u5230<FLINK_HOME>/lib\u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u60a8\u4f7f\u7528Spark\u5f15\u64ce\u5e76\u4e0eHadoop\u96c6\u6210\uff0c\u5219\u4e0d\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0bJar\u5305\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"hive-exec-xxx.jar\nlibfb303-xxx.jar\n")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6709\u4e9b\u7248\u672c\u7684hive-exec\u5305\u6ca1\u6709libfb303-xxx.jar\uff0c\u6240\u4ee5\u60a8\u8fd8\u9700\u8981\u624b\u52a8\u5bfc\u5165Jar\u5305\u3002")),(0,l.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("h2",{id:"\u8fde\u63a5\u5668\u9009\u9879"},"\u8fde\u63a5\u5668\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"warehouse"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Paimon warehouse\u8def\u5f84")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"catalog_type"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"filesystem"),(0,l.yg)("td",{parentName:"tr",align:null},"Paimon\u7684catalog\u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301filesystem\u548chive")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"catalog_uri"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Paimon catalog\u7684uri\uff0c\u4ec5\u5f53catalog_type\u4e3ahive\u65f6\u9700\u8981\u914d\u7f6e")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8868\u540d")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"hdfs-site.xml\u6587\u4ef6\u8def\u5f84")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"\u679a\u4e3e"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,l.yg)("td",{parentName:"tr",align:null},"Schema\u4fdd\u5b58\u6a21\u5f0f")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"\u679a\u4e3e"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u4fdd\u5b58\u6a21\u5f0f")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"paimon.table.primary-keys"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e3b\u952e\u5b57\u6bb5\u5217\u8868\uff0c\u8054\u5408\u4e3b\u952e\u4f7f\u7528\u9017\u53f7\u5206\u9694(\u6ce8\u610f\uff1a\u5206\u533a\u5b57\u6bb5\u9700\u8981\u5305\u542b\u5728\u4e3b\u952e\u5b57\u6bb5\u4e2d)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"paimon.table.partition-keys"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5206\u533a\u5b57\u6bb5\u5217\u8868\uff0c\u591a\u5b57\u6bb5\u4f7f\u7528\u9017\u53f7\u5206\u9694")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"paimon.table.write-props"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Paimon\u8868\u521d\u59cb\u5316\u6307\u5b9a\u7684\u5c5e\u6027, ",(0,l.yg)("a",{parentName:"td",href:"https://paimon.apache.org/docs/master/maintenance/configurations/#coreoptions"},"\u53c2\u8003"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u6587\u4ef6\u5c5e\u6027\u4fe1\u606f")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf-path"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\uff0c\u7528\u4e8e\u52a0\u8f7d'core-site.xml', 'hdfs-site.xml', 'hive-site.xml'\u6587\u4ef6\u914d\u7f6e")))),(0,l.yg)("h2",{id:"\u66f4\u65b0\u65e5\u5fd7"},"\u66f4\u65b0\u65e5\u5fd7"),(0,l.yg)("p",null,"\u4f60\u5fc5\u987b\u914d\u7f6e",(0,l.yg)("inlineCode",{parentName:"p"},"changelog-producer=input"),"\u6765\u542f\u7528paimon\u8868\u7684changelog\u4ea7\u751f\u6a21\u5f0f\u3002\u5982\u679c\u4f60\u4f7f\u7528\u4e86paimon sink\u7684\u81ea\u52a8\u5efa\u8868\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5728",(0,l.yg)("inlineCode",{parentName:"p"},"paimon.table.write-props"),"\u4e2d\u6307\u5b9a\u8fd9\u4e2a\u5c5e\u6027\u3002"),(0,l.yg)("p",null,"Paimon\u8868\u7684changelog\u4ea7\u751f\u6a21\u5f0f\u6709",(0,l.yg)("a",{parentName:"p",href:"https://paimon.apache.org/docs/master/primary-key-table/changelog-producer/"},"\u56db\u79cd"),"\uff0c\u5206\u522b\u662f",(0,l.yg)("inlineCode",{parentName:"p"},"none"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"input"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"lookup")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"full-compaction"),"\u3002"),(0,l.yg)("p",null,"\u76ee\u524d\u652f\u6301\u5168\u90e8",(0,l.yg)("inlineCode",{parentName:"p"},"changelog-producer"),"\u6a21\u5f0f\u3002\u9ed8\u8ba4\u662f",(0,l.yg)("inlineCode",{parentName:"p"},"none"),"\u6a21\u5f0f\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://paimon.apache.org/docs/master/primary-key-table/changelog-producer/#none"},(0,l.yg)("inlineCode",{parentName:"a"},"none"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://paimon.apache.org/docs/master/primary-key-table/changelog-producer/#input"},(0,l.yg)("inlineCode",{parentName:"a"},"input"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://paimon.apache.org/docs/master/primary-key-table/changelog-producer/#lookup"},(0,l.yg)("inlineCode",{parentName:"a"},"lookup"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://paimon.apache.org/docs/master/primary-key-table/changelog-producer/#full-compaction"},(0,l.yg)("inlineCode",{parentName:"a"},"full-compaction")),(0,l.yg)("blockquote",{parentName:"li"},(0,l.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\n\u5f53\u4f60\u4f7f\u7528\u6d41\u6a21\u5f0f\u53bb\u8bfbpaimon\u8868\u7684\u6570\u636e\u65f6\uff0c\u4e0d\u540c\u6a21\u5f0f\u5c06\u4f1a\u4ea7\u751f",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/source/Paimon.md#changelog"},"\u4e0d\u540c\u7684\u7ed3\u679c"),"\u3002")))),(0,l.yg)("h2",{id:"\u6587\u4ef6\u7cfb\u7edf"},"\u6587\u4ef6\u7cfb\u7edf"),(0,l.yg)("p",null,"Paimon\u8fde\u63a5\u5668\u652f\u6301\u5411\u591a\u6587\u4ef6\u7cfb\u7edf\u5199\u5165\u6570\u636e\u3002\u76ee\u524d\u652f\u6301\u7684\u6587\u4ef6\u7cfb\u7edf\u6709hdfs\u548cs3\u3002\n\u5982\u679c\u60a8\u4f7f\u7528s3\u6587\u4ef6\u7cfb\u7edf\u3002\u60a8\u53ef\u4ee5\u914d\u7f6e",(0,l.yg)("inlineCode",{parentName:"p"},"fs.s3a.access-key "),"\uff0c ",(0,l.yg)("inlineCode",{parentName:"p"},"fs.s3a.secret-key"),"\uff0c ",(0,l.yg)("inlineCode",{parentName:"p"},"fs.s3a.endpoint"),"\uff0c ",(0,l.yg)("inlineCode",{parentName:"p"},"fs.s3a.path.style.access"),"\uff0c ",(0,l.yg)("inlineCode",{parentName:"p"},"fs.s3a.aws.credentials"),"\u3002\u5728",(0,l.yg)("inlineCode",{parentName:"p"},"paimon.hadoop.conf"),"\u9009\u9879\u4e2d\u8bbe\u7f6e\u63d0\u4f9b\u7a0b\u5e8f\u7684\u5c5e\u6027\u3002\n\u9664\u6b64\u4e4b\u5916\uff0cwarehouse\u5e94\u8be5\u4ee5",(0,l.yg)("inlineCode",{parentName:"p"},"s3a://"),"\u5f00\u5934\u3002"),(0,l.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u5355\u8868"},"\u5355\u8868"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n  }\n}\n')),(0,l.yg)("h3",{id:"\u5355\u8868\u57fa\u4e8es3\u6587\u4ef6\u7cfb\u7edf"},"\u5355\u8868(\u57fa\u4e8eS3\u6587\u4ef6\u7cfb\u7edf)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_bytes = bytes\n        c_date = date\n        c_decimal = "decimal(38, 18)"\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\nsink {\n  Paimon {\n    warehouse = "s3a://test/"\n    database = "seatunnel_namespace11"\n    table = "st_test"\n    paimon.hadoop.conf = {\n        fs.s3a.access-key=G52pnxg67819khOZ9ezX\n        fs.s3a.secret-key=SHJuAQqHsLrgZWikvMa3lJf5T0NfM5LMFliJh9HF\n        fs.s3a.endpoint="http://minio4:9000"\n        fs.s3a.path.style.access=true\n        fs.s3a.aws.credentials.provider=org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"\u5355\u8868\u6307\u5b9ahadoop-ha\u914d\u7f6e\u548ckerberos\u914d\u7f6e"},"\u5355\u8868(\u6307\u5b9ahadoop HA\u914d\u7f6e\u548ckerberos\u914d\u7f6e)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="hdfs:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n    paimon.hadoop.conf = {\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n      security.kerberos.login.principal = "your-kerberos-principal"\n      security.kerberos.login.keytab = "your-kerberos-keytab-path"\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"\u5355\u8868\u4f7f\u7528hive-catalog"},"\u5355\u8868(\u4f7f\u7528Hive catalog)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        pk_id = bigint\n        name = string\n        score = int\n      }\n      primaryKey {\n        name = "pk_id"\n        columnNames = [pk_id]\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [1, "A", 100]\n      },\n      {\n        kind = INSERT\n        fields = [2, "B", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      }\n      {\n        kind = UPDATE_BEFORE\n        fields = [1, "A", 100]\n      },\n      {\n        kind = UPDATE_AFTER\n        fields = [1, "A_1", 100]\n      },\n      {\n        kind = DELETE\n        fields = [2, "B", 100]\n      }\n    ]\n  }\n}\n\nsink {\n  Paimon {\n    schema_save_mode = "RECREATE_SCHEMA"\n    catalog_name="seatunnel_test"\n    catalog_type="hive"\n    catalog_uri="thrift://hadoop04:9083"\n    warehouse="hdfs:///tmp/seatunnel"\n    database="seatunnel_test"\n    table="st_test3"\n    paimon.hadoop.conf = {\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n    }\n  }\n}\n\n')),(0,l.yg)("h3",{id:"\u6307\u5b9apaimon\u7684\u5199\u5c5e\u6027\u7684\u5355\u8868"},"\u6307\u5b9apaimon\u7684\u5199\u5c5e\u6027\u7684\u5355\u8868"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n    paimon.table.write-props = {\n        bucket = 2\n        file.format = "parquet"\n    }\n    paimon.table.partition-keys = "dt"\n    paimon.table.primary-keys = "pk_id,dt"\n  }\n}\n')),(0,l.yg)("h4",{id:"\u4f7f\u7528changelog-producer\u5c5e\u6027\u5199\u5165"},"\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"h4"},"changelog-producer"),"\u5c5e\u6027\u5199\u5165"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n parallelism = 1\n job.mode = "STREAMING"\n checkpoint.interval = 5000\n}\n\nsource {\n Mysql-CDC {\n  base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n  username = "root"\n  password = "******"\n  table-names = ["seatunnel.role"]\n }\n}\n\nsink {\n Paimon {\n  catalog_name = "seatunnel_test"\n  warehouse = "file:///tmp/seatunnel/paimon/hadoop-sink/"\n  database = "seatunnel"\n  table = "role"\n  paimon.table.write-props = {\n   changelog-producer = full-compaction\n   changelog-tmp-path = /tmp/paimon/changelog\n  }\n }\n}\n')),(0,l.yg)("h3",{id:"\u52a8\u6001\u5206\u6876paimon\u5355\u8868"},"\u52a8\u6001\u5206\u6876paimon\u5355\u8868"),(0,l.yg)("p",null,"\u53ea\u6709\u5728\u4e3b\u952e\u8868\u5e76\u6307\u5b9abucket = -1\u65f6\u624d\u4f1a\u751f\u6548"),(0,l.yg)("h4",{id:"\u6838\u5fc3\u53c2\u6570\u53c2\u8003\u5b98\u7f51"},"\u6838\u5fc3\u53c2\u6570\uff1a",(0,l.yg)("a",{parentName:"h4",href:"https://paimon.apache.org/docs/master/primary-key-table/data-distribution/#dynamic-bucket"},"\u53c2\u8003\u5b98\u7f51")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dynamic-bucket.target-row-num"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"2000000L"),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236\u4e00\u4e2abucket\u7684\u5199\u5165\u7684\u884c\u6570")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dynamic-bucket.initial-buckets"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236\u521d\u59cb\u5316\u6876\u7684\u6570\u91cf")))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n    paimon.table.write-props = {\n        bucket = -1\n        dynamic-bucket.target-row-num = 50000\n    }\n    paimon.table.partition-keys = "dt"\n    paimon.table.primary-keys = "pk_id,dt"\n  }\n}\n')),(0,l.yg)("h3",{id:"\u591a\u8868"},"\u591a\u8868"),(0,l.yg)("h4",{id:"\u793a\u4f8b1"},"\u793a\u4f8b1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role","seatunnel.user","galileo.Bucket"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="${database_name}"\n    table="${table_name}"\n  }\n}\n')),(0,l.yg)("h4",{id:"\u793a\u4f8b2"},"\u793a\u4f8b2"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Jdbc {\n    driver = oracle.jdbc.driver.OracleDriver\n    url = "jdbc:oracle:thin:@localhost:1521/XE"\n    user = testUser\n    password = testPassword\n\n    table_list = [\n      {\n        table_path = "TESTSCHEMA.TABLE_1"\n      },\n      {\n        table_path = "TESTSCHEMA.TABLE_2"\n      }\n    ]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="${schema_name}_test"\n    table="${table_name}_test"\n  }\n}\n')))}d.isMDXComponent=!0}}]);