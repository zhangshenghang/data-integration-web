"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[56879],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={sidebar_position:9},i="Resource Isolation",l={unversionedId:"seatunnel-engine/resource-isolation",id:"seatunnel-engine/resource-isolation",title:"Resource Isolation",description:"After version 2.3.6. SeaTunnel can add tag to each worker node, when you submit job you can use tag_filter to filter the node you want run this job.",source:"@site/docs/seatunnel-engine/resource-isolation.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/resource-isolation",permalink:"/docs/seatunnel-engine/resource-isolation",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/resource-isolation.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docs",previous:{title:"TCP Network",permalink:"/docs/seatunnel-engine/tcp"},next:{title:"RESTful API",permalink:"/docs/seatunnel-engine/rest-api"}},s={},c=[{value:"How To Archive This:",id:"how-to-archive-this",level:2}],u={toc:c},p="wrapper";function g(e){let{components:n,...o}=e;return(0,a.yg)(p,(0,r.A)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"resource-isolation"},"Resource Isolation"),(0,a.yg)("p",null,"After version 2.3.6. SeaTunnel can add ",(0,a.yg)("inlineCode",{parentName:"p"},"tag")," to each worker node, when you submit job you can use ",(0,a.yg)("inlineCode",{parentName:"p"},"tag_filter")," to filter the node you want run this job."),(0,a.yg)("h2",{id:"how-to-archive-this"},"How To Archive This:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"update the config in ",(0,a.yg)("inlineCode",{parentName:"li"},"hazelcast.yaml"),",")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"hazelcast:\n  cluster-name: seatunnel\n  network:\n    rest-api:\n      enabled: true\n      endpoint-groups:\n        CLUSTER_WRITE:\n          enabled: true\n        DATA:\n          enabled: true\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - localhost\n    port:\n      auto-increment: false\n      port: 5801\n  properties:\n    hazelcast.invocation.max.retry.count: 20\n    hazelcast.tcp.join.port.try.count: 30\n    hazelcast.logging.type: log4j2\n    hazelcast.operation.generic.thread.count: 50\n  member-attributes:\n    group:\n      type: string\n      value: platform\n    team:\n      type: string\n      value: team1\n")),(0,a.yg)("p",null,"In this config, we specify the tag by ",(0,a.yg)("inlineCode",{parentName:"p"},"member-attributes"),", the node has ",(0,a.yg)("inlineCode",{parentName:"p"},"group=platform, team=team1")," tags."),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"add ",(0,a.yg)("inlineCode",{parentName:"li"},"tag_filter")," to your job config")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hacon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  tag_filter {\n    group = "platform"\n    team = "team1"\n  }\n}\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    parallelism = 1\n    schema = {\n      fields {\n        name = "string"\n      }\n    }\n  }\n}\ntransform {\n}\nsink {\n  console {\n    source_table_name="fake"\n  }\n}\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Notice:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If not set ",(0,a.yg)("inlineCode",{parentName:"li"},"tag_filter")," in job config, it will random choose the node in all active nodes."),(0,a.yg)("li",{parentName:"ul"},"When you add multiple tag in ",(0,a.yg)("inlineCode",{parentName:"li"},"tag_filter"),", it need all key exist and value match. if all node not match, you will get ",(0,a.yg)("inlineCode",{parentName:"li"},"NoEnoughResourceException")," exception.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"img.png",src:t(65786).A,width:"1010",height:"471"})),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"update running node tags by rest api (optional)")),(0,a.yg)("p",null,"for more information, please refer to ",(0,a.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/seatunnel-engine/rest-api/"},"Update the tags of running node")))}g.isMDXComponent=!0},65786:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/resource-isolation-a002d8a1611f1d7d27b7821f321b8413.png"}}]);