"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[43351],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(t),p=o,g=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},10938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(58168),o=(t(96540),t(15680));const i={slug:"Reveal the core design of the SeaTunnel Zeta synchronization engine!",title:"In the recently released SeaTunnel 2.3.0 official version",tags:["Meetup"]},r="Reveal the core design of the SeaTunnel Zeta synchronization engine!",s={permalink:"/blog/Reveal the core design of the SeaTunnel Zeta synchronization engine!",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2023-01-10-Reveal-the-core-design-of-the-SeaTunnel-Zeta-synchronization-engine.md",source:"@site/blog/2023-01-10-Reveal-the-core-design-of-the-SeaTunnel-Zeta-synchronization-engine.md",title:"In the recently released SeaTunnel 2.3.0 official version",description:"In the recently released SeaTunnel 2.3.0 official version, the community self-developed engine SeaTunnel Zeta which has been under preparation for more than a year\u2014\u2014is officially released, and it will be used as the default engine of SeaTunnel in the future, providing users with high throughput, low latency, reliable consistent synchronization job operation guarantee.",date:"2023-01-10T00:00:00.000Z",formattedDate:"January 10, 2023",tags:[{label:"Meetup",permalink:"/blog/tags/meetup"}],readingTime:11.495,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"Reveal the core design of the SeaTunnel Zeta synchronization engine!",title:"In the recently released SeaTunnel 2.3.0 official version",tags:["Meetup"]},prevItem:{title:"SeaTunnel now supports CDC (Capture Change Data) writing by ClickHouse Connector!",permalink:"/blog/2023/02/09/SeaTunnel_Now_Supports_CDC_Writing_by_ClickHouse_Connector.md"},nextItem:{title:"SeaTunnel supports IoTDB to implement IoT data synchronization",permalink:"/blog/Apache IoTDB (Internet of Things Database) is a software system that integrates the collection"}},l={authorsImageUrls:[]},u=[{value:"01 Why develop our engine",id:"01-why-develop-our-engine",level:2},{value:"02 Design ideas",id:"02-design-ideas",level:2},{value:"03 Architecture design",id:"03-architecture-design",level:2},{value:"Coordinator Service",id:"coordinator-service",level:3},{value:"TaskExecutionService",id:"taskexecutionservice",level:3},{value:"SlotService",id:"slotservice",level:3},{value:"04 Unique advantages and features",id:"04-unique-advantages-and-features",level:2},{value:"Autonomous cluster",id:"autonomous-cluster",level:3},{value:"Data cache",id:"data-cache",level:3},{value:"Speed control",id:"speed-control",level:3},{value:"Shared connection pool to reduce database pressure",id:"shared-connection-pool-to-reduce-database-pressure",level:3},{value:"Breakpoint resume (incremental/full volume)",id:"breakpoint-resume-incrementalfull-volume",level:3},{value:"The Schema revolution route",id:"the-schema-revolution-route",level:3},{value:"Fine-grained fault-tolerant design",id:"fine-grained-fault-tolerant-design",level:3},{value:"Dynamically share threads to reduce resource usage",id:"dynamically-share-threads-to-reduce-resource-usage",level:3},{value:"05 Basic functions and features",id:"05-basic-functions-and-features",level:2},{value:"06 Future optimization plan",id:"06-future-optimization-plan",level:2}],c={toc:u},h="wrapper";function d(e){let{components:n,...i}=e;return(0,o.yg)(h,(0,a.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(39512).A,width:"900",height:"383"})),(0,o.yg)("p",null,"In the recently released SeaTunnel 2.3.0 official version, the community self-developed engine SeaTunnel Zeta which has been under preparation for more than a year\u2014\u2014is officially released, and it will be used as the default engine of SeaTunnel in the future, providing users with high throughput, low latency, reliable consistent synchronization job operation guarantee."),(0,o.yg)("p",null,"Why does SeaTunnel develop its synchronization engine? What is the positioning of the SeaTunnel Engine? How is it different from traditional computing engines? What is the design idea? What is unique about the architectural design? These questions will be answered in this article."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Why develop our engine"),(0,o.yg)("li",{parentName:"ul"},"SeaTunnel Engine Positioning"),(0,o.yg)("li",{parentName:"ul"},"Design ideas"),(0,o.yg)("li",{parentName:"ul"},"Architecture design"),(0,o.yg)("li",{parentName:"ul"},"Unique advantages and features"),(0,o.yg)("li",{parentName:"ul"},"Current basic functions and features"),(0,o.yg)("li",{parentName:"ul"},"Future optimization plan")),(0,o.yg)("h2",{id:"01-why-develop-our-engine"},"01 Why develop our engine"),(0,o.yg)("p",null,"It was a year ago that the SeaTunnel community publicly stated for the first time that it would develop its engine. The reason why the team decided to develop a self-developed engine was that SeaTunnel's connector can run only on Flink or Spark, and Flink and Spark, as computing engines, have many unsolvable problems when integrating and synchronizing data."),(0,o.yg)("p",null,"Refer to:\nWhy do we self-develop the big data synchronization engine SeaTunnel Zeta?\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/1954"},"https://github.com/apache/incubator-seatunnel/issues/1954")),(0,o.yg)("h2",{id:"02-design-ideas"},"02 Design ideas"),(0,o.yg)("p",null,"The general idea of engine design is as follows:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Simple and easy to use, the new engine minimizes the dependence on third-party services, and can realize cluster management, snapshot storage, and cluster HA functions without relying on big data components such as Zookeeper and HDFS. This is very useful for users who do not have a big data platform or are unwilling to rely on a big data platform for data synchronization."),(0,o.yg)("li",{parentName:"ol"},"More resource-saving, at the CPU level, Zeta Engine internally uses Dynamic Thread Sharing (dynamic thread sharing) technology. In the real-time synchronization scenario, if the number of tables is large but the amount of data in each table is small, Zeta Engine will Synchronous tasks run in shared threads, which can reduce unnecessary thread creation and save system resources. On the read and data write side, the Zeta Engine is designed to minimize the number of JDBC connections. In the CDC scenario, Zeta Engine will try to reuse log reading and parsing resources as much as possible."),(0,o.yg)("li",{parentName:"ol"},"More stable. In this version, Zeta Engine uses Pipeline as the minimum granularity of Checkpoint and fault tolerance for data synchronization tasks. The failure of a task will only affect the tasks that have upstream and downstream relationships with it. Try to avoid task failures that cause the entire Job to fail. or rollback. At the same time, for scenarios where the source data has a storage time limit, Zeta Engine supports enabling data cache to automatically cache the data read from the source, and then the downstream tasks read the cached data and write it to the target. In this scenario, even if the target end fails and data cannot be written, it will not affect the normal reading of the source end, preventing the source end data from being deleted due to expiration."),(0,o.yg)("li",{parentName:"ol"},"Faster, Zeta Engine\u2019s execution plan optimizer will optimize the execution plan to reduce the possible network transmission of data, thereby reducing the loss of overall synchronization performance caused by data serialization and deserialization, and completing faster Data synchronization operations. Of course, it also supports speed limiting, so that sync jobs can be performed at a reasonable speed."),(0,o.yg)("li",{parentName:"ol"},"Data synchronization support for all scenarios. SeaTunnel aims to support full synchronization and incremental synchronization under offline batch synchronization, and support real-time synchronization and CDC.")),(0,o.yg)("h2",{id:"03-architecture-design"},"03 Architecture design"),(0,o.yg)("p",null,"SeaTunnel Engine is mainly composed of a set of APIs for data synchronization processing and a core computing engine. Here we mainly introduce the architecture design of the SeaTunnel Engine core engine.\n",(0,o.yg)("img",{src:t(85521).A,width:"2342",height:"1182"}),"\npicture"),(0,o.yg)("p",null,"SeaTunnel Engine consists of three main services: ",(0,o.yg)("strong",{parentName:"p"},"CoordinatorService, TaskExecutionService, and SlotService.")),(0,o.yg)("h3",{id:"coordinator-service"},"Coordinator Service"),(0,o.yg)("p",null,"CoordinatorService is the Master service of the cluster, which provides the generation process of each job from LogicalDag to ExecutionDag, and then to PhysicalDag, and finally creates the JobMaster of the job for scheduling execution and status monitoring of the job. CoordinatorService is mainly composed of 4 large functional modules:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"JobMaster is responsible for the generation process from LogicalDag to ExecutionDag to PhysicalDag of a single job, and is scheduled to run by PipelineBaseScheduler."),(0,o.yg)("li",{parentName:"ol"},"CheckpointCoordinator, responsible for the Checkpoint process control of the job."),(0,o.yg)("li",{parentName:"ol"},"ResourceManager is responsible for the application and management of job resources. It currently supports Standalone mode and will support On Yarn and On K8s in the future."),(0,o.yg)("li",{parentName:"ol"},"Metrics Service, responsible for the statistics and summary of job monitoring information.")),(0,o.yg)("h3",{id:"taskexecutionservice"},"TaskExecutionService"),(0,o.yg)("p",null,"TaskExecutionService is the Worker service of the cluster, which provides the real runtime environment of each Task in the job. TaskExecutionService uses Dynamic Thread Sharing technology to reduce CPU usage."),(0,o.yg)("h3",{id:"slotservice"},"SlotService"),(0,o.yg)("p",null,"SlotService runs on each node of the cluster and is mainly responsible for the division, application, and recycling of resources on the node."),(0,o.yg)("h2",{id:"04-unique-advantages-and-features"},"04 Unique advantages and features"),(0,o.yg)("h3",{id:"autonomous-cluster"},"Autonomous cluster"),(0,o.yg)("p",null,"SeaTunnel Engine has realized autonomous clustering (no centralization). To achieve cluster autonomy and job fault tolerance without relying on third-party service components (such as Zookeeper), SeaTunnel Engine uses Hazelcast as the underlying dependency. Hazelcast provides a distributed memory network, allowing users to operate a distributed collection like a normal Java collection locally. SeaTunnel saves the status information of the job in the memory grid of Hazelcast. When the Master node switches, it can Job state recovery based on data in the Hazelcast in-memory grid. At the same time, we have also implemented the persistence of Hazelcast memory grid data, and persisted the job status information to the storage (database of JDBC protocol, HDFS, cloud storage) in the form of WAL. In this way, even if the entire cluster hangs and restarts, the runtime information of the job can be repaired."),(0,o.yg)("h3",{id:"data-cache"},"Data cache"),(0,o.yg)("p",null,"SeaTunnel Engine is different from the traditional Spark/Flink computing engine, it is an engine specially used for data synchronization. The SeaTunnel engine naturally supports data cache. When multiple synchronous jobs in the cluster share a data source, the SeaTunnel engine will automatically enable the data cache. The source of a job will read the data and write it into the cache, and all other jobs will no longer read data from the data source but are automatically optimized to read data from the Cache. The advantage of this is that it can reduce the reading pressure of the data source and reduce the impact of data synchronization on the data source."),(0,o.yg)("h3",{id:"speed-control"},"Speed control"),(0,o.yg)("p",null,"SeaTunnel Engine supports the speed limit during data synchronization, which is very useful when reading data sources with high concurrency. A reasonable speed limit can not only ensure that the data is synchronized on time, but also minimize the pressure on the data source."),(0,o.yg)("h3",{id:"shared-connection-pool-to-reduce-database-pressure"},"Shared connection pool to reduce database pressure"),(0,o.yg)("p",null,"At present, the underlying operating tools and data synchronization tools provided by computing engines such as Spark/Flink cannot solve the problem that each table needs a JDBC connection when the entire database is synchronized. Database connections are resources for the database. Too many database connections will put great pressure on the database, resulting in a decrease in the stability of database read and write delays. This is a very serious accident for business databases. To solve this problem, SeaTunnel Engine uses a shared connection pool to ensure that multiple tables can share JDBC connections, thereby reducing the use of database connections."),(0,o.yg)("h3",{id:"breakpoint-resume-incrementalfull-volume"},"Breakpoint resume (incremental/full volume)"),(0,o.yg)("p",null,"SeaTunnel Engine supports resumed uploads under offline synchronization. When the amount of data is large, a data synchronization job often needs to run for tens of minutes or several hours. If the middle job hangs up and reruns, it means wasting time. SeaTunnel Engine will continue to save the state (checkpoint) during the offline synchronization process. When the job hangs up and reruns, it will continue to run from the last checkpoint, which effectively solves the data that may be caused by hardware problems such as node downtime. Delay."),(0,o.yg)("h3",{id:"the-schema-revolution-route"},"The Schema revolution route"),(0,o.yg)("p",null,"Schema evolution is a feature that allows users to easily change a table's current schema to accommodate data that changes over time. Most commonly, it is used when performing an append or overwrite operation, to automatically adjust the schema to include one or more new columns."),(0,o.yg)("p",null,"This capability is required in real-time data warehouse scenarios. Currently, the Flink and Spark engines do not support this feature."),(0,o.yg)("h3",{id:"fine-grained-fault-tolerant-design"},"Fine-grained fault-tolerant design"),(0,o.yg)("p",null,"Flink's design is fault tolerance and rollback at the entire job level. If a task fails, the entire job will be rolled back and restarted. The design of SeaTunnel Engine takes into account that in the data synchronization scenario, in many q cases, the failure of a task should only need to focus on fault tolerance for tasks that have upstream and downstream relationships with it. Based on this design principle, SeaTunnel Engine will first generate a logical DAG according to the user-configured job configuration file, then optimize the logical DAG, and finally generate a pipeline (a connected subgraph in a job DAG) to call and execute jobs at the granularity. fault tolerance."),(0,o.yg)("p",null,"A typical usage scenario is:"),(0,o.yg)("p",null,"Use the CDC connector to read data from MySQL's binlog and write it to another MySQL. If you use Flink or Spark engine, once the target MySQL cannot write, it will cause the task of CDC to read the binlog to be terminated. If MySQL is set If the expiration time of the log is set, the problem of the target MySQL is solved, but the log of the source MySQL is cleared, which leads to data loss and other problems."),(0,o.yg)("p",null,"SeaTunnel Engine will automatically optimize this synchronization task, automatically add the source to the target Cache, and then further optimize this job into two Pipelines, pipeline#1 is responsible for reading data from the CDC and writing it to the SeaTunnel Cache, and pipeline#2 is responsible for reading data from the SeaTunnel Cache Cache reads data and writes to target MySQL. If there is a problem with the target MySQL and cannot be written, the pipeline#2 of this synchronization job will be terminated, and the pipeline#1 will still run normally. This design fundamentally solves the above problems and is more in line with the processing logic of the data synchronization engine."),(0,o.yg)("h3",{id:"dynamically-share-threads-to-reduce-resource-usage"},"Dynamically share threads to reduce resource usage"),(0,o.yg)("p",null,"SeaTunnel Engine's Task design uses shared thread technology. Different from Flink/Spark, SeaTunnel Engine does not simply allow a Task to occupy a thread, but through a dynamic perception method - Dynamic Thread Sharing (Dynamic Thread Sharing) To judge whether a Task should share a thread with other Tasks or should monopolize a thread."),(0,o.yg)("p",null,"Compared with single-threaded serial computing, multi-threaded parallel computing has better performance advantages, but if each Task uses an independent thread to run, when there are many tables for data synchronization and the number of Tasks is large, it will be in the Worker node Start very many threads on it. When the number of CPU cores is fixed, the more threads, the better. When the number of threads is too large, the CPU needs to spend a lot of time on thread context switching, which will affect computing performance."),(0,o.yg)("p",null,"Flink/Spark usually limits the maximum number of tasks running on each node. In this way, it can avoid starting too many threads. To run more tasks on one node, SeaTunnel Engine can share thread technology. Let those tasks with a small amount of data share threads, and tasks with a large amount of data exclusively use threads. This method makes it possible for SeaTunnel Engine to run hundreds or thousands of table synchronization tasks on one node, with less resource occupation. Complete the synchronization of more tables."),(0,o.yg)("h2",{id:"05-basic-functions-and-features"},"05 Basic functions and features"),(0,o.yg)("p",null,"2.3.0 is the first official version of SeaTunnel Engine, which implements some basic functions. For the detailed design, please refer to: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/2272"},"https://github.com/apache/incubator-seatunnel/issues/2272")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"[ Cluster Management ]")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Support stand-alone operation"),(0,o.yg)("li",{parentName:"ul"},"Support cluster operation"),(0,o.yg)("li",{parentName:"ul"},"Autonomous cluster (no centralization), no need to specify a Master node for the SeaTunnel Engine cluster, SeaTunnel Engine elects the Master node by itself during operation and automatically selects a new Master node after the Master node hangs up."),(0,o.yg)("li",{parentName:"ul"},"Automatic discovery of cluster nodes, the nodes with the same cluster_name will automatically form a cluster.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"[ Core function ]")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Supports running jobs in Local mode. The cluster is automatically destroyed after the job runs."),(0,o.yg)("li",{parentName:"ul"},"It supports running jobs in Cluster mode (single machine or cluster) and submitting jobs to the SeaTunnel Engine service through SeaTunnel Client. After the job is completed, the service continues to run and waits for the next job submission."),(0,o.yg)("li",{parentName:"ul"},"Support offline batch synchronization."),(0,o.yg)("li",{parentName:"ul"},"Support real-time synchronization."),(0,o.yg)("li",{parentName:"ul"},"Batch and flow integration, all SeaTunnel V2 version connectors can run in SeaTunnel Engine."),(0,o.yg)("li",{parentName:"ul"},"Supports distributed snapshot algorithm cooperates with SeaTunnel V2 connector to support two-phase commit, and ensures data exactly-once."),(0,o.yg)("li",{parentName:"ul"},"Supports job invocation at the Pipeline level to ensure that it can be started even when resources are limited."),(0,o.yg)("li",{parentName:"ul"},"Supports job fault tolerance at the Pipeline level. The failure of a Task only affects the Pipeline it is in, and only the Task under the Pipeline needs to be rolled back."),(0,o.yg)("li",{parentName:"ul"},"Supports dynamic thread sharing to achieve real-time synchronization of a large number of small data sets.")),(0,o.yg)("h2",{id:"06-future-optimization-plan"},"06 Future optimization plan"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Support Cache mode, and first support Kafka as Cache"),(0,o.yg)("li",{parentName:"ul"},"Support JobHistory, support the persistence of JobHistory."),(0,o.yg)("li",{parentName:"ul"},"Support indicator (Reader Rows, QPS, Reader Bytes) monitoring and indicator query"),(0,o.yg)("li",{parentName:"ul"},"Support dynamic modification of the execution plan."),(0,o.yg)("li",{parentName:"ul"},"Support CDC."),(0,o.yg)("li",{parentName:"ul"},"Support whole database synchronization"),(0,o.yg)("li",{parentName:"ul"},"Support multi-table synchronization"),(0,o.yg)("li",{parentName:"ul"},"Support for Schema Revolution")))}d.isMDXComponent=!0},39512:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/16733443077196-048cdae0ce9892c195e1c6ca1374cfc5.png"},85521:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/16733443263288-1764bbf249c027947d7c6d39cbf41202.png"}}]);