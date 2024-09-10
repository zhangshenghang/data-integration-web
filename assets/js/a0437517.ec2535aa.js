"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[38395],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||r;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},98538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(58168),a=(n(96540),n(15680));const r={},i="Code Demo for SeaTunnel Connector Development Process",l={permalink:"/blog/2022/09/19/Code-Demo-for-SeaTunnel-Connector-Development-Process",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-09-19-Code-Demo-for-SeaTunnel-Connector-Development-Process.md",source:"@site/blog/2022-09-19-Code-Demo-for-SeaTunnel-Connector-Development-Process.md",title:"Code Demo for SeaTunnel Connector Development Process",description:"At the Apache SeaTunnel&Apache Doris Joint Meetup held on July 24, Liu Li \u2014 senior engineer of WhaleOps and contributor to Apache SeaTunnel \u2014 mentioned an easy way to develop a connector in SeaTunnel quickly.",date:"2022-09-19T00:00:00.000Z",formattedDate:"September 19, 2022",tags:[],readingTime:9.61,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"A tutorial to help you develop a SeaTunnel Connector hand-by-hand while avoiding pitfalls",permalink:"/blog/2022/09/20/A-tutorial-to-help-you develop-a-SeaTunnel-Connector-hand-by-hand-while-avoiding -pitfalls"},nextItem:{title:"Talk With Overseas contributors | Why do I contribute to SeaTunnel?",permalink:"/blog/2022/09/14/Talk-With-Overseas-contributors-Why-do-I-contribute-to-SeaTunnel"}},s={authorsImageUrls:[]},c=[{value:"Definition of a Connector",id:"definition-of-a-connector",level:2},{value:"How to access data sources and targets",id:"how-to-access-data-sources-and-targets",level:2},{value:"How to access Source",id:"how-to-access-source",level:3},{value:"How to access Sink",id:"how-to-access-sink",level:3},{value:"How to implement the Connector",id:"how-to-implement-the-connector",level:2},{value:"The necessary environment",id:"the-necessary-environment",level:3},{value:"SeaTunnel Engineering Structure",id:"seatunnel-engineering-structure",level:3},{value:"Code Demo",id:"code-demo",level:3},{value:"New Connectors supported at this stage",id:"new-connectors-supported-at-this-stage",level:3},{value:"About SeaTunnel",id:"about-seatunnel",level:2},{value:"Why do we need SeaTunnel?",id:"why-do-we-need-seatunnel",level:3},{value:"SeaTunnel Usage Scenarios",id:"seatunnel-usage-scenarios",level:3},{value:"Features of SeaTunnel",id:"features-of-seatunnel",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"At the Apache SeaTunnel&Apache Doris Joint Meetup held on July 24, Liu Li \u2014 senior engineer of WhaleOps and contributor to Apache SeaTunnel \u2014 mentioned an easy way to develop a connector in SeaTunnel quickly."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/700/1*Rbd5BrSuGiZUQA53DXZrBw.png",alt:null}),"\nWe\u2019ll divide it into four key parts:"),(0,a.yg)("p",null,"\u25cf The definition of a Connector"),(0,a.yg)("p",null,"\u25cf How to access data sources and targets"),(0,a.yg)("p",null,"\u25cf Code to demonstrate how to implement a Connector"),(0,a.yg)("p",null,"\u25cf Sources and targets that are currently supported"),(0,a.yg)("h2",{id:"definition-of-a-connector"},"Definition of a Connector"),(0,a.yg)("p",null,"The Connector consists of Source and Sink and is a concrete implementation of accessing data sources."),(0,a.yg)("p",null,"Source: The Source is responsible for reading data from sources such as MySQLSource, DorisSource, HDFSSource, TXTSource, and more."),(0,a.yg)("p",null,"Sink: The Sink is responsible for writing read data to the target, including MySQLSink, ClickHouseSink, HudiSink, and more. Data transfer, and more specifically, data synchronization is completed through the cooperation between the Source and Sink."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/298/1*hsfa9Xtzt7o028XjCpqoOg.png",alt:null})),(0,a.yg)("p",null,"Of course, different sources and sinks can cooperate with each other."),(0,a.yg)("p",null,"For example, you can use MySQL Source, and Doris Sink to synchronize data from MySQL to Doris, or even read data from MySQL Source and write to HDFS Sink."),(0,a.yg)("h2",{id:"how-to-access-data-sources-and-targets"},"How to access data sources and targets"),(0,a.yg)("h3",{id:"how-to-access-source"},"How to access Source"),(0,a.yg)("p",null,"Firstly, let\u2019s take a look at how we can access the Source. To elaborate, let\u2019s dive in and check out how we can implement a source and the core interfaces that need to be implemented to access the Source."),(0,a.yg)("p",null,"The simplest Source is a single concurrent Source. However, if a source does not support state storage and other advanced functions, what interfaces should we implement in these simple single concurrent sources?"),(0,a.yg)("p",null,"Firstly, we need to use getBoundedness in the Source to identify whether the Source supports real-time or offline, or both."),(0,a.yg)("p",null,"createReader creates a Reader whose main function is to read the specific implementation of data. A single concurrent source is really simple as we only need to implement one method, pollNext, through which the read data is sent."),(0,a.yg)("p",null,"If concurrent reading is required, what additional interfaces should we implement?\n",(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/393/1*bRxRjyMOGkVqseQkg0ONWg.png",alt:null})),(0,a.yg)("p",null,"For concurrent reading, we\u2019ll introduce a new member, called the Enumerator."),(0,a.yg)("p",null,"We implement createEnumerator in Source, and the main function of this member is to create an Enumerator to split the task into segments and then send it to the Reader."),(0,a.yg)("p",null,"For example, a task can be divided into 4 splits."),(0,a.yg)("p",null,"If it is concurrent twice, it\u2019ll correspond to two Readers. Two of the four splits will be sent to Reader1, and the other two will be sent to Reader2."),(0,a.yg)("p",null,"If the number of concurrencies is more \u2014 for example, let\u2019s say there are four concurrences, then you have to create four Readers. You have to use the corresponding four splits for concurrent reading for improved efficiency."),(0,a.yg)("p",null,"A corresponding interface in the Enumerator called the addSplitsBack sends the splits to the corresponding Reader. Through this method, the ID of the Reader can be specified."),(0,a.yg)("p",null,"Similarly, there is an interface called the addSplits in the Reader to receive the splits sent by the Enumerator for data reading."),(0,a.yg)("p",null,"In a nutshell, for concurrent reading, we need an Enumerator to implement task splitting and send the splits to the reader. Also, the reader receives the splits and uses them for reading."),(0,a.yg)("p",null,"In addition, if we need to support resuming and exactly-once semantics, what additional interfaces should we implement?"),(0,a.yg)("p",null,"If the goal is to resume the transfer from a breakpoint, we must save the state and restore it. For this, we need to implement a restoreEnumerator in Source."),(0,a.yg)("p",null,"The restoreEnumerator method is used to restore an Enumerator through the state and restore the split."),(0,a.yg)("p",null,"Correspondingly, we need to implement a snapshotState in this enumerator, which is used to save the state of the current Enumerator and perform failure recovery during checkpoints."),(0,a.yg)("p",null,"At the same time, the Reader will also have a snapshotState method to save the split state of the Reader."),(0,a.yg)("p",null,"In the event of a failed restart, the Enumerator can be restored through the saved state. After the split is restored, reading can be continued from the place of failure, including fetching and incoming data."),(0,a.yg)("p",null,"The exact one-time semantics actually requires the source to support data replays, such as Kafka, Pulsar, and others. In addition, the sink must be submitted in two phases, i.e., the precise one-time semantics can be achieved with the cooperation of these two sources and sinks."),(0,a.yg)("h3",{id:"how-to-access-sink"},"How to access Sink"),(0,a.yg)("p",null,"Now, let\u2019s take a look at how to connect to the Sink. What interfaces does the Sink need to implement?"),(0,a.yg)("p",null,"Truth be told, Sink is relatively simple. For concurrent sinks, when state storage and two-phase commit are not supported, the Sink is simple."),(0,a.yg)("p",null,"To elaborate, the Sink does not distinguish between stream synchronization and batch synchronization as the Sink \u2014 and the entire SeaTunnel API system \u2014 supports ",(0,a.yg)("strong",{parentName:"p"},"Unified Stream and Batch Processing.")),(0,a.yg)("p",null,"Firstly, we need to implement createWriter. A Writer is used for data writing."),(0,a.yg)("p",null,"You need to implement a writer method in Writer through which data is written to the target library."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/414/1*xQ7DRHdBGv-ofjSYdSHAoA.png",alt:null})),(0,a.yg)("p",null,"As shown in the figure above, if two concurrencies are set, the engine will call the createWriter method twice in order to generate two Writers. The engine will feed data to these two writers, which will write the data to the target through the write method."),(0,a.yg)("p",null,"For a more advanced setup, for example, we need to support ",(0,a.yg)("strong",{parentName:"p"},"two-phase commit and state storage"),"."),(0,a.yg)("p",null,"Here, what additional interfaces should we implement?"),(0,a.yg)("p",null,"First, let\u2019s introduce a new member, the Committer, whose main role is for the second-stage commit."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/414/1*cvj1i2A-E-1c_bCZneshtg.png",alt:null})),(0,a.yg)("p",null,"Since Sink is stored in state, it is necessary to restore Writer through the state. Hence, restoreWriter should be implemented."),(0,a.yg)("p",null,"Also, since we have introduced a new member, the Committer, we should also implement a createCommitter in the sink. We can then use this method to create a Committer for the second-stage commit or rollback."),(0,a.yg)("p",null,"In this case, what additional interfaces does Writer need to implement?"),(0,a.yg)("p",null,"Since it is a two-phase commit, the first-phase commit is done in the Writer through the implementation of the prepareCommit method \u2014 which is mainly used for the first-phase commit."),(0,a.yg)("p",null,"In addition, state storage and failure recovery is also supported, meaning we need snapshotState to take snapshots at checkpoints. This saves the state for failure recovery scenarios."),(0,a.yg)("p",null,"The Committer is the core here. It is mainly used for rollback and commit operations in the second phase."),(0,a.yg)("p",null,"For the corresponding process, we need to write data to the database. Here, the engine will trigger the first stage commit during the checkpoint, and then the Writer needs to prepare a commit."),(0,a.yg)("p",null,"At the same time, it will return commitInfo to the engine, and the engine will judge whether the first stage commits of all writers are successful."),(0,a.yg)("p",null,"If they are indeed successful, the engine will use the commit method to actually commit."),(0,a.yg)("p",null,"For MySQL, the first-stage commit just saves a transaction ID and sends it to the commit. The engine determines whether the transaction ID is committed or rolled back."),(0,a.yg)("h2",{id:"how-to-implement-the-connector"},"How to implement the Connector"),(0,a.yg)("p",null,"We\u2019ve taken a look at Source and Sink; let\u2019s now look at how to access the data source and implement your own Connector."),(0,a.yg)("p",null,"Firstly, we need to build a development environment for the Connector."),(0,a.yg)("h3",{id:"the-necessary-environment"},"The necessary environment"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Java 1.8\\11, Maven, IntelliJ IDEA")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Windows users need to additionally download gitbash (",(0,a.yg)("a",{parentName:"p",href:"https://gitforwindows.org/"},"https://gitforwindows.org/"),")")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Once you have these, you can download the SeaTunnel source code by cloning the git.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Download SeaTunnel source code 1, git clone ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel.git2"},"https://github.com/apache/incubator-seatunnel.git2"),", cd incubator-seatunnel"))),(0,a.yg)("h3",{id:"seatunnel-engineering-structure"},"SeaTunnel Engineering Structure"),(0,a.yg)("p",null,"We then open it again through the IDE, and see the directory structure as shown in the figure:"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/700/1*utRhNAsYiqQqBFa4Tjewgw.png",alt:null})),(0,a.yg)("p",null,"The directory is divided into several parts:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Connector \u2014 v2")),(0,a.yg)("p",null,"Specific implementation of the new Connector(Connector \u2014 v2) will be placed in this module."),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"connector-v2-dist")),(0,a.yg)("p",null,"The translation layer of the new connector translates into specific engine implementation \u2014 instead of implementing under corresponding engines such as Spark, Flink, and ST-Engine. ST-Engine is the \u201cimportant, big project\u201d the community is striving to implement. This project is worth the wait."),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"examples")),(0,a.yg)("p",null,"This package provides a single-machine local operation method, which is convenient for debugging while implementing the Connector."),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"e2e")),(0,a.yg)("p",null,"The e2e package is for e2e testing of the Connector."),(0,a.yg)("p",null,"Next, let\u2019s check out how a Connector can be created (based on the new Connector). Here is the step-by-step process:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a new module in the seatunnel-connectors-v2 directory and name it this way: connector-{connector name}.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The pom file can refer to the pom file of the existing connector and add the current child model to the parent model\u2019s pom file.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create two new packages corresponding to the packages of Source and Sink, respectively:"))),(0,a.yg)("p",null,"a. org.apache.seatunnel.connectors.seatunnel.{connector name}.source"),(0,a.yg)("p",null,"b. org.apache.seatunnel.connectors.seatunnel.{connector name}.sink"),(0,a.yg)("p",null,"Take this mysocket example shown in the figure:"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/700/1*K1btD2gNwYxj96OJnPfW2Q.png",alt:null})),(0,a.yg)("p",null,"To do some implementation, develop the connector. During implementation, you can use the example module for local debugging if you need to debug. That said, this module mainly provides the local running environment of Flink and Spark."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/700/1*qOc3q7okzo7jObHxloc7WQ.png",alt:null})),(0,a.yg)("p",null,"As you can see in the image, there are numerous examples under the \u201cExample\u201d module \u2014 including seatunnel-flink-connector-v2-example."),(0,a.yg)("p",null,"So how do you use them?"),(0,a.yg)("p",null,"Let\u2019s take an example. The debugging steps on Flink are as follows (these actions are under the seatunnel-flink-connector-v2-example module:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Add connector dependencies in pom.xml")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Add the task configuration file under resources/examples")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Configure the file in the SeaTunnelApiExample main method")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Run the main method"))),(0,a.yg)("h3",{id:"code-demo"},"Code Demo"),(0,a.yg)("p",null,"This code demonstration is based on DingTalk."),(0,a.yg)("p",null,"Here\u2019s a reference\uff08 19:35s\u201337:10s\uff09:"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://weixin.qq.com/sph/A1ri7B"},"https://weixin.qq.com/sph/A1ri7B")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/700/1*ej9ronizPtC09ILWJDlbUg.png",alt:null})),(0,a.yg)("h3",{id:"new-connectors-supported-at-this-stage"},"New Connectors supported at this stage"),(0,a.yg)("p",null,"As of July 14, contributions and statistics for the completed connectors are welcome. You are more than welcome to try them out, and raise issues in our community if you find bugs."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/700/1*RHNJDcbvKmSt2UGGSz3Icg.png",alt:null})),(0,a.yg)("p",null,"The Connector shared below have already been claimed and developed:"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/700/1*RHNJDcbvKmSt2UGGSz3Icg.png",alt:null})),(0,a.yg)("p",null,"Also, we have Connectors in the roadmap \u2014 the connectors we want to support in the near future. To foster the process, the SeaTunnel Community initiated SeaTunnel Connector Access Incentive Plan, you are more than welcome to contribute to the project."),(0,a.yg)("p",null,"SeaTunnel Connector Access Incentive Plan: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/1946"},"https://github.com/apache/incubator-seatunnel/issues/1946")),(0,a.yg)("p",null,"You can claim tasks that haven\u2019t been marked in the comment area, and take a spree home! Here is part of the connectors that need to be accessed as soon as possible:\n",(0,a.yg)("img",{parentName:"p",src:"https://miro.medium.com/max/414/1*n-ixPtq066Acx4Ja5qNQqw.png",alt:null}),"\nIn fact, the implementations of Connectors like Feishu, DingTalk, and Facebook messenger are quite simple as the connectors do not need to carry a large amount of data (just a simple Source and Sink). This is in sharp contrast to Hive and other databases that need to consider transaction consistency or concurrency issues."),(0,a.yg)("p",null,"We welcome everyone to make contributions and join our Apache SeaTunnel family!"),(0,a.yg)("h2",{id:"about-seatunnel"},"About SeaTunnel"),(0,a.yg)("p",null,"SeaTunnel (formerly Waterdrop) is an easy-to-use, ultra-high-performance distributed data integration platform that supports the real-time synchronization of massive amounts of data and can synchronize hundreds of billions of data per day stably and efficiently."),(0,a.yg)("h3",{id:"why-do-we-need-seatunnel"},"Why do we need SeaTunnel?"),(0,a.yg)("p",null,"SeaTunnel does everything it can to solve the problems you may encounter in synchronizing massive amounts of data."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Data loss and duplication"),(0,a.yg)("li",{parentName:"ul"},"Task buildup and latency"),(0,a.yg)("li",{parentName:"ul"},"Low throughput"),(0,a.yg)("li",{parentName:"ul"},"Long application-to-production cycle time"),(0,a.yg)("li",{parentName:"ul"},"Lack of application status monitoring")),(0,a.yg)("h3",{id:"seatunnel-usage-scenarios"},"SeaTunnel Usage Scenarios"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Massive data synchronization"),(0,a.yg)("li",{parentName:"ul"},"Massive data integration"),(0,a.yg)("li",{parentName:"ul"},"ETL of large volumes of data"),(0,a.yg)("li",{parentName:"ul"},"Massive data aggregation"),(0,a.yg)("li",{parentName:"ul"},"Multi-source data processing")),(0,a.yg)("h3",{id:"features-of-seatunnel"},"Features of SeaTunnel"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Rich components"),(0,a.yg)("li",{parentName:"ul"},"High scalability"),(0,a.yg)("li",{parentName:"ul"},"Easy to use"),(0,a.yg)("li",{parentName:"ul"},"Mature and stable")))}m.isMDXComponent=!0}}]);