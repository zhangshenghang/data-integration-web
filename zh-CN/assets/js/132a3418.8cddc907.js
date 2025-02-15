"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[28974],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=u(t),y=r,d=g["".concat(i,".").concat(y)]||g[y]||s[y]||l;return t?a.createElement(d,o(o({ref:n},p),{},{components:t})):a.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[g]="string"==typeof e?e:r,o[1]=c;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},27584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(58168),r=(t(96540),t(15680));const l={},o="Slack",c={unversionedId:"connector-v2/sink/Slack",id:"connector-v2/sink/Slack",title:"Slack",description:"Slack \u63a5\u6536\u5668\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Slack.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Slack",permalink:"/zh-CN/docs/connector-v2/sink/Slack",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Slack.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SftpFile",permalink:"/zh-CN/docs/connector-v2/sink/SftpFile"},next:{title:"Sls",permalink:"/zh-CN/docs/connector-v2/sink/Sls"}},i={},u=[{value:"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce",id:"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce",level:2},{value:"\u5173\u952e\u7279\u6027",id:"\u5173\u952e\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u793a\u4f8b:",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2},{value:"\u65b0\u7248\u672c",id:"\u65b0\u7248\u672c",level:3}],p={toc:u},g="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"slack"},"Slack"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Slack \u63a5\u6536\u5668\u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce"},"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"\u5173\u952e\u7279\u6027"},"\u5173\u952e\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"cdc"))),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u7528\u4e8e\u5c06\u6570\u636e\u53d1\u9001\u5230Slack Channel.\u4e24\u8005\u90fd\u652f\u6301\u6d41\u5a92\u4f53\u548c\u6279\u5904\u7406\u6a21\u5f0f."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4f8b\u5982\uff0c\u5982\u679c\u6765\u81ea\u4e0a\u6e38\u7684\u6570\u636e\u662f ","[",(0,r.yg)("inlineCode",{parentName:"p"},"age: 12, name: huan"),"]",", \u5219\u53d1\u9001\u5230\u5957\u63a5\u5b57\u670d\u52a1\u5668\u7684\u5185\u5bb9\u5982\u4e0b: ",(0,r.yg)("inlineCode",{parentName:"p"},'{"name":"huan","age":17}'))),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("p",null,"\u6240\u6709\u6570\u636e\u7c7b\u578b\u90fd\u6620\u5c04\u5230\u5b57\u7b26\u4e32."),(0,r.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"webhooks_url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Slack webhook \u7684 url")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"oauth_token"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5b9e\u9645\u8eab\u4efd\u9a8c\u8bc1\u7684Slack oauth\u4ee4\u724c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"slack_channel"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6570\u636e\u5199\u5165\u7684slack channel")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63a5\u6536\u5668\u63d2\u4ef6\u5e38\u7528\u53c2\u6570, \u8be6\u89c1 ",(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink-common-options"},"Sink \u5e38\u89c1\u9009\u9879"))))),(0,r.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,r.yg)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n SlackSink {\n  webhooks_url = "https://hooks.slack.com/services/xxxxxxxxxxxx/xxxxxxxxxxxx/xxxxxxxxxxxxxxxx"\n  oauth_token = "xoxp-xxxxxxxxxx-xxxxxxxx-xxxxxxxxx-xxxxxxxxxxx"\n  slack_channel = "channel name"\n }\n}\n')),(0,r.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,r.yg)("h3",{id:"\u65b0\u7248\u672c"},"\u65b0\u7248\u672c"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6dfb\u52a0 Slack \u63a5\u6536\u5668\u8fde\u63a5\u5668")))}s.isMDXComponent=!0}}]);