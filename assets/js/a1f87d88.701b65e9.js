"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[61174],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>m});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),u=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},g=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=u(a),y=l,m=d["".concat(i,".").concat(y)]||d[y]||p[y]||r;return a?t.createElement(m,s(s({ref:n},g),{},{components:a})):t.createElement(m,s({ref:n},g))}));function m(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[d]="string"==typeof e?e:l,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},30850:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var t=a(58168),l=(a(96540),a(15680));const r={sidebar_position:11},s="RESTful API",o={unversionedId:"seatunnel-engine/rest-api",id:"seatunnel-engine/rest-api",title:"RESTful API",description:"SeaTunnel has a monitoring API that can be used to query status and statistics of running jobs, as well as recent",source:"@site/docs/seatunnel-engine/rest-api.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/rest-api",permalink:"/docs/seatunnel-engine/rest-api",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/rest-api.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docs",previous:{title:"Resource Isolation",permalink:"/docs/seatunnel-engine/resource-isolation"},next:{title:"Command Line Tool",permalink:"/docs/seatunnel-engine/user-command"}},i={},u=[{value:"Overview",id:"overview",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Returns an overview over the Zeta engine cluster.",id:"returns-an-overview-over-the-zeta-engine-cluster",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4},{value:"Returns An Overview And State Of All Jobs",id:"returns-an-overview-and-state-of-all-jobs",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Responses",id:"responses-1",level:4},{value:"Return Details Of A Job",id:"return-details-of-a-job",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Responses",id:"responses-2",level:4},{value:"Return Details Of A Job",id:"return-details-of-a-job-1",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Responses",id:"responses-3",level:4},{value:"Return All Finished Jobs Info",id:"return-all-finished-jobs-info",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Responses",id:"responses-4",level:4},{value:"Returns System Monitoring Information",id:"returns-system-monitoring-information",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Responses",id:"responses-5",level:4},{value:"Submit A Job",id:"submit-a-job",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Body",id:"body",level:4},{value:"Responses",id:"responses-6",level:4},{value:"Batch Submit Jobs",id:"batch-submit-jobs",level:3},{value:"Parameters (add in the <code>params</code> field in the request body)",id:"parameters-add-in-the-params-field-in-the-request-body",level:4},{value:"Request Body",id:"request-body",level:4},{value:"Response",id:"response",level:4},{value:"Stop A Job",id:"stop-a-job",level:3},{value:"Body",id:"body-1",level:4},{value:"Responses",id:"responses-7",level:4},{value:"Batch Stop Jobs",id:"batch-stop-jobs",level:3},{value:"Request Body",id:"request-body-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Encrypt Config",id:"encrypt-config",level:3},{value:"Body",id:"body-2",level:4},{value:"Responses",id:"responses-8",level:4},{value:"Update the tags of running node",id:"update-the-tags-of-running-node",level:3},{value:"update node tags",id:"update-node-tags",level:4},{value:"Body",id:"body-3",level:5},{value:"Responses",id:"responses-9",level:5},{value:"remove node tags",id:"remove-node-tags",level:4},{value:"Body",id:"body-4",level:5},{value:"Responses",id:"responses-10",level:5},{value:"Request parameter exception",id:"request-parameter-exception",level:4},{value:"Responses",id:"responses-11",level:5},{value:"Responses",id:"responses-12",level:5}],g={toc:u},d="wrapper";function p(e){let{components:n,...a}=e;return(0,l.yg)(d,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"restful-api"},"RESTful API"),(0,l.yg)("p",null,"SeaTunnel has a monitoring API that can be used to query status and statistics of running jobs, as well as recent\ncompleted jobs. The monitoring API is a RESTful API that accepts HTTP requests and responds with JSON data."),(0,l.yg)("h2",{id:"overview"},"Overview"),(0,l.yg)("p",null,"The monitoring API is backed by a web server that runs as part of the node, each node member can provide RESTful api capability.\nBy default, this server listens at port 5801, which can be configured in hazelcast.yaml like :"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"network:\n    rest-api:\n      enabled: true\n      endpoint-groups:\n        CLUSTER_WRITE:\n          enabled: true\n        DATA:\n          enabled: true\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - localhost\n    port:\n      auto-increment: true\n      port-count: 100\n      port: 5801\n")),(0,l.yg)("h2",{id:"api-reference"},"API reference"),(0,l.yg)("h3",{id:"returns-an-overview-over-the-zeta-engine-cluster"},"Returns an overview over the Zeta engine cluster."),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"GET")," ",(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/overview?tag1=value1&tag2=value2"))," ",(0,l.yg)("code",null,"(Returns an overview over the Zeta engine cluster.)")),(0,l.yg)("h4",{id:"parameters"},"Parameters"),(0,l.yg)("blockquote",null,(0,l.yg)("table",{parentName:"blockquote"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"data type"),(0,l.yg)("th",{parentName:"tr",align:null},"description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tag_name"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"the tags filter, you can add tag filter to get those matched worker count, and slot on those workers"))))),(0,l.yg)("h4",{id:"responses"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "projectVersion":"2.3.5-SNAPSHOT",\n    "gitCommitAbbrev":"DeadD0d0",\n    "totalSlot":"0",\n    "unassignedSlot":"0",\n    "works":"1",\n    "runningJobs":"0",\n    "finishedJobs":"0",\n    "failedJobs":"0",\n    "cancelledJobs":"0"\n}\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Notes:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"If you use ",(0,l.yg)("inlineCode",{parentName:"li"},"dynamic-slot"),", the ",(0,l.yg)("inlineCode",{parentName:"li"},"totalSlot")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"unassignedSlot")," always be ",(0,l.yg)("inlineCode",{parentName:"li"},"0"),". when you set it to fix slot number, it will return the correct total and unassigned slot number"),(0,l.yg)("li",{parentName:"ul"},"If the url has tag filter, the ",(0,l.yg)("inlineCode",{parentName:"li"},"works"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"totalSlot")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"unassignedSlot")," will return the result on the matched worker. but the job related metric will always return the cluster level information."))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"returns-an-overview-and-state-of-all-jobs"},"Returns An Overview And State Of All Jobs"),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"GET")," ",(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/running-jobs"))," ",(0,l.yg)("code",null,"(Returns an overview over all jobs and their current state.)")),(0,l.yg)("h4",{id:"parameters-1"},"Parameters"),(0,l.yg)("h4",{id:"responses-1"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "",\n    "jobName": "",\n    "jobStatus": "",\n    "envOptions": {\n    },\n    "createTime": "",\n    "jobDag": {\n      "vertices": [\n      ],\n      "edges": [\n      ]\n    },\n    "pluginJarsUrls": [\n    ],\n    "isStartWithSavePoint": false,\n    "metrics": {\n      "sourceReceivedCount": "",\n      "sinkWriteCount": ""\n    }\n  }\n]\n'))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"return-details-of-a-job"},"Return Details Of A Job"),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"GET")," ",(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/job-info/:jobId"))," ",(0,l.yg)("code",null,"(Return details of a job. )")),(0,l.yg)("h4",{id:"parameters-2"},"Parameters"),(0,l.yg)("blockquote",null,(0,l.yg)("table",{parentName:"blockquote"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"data type"),(0,l.yg)("th",{parentName:"tr",align:null},"description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"jobId"),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"job id"))))),(0,l.yg)("h4",{id:"responses-2"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "",\n  "jobName": "",\n  "jobStatus": "",\n  "createTime": "",\n  "jobDag": {\n    "vertices": [\n    ],\n    "edges": [\n    ]\n  },\n  "metrics": {\n    "sourceReceivedCount": "",\n    "sinkWriteCount": ""\n  },\n  "finishedTime": "",\n  "errorMsg": null,\n  "envOptions": {\n  },\n  "pluginJarsUrls": [\n  ],\n  "isStartWithSavePoint": false\n}\n')),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"jobId"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"jobName"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"jobStatus"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"createTime"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"jobDag"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"metrics")," always be returned.\n",(0,l.yg)("inlineCode",{parentName:"p"},"envOptions"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"pluginJarsUrls"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"isStartWithSavePoint")," will return when job is running.\n",(0,l.yg)("inlineCode",{parentName:"p"},"finishedTime"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"errorMsg")," will return when job is finished."),(0,l.yg)("p",null,"When we can't get the job info, the response will be:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId" : ""\n}\n'))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"return-details-of-a-job-1"},"Return Details Of A Job"),(0,l.yg)("p",null,"This API has been deprecated, please use /hazelcast/rest/maps/job-info/:jobId instead"),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"GET")," ",(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/running-job/:jobId"))," ",(0,l.yg)("code",null,"(Return details of a job. )")),(0,l.yg)("h4",{id:"parameters-3"},"Parameters"),(0,l.yg)("blockquote",null,(0,l.yg)("table",{parentName:"blockquote"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"data type"),(0,l.yg)("th",{parentName:"tr",align:null},"description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"jobId"),(0,l.yg)("td",{parentName:"tr",align:null},"required"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"job id"))))),(0,l.yg)("h4",{id:"responses-3"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "",\n  "jobName": "",\n  "jobStatus": "",\n  "createTime": "",\n  "jobDag": {\n    "vertices": [\n    ],\n    "edges": [\n    ]\n  },\n  "metrics": {\n    "SourceReceivedCount": "",\n    "SourceReceivedQPS": "",\n    "SourceReceivedBytes": "",\n    "SourceReceivedBytesPerSeconds": "",\n    "SinkWriteCount": "",\n    "SinkWriteQPS": "",\n    "SinkWriteBytes": "",\n    "SinkWriteBytesPerSeconds": "",\n    "TableSourceReceivedCount": {},\n    "TableSourceReceivedBytes": {},\n    "TableSourceReceivedBytesPerSeconds": {},\n    "TableSourceReceivedQPS": {},\n    "TableSinkWriteCount": {},\n    "TableSinkWriteQPS": {},\n    "TableSinkWriteBytes": {},\n    "TableSinkWriteBytesPerSeconds": {}\n  },\n  "finishedTime": "",\n  "errorMsg": null,\n  "envOptions": {\n  },\n  "pluginJarsUrls": [\n  ],\n  "isStartWithSavePoint": false\n}\n')),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"jobId"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"jobName"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"jobStatus"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"createTime"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"jobDag"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"metrics")," always be returned.\n",(0,l.yg)("inlineCode",{parentName:"p"},"envOptions"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"pluginJarsUrls"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"isStartWithSavePoint")," will return when job is running.\n",(0,l.yg)("inlineCode",{parentName:"p"},"finishedTime"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"errorMsg")," will return when job is finished."),(0,l.yg)("p",null,"When we can't get the job info, the response will be:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId" : ""\n}\n'))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"return-all-finished-jobs-info"},"Return All Finished Jobs Info"),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"GET")," ",(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/finished-jobs/:state"))," ",(0,l.yg)("code",null,"(Return all finished Jobs Info.)")),(0,l.yg)("h4",{id:"parameters-4"},"Parameters"),(0,l.yg)("blockquote",null,(0,l.yg)("table",{parentName:"blockquote"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"data type"),(0,l.yg)("th",{parentName:"tr",align:null},"description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"state"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"finished job status. ",(0,l.yg)("inlineCode",{parentName:"td"},"FINISHED"),",",(0,l.yg)("inlineCode",{parentName:"td"},"CANCELED"),",",(0,l.yg)("inlineCode",{parentName:"td"},"FAILED"),",",(0,l.yg)("inlineCode",{parentName:"td"},"UNKNOWABLE")))))),(0,l.yg)("h4",{id:"responses-4"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "",\n    "jobName": "",\n    "jobStatus": "",\n    "errorMsg": null,\n    "createTime": "",\n    "finishTime": "",\n    "jobDag": "",\n    "metrics": ""\n  }\n]\n'))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"returns-system-monitoring-information"},"Returns System Monitoring Information"),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"GET")," ",(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/system-monitoring-information"))," ",(0,l.yg)("code",null,"(Returns system monitoring information.)")),(0,l.yg)("h4",{id:"parameters-5"},"Parameters"),(0,l.yg)("h4",{id:"responses-5"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "processors":"8",\n    "physical.memory.total":"16.0G",\n    "physical.memory.free":"16.3M",\n    "swap.space.total":"0",\n    "swap.space.free":"0",\n    "heap.memory.used":"135.7M",\n    "heap.memory.free":"440.8M",\n    "heap.memory.total":"576.5M",\n    "heap.memory.max":"3.6G",\n    "heap.memory.used/total":"23.54%",\n    "heap.memory.used/max":"3.73%",\n    "minor.gc.count":"6",\n    "minor.gc.time":"110ms",\n    "major.gc.count":"2",\n    "major.gc.time":"73ms",\n    "load.process":"24.78%",\n    "load.system":"60.00%",\n    "load.systemAverage":"2.07",\n    "thread.count":"117",\n    "thread.peakCount":"118",\n    "cluster.timeDiff":"0",\n    "event.q.size":"0",\n    "executor.q.async.size":"0",\n    "executor.q.client.size":"0",\n    "executor.q.client.query.size":"0",\n    "executor.q.client.blocking.size":"0",\n    "executor.q.query.size":"0",\n    "executor.q.scheduled.size":"0",\n    "executor.q.io.size":"0",\n    "executor.q.system.size":"0",\n    "executor.q.operations.size":"0",\n    "executor.q.priorityOperation.size":"0",\n    "operations.completed.count":"10",\n    "executor.q.mapLoad.size":"0",\n    "executor.q.mapLoadAllKeys.size":"0",\n    "executor.q.cluster.size":"0",\n    "executor.q.response.size":"0",\n    "operations.running.count":"0",\n    "operations.pending.invocations.percentage":"0.00%",\n    "operations.pending.invocations.count":"0",\n    "proxy.count":"8",\n    "clientEndpoint.count":"0",\n    "connection.active.count":"2",\n    "client.connection.count":"0",\n    "connection.count":"0"\n  }\n]\n'))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"submit-a-job"},"Submit A Job"),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"POST")," ",(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/submit-job"))," ",(0,l.yg)("code",null,"(Returns jobId and jobName if job submitted successfully.)")),(0,l.yg)("h4",{id:"parameters-6"},"Parameters"),(0,l.yg)("blockquote",null,(0,l.yg)("table",{parentName:"blockquote"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"data type"),(0,l.yg)("th",{parentName:"tr",align:null},"description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"jobId"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"job id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"jobName"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"job name")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"isStartWithSavePoint"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"if job is started with save point"))))),(0,l.yg)("h4",{id:"body"},"Body"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "job.mode": "batch"\n    },\n    "source": [\n        {\n            "plugin_name": "FakeSource",\n            "result_table_name": "fake",\n            "row.num": 100,\n            "schema": {\n                "fields": {\n                    "name": "string",\n                    "age": "int",\n                    "card": "int"\n                }\n            }\n        }\n    ],\n    "transform": [\n    ],\n    "sink": [\n        {\n            "plugin_name": "Console",\n            "source_table_name": ["fake"]\n        }\n    ]\n}\n')),(0,l.yg)("h4",{id:"responses-6"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "jobId": 733584788375666689,\n    "jobName": "rest_api_test"\n}\n'))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"batch-submit-jobs"},"Batch Submit Jobs"),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"POST")," ",(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/submit-jobs"))," ",(0,l.yg)("code",null,"(Returns jobId and jobName if the job is successfully submitted.)")),(0,l.yg)("h4",{id:"parameters-add-in-the-params-field-in-the-request-body"},"Parameters (add in the ",(0,l.yg)("inlineCode",{parentName:"h4"},"params")," field in the request body)"),(0,l.yg)("blockquote",null,(0,l.yg)("table",{parentName:"blockquote"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parameter Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"jobId"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"job id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"jobName"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"job name")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"isStartWithSavePoint"),(0,l.yg)("td",{parentName:"tr",align:null},"optional"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"if the job is started with save point"))))),(0,l.yg)("h4",{id:"request-body"},"Request Body"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "params":{\n      "jobId":"123456",\n      "jobName":"SeaTunnel-01"\n    },\n    "env": {\n      "job.mode": "batch"\n    },\n    "source": [\n      {\n        "plugin_name": "FakeSource",\n        "result_table_name": "fake",\n        "row.num": 1000,\n        "schema": {\n          "fields": {\n            "name": "string",\n            "age": "int",\n            "card": "int"\n          }\n        }\n      }\n    ],\n    "transform": [\n    ],\n    "sink": [\n      {\n        "plugin_name": "Console",\n        "source_table_name": ["fake"]\n      }\n    ]\n  },\n  {\n    "params":{\n      "jobId":"1234567",\n      "jobName":"SeaTunnel-02"\n    },\n    "env": {\n      "job.mode": "batch"\n    },\n    "source": [\n      {\n        "plugin_name": "FakeSource",\n        "result_table_name": "fake",\n        "row.num": 1000,\n        "schema": {\n          "fields": {\n            "name": "string",\n            "age": "int",\n            "card": "int"\n          }\n        }\n      }\n    ],\n    "transform": [\n    ],\n    "sink": [\n      {\n        "plugin_name": "Console",\n        "source_table_name": ["fake"]\n      }\n    ]\n  }\n]\n')),(0,l.yg)("h4",{id:"response"},"Response"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "123456",\n    "jobName": "SeaTunnel-01"\n  },{\n    "jobId": "1234567",\n    "jobName": "SeaTunnel-02"\n  }\n]\n'))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"stop-a-job"},"Stop A Job"),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"POST")," ",(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/stop-job"))," ",(0,l.yg)("code",null,"(Returns jobId if job stoped successfully.)")),(0,l.yg)("h4",{id:"body-1"},"Body"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "jobId": 733584788375666689,\n    "isStopWithSavePoint": false # if job is stopped with save point\n}\n')),(0,l.yg)("h4",{id:"responses-7"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n"jobId": 733584788375666689\n}\n'))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"batch-stop-jobs"},"Batch Stop Jobs"),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"POST")," ",(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/stop-jobs"))," ",(0,l.yg)("code",null,"(Returns jobId if the job is successfully stopped.)")),(0,l.yg)("h4",{id:"request-body-1"},"Request Body"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": 881432421482889220,\n    "isStopWithSavePoint": false\n  },\n  {\n    "jobId": 881432456517910529,\n    "isStopWithSavePoint": false\n  }\n]\n')),(0,l.yg)("h4",{id:"response-1"},"Response"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": 881432421482889220\n  },\n  {\n    "jobId": 881432456517910529\n  }\n]\n'))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"encrypt-config"},"Encrypt Config"),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"POST")," ",(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/encrypt-config"))," ",(0,l.yg)("code",null,"(Returns the encrypted config if config is encrypted successfully.)")),"For more information about customize encryption, please refer to the documentation [config-encryption-decryption](/docs/connector-v2/Config-Encryption-Decryption).",(0,l.yg)("h4",{id:"body-2"},"Body"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "parallelism": 1,\n        "shade.identifier":"base64"\n    },\n    "source": [\n        {\n            "plugin_name": "MySQL-CDC",\n            "schema" : {\n                "fields": {\n                    "name": "string",\n                    "age": "int"\n                }\n            },\n            "result_table_name": "fake",\n            "parallelism": 1,\n            "hostname": "127.0.0.1",\n            "username": "seatunnel",\n            "password": "seatunnel_password",\n            "table-name": "inventory_vwyw0n"\n        }\n    ],\n    "transform": [\n    ],\n    "sink": [\n        {\n            "plugin_name": "Clickhouse",\n            "host": "localhost:8123",\n            "database": "default",\n            "table": "fake_all",\n            "username": "seatunnel",\n            "password": "seatunnel_password"\n        }\n    ]\n}\n')),(0,l.yg)("h4",{id:"responses-8"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "parallelism": 1,\n        "shade.identifier": "base64"\n    },\n    "source": [\n        {\n            "plugin_name": "MySQL-CDC",\n            "schema": {\n                "fields": {\n                    "name": "string",\n                    "age": "int"\n                }\n            },\n            "result_table_name": "fake",\n            "parallelism": 1,\n            "hostname": "127.0.0.1",\n            "username": "c2VhdHVubmVs",\n            "password": "c2VhdHVubmVsX3Bhc3N3b3Jk",\n            "table-name": "inventory_vwyw0n"\n        }\n    ],\n    "transform": [],\n    "sink": [\n        {\n            "plugin_name": "Clickhouse",\n            "host": "localhost:8123",\n            "database": "default",\n            "table": "fake_all",\n            "username": "c2VhdHVubmVs",\n            "password": "c2VhdHVubmVsX3Bhc3N3b3Jk"\n        }\n    ]\n}\n'))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"update-the-tags-of-running-node"},"Update the tags of running node"),(0,l.yg)("details",null,(0,l.yg)("summary",null,(0,l.yg)("code",null,"POST"),(0,l.yg)("code",null,(0,l.yg)("b",null,"/hazelcast/rest/maps/update-tags")),(0,l.yg)("code",null,"Because the update can only target a specific node, the current node's `ip:port` needs to be used for the update"),(0,l.yg)("code",null,"(If the update is successful, return a success message)")),(0,l.yg)("h4",{id:"update-node-tags"},"update node tags"),(0,l.yg)("h5",{id:"body-3"},"Body"),(0,l.yg)("p",null,"If the request parameter is a ",(0,l.yg)("inlineCode",{parentName:"p"},"Map")," object, it indicates that the tags of the current node need to be updated"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "tag1": "dev_1",\n  "tag2": "dev_2"\n}\n')),(0,l.yg)("h5",{id:"responses-9"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "success",\n  "message": "update node tags done."\n}\n')),(0,l.yg)("h4",{id:"remove-node-tags"},"remove node tags"),(0,l.yg)("h5",{id:"body-4"},"Body"),(0,l.yg)("p",null,"If the parameter is an empty ",(0,l.yg)("inlineCode",{parentName:"p"},"Map")," object, it means that the tags of the current node need to be cleared"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,l.yg)("h5",{id:"responses-10"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "success",\n  "message": "update node tags done."\n}\n')),(0,l.yg)("h4",{id:"request-parameter-exception"},"Request parameter exception"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"If the parameter body is empty")),(0,l.yg)("h5",{id:"responses-11"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "fail",\n    "message": "Request body is empty."\n}\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"If the parameter is not a ",(0,l.yg)("inlineCode",{parentName:"li"},"Map")," object")),(0,l.yg)("h5",{id:"responses-12"},"Responses"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "fail",\n  "message": "Invalid JSON format in request body."\n}\n'))))}p.isMDXComponent=!0}}]);