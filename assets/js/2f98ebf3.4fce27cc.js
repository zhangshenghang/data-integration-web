"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[35032],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,y=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={},l="Enterprise WeChat",o={unversionedId:"connector-v2/sink/Enterprise-WeChat",id:"version-2.3.5/connector-v2/sink/Enterprise-WeChat",title:"Enterprise WeChat",description:"Enterprise WeChat sink connector",source:"@site/versioned_docs/version-2.3.5/connector-v2/sink/Enterprise-WeChat.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Enterprise-WeChat",permalink:"/docs/2.3.5/connector-v2/sink/Enterprise-WeChat",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.5/connector-v2/sink/Enterprise-WeChat.md",tags:[],version:"2.3.5",frontMatter:{},sidebar:"docs",previous:{title:"Email",permalink:"/docs/2.3.5/connector-v2/sink/Email"},next:{title:"Feishu",permalink:"/docs/2.3.5/connector-v2/sink/Feishu"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url string",id:"url-string",level:3},{value:"mentioned_list array",id:"mentioned_list-array",level:3},{value:"mentioned_mobile_list array",id:"mentioned_mobile_list-array",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"enterprise-wechat"},"Enterprise WeChat"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Enterprise WeChat sink connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"A sink plugin which use Enterprise WeChat robot send message"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For example, if the data from upstream is ","[",(0,a.yg)("inlineCode",{parentName:"p"},'"alarmStatus": "firing", "alarmTime": "2022-08-03 01:38:49"\uff0c"alarmContent": "The disk usage exceeds the threshold"'),"]",", the output content to WeChat Robot is the following:"),(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre"},"alarmStatus: firing \nalarmTime: 2022-08-03 01:38:49\nalarmContent: The disk usage exceeds the threshold\n")),(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Tips: WeChat sink only support ",(0,a.yg)("inlineCode",{parentName:"strong"},"string")," webhook and the data from source will be treated as body content in web hook."))),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.5/concept/connector-v2-features"},"exactly-once"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"url"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"mentioned_list"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"mentioned_mobile_list"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"url-string"},"url ","[string]"),(0,a.yg)("p",null,"Enterprise WeChat webhook url format is ",(0,a.yg)("a",{parentName:"p",href:"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=XXXXXX%EF%BC%88string%EF%BC%89"},"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=XXXXXX\uff08string\uff09")),(0,a.yg)("h3",{id:"mentioned_list-array"},"mentioned_list ","[array]"),(0,a.yg)("p",null,"A list of userids to remind the specified members in the group (@ a member), @ all means to remind everyone. If the developer can't get the userid, he can use called",(0,a.yg)("em",{parentName:"p"}," mobile")," list"),(0,a.yg)("h3",{id:"mentioned_mobile_list-array"},"mentioned_mobile_list ","[array]"),(0,a.yg)("p",null,"Mobile phone number list, remind the group member corresponding to the mobile phone number (@ a member), @ all means remind everyone"),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.5/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"simple:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'WeChat {\n        url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"\n    }\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'WeChat {\n        url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"\n        mentioned_list=["wangqing","@all"]\n        mentioned_mobile_list=["13800001111","@all"]\n    }\n')),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add Enterprise-WeChat Sink Connector")),(0,a.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"[BugFix]"," Fix Enterprise-WeChat Sink data serialization (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2856"},"2856"),")")))}u.isMDXComponent=!0}}]);