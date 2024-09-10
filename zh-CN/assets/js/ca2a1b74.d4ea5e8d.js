"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[13032],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,y=u["".concat(c,".").concat(m)]||u[m]||g[m]||l;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const l={},o="Slack",i={unversionedId:"connector-v2/sink/Slack",id:"version-2.3.1/connector-v2/sink/Slack",title:"Slack",description:"Slack sink connector",source:"@site/versioned_docs/version-2.3.1/connector-v2/sink/Slack.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Slack",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/Slack",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.1/connector-v2/sink/Slack.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"SftpFile",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/SftpFile"},next:{title:"Socket",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/Socket"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"webhooks_url string",id:"webhooks_url-string",level:3},{value:"oauth_token string",id:"oauth_token-string",level:3},{value:"slack_channel string",id:"slack_channel-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],p={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"slack"},"Slack"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Slack sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to send data to Slack Channel. Both support streaming and batch mode."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For example, if the data from upstream is ","[",(0,r.yg)("inlineCode",{parentName:"p"},"age: 12, name: huan"),"]",", the content send to socket server is the following: ",(0,r.yg)("inlineCode",{parentName:"p"},'{"name":"huan","age":17}'))),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"exactly-once"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"webhooks_url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"oauth_token"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"slack_channel"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"webhooks_url-string"},"webhooks_url ","[string]"),(0,r.yg)("p",null,"Slack webhook url"),(0,r.yg)("h3",{id:"oauth_token-string"},"oauth_token ","[string]"),(0,r.yg)("p",null,"Slack oauth token used for the actual authentication"),(0,r.yg)("h3",{id:"slack_channel-string"},"slack_channel ","[string]"),(0,r.yg)("p",null,"slack channel for data write"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.1/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n SlackSink {\n  webhooks_url = "https://hooks.slack.com/services/xxxxxxxxxxxx/xxxxxxxxxxxx/xxxxxxxxxxxxxxxx"\n  oauth_token = "xoxp-xxxxxxxxxx-xxxxxxxx-xxxxxxxxx-xxxxxxxxxxx"\n  slack_channel = "channel name"\n }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"new-version"},"new version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Slack Sink Connector")))}g.isMDXComponent=!0}}]);