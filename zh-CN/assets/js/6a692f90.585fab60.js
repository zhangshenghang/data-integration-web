"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[71316],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return t?o.createElement(h,i(i({ref:n},u),{},{components:t})):o.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(58168),a=(t(96540),t(15680));const r={},i="SeaTunnel 2.3.1 is released! The refactored AI Compatible feature allows ChatGPT to automatically generate Connector code",s={permalink:"/zh-CN/blog/2023/3/31/SeaTunnel_2_3_1_Released_Refactored_AI_Compatible_Feature_Allows_ChatGPT_Automatic_Get",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2023-3-31-SeaTunnel_2_3_1_Released_Refactored_AI_Compatible_Feature_Allows_ChatGPT_Automatic_Get.md",source:"@site/blog/2023-3-31-SeaTunnel_2_3_1_Released_Refactored_AI_Compatible_Feature_Allows_ChatGPT_Automatic_Get.md",title:"SeaTunnel 2.3.1 is released! The refactored AI Compatible feature allows ChatGPT to automatically generate Connector code",description:"SeaTunnel version 2.3.1 was released recently. This is a high-profile release with many important function updates and optimizations.",date:"2023-03-31T00:00:00.000Z",formattedDate:"2023\u5e743\u670831\u65e5",tags:[],readingTime:4.965,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Performance Test Report: SeaTunnel Synchronizes data in batches 420% Faster than GLUE!",permalink:"/zh-CN/blog/2023/3/29/Performance_Test_Report_SeaTunnel_Synchronizes_Data_in_Batches_420_Percent_Faster_than_GLUE.md"}},c={authorsImageUrls:[]},l=[{value:"01 SeaTunnel Zeta",id:"01-seatunnel-zeta",level:2},{value:"02 AI Compatible",id:"02-ai-compatible",level:2},{value:"01 7+ new connectors",id:"01-7-new-connectors",level:2},{value:"02 Reimplement SQL Transform",id:"02-reimplement-sql-transform",level:2},{value:"03 New SQL Server CDC",id:"03-new-sql-server-cdc",level:2},{value:"04 Added CDC connector to output debezium-json format function",id:"04-added-cdc-connector-to-output-debezium-json-format-function",level:2}],u={toc:l},d="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,o.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("em",{parentName:"p"},"SeaTunnel version 2.3.1 was released recently. This is a high-profile release with many important function updates and optimizations."),"\n",(0,a.yg)("em",{parentName:"p"},"At the level of programming user experience, the new version improves the stability of SeaTunnel Zeta and CI/CD; at the level of connectors, the new version implements 7+ new connectors and fixes existing commonly used connectors bugs, and improved security. The community refactored multiple underlying base classes and added an important feature, AI Compatible. With the optimized API, users can use ChatGPT 4.0 to quickly build the SaaS Connector they need.")),(0,a.yg)("h1",{parentName:"blockquote",id:"major-feature-update"},"Major Feature update")),(0,a.yg)("h2",{id:"01-seatunnel-zeta"},"01 SeaTunnel Zeta"),(0,a.yg)("p",null,"The first version of the data integration engine-SeaTunnel Zeta is introduced in the SeaTunnel 2.3.0 release and has received feedback from numerous community users. In SeaTunnel version 2.3.1, we have fixed all the bugs reported by users, optimized the use of memory and threads, and greatly improved the stability of Zeta."),(0,a.yg)("p",null,"In version 2.3.1, the community also added several new Zeta features, including a dedicated JVM parameter configuration file, client output of job monitoring information, Rest API for Zeta cluster information and job information, etc."),(0,a.yg)("p",null,"At the checkpoint level, version 2.3.1 Zeta supports using OSS as checkpoint storage. It also supports savepoint running jobs and resuming jobs from savepoints."),(0,a.yg)("p",null,"In addition, version 2.3.1 also adds a set of Zeta\u2019s Rest API, which can be used to obtain the list of jobs running on Zeta, the status information of jobs, and the monitoring indicators of Zeta cluster nodes. For specific usage methods, please refer to\xa0",(0,a.yg)("strong",{parentName:"p"},"https:/ /seatunnel.apache.org/docs/seatunnel-engine/rest-api/")),(0,a.yg)("h2",{id:"02-ai-compatible"},"02 AI Compatible"),(0,a.yg)("p",null,"In SeaTunnel 2.3.1, the HTTP interface and related APIs are reconstructed, and the SaaS Connector-related API and Connector construction process are simplified according to the existing xGPT level capabilities so that ChatGPT 4.0 can directly generate SaaS Connectors and quickly generate various SaaS Connector interfaces. Under normal circumstances, the results obtained by this method are 95% similar to the code written by open-source contributors (see appendix)."),(0,a.yg)("p",null,"Of course, because ChatGPT4.0 will be updated in October 2021, it is necessary to provide some latest vectorized documents for the latest SaaS interface adaptation to have the latest interface adaptation. However, this refactored API and code framework allows users to generate Connectors more quickly and contribute to the open-source community, making the SeaTunnel interface more powerful."),(0,a.yg)("h1",{id:"connector"},"Connector"),(0,a.yg)("h2",{id:"01-7-new-connectors"},"01 7+ new connectors"),(0,a.yg)("p",null,"While fixing the bugs of known connectors and optimizing the connectors, the community has added 7 new connectors including SAP HANA, Persistiq, TDEngine, SelectDB Cloud, Hbase, FieldMapper Transform, and SimpleSQL Transform."),(0,a.yg)("h2",{id:"02-reimplement-sql-transform"},"02 Reimplement SQL Transform"),(0,a.yg)("p",null,"Since the previous SQL Transform connector was defined based on Flink SQL and Spark SQL, SQL Transform cannot adapt to the execution of multiple engines, so we removed the SQL Transform function in version 2.3.0. In version 2.3.1, we reimplemented SQL Transform. SQL Transform is an API that does not depend on a task-specific execution engine and can perfectly run on three different engines: Flink/Spark/Zeta. Special thanks to contributor Ma Chengyuan (GitHub ID: rewerma) for leading and contributing this important Feature."),(0,a.yg)("p",null,"For the functions already supported by SQL Transform, please refer to\xa0",(0,a.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/2.3.1/transform-v2/sql-functions"},"https://seatunnel.apache.org/docs/2.3.1/transform-v2/sql-functions")),(0,a.yg)("h2",{id:"03-new-sql-server-cdc"},"03 New SQL Server CDC"),(0,a.yg)("p",null,"At the CDC connector level, the community has newly added a SQL Server CDC connector, and made a lot of optimizations to MySQL CDC, improving the stability of MySQL CDC."),(0,a.yg)("h2",{id:"04-added-cdc-connector-to-output-debezium-json-format-function"},"04 Added CDC connector to output debezium-json format function"),(0,a.yg)("p",null,"In addition, version 2.3.1 also added the function of the CDC connector to output debezium-json format. Users can use MySQL CDC to read binlog and output data in debezium-json format to Kafka, so that users can create new synchronization tasks to read The data in debezium-json format in Kafka is synchronized to the target data source, or you can directly write other programs to read the data in debezium-json format in Kafka to perform some indicator calculations."),(0,a.yg)("h1",{id:"safety"},"Safety"),(0,a.yg)("p",null,"Before version 2.3.1, users need to configure the database username, password, and other information in plain text in the config file, which may cause some security problems. In version 2.3.1, we added the configuration file encryption function, and users can fill in the encrypted database username, password, and other information in the config file. When the job is running, SeaTunnel will decrypt the content in the config file based on the default encryption and decryption algorithm. At the same time, the encryption function provides SPI, by which users can customize the parameter list of encryption and decryption and the algorithm of encryption and decryption based on their own needs."),(0,a.yg)("p",null,"For how to use this function, please refer to\xa0",(0,a.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/2.3.1/connector-v2/Config-Encryption-Decryption"},"https://seatunnel.apache.org/docs/2.3.1/connector-v2/Config-Encryption-Decryption")),(0,a.yg)("h1",{id:"third-party-engine-support"},"Third-party engine support"),(0,a.yg)("p",null,"SeaTunnel version 2.3.1 supports Spark version 3.3, as well as Flink 1.14.6, Flink 1.15, Flink 1.16, and other versions, basically covering the mainstream versions of Spark and Flink."),(0,a.yg)("h1",{id:"client"},"Client"),(0,a.yg)("p",null,"The new version introduces an SPI for job configuration. Previously, only hocon json configuration files were supported. Now SPI is opened to the users to customize the format of job configuration files to meet different business system integration requirements."),(0,a.yg)("h1",{id:"optimization"},"Optimization"),(0,a.yg)("p",null,"SeaTunnel 2.1.3 version has made many important optimizations, including changes in core components, connector components, CI/CD, Zeta(ST-Engine), and E2E components, involving updating new functions, improving existing functions, and optimizing tests and deployment processes. Some notable changes include adding parallelism and column projection interfaces in Core API, introducing MySQL-CDC source factory in Connector-V2 and supporting only-once semantics for JDBC source connectors, improving CI/CD process and stability for E2E In Zeta (ST-Engine), the logic of restarting the job when all nodes are down is added, and the timeout period for writing data is configurable."),(0,a.yg)("p",null,"For a detailed list, see the Release Note ","[Improve]"," section."),(0,a.yg)("h1",{id:"document"},"Document"),(0,a.yg)("p",null,"In addition, the new version also has a series of updates to the documentation, including adding transform v2 documentation and some hints, as well as improving the documentation of various connectors."),(0,a.yg)("p",null,"See the Release Note ","[Docs]"," section for details."),(0,a.yg)("p",null,"Document address:\xa0",(0,a.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/versions/"},"https://seatunnel.apache.org/versions/")),(0,a.yg)("h1",{id:"release-note"},"Release Note"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/blob/2.3.1/release-note.md"},"https://github.com/apache/incubator-seatunnel/blob/2.3.1/release-note.md")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Project address:\xa0",(0,a.yg)("a",{parentName:"li",href:"https://seatunnel.apache.org/"},"https://seatunnel.apache.org/")),(0,a.yg)("li",{parentName:"ul"},"Download address:\xa0",(0,a.yg)("a",{parentName:"li",href:"https://seatunnel.apache.org/download"},"https://seatunnel.apache.org/download"))),(0,a.yg)("h1",{id:"acknowledgement-to-the-contributors"},"Acknowledgement to the contributors"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"contributors",src:t(12261).A,width:"687",height:"712"})))}p.isMDXComponent=!0},12261:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/contributors-d048b07cc9a14c93d2d0ac41bdaae446.png"}}]);