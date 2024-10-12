"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[48741],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>m});var l=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,l,t=function(e,n){if(null==e)return{};var a,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var g=l.createContext({}),s=function(e){var n=l.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=s(e.components);return l.createElement(g.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},y=l.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),y=t,m=d["".concat(g,".").concat(y)]||d[y]||p[y]||r;return a?l.createElement(m,i(i({ref:n},u),{},{components:a})):l.createElement(m,i({ref:n},u))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=y;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[d]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}y.displayName="MDXCreateElement"},66965:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=a(58168),t=(a(96540),a(15680));const r={sidebar_position:11},i="RESTful API",o={unversionedId:"seatunnel-engine/rest-api-v1",id:"seatunnel-engine/rest-api-v1",title:"RESTful API",description:"\u63a8\u8350\u4f7f\u7528v2\u7248\u672c\u7684Rest API\u3002 v1 \u7248\u672c\u5df2\u5f03\u7528\uff0c\u5e76\u5c06\u5728\u5c06\u6765\u5220\u9664\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/rest-api-v1.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/rest-api-v1",permalink:"/zh-CN/docs/seatunnel-engine/rest-api-v1",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/rest-api-v1.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docs",previous:{title:"\u8d44\u6e90\u9694\u79bb",permalink:"/zh-CN/docs/seatunnel-engine/resource-isolation"},next:{title:"RESTful API",permalink:"/zh-CN/docs/seatunnel-engine/rest-api-v2"}},g={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"API\u53c2\u8003",id:"api\u53c2\u8003",level:2},{value:"\u8fd4\u56deZeta\u96c6\u7fa4\u7684\u6982\u89c8",id:"\u8fd4\u56dezeta\u96c6\u7fa4\u7684\u6982\u89c8",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:4},{value:"\u8fd4\u56de\u5f53\u524d\u8282\u70b9\u7684\u7ebf\u7a0b\u5806\u6808\u4fe1\u606f\u3002",id:"\u8fd4\u56de\u5f53\u524d\u8282\u70b9\u7684\u7ebf\u7a0b\u5806\u6808\u4fe1\u606f",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4},{value:"\u8fd4\u56de\u6240\u6709\u4f5c\u4e1a\u53ca\u5176\u5f53\u524d\u72b6\u6001\u7684\u6982\u89c8",id:"\u8fd4\u56de\u6240\u6709\u4f5c\u4e1a\u53ca\u5176\u5f53\u524d\u72b6\u6001\u7684\u6982\u89c8",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-1",level:4},{value:"\u8fd4\u56de\u4f5c\u4e1a\u7684\u8be6\u7ec6\u4fe1\u606f",id:"\u8fd4\u56de\u4f5c\u4e1a\u7684\u8be6\u7ec6\u4fe1\u606f",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-2",level:4},{value:"\u8fd4\u56de\u4f5c\u4e1a\u7684\u8be6\u7ec6\u4fe1\u606f",id:"\u8fd4\u56de\u4f5c\u4e1a\u7684\u8be6\u7ec6\u4fe1\u606f-1",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-3",level:4},{value:"\u8fd4\u56de\u6240\u6709\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\u4fe1\u606f",id:"\u8fd4\u56de\u6240\u6709\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\u4fe1\u606f",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-4",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-4",level:4},{value:"\u8fd4\u56de\u7cfb\u7edf\u76d1\u63a7\u4fe1\u606f",id:"\u8fd4\u56de\u7cfb\u7edf\u76d1\u63a7\u4fe1\u606f",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-5",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-5",level:4},{value:"\u63d0\u4ea4\u4f5c\u4e1a",id:"\u63d0\u4ea4\u4f5c\u4e1a",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-6",level:4},{value:"\u8bf7\u6c42\u4f53",id:"\u8bf7\u6c42\u4f53",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-6",level:4},{value:"\u6279\u91cf\u63d0\u4ea4\u4f5c\u4e1a",id:"\u6279\u91cf\u63d0\u4ea4\u4f5c\u4e1a",level:3},{value:"\u53c2\u6570(\u5728\u8bf7\u6c42\u4f53\u4e2dparams\u5b57\u6bb5\u4e2d\u6dfb\u52a0)",id:"\u53c2\u6570\u5728\u8bf7\u6c42\u4f53\u4e2dparams\u5b57\u6bb5\u4e2d\u6dfb\u52a0",level:4},{value:"\u8bf7\u6c42\u4f53",id:"\u8bf7\u6c42\u4f53-1",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-7",level:4},{value:"\u505c\u6b62\u4f5c\u4e1a",id:"\u505c\u6b62\u4f5c\u4e1a",level:3},{value:"\u8bf7\u6c42\u4f53",id:"\u8bf7\u6c42\u4f53-2",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-8",level:4},{value:"\u6279\u91cf\u505c\u6b62\u4f5c\u4e1a",id:"\u6279\u91cf\u505c\u6b62\u4f5c\u4e1a",level:3},{value:"\u8bf7\u6c42\u4f53",id:"\u8bf7\u6c42\u4f53-3",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-9",level:4},{value:"\u52a0\u5bc6\u914d\u7f6e",id:"\u52a0\u5bc6\u914d\u7f6e",level:3},{value:"\u8bf7\u6c42\u4f53",id:"\u8bf7\u6c42\u4f53-4",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-10",level:4},{value:"\u66f4\u65b0\u8fd0\u884c\u8282\u70b9\u7684tags",id:"\u66f4\u65b0\u8fd0\u884c\u8282\u70b9\u7684tags",level:3},{value:"\u66f4\u65b0\u8282\u70b9tags",id:"\u66f4\u65b0\u8282\u70b9tags",level:4},{value:"\u8bf7\u6c42\u4f53",id:"\u8bf7\u6c42\u4f53-5",level:5},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-11",level:5},{value:"\u79fb\u9664\u8282\u70b9tags",id:"\u79fb\u9664\u8282\u70b9tags",level:4},{value:"\u8bf7\u6c42\u4f53",id:"\u8bf7\u6c42\u4f53-6",level:5},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-12",level:5},{value:"\u8bf7\u6c42\u53c2\u6570\u5f02\u5e38",id:"\u8bf7\u6c42\u53c2\u6570\u5f02\u5e38",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-13",level:5},{value:"\u54cd\u5e94",id:"\u54cd\u5e94-14",level:5}],u={toc:s},d="wrapper";function p(e){let{components:n,...a}=e;return(0,t.yg)(d,(0,l.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"restful-api"},"RESTful API"),(0,t.yg)("admonition",{title:"warn",type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"\u63a8\u8350\u4f7f\u7528v2\u7248\u672c\u7684Rest API\u3002 v1 \u7248\u672c\u5df2\u5f03\u7528\uff0c\u5e76\u5c06\u5728\u5c06\u6765\u5220\u9664\u3002")),(0,t.yg)("p",null,"SeaTunnel\u6709\u4e00\u4e2a\u7528\u4e8e\u76d1\u63a7\u7684API\uff0c\u53ef\u7528\u4e8e\u67e5\u8be2\u8fd0\u884c\u4f5c\u4e1a\u7684\u72b6\u6001\u548c\u7edf\u8ba1\u4fe1\u606f\uff0c\u4ee5\u53ca\u6700\u8fd1\u5b8c\u6210\u7684\u4f5c\u4e1a\u3002\u76d1\u63a7API\u662fRESTful\u98ce\u683c\u7684\uff0c\u5b83\u63a5\u53d7HTTP\u8bf7\u6c42\u5e76\u4f7f\u7528JSON\u6570\u636e\u683c\u5f0f\u8fdb\u884c\u54cd\u5e94\u3002"),(0,t.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,t.yg)("p",null,"\u76d1\u63a7API\u662f\u7531\u8fd0\u884c\u7684web\u670d\u52a1\u63d0\u4f9b\u7684\uff0c\u5b83\u662f\u8282\u70b9\u8fd0\u884c\u7684\u4e00\u90e8\u5206\uff0c\u6bcf\u4e2a\u8282\u70b9\u6210\u5458\u90fd\u53ef\u4ee5\u63d0\u4f9brest API\u529f\u80fd\u3002\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u670d\u52a1\u76d1\u542c\u7aef\u53e3\u4e3a5801\uff0c\u8be5\u7aef\u53e3\u53ef\u4ee5\u5728hazelcast.yaml\u4e2d\u914d\u7f6e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"network:\n    rest-api:\n      enabled: true\n      endpoint-groups:\n        CLUSTER_WRITE:\n          enabled: true\n        DATA:\n          enabled: true\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - localhost\n    port:\n      auto-increment: true\n      port-count: 100\n      port: 5801\n")),(0,t.yg)("h2",{id:"api\u53c2\u8003"},"API\u53c2\u8003"),(0,t.yg)("h3",{id:"\u8fd4\u56dezeta\u96c6\u7fa4\u7684\u6982\u89c8"},"\u8fd4\u56deZeta\u96c6\u7fa4\u7684\u6982\u89c8"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"GET")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/overview?tag1=value1&tag2=value2"))," ",(0,t.yg)("code",null,"(Returns an overview over the Zeta engine cluster.)")),(0,t.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,t.yg)("blockquote",null,(0,t.yg)("table",{parentName:"blockquote"},(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,t.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u4f20"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"tag\u952e\u503c\u5bf9"),(0,t.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,t.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,t.yg)("td",{parentName:"tr",align:null},"\u4e00\u7ec4\u6807\u7b7e\u503c, \u901a\u8fc7\u8be5\u6807\u7b7e\u503c\u8fc7\u6ee4\u6ee1\u8db3\u6761\u4ef6\u7684\u8282\u70b9\u4fe1\u606f"))))),(0,t.yg)("h4",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "projectVersion":"2.3.5-SNAPSHOT",\n    "gitCommitAbbrev":"DeadD0d0",\n    "totalSlot":"0",\n    "unassignedSlot":"0",\n    "works":"1",\n    "runningJobs":"0",\n    "finishedJobs":"0",\n    "failedJobs":"0",\n    "cancelledJobs":"0"\n}\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u6ce8\u610f:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5f53\u4f60\u4f7f\u7528",(0,t.yg)("inlineCode",{parentName:"li"},"dynamic-slot"),"\u65f6, \u8fd4\u56de\u7ed3\u679c\u4e2d\u7684",(0,t.yg)("inlineCode",{parentName:"li"},"totalSlot"),"\u548c",(0,t.yg)("inlineCode",{parentName:"li"},"unassignedSlot"),"\u5c06\u59cb\u7ec8\u4e3a0. \u8bbe\u7f6e\u4e3a\u56fa\u5b9a\u7684slot\u503c\u540e, \u5c06\u6b63\u786e\u8fd4\u56de\u96c6\u7fa4\u4e2d\u603b\u5171\u7684slot\u6570\u91cf\u4ee5\u53ca\u672a\u5206\u914d\u7684slot\u6570\u91cf."),(0,t.yg)("li",{parentName:"ul"},"\u5f53\u6dfb\u52a0\u6807\u7b7e\u8fc7\u6ee4\u540e, ",(0,t.yg)("inlineCode",{parentName:"li"},"works"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"totalSlot"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"unassignedSlot"),"\u5c06\u8fd4\u56de\u6ee1\u8db3\u6761\u4ef6\u7684\u8282\u70b9\u7684\u76f8\u5173\u6307\u6807. \u6ce8\u610f",(0,t.yg)("inlineCode",{parentName:"li"},"runningJobs"),"\u7b49job\u76f8\u5173\u6307\u6807\u4e3a\u96c6\u7fa4\u7ea7\u522b\u7ed3\u679c, \u65e0\u6cd5\u6839\u636e\u6807\u7b7e\u8fdb\u884c\u8fc7\u6ee4."))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u8fd4\u56de\u5f53\u524d\u8282\u70b9\u7684\u7ebf\u7a0b\u5806\u6808\u4fe1\u606f"},"\u8fd4\u56de\u5f53\u524d\u8282\u70b9\u7684\u7ebf\u7a0b\u5806\u6808\u4fe1\u606f\u3002"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"GET")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/thread-dump"))," ",(0,t.yg)("code",null,"(\u8fd4\u56de\u5f53\u524d\u8282\u70b9\u7684\u7ebf\u7a0b\u5806\u6808\u4fe1\u606f\u3002)")),(0,t.yg)("h4",{id:"parameters"},"Parameters"),(0,t.yg)("h4",{id:"responses"},"Responses"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "threadName": "",\n    "threadId": 0,\n    "threadState": "",\n    "stackTrace": ""\n  }\n]\n'))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u8fd4\u56de\u6240\u6709\u4f5c\u4e1a\u53ca\u5176\u5f53\u524d\u72b6\u6001\u7684\u6982\u89c8"},"\u8fd4\u56de\u6240\u6709\u4f5c\u4e1a\u53ca\u5176\u5f53\u524d\u72b6\u6001\u7684\u6982\u89c8"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"GET")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/running-jobs"))," ",(0,t.yg)("code",null,"(\u8fd4\u56de\u6240\u6709\u4f5c\u4e1a\u53ca\u5176\u5f53\u524d\u72b6\u6001\u7684\u6982\u89c8\u3002)")),(0,t.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,t.yg)("h4",{id:"\u54cd\u5e94-1"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "",\n    "jobName": "",\n    "jobStatus": "",\n    "envOptions": {\n    },\n    "createTime": "",\n    "jobDag": {\n      "vertices": [\n      ],\n      "edges": [\n      ]\n    },\n    "pluginJarsUrls": [\n    ],\n    "isStartWithSavePoint": false,\n    "metrics": {\n      "sourceReceivedCount": "",\n      "sinkWriteCount": ""\n    }\n  }\n]\n'))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u8fd4\u56de\u4f5c\u4e1a\u7684\u8be6\u7ec6\u4fe1\u606f"},"\u8fd4\u56de\u4f5c\u4e1a\u7684\u8be6\u7ec6\u4fe1\u606f"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"GET")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/job-info/:jobId"))," ",(0,t.yg)("code",null,"(\u8fd4\u56de\u4f5c\u4e1a\u7684\u8be6\u7ec6\u4fe1\u606f\u3002)")),(0,t.yg)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,t.yg)("blockquote",null,(0,t.yg)("table",{parentName:"blockquote"},(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,t.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u4f20"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"jobId"),(0,t.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,t.yg)("td",{parentName:"tr",align:null},"long"),(0,t.yg)("td",{parentName:"tr",align:null},"job id"))))),(0,t.yg)("h4",{id:"\u54cd\u5e94-2"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "",\n  "jobName": "",\n  "jobStatus": "",\n  "createTime": "",\n  "jobDag": {\n    "jobId": "",\n    "vertexInfoMap": [\n      {\n        "vertexId": 1,\n        "type": "",\n        "vertexName": "",\n        "tablePaths": [\n          ""\n        ]\n      }\n    ],\n    "pipelineEdges": {}\n  },\n  "metrics": {\n    "SourceReceivedCount": "",\n    "SourceReceivedQPS": "",\n    "SourceReceivedBytes": "",\n    "SourceReceivedBytesPerSeconds": "",\n    "SinkWriteCount": "",\n    "SinkWriteQPS": "",\n    "SinkWriteBytes": "",\n    "SinkWriteBytesPerSeconds": "",\n    "TableSourceReceivedCount": {},\n    "TableSourceReceivedBytes": {},\n    "TableSourceReceivedBytesPerSeconds": {},\n    "TableSourceReceivedQPS": {},\n    "TableSinkWriteCount": {},\n    "TableSinkWriteQPS": {},\n    "TableSinkWriteBytes": {},\n    "TableSinkWriteBytesPerSeconds": {}\n  },\n  "finishedTime": "",\n  "errorMsg": null,\n  "envOptions": {\n  },\n  "pluginJarsUrls": [\n  ],\n  "isStartWithSavePoint": false\n}\n')),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"jobId"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"jobName"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"jobStatus"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"createTime"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"jobDag"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"metrics")," \u5b57\u6bb5\u603b\u4f1a\u8fd4\u56de.\n",(0,t.yg)("inlineCode",{parentName:"p"},"envOptions"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"pluginJarsUrls"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"isStartWithSavePoint")," \u5b57\u6bb5\u5728Job\u5728RUNNING\u72b6\u6001\u65f6\u4f1a\u8fd4\u56de\n",(0,t.yg)("inlineCode",{parentName:"p"},"finishedTime"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"errorMsg")," \u5b57\u6bb5\u5728Job\u7ed3\u675f\u65f6\u4f1a\u8fd4\u56de\uff0c\u7ed3\u675f\u72b6\u6001\u4e3a\u4e0d\u4e3aRUNNING\uff0c\u53ef\u80fd\u4e3aFINISHED\uff0c\u53ef\u80fd\u4e3aCANCEL"),(0,t.yg)("p",null,"\u5f53\u6211\u4eec\u67e5\u8be2\u4e0d\u5230\u8fd9\u4e2aJob\u65f6\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3a\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId" : ""\n}\n'))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u8fd4\u56de\u4f5c\u4e1a\u7684\u8be6\u7ec6\u4fe1\u606f-1"},"\u8fd4\u56de\u4f5c\u4e1a\u7684\u8be6\u7ec6\u4fe1\u606f"),(0,t.yg)("p",null,"\u6b64API\u5df2\u7ecf\u5f03\u7528\uff0c\u8bf7\u4f7f\u7528/hazelcast/rest/maps/job-info/:jobId\u66ff\u4ee3\u3002"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"GET")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/running-job/:jobId"))," ",(0,t.yg)("code",null,"(\u8fd4\u56de\u4f5c\u4e1a\u7684\u8be6\u7ec6\u4fe1\u606f\u3002)")),(0,t.yg)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,t.yg)("blockquote",null,(0,t.yg)("table",{parentName:"blockquote"},(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,t.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u4f20"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"jobId"),(0,t.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,t.yg)("td",{parentName:"tr",align:null},"long"),(0,t.yg)("td",{parentName:"tr",align:null},"job id"))))),(0,t.yg)("h4",{id:"\u54cd\u5e94-3"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "",\n  "jobName": "",\n  "jobStatus": "",\n  "createTime": "",\n  "jobDag": {\n    "jobId": "",\n    "vertexInfoMap": [\n      {\n        "vertexId": 1,\n        "type": "",\n        "vertexName": "",\n        "tablePaths": [\n          ""\n        ]\n      }\n    ],\n    "pipelineEdges": {}\n  },\n  "metrics": {\n    "sourceReceivedCount": "",\n    "sinkWriteCount": ""\n  },\n  "finishedTime": "",\n  "errorMsg": null,\n  "envOptions": {\n  },\n  "pluginJarsUrls": [\n  ],\n  "isStartWithSavePoint": false\n}\n')),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"jobId"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"jobName"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"jobStatus"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"createTime"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"jobDag"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"metrics")," \u5b57\u6bb5\u603b\u4f1a\u8fd4\u56de.\n",(0,t.yg)("inlineCode",{parentName:"p"},"envOptions"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"pluginJarsUrls"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"isStartWithSavePoint")," \u5b57\u6bb5\u5728Job\u5728RUNNING\u72b6\u6001\u65f6\u4f1a\u8fd4\u56de\n",(0,t.yg)("inlineCode",{parentName:"p"},"finishedTime"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"errorMsg")," \u5b57\u6bb5\u5728Job\u7ed3\u675f\u65f6\u4f1a\u8fd4\u56de\uff0c\u7ed3\u675f\u72b6\u6001\u4e3a\u4e0d\u4e3aRUNNING\uff0c\u53ef\u80fd\u4e3aFINISHED\uff0c\u53ef\u80fd\u4e3aCANCEL"),(0,t.yg)("p",null,"\u5f53\u6211\u4eec\u67e5\u8be2\u4e0d\u5230\u8fd9\u4e2aJob\u65f6\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3a\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId" : ""\n}\n'))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u8fd4\u56de\u6240\u6709\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\u4fe1\u606f"},"\u8fd4\u56de\u6240\u6709\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\u4fe1\u606f"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"GET")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/finished-jobs/:state"))," ",(0,t.yg)("code",null,"(\u8fd4\u56de\u6240\u6709\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\u4fe1\u606f\u3002)")),(0,t.yg)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,t.yg)("blockquote",null,(0,t.yg)("table",{parentName:"blockquote"},(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,t.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u4f20"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"state"),(0,t.yg)("td",{parentName:"tr",align:null},"optional"),(0,t.yg)("td",{parentName:"tr",align:null},"string"),(0,t.yg)("td",{parentName:"tr",align:null},"finished job status. ",(0,t.yg)("inlineCode",{parentName:"td"},"FINISHED"),",",(0,t.yg)("inlineCode",{parentName:"td"},"CANCELED"),",",(0,t.yg)("inlineCode",{parentName:"td"},"FAILED"),",",(0,t.yg)("inlineCode",{parentName:"td"},"UNKNOWABLE")))))),(0,t.yg)("h4",{id:"\u54cd\u5e94-4"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "",\n    "jobName": "",\n    "jobStatus": "",\n    "errorMsg": null,\n    "createTime": "",\n    "finishTime": "",\n    "jobDag": {\n      "jobId": "",\n      "vertexInfoMap": [\n        {\n          "vertexId": 1,\n          "type": "",\n          "vertexName": "",\n          "tablePaths": [\n            ""\n          ]\n        }\n      ],\n      "pipelineEdges": {}\n    },    "metrics": ""\n  }\n]\n'))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u8fd4\u56de\u7cfb\u7edf\u76d1\u63a7\u4fe1\u606f"},"\u8fd4\u56de\u7cfb\u7edf\u76d1\u63a7\u4fe1\u606f"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"GET")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/system-monitoring-information"))," ",(0,t.yg)("code",null,"(\u8fd4\u56de\u7cfb\u7edf\u76d1\u63a7\u4fe1\u606f\u3002)")),(0,t.yg)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,t.yg)("h4",{id:"\u54cd\u5e94-5"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "isMaster": "true",\n    "host": "localhost",\n    "port": "5801",\n    "processors":"8",\n    "physical.memory.total":"16.0G",\n    "physical.memory.free":"16.3M",\n    "swap.space.total":"0",\n    "swap.space.free":"0",\n    "heap.memory.used":"135.7M",\n    "heap.memory.free":"440.8M",\n    "heap.memory.total":"576.5M",\n    "heap.memory.max":"3.6G",\n    "heap.memory.used/total":"23.54%",\n    "heap.memory.used/max":"3.73%",\n    "minor.gc.count":"6",\n    "minor.gc.time":"110ms",\n    "major.gc.count":"2",\n    "major.gc.time":"73ms",\n    "load.process":"24.78%",\n    "load.system":"60.00%",\n    "load.systemAverage":"2.07",\n    "thread.count":"117",\n    "thread.peakCount":"118",\n    "cluster.timeDiff":"0",\n    "event.q.size":"0",\n    "executor.q.async.size":"0",\n    "executor.q.client.size":"0",\n    "executor.q.client.query.size":"0",\n    "executor.q.client.blocking.size":"0",\n    "executor.q.query.size":"0",\n    "executor.q.scheduled.size":"0",\n    "executor.q.io.size":"0",\n    "executor.q.system.size":"0",\n    "executor.q.operations.size":"0",\n    "executor.q.priorityOperation.size":"0",\n    "operations.completed.count":"10",\n    "executor.q.mapLoad.size":"0",\n    "executor.q.mapLoadAllKeys.size":"0",\n    "executor.q.cluster.size":"0",\n    "executor.q.response.size":"0",\n    "operations.running.count":"0",\n    "operations.pending.invocations.percentage":"0.00%",\n    "operations.pending.invocations.count":"0",\n    "proxy.count":"8",\n    "clientEndpoint.count":"0",\n    "connection.active.count":"2",\n    "client.connection.count":"0",\n    "connection.count":"0"\n  }\n]\n'))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u63d0\u4ea4\u4f5c\u4e1a"},"\u63d0\u4ea4\u4f5c\u4e1a"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"POST")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/submit-job"))," ",(0,t.yg)("code",null,"(\u5982\u679c\u4f5c\u4e1a\u63d0\u4ea4\u6210\u529f\uff0c\u8fd4\u56dejobId\u548cjobName\u3002)")),(0,t.yg)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,t.yg)("blockquote",null,(0,t.yg)("table",{parentName:"blockquote"},(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,t.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u4f20"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"jobId"),(0,t.yg)("td",{parentName:"tr",align:null},"optional"),(0,t.yg)("td",{parentName:"tr",align:null},"string"),(0,t.yg)("td",{parentName:"tr",align:null},"job id")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"jobName"),(0,t.yg)("td",{parentName:"tr",align:null},"optional"),(0,t.yg)("td",{parentName:"tr",align:null},"string"),(0,t.yg)("td",{parentName:"tr",align:null},"job name")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"isStartWithSavePoint"),(0,t.yg)("td",{parentName:"tr",align:null},"optional"),(0,t.yg)("td",{parentName:"tr",align:null},"string"),(0,t.yg)("td",{parentName:"tr",align:null},"if job is started with save point"))))),(0,t.yg)("h4",{id:"\u8bf7\u6c42\u4f53"},"\u8bf7\u6c42\u4f53"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "job.mode": "batch"\n    },\n    "source": [\n        {\n            "plugin_name": "FakeSource",\n            "result_table_name": "fake",\n            "row.num": 100,\n            "schema": {\n                "fields": {\n                    "name": "string",\n                    "age": "int",\n                    "card": "int"\n                }\n            }\n        }\n    ],\n    "transform": [\n    ],\n    "sink": [\n        {\n            "plugin_name": "Console",\n            "source_table_name": ["fake"]\n        }\n    ]\n}\n')),(0,t.yg)("h4",{id:"\u54cd\u5e94-6"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "jobId": 733584788375666689,\n    "jobName": "rest_api_test"\n}\n'))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u6279\u91cf\u63d0\u4ea4\u4f5c\u4e1a"},"\u6279\u91cf\u63d0\u4ea4\u4f5c\u4e1a"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"POST")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/submit-jobs"))," ",(0,t.yg)("code",null,"(\u5982\u679c\u4f5c\u4e1a\u63d0\u4ea4\u6210\u529f\uff0c\u8fd4\u56dejobId\u548cjobName\u3002)")),(0,t.yg)("h4",{id:"\u53c2\u6570\u5728\u8bf7\u6c42\u4f53\u4e2dparams\u5b57\u6bb5\u4e2d\u6dfb\u52a0"},"\u53c2\u6570(\u5728\u8bf7\u6c42\u4f53\u4e2dparams\u5b57\u6bb5\u4e2d\u6dfb\u52a0)"),(0,t.yg)("blockquote",null,(0,t.yg)("table",{parentName:"blockquote"},(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,t.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u4f20"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,t.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"jobId"),(0,t.yg)("td",{parentName:"tr",align:null},"optional"),(0,t.yg)("td",{parentName:"tr",align:null},"string"),(0,t.yg)("td",{parentName:"tr",align:null},"job id")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"jobName"),(0,t.yg)("td",{parentName:"tr",align:null},"optional"),(0,t.yg)("td",{parentName:"tr",align:null},"string"),(0,t.yg)("td",{parentName:"tr",align:null},"job name")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"isStartWithSavePoint"),(0,t.yg)("td",{parentName:"tr",align:null},"optional"),(0,t.yg)("td",{parentName:"tr",align:null},"string"),(0,t.yg)("td",{parentName:"tr",align:null},"if job is started with save point"))))),(0,t.yg)("h4",{id:"\u8bf7\u6c42\u4f53-1"},"\u8bf7\u6c42\u4f53"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "params":{\n      "jobId":"123456",\n      "jobName":"SeaTunnel-01"\n    },\n    "env": {\n      "job.mode": "batch"\n    },\n    "source": [\n      {\n        "plugin_name": "FakeSource",\n        "result_table_name": "fake",\n        "row.num": 1000,\n        "schema": {\n          "fields": {\n            "name": "string",\n            "age": "int",\n            "card": "int"\n          }\n        }\n      }\n    ],\n    "transform": [\n    ],\n    "sink": [\n      {\n        "plugin_name": "Console",\n        "source_table_name": ["fake"]\n      }\n    ]\n  },\n  {\n    "params":{\n      "jobId":"1234567",\n      "jobName":"SeaTunnel-02"\n    },\n    "env": {\n      "job.mode": "batch"\n    },\n    "source": [\n      {\n        "plugin_name": "FakeSource",\n        "result_table_name": "fake",\n        "row.num": 1000,\n        "schema": {\n          "fields": {\n            "name": "string",\n            "age": "int",\n            "card": "int"\n          }\n        }\n      }\n    ],\n    "transform": [\n    ],\n    "sink": [\n      {\n        "plugin_name": "Console",\n        "source_table_name": ["fake"]\n      }\n    ]\n  }\n]\n')),(0,t.yg)("h4",{id:"\u54cd\u5e94-7"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "123456",\n    "jobName": "SeaTunnel-01"\n  },{\n    "jobId": "1234567",\n    "jobName": "SeaTunnel-02"\n  }\n]\n'))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u505c\u6b62\u4f5c\u4e1a"},"\u505c\u6b62\u4f5c\u4e1a"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"POST")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/stop-job"))," ",(0,t.yg)("code",null,"(\u5982\u679c\u4f5c\u4e1a\u6210\u529f\u505c\u6b62\uff0c\u8fd4\u56dejobId\u3002)")),(0,t.yg)("h4",{id:"\u8bf7\u6c42\u4f53-2"},"\u8bf7\u6c42\u4f53"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "jobId": 733584788375666689,\n    "isStopWithSavePoint": false # if job is stopped with save point\n}\n')),(0,t.yg)("h4",{id:"\u54cd\u5e94-8"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n"jobId": 733584788375666689\n}\n'))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u6279\u91cf\u505c\u6b62\u4f5c\u4e1a"},"\u6279\u91cf\u505c\u6b62\u4f5c\u4e1a"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"POST")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/stop-jobs"))," ",(0,t.yg)("code",null,"(\u5982\u679c\u4f5c\u4e1a\u6210\u529f\u505c\u6b62\uff0c\u8fd4\u56dejobId\u3002)")),(0,t.yg)("h4",{id:"\u8bf7\u6c42\u4f53-3"},"\u8bf7\u6c42\u4f53"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": 881432421482889220,\n    "isStopWithSavePoint": false\n  },\n  {\n    "jobId": 881432456517910529,\n    "isStopWithSavePoint": false\n  }\n]\n')),(0,t.yg)("h4",{id:"\u54cd\u5e94-9"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": 881432421482889220\n  },\n  {\n    "jobId": 881432456517910529\n  }\n]\n'))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u52a0\u5bc6\u914d\u7f6e"},"\u52a0\u5bc6\u914d\u7f6e"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"POST")," ",(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/encrypt-config"))," ",(0,t.yg)("code",null,"(\u5982\u679c\u914d\u7f6e\u52a0\u5bc6\u6210\u529f\uff0c\u5219\u8fd4\u56de\u52a0\u5bc6\u540e\u7684\u914d\u7f6e\u3002)")),"\u6709\u5173\u81ea\u5b9a\u4e49\u52a0\u5bc6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6587\u6863[\u914d\u7f6e-\u52a0\u5bc6-\u89e3\u5bc6](/zh-CN/docs/connector-v2/Config-Encryption-Decryption).",(0,t.yg)("h4",{id:"\u8bf7\u6c42\u4f53-4"},"\u8bf7\u6c42\u4f53"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "parallelism": 1,\n        "shade.identifier":"base64"\n    },\n    "source": [\n        {\n            "plugin_name": "MySQL-CDC",\n            "schema" : {\n                "fields": {\n                    "name": "string",\n                    "age": "int"\n                }\n            },\n            "result_table_name": "fake",\n            "parallelism": 1,\n            "hostname": "127.0.0.1",\n            "username": "seatunnel",\n            "password": "seatunnel_password",\n            "table-name": "inventory_vwyw0n"\n        }\n    ],\n    "transform": [\n    ],\n    "sink": [\n        {\n            "plugin_name": "Clickhouse",\n            "host": "localhost:8123",\n            "database": "default",\n            "table": "fake_all",\n            "username": "seatunnel",\n            "password": "seatunnel_password"\n        }\n    ]\n}\n')),(0,t.yg)("h4",{id:"\u54cd\u5e94-10"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "parallelism": 1,\n        "shade.identifier": "base64"\n    },\n    "source": [\n        {\n            "plugin_name": "MySQL-CDC",\n            "schema": {\n                "fields": {\n                    "name": "string",\n                    "age": "int"\n                }\n            },\n            "result_table_name": "fake",\n            "parallelism": 1,\n            "hostname": "127.0.0.1",\n            "username": "c2VhdHVubmVs",\n            "password": "c2VhdHVubmVsX3Bhc3N3b3Jk",\n            "table-name": "inventory_vwyw0n"\n        }\n    ],\n    "transform": [],\n    "sink": [\n        {\n            "plugin_name": "Clickhouse",\n            "host": "localhost:8123",\n            "database": "default",\n            "table": "fake_all",\n            "username": "c2VhdHVubmVs",\n            "password": "c2VhdHVubmVsX3Bhc3N3b3Jk"\n        }\n    ]\n}\n'))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"\u66f4\u65b0\u8fd0\u884c\u8282\u70b9\u7684tags"},"\u66f4\u65b0\u8fd0\u884c\u8282\u70b9\u7684tags"),(0,t.yg)("details",null,(0,t.yg)("summary",null,(0,t.yg)("code",null,"POST"),(0,t.yg)("code",null,(0,t.yg)("b",null,"/hazelcast/rest/maps/update-tags")),(0,t.yg)("code",null,"\u56e0\u4e3a\u66f4\u65b0\u53ea\u80fd\u9488\u5bf9\u4e8e\u67d0\u4e2a\u8282\u70b9\uff0c\u56e0\u6b64\u9700\u8981\u7528\u5f53\u524d\u8282\u70b9ip:port\u7528\u4e8e\u66f4\u65b0"),(0,t.yg)("code",null,'(\u5982\u679c\u66f4\u65b0\u6210\u529f\uff0c\u5219\u8fd4\u56de"success"\u4fe1\u606f)')),(0,t.yg)("h4",{id:"\u66f4\u65b0\u8282\u70b9tags"},"\u66f4\u65b0\u8282\u70b9tags"),(0,t.yg)("h5",{id:"\u8bf7\u6c42\u4f53-5"},"\u8bf7\u6c42\u4f53"),(0,t.yg)("p",null,"\u5982\u679c\u8bf7\u6c42\u53c2\u6570\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"Map"),"\u5bf9\u8c61\uff0c\u8868\u793a\u8981\u66f4\u65b0\u5f53\u524d\u8282\u70b9\u7684tags"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "tag1": "dev_1",\n  "tag2": "dev_2"\n}\n')),(0,t.yg)("h5",{id:"\u54cd\u5e94-11"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "success",\n  "message": "update node tags done."\n}\n')),(0,t.yg)("h4",{id:"\u79fb\u9664\u8282\u70b9tags"},"\u79fb\u9664\u8282\u70b9tags"),(0,t.yg)("h5",{id:"\u8bf7\u6c42\u4f53-6"},"\u8bf7\u6c42\u4f53"),(0,t.yg)("p",null,"\u5982\u679c\u53c2\u6570\u4e3a\u7a7a",(0,t.yg)("inlineCode",{parentName:"p"},"Map"),"\u5bf9\u8c61\uff0c\u8868\u793a\u8981\u6e05\u9664\u5f53\u524d\u8282\u70b9\u7684tags"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,t.yg)("h5",{id:"\u54cd\u5e94-12"},"\u54cd\u5e94"),(0,t.yg)("p",null,"\u54cd\u5e94\u4f53\u5c06\u4e3a\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "success",\n  "message": "update node tags done."\n}\n')),(0,t.yg)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5f02\u5e38"},"\u8bf7\u6c42\u53c2\u6570\u5f02\u5e38"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u8bf7\u6c42\u53c2\u6570\u4e3a\u7a7a")),(0,t.yg)("h5",{id:"\u54cd\u5e94-13"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "fail",\n    "message": "Request body is empty."\n}\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u53c2\u6570\u4e0d\u662f",(0,t.yg)("inlineCode",{parentName:"li"},"Map"),"\u5bf9\u8c61")),(0,t.yg)("h5",{id:"\u54cd\u5e94-14"},"\u54cd\u5e94"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "fail",\n  "message": "Invalid JSON format in request body."\n}\n'))))}p.isMDXComponent=!0}}]);