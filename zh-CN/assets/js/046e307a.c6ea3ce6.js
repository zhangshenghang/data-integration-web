"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[72269],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,y=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return t?r.createElement(y,i(i({ref:n},g),{},{components:t})):r.createElement(y,i({ref:n},g))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const l={},i="Sentry",o={unversionedId:"connector-v2/sink/Sentry",id:"version-2.2.0-beta/connector-v2/sink/Sentry",title:"Sentry",description:"Description",source:"@site/versioned_docs/version-2.2.0-beta/connector-v2/sink/Sentry.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Sentry",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/sink/Sentry",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector-v2/sink/Sentry.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Redis",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/sink/Redis"},next:{title:"Socket",permalink:"/zh-CN/docs/2.2.0-beta/connector-v2/sink/Socket"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"dsn string",id:"dsn-string",level:3},{value:"env string",id:"env-string",level:3},{value:"release string",id:"release-string",level:3},{value:"cacheDirPath string",id:"cachedirpath-string",level:3},{value:"enableExternalConfiguration boolean",id:"enableexternalconfiguration-boolean",level:3},{value:"maxCacheItems number",id:"maxcacheitems-number",level:3},{value:"flushTimeoutMillis number",id:"flushtimeoutmillis-number",level:3},{value:"maxQueueSize number",id:"maxqueuesize-number",level:3},{value:"Example",id:"example",level:2}],g={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sentry"},"Sentry"),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Write message to Sentry."),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"schema projection"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"dsn"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"env"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"release"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cacheDirPath"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"enableExternalConfiguration"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"maxCacheItems"),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"flushTimeoutMills"),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"maxQueueSize"),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"dsn-string"},"dsn ","[string]"),(0,a.yg)("p",null,"The DSN tells the SDK where to send the events to."),(0,a.yg)("h3",{id:"env-string"},"env ","[string]"),(0,a.yg)("p",null,"specify the environment"),(0,a.yg)("h3",{id:"release-string"},"release ","[string]"),(0,a.yg)("p",null,"specify the release"),(0,a.yg)("h3",{id:"cachedirpath-string"},"cacheDirPath ","[string]"),(0,a.yg)("p",null,"the cache dir path for caching offline events"),(0,a.yg)("h3",{id:"enableexternalconfiguration-boolean"},"enableExternalConfiguration ","[boolean]"),(0,a.yg)("p",null,"if loading properties from external sources is enabled."),(0,a.yg)("h3",{id:"maxcacheitems-number"},"maxCacheItems ","[number]"),(0,a.yg)("p",null,"The max cache items for capping the number of events Default is 30"),(0,a.yg)("h3",{id:"flushtimeoutmillis-number"},"flushTimeoutMillis ","[number]"),(0,a.yg)("p",null,"Controls how many seconds to wait before flushing down. Sentry SDKs cache events from a background queue and this queue is given a certain amount to drain pending events Default is 15000 = 15s"),(0,a.yg)("h3",{id:"maxqueuesize-number"},"maxQueueSize ","[number]"),(0,a.yg)("p",null,"Max queue size before flushing events/envelopes to the disk"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'  Sentry {\n    dsn = "https://xxx@sentry.xxx.com:9999/6"\n    enableExternalConfiguration = true\n    maxCacheItems = 1000\n    env = prod\n  }\n\n')))}p.isMDXComponent=!0}}]);