"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[40642],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},65309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={},i="Quick start",l={unversionedId:"quick-start",id:"version-1.x/quick-start",title:"Quick start",description:"We take an application that receives data through a socket, divides the data into multiple fields, and outputs the processing results as an example to quickly demonstrate the use of seatunnel.",source:"@site/versioned_docs/version-1.x/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/zh-CN/docs/1.x/quick-start",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/quick-start.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/zh-CN/docs/1.x/introduction"},next:{title:"General configuration",permalink:"/zh-CN/docs/1.x/configuration/base"}},s={},p=[{value:"Step 1: Prepare the Spark runtime environment",id:"step-1-prepare-the-spark-runtime-environment",level:3},{value:"Step 2: Download seatunnel",id:"step-2-download-seatunnel",level:3},{value:"Step 3: Configure seatunnel",id:"step-3-configure-seatunnel",level:3},{value:"Step 4: Start the netcat server for sending data",id:"step-4-start-the-netcat-server-for-sending-data",level:3},{value:"Step 5: Start seatunnel",id:"step-5-start-seatunnel",level:3},{value:"Step 6: Input at the nc terminal",id:"step-6-input-at-the-nc-terminal",level:3},{value:"Summarize",id:"summarize",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"quick-start"},"Quick start"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"We take an application that receives data through a socket, divides the data into multiple fields, and outputs the processing results as an example to quickly demonstrate the use of seatunnel.")),(0,r.yg)("h3",{id:"step-1-prepare-the-spark-runtime-environment"},"Step 1: Prepare the Spark runtime environment"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If you are familiar with Spark or have prepared the Spark runtime environment, you can ignore this step, Spark does not require any special configuration.")),(0,r.yg)("p",null,"Please ",(0,r.yg)("a",{parentName:"p",href:"http://spark.apache.org/downloads.html"},"download Spark")," first, and select Spark version >= 2.x.x. After downloading and decompressing, you can submit tasks in Spark deploy-mode = local mode without any configuration.\nIf you expect the task to run on a Standalone cluster or a Yarn or Mesos cluster, please refer to the ","[Spark Deployment Documentation]"," on the Spark official website (",(0,r.yg)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/cluster-overview.html"},"http://spark.apache.org/docs/latest/cluster-overview.html"),")."),(0,r.yg)("h3",{id:"step-2-download-seatunnel"},"Step 2: Download seatunnel"),(0,r.yg)("p",null,"Go to the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/InterestingLab/seatunnel/releases/latest"},"seatunnel installation package download page")," and download the latest version of ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel-<version>.zip")),(0,r.yg)("p",null,"Or directly download the specified version (take 1.1.2 as an example):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"wget https://github.com/InterestingLab/seatunnel/releases/download/v1.1.2/seatunnel-1.1.2.zip -O seatunnel-1.1.2.zip\n")),(0,r.yg)("p",null,"After downloading, unzip:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"unzip seatunnel-<version>.zip\nln -s seatunnel-<version> seatunnel\n")),(0,r.yg)("h3",{id:"step-3-configure-seatunnel"},"Step 3: Configure seatunnel"),(0,r.yg)("p",null,"Edit ",(0,r.yg)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh"),", specify the required environment configuration such as SPARK_HOME (the directory downloaded and decompressed by Spark in Step 1)"),(0,r.yg)("p",null,"Edit ",(0,r.yg)("inlineCode",{parentName:"p"},"config/application.conf"),", which determines the way and logic of data input, processing, and output after seatunnel is started."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'spark {\n  # seatunnel defined streaming batch duration in seconds\n  spark.streaming.batchDuration = 5\n\n  spark.app.name = "seatunnel"\n  spark.ui.port = 13000\n}\n\ninput {\n  socketStream {}\n}\n\nfilter {\n  split {\n    fields = ["msg", "name"]\n    delimiter = ","\n  }\n}\n\noutput {\n  stdout {}\n}\n\n')),(0,r.yg)("h3",{id:"step-4-start-the-netcat-server-for-sending-data"},"Step 4: Start the netcat server for sending data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"nc -l -p 9999\n")),(0,r.yg)("h3",{id:"step-5-start-seatunnel"},"Step 5: Start seatunnel"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd seatunnel\n./bin/start-seatunnel.sh --master local[4] --deploy-mode client --config ./config/application.conf\n\n")),(0,r.yg)("h3",{id:"step-6-input-at-the-nc-terminal"},"Step 6: Input at the nc terminal"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Hello World, Gary\n")),(0,r.yg)("p",null,"The seatunnel log prints out:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"+-----+------------+----+\n|raw_message |msg |name|\n+-----+------------+----+\n|Hello World, Gary|Hello World|Gary|\n+-----+------------+----+\n")),(0,r.yg)("h3",{id:"summarize"},"Summarize"),(0,r.yg)("p",null,"seatunnel is simple and easy to use, and there are richer data processing functions waiting to be discovered. The data processing case presented in this paper,\nNo code, compilation, packaging required, simpler than the official ",(0,r.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/streaming-programming-guide.html#a-quick-example"},"Quick Example"),"."),(0,r.yg)("hr",null),(0,r.yg)("p",null,"For more seatunnel configuration examples, see:"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/InterestingLab/seatunnel/blob/master/config/streaming.conf.template"},"Configuration Example 1: Streaming Streaming Computing")),(0,r.yg)("p",null,"The above configuration is the default ","[Streaming Configuration Template]",", which can be run directly. The command is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd seatunnel\n./bin/start-seatunnel.sh --master local[4] --deploy-mode client --config ./config/streaming.conf.template\n\n")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/InterestingLab/seatunnel/blob/master/config/batch.conf.template"},"Configuration example 2: Batch offline batch")),(0,r.yg)("p",null,"The above configuration is the default ","[offline batch configuration template]",", which can be run directly. The command is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd seatunnel\n./bin/start-seatunnel.sh --master local[4] --deploy-mode client --config ./config/batch.conf.template\n\n")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/InterestingLab/seatunnel/blob/master/config/structuredstreaming.conf.template"},"Configuration Example 3: Structured Streaming Streaming")),(0,r.yg)("p",null,"The above configuration is the default ","[Structured Streaming configuration template]",", and the Kafka input source needs to be configured to run, the command is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd seatunnel\n./bin/start-seatunnel-structured-streaming.sh --master local[4] --deploy-mode client --config ./config/batch.conf.template\n\n")))}d.isMDXComponent=!0}}]);