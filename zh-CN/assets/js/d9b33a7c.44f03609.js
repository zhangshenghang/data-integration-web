"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[95329],{15680:(e,n,l)=>{l.d(n,{xA:()=>u,yg:()=>m});var t=l(96540);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function a(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?a(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var g=t.createContext({}),p=function(e){var n=t.useContext(g),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},u=function(e){var n=p(e.components);return t.createElement(g.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var l=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(l),c=r,m=s["".concat(g,".").concat(c)]||s[c]||y[c]||a;return l?t.createElement(m,o(o({ref:n},u),{},{components:l})):t.createElement(m,o({ref:n},u))}));function m(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=c;var i={};for(var g in n)hasOwnProperty.call(n,g)&&(i[g]=n[g]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=l[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,l)}c.displayName="MDXCreateElement"},38839:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var t=l(58168),r=(l(96540),l(15680));const a={sidebar_position:14},o="\u65e5\u5fd7",i={unversionedId:"seatunnel-engine/logging",id:"seatunnel-engine/logging",title:"\u65e5\u5fd7",description:"\u6bcf\u4e2a SeaTunnel Engine \u8fdb\u7a0b\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65e5\u5fd7\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u8be5\u8fdb\u7a0b\u4e2d\u53d1\u751f\u7684\u5404\u79cd\u4e8b\u4ef6\u7684\u6d88\u606f\u3002\u8fd9\u4e9b\u65e5\u5fd7\u63d0\u4f9b\u4e86\u5bf9 SeaTunnel Engine \u5185\u90e8\u5de5\u4f5c\u539f\u7406\u7684\u6df1\u5165\u4e86\u89e3\uff0c\u53ef\u7528\u4e8e\u68c0\u6d4b\u95ee\u9898\uff08\u4ee5 WARN/ERROR \u6d88\u606f\u7684\u5f62\u5f0f\uff09\u5e76\u6709\u52a9\u4e8e\u8c03\u8bd5\u95ee\u9898\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/logging.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/logging",permalink:"/zh-CN/docs/seatunnel-engine/logging",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/logging.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"docs",previous:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/zh-CN/docs/seatunnel-engine/user-command"},next:{title:"Telemetry",permalink:"/zh-CN/docs/seatunnel-engine/telemetry"}},g={},p=[{value:"\u7ed3\u6784\u5316\u4fe1\u606f",id:"\u7ed3\u6784\u5316\u4fe1\u606f",level:2},{value:"\u914d\u7f6e Log4j2",id:"\u914d\u7f6e-log4j2",level:2},{value:"\u914d\u7f6e\u4f5c\u4e1a\u751f\u6210\u5355\u72ec\u7684\u65e5\u5fd7\u6587\u4ef6",id:"\u914d\u7f6e\u4f5c\u4e1a\u751f\u6210\u5355\u72ec\u7684\u65e5\u5fd7\u6587\u4ef6",level:3},{value:"\u914d\u7f6e\u6df7\u5408\u65e5\u5fd7\u6587\u4ef6",id:"\u914d\u7f6e\u6df7\u5408\u65e5\u5fd7\u6587\u4ef6",level:3},{value:"\u517c\u5bb9 Log4j1/Logback",id:"\u517c\u5bb9-log4j1logback",level:3},{value:"REST-API\u65b9\u5f0f\u67e5\u8be2\u65e5\u5fd7",id:"rest-api\u65b9\u5f0f\u67e5\u8be2\u65e5\u5fd7",level:3},{value:"SeaTunnel \u65e5\u5fd7\u914d\u7f6e",id:"seatunnel-\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"\u5b9a\u65f6\u5220\u9664\u65e7\u65e5\u5fd7",id:"\u5b9a\u65f6\u5220\u9664\u65e7\u65e5\u5fd7",level:3},{value:"\u5f00\u53d1\u4eba\u5458\u6700\u4f73\u5b9e\u8df5",id:"\u5f00\u53d1\u4eba\u5458\u6700\u4f73\u5b9e\u8df5",level:2}],u={toc:p},s="wrapper";function y(e){let{components:n,...l}=e;return(0,r.yg)(s,(0,t.A)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,r.yg)("p",null,"\u6bcf\u4e2a SeaTunnel Engine \u8fdb\u7a0b\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65e5\u5fd7\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u8be5\u8fdb\u7a0b\u4e2d\u53d1\u751f\u7684\u5404\u79cd\u4e8b\u4ef6\u7684\u6d88\u606f\u3002\u8fd9\u4e9b\u65e5\u5fd7\u63d0\u4f9b\u4e86\u5bf9 SeaTunnel Engine \u5185\u90e8\u5de5\u4f5c\u539f\u7406\u7684\u6df1\u5165\u4e86\u89e3\uff0c\u53ef\u7528\u4e8e\u68c0\u6d4b\u95ee\u9898\uff08\u4ee5 WARN/ERROR \u6d88\u606f\u7684\u5f62\u5f0f\uff09\u5e76\u6709\u52a9\u4e8e\u8c03\u8bd5\u95ee\u9898\u3002"),(0,r.yg)("p",null,"SeaTunnel Engine \u4e2d\u7684\u65e5\u5fd7\u8bb0\u5f55\u4f7f\u7528 SLF4J \u65e5\u5fd7\u8bb0\u5f55\u63a5\u53e3\u3002\u8fd9\u5141\u8bb8\u60a8\u4f7f\u7528\u4efb\u4f55\u652f\u6301 SLF4J \u7684\u65e5\u5fd7\u8bb0\u5f55\u6846\u67b6\uff0c\u800c\u65e0\u9700\u4fee\u6539 SeaTunnel Engine \u6e90\u4ee3\u7801\u3002"),(0,r.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cLog4j2 \u7528\u4f5c\u5e95\u5c42\u65e5\u5fd7\u8bb0\u5f55\u6846\u67b6\u3002"),(0,r.yg)("h2",{id:"\u7ed3\u6784\u5316\u4fe1\u606f"},"\u7ed3\u6784\u5316\u4fe1\u606f"),(0,r.yg)("p",null,"SeaTunnel Engine \u5411\u5927\u591a\u6570\u76f8\u5173\u65e5\u5fd7\u6d88\u606f\u7684 MDC \u6dfb\u52a0\u4e86\u4ee5\u4e0b\u5b57\u6bb5\uff08\u5b9e\u9a8c\u6027\u529f\u80fd\uff09\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Job ID",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"key: ST-JID"),(0,r.yg)("li",{parentName:"ul"},"format: string")))),(0,r.yg)("p",null,"\u8fd9\u5728\u5177\u6709\u7ed3\u6784\u5316\u65e5\u5fd7\u8bb0\u5f55\u7684\u73af\u5883\u4e2d\u6700\u4e3a\u6709\u7528\uff0c\u5141\u8bb8\u60a8\u5feb\u901f\u8fc7\u6ee4\u76f8\u5173\u65e5\u5fd7\u3002"),(0,r.yg)("p",null,"MDC \u7531 slf4j \u4f20\u64ad\u5230\u65e5\u5fd7\u540e\u7aef\uff0c\u540e\u8005\u901a\u5e38\u4f1a\u81ea\u52a8\u5c06\u5176\u6dfb\u52a0\u5230\u65e5\u5fd7\u8bb0\u5f55\u4e2d\uff08\u4f8b\u5982\uff0c\u5728 log4j json \u5e03\u5c40\u4e2d\uff09\u3002\u6216\u8005\uff0c\u4e5f\u53ef\u4ee5\u660e\u786e\u914d\u7f6e - log4j \u6a21\u5f0f\u5e03\u5c40\u53ef\u80fd\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"[%X{ST-JID}] %c{0} %m%n.\n")),(0,r.yg)("h2",{id:"\u914d\u7f6e-log4j2"},"\u914d\u7f6e Log4j2"),(0,r.yg)("p",null,"Log4j2 \u4f7f\u7528\u5c5e\u6027\u6587\u4ef6\u8fdb\u884c\u63a7\u5236\u3002"),(0,r.yg)("p",null,"SeaTunnel Engine \u53d1\u884c\u7248\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"config")," \u76ee\u5f55\u4e2d\u9644\u5e26\u4ee5\u4e0b log4j \u5c5e\u6027\u6587\u4ef6\uff0c\u5982\u679c\u542f\u7528\u4e86 Log4j2\uff0c\u5219\u4f1a\u81ea\u52a8\u4f7f\u7528\u8fd9\u4e9b\u6587\u4ef6\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"log4j2_client.properties"),": \u7531\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\u4f7f\u7528 (\u4f8b\u5982, ",(0,r.yg)("inlineCode",{parentName:"li"},"seatunnel.sh"),")"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"log4j2.properties"),": \u7531 SeaTunnel \u5f15\u64ce\u670d\u52a1\u4f7f\u7528 (\u4f8b\u5982, ",(0,r.yg)("inlineCode",{parentName:"li"},"seatunnel-cluster.sh"),")")),(0,r.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u65e5\u5fd7\u6587\u4ef6\u8f93\u51fa\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"logs")," \u76ee\u5f55\u3002"),(0,r.yg)("p",null,"Log4j \u4f1a\u5b9a\u671f\u626b\u63cf\u4e0a\u8ff0\u6587\u4ef6\u4ee5\u67e5\u627e\u66f4\u6539\uff0c\u5e76\u6839\u636e\u9700\u8981\u8c03\u6574\u65e5\u5fd7\u8bb0\u5f55\u884c\u4e3a\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6b64\u68c0\u67e5\u6bcf 60 \u79d2\u8fdb\u884c\u4e00\u6b21\uff0c\u7531 Log4j \u5c5e\u6027\u6587\u4ef6\u4e2d\u7684 monitorInterval \u8bbe\u7f6e\u63a7\u5236\u3002"),(0,r.yg)("h3",{id:"\u914d\u7f6e\u4f5c\u4e1a\u751f\u6210\u5355\u72ec\u7684\u65e5\u5fd7\u6587\u4ef6"},"\u914d\u7f6e\u4f5c\u4e1a\u751f\u6210\u5355\u72ec\u7684\u65e5\u5fd7\u6587\u4ef6"),(0,r.yg)("p",null,"\u8981\u4e3a\u6bcf\u4e2a\u4f5c\u4e1a\u8f93\u51fa\u5355\u72ec\u7684\u65e5\u5fd7\u6587\u4ef6\uff0c\u60a8\u53ef\u4ee5\u66f4\u65b0 ",(0,r.yg)("inlineCode",{parentName:"p"},"log4j2.properties")," \u6587\u4ef6\u4e2d\u7684\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"...\nrootLogger.appenderRef.file.ref = routingAppender\n...\n\nappender.file.layout.pattern = %d{yyyy-MM-dd HH:mm:ss,SSS} %-5p [%-30.30c{1.}] [%t] - %m%n\n...\n")),(0,r.yg)("p",null,"\u6b64\u914d\u7f6e\u4e3a\u6bcf\u4e2a\u4f5c\u4e1a\u751f\u6210\u5355\u72ec\u7684\u65e5\u5fd7\u6587\u4ef6\uff0c\u4f8b\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"job-xxx1.log\njob-xxx2.log\njob-xxx3.log\n...\n")),(0,r.yg)("h3",{id:"\u914d\u7f6e\u6df7\u5408\u65e5\u5fd7\u6587\u4ef6"},"\u914d\u7f6e\u6df7\u5408\u65e5\u5fd7\u6587\u4ef6"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"\u9ed8\u8ba4\u5df2\u91c7\u7528\u6b64\u914d\u7f6e\u6a21\u5f0f\u3002")),(0,r.yg)("p",null,"\u8981\u5c06\u6240\u6709\u4f5c\u4e1a\u65e5\u5fd7\u8f93\u51fa\u5230 SeaTunnel Engine \u7cfb\u7edf\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"log4j2.properties")," \u6587\u4ef6\u4e2d\u66f4\u65b0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"...\nrootLogger.appenderRef.file.ref = fileAppender\n...\n\nappender.file.layout.pattern = [%X{ST-JID}] %d{yyyy-MM-dd HH:mm:ss,SSS} %-5p [%-30.30c{1.}] [%t] - %m%n\n...\n")),(0,r.yg)("h3",{id:"\u517c\u5bb9-log4j1logback"},"\u517c\u5bb9 Log4j1/Logback"),(0,r.yg)("p",null,"SeaTunnel Engine \u81ea\u52a8\u96c6\u6210\u4e86\u5927\u591a\u6570 Log \u6865\u63a5\u5668\uff0c\u5141\u8bb8\u9488\u5bf9 Log4j1/Logback \u7c7b\u5de5\u4f5c\u7684\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u7ee7\u7eed\u5de5\u4f5c\u3002"),(0,r.yg)("h3",{id:"rest-api\u65b9\u5f0f\u67e5\u8be2\u65e5\u5fd7"},"REST-API\u65b9\u5f0f\u67e5\u8be2\u65e5\u5fd7"),(0,r.yg)("p",null,"SeaTunnel \u63d0\u4f9b\u4e86\u4e00\u4e2a API\uff0c\u7528\u4e8e\u67e5\u8be2\u65e5\u5fd7\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u6837\u4f8b\uff1a")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u83b7\u53d6\u6240\u6709\u8282\u70b9jobId\u4e3a",(0,r.yg)("inlineCode",{parentName:"li"},"733584788375666689"),"\u7684\u65e5\u5fd7\u4fe1\u606f\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"http://localhost:8080/logs/733584788375666689")),(0,r.yg)("li",{parentName:"ul"},"\u83b7\u53d6\u6240\u6709\u8282\u70b9\u65e5\u5fd7\u5217\u8868\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"http://localhost:8080/logs")),(0,r.yg)("li",{parentName:"ul"},"\u83b7\u53d6\u6240\u6709\u8282\u70b9\u65e5\u5fd7\u5217\u8868\u4ee5JSON\u683c\u5f0f\u8fd4\u56de\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"http://localhost:8080/logs?format=json")),(0,r.yg)("li",{parentName:"ul"},"\u83b7\u53d6\u65e5\u5fd7\u6587\u4ef6\u5185\u5bb9\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"http://localhost:8080/logs/job-898380162133917698.log"))),(0,r.yg)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/seatunnel-engine/rest-api-v2"},"REST-API"),"\u3002"),(0,r.yg)("h2",{id:"seatunnel-\u65e5\u5fd7\u914d\u7f6e"},"SeaTunnel \u65e5\u5fd7\u914d\u7f6e"),(0,r.yg)("h3",{id:"\u5b9a\u65f6\u5220\u9664\u65e7\u65e5\u5fd7"},"\u5b9a\u65f6\u5220\u9664\u65e7\u65e5\u5fd7"),(0,r.yg)("p",null,"SeaTunnel \u652f\u6301\u5b9a\u65f6\u5220\u9664\u65e7\u65e5\u5fd7\u6587\u4ef6\uff0c\u4ee5\u907f\u514d\u78c1\u76d8\u7a7a\u95f4\u4e0d\u8db3\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel.yml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    history-job-expire-minutes: 1440\n    telemetry:\n      logs:\n        scheduled-deletion-enable: true\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"history-job-expire-minutes"),": \u8bbe\u7f6e\u5386\u53f2\u4f5c\u4e1a\u548c\u65e5\u5fd7\u7684\u4fdd\u7559\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09\u3002\u7cfb\u7edf\u5c06\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u540e\u81ea\u52a8\u6e05\u9664\u8fc7\u671f\u7684\u4f5c\u4e1a\u4fe1\u606f\u548c\u65e5\u5fd7\u6587\u4ef6\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"scheduled-deletion-enable"),": \u542f\u7528\u5b9a\u65f6\u6e05\u7406\u529f\u80fd\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),"\u3002\u7cfb\u7edf\u5c06\u5728\u4f5c\u4e1a\u8fbe\u5230 ",(0,r.yg)("inlineCode",{parentName:"li"},"history-job-expire-minutes")," \u8bbe\u7f6e\u7684\u8fc7\u671f\u65f6\u95f4\u540e\u81ea\u52a8\u5220\u9664\u76f8\u5173\u65e5\u5fd7\u6587\u4ef6\u3002\u5173\u95ed\u8be5\u529f\u80fd\u540e\uff0c\u65e5\u5fd7\u5c06\u6c38\u4e45\u4fdd\u7559\u5728\u78c1\u76d8\u4e0a\uff0c\u9700\u8981\u7528\u6237\u81ea\u884c\u7ba1\u7406\uff0c\u5426\u5219\u53ef\u80fd\u5f71\u54cd\u78c1\u76d8\u5360\u7528\u3002\u5efa\u8bae\u6839\u636e\u9700\u6c42\u5408\u7406\u914d\u7f6e\u3002")),(0,r.yg)("h2",{id:"\u5f00\u53d1\u4eba\u5458\u6700\u4f73\u5b9e\u8df5"},"\u5f00\u53d1\u4eba\u5458\u6700\u4f73\u5b9e\u8df5"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"org.slf4j.LoggerFactory#LoggerFactory.getLogger")," \u5e76\u4ee5\u60a8\u7684\u7c7b\u7684\u7c7b\u4f5c\u4e3a\u53c2\u6570\u6765\u521b\u5efa SLF4J \u8bb0\u5f55\u5668\u3002"),(0,r.yg)("p",null,"\u5f53\u7136\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 lombok \u6ce8\u89e3 ",(0,r.yg)("inlineCode",{parentName:"p"},"@Slf4j")," \u6765\u5b9e\u73b0\u540c\u6837\u7684\u6548\u679c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class TestConnector {\n    private static final Logger LOG = LoggerFactory.getLogger(TestConnector.class);\n\n    public static void main(String[] args) {\n        LOG.info("Hello world!");\n    }\n}\n')),(0,r.yg)("p",null,"\u4e3a\u4e86\u6700\u5927\u9650\u5ea6\u5730\u5229\u7528 SLF4J\uff0c\u5efa\u8bae\u4f7f\u7528\u5176\u5360\u4f4d\u7b26\u673a\u5236\u3002\u4f7f\u7528\u5360\u4f4d\u7b26\u53ef\u4ee5\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u5b57\u7b26\u4e32\u6784\u9020\uff0c\u4ee5\u9632\u65e5\u5fd7\u7ea7\u522b\u8bbe\u7f6e\u5f97\u592a\u9ad8\u800c\u5bfc\u81f4\u6d88\u606f\u65e0\u6cd5\u8bb0\u5f55\u3002"),(0,r.yg)("p",null,"\u5360\u4f4d\u7b26\u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'LOG.info("This message contains {} placeholders. {}", 1, "key1");\n')),(0,r.yg)("p",null,"\u5360\u4f4d\u7b26\u8fd8\u53ef\u4ee5\u4e0e\u9700\u8981\u8bb0\u5f55\u7684\u5f02\u5e38\u7ed3\u5408\u4f7f\u7528"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'try {\n    // some code\n} catch (Exception e) {\n    LOG.error("An {} occurred", "error", e);\n}\n')))}y.isMDXComponent=!0}}]);