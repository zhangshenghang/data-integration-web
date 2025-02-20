"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[71925],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>s});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(t),m=a,s=g["".concat(c,".").concat(m)]||g[m]||y[m]||l;return t?r.createElement(s,o(o({ref:n},p),{},{components:t})):r.createElement(s,o({ref:n},p))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const l={},o="Socket",i={unversionedId:"connector-v2/sink/Socket",id:"connector-v2/sink/Socket",title:"Socket",description:"Socket \u6570\u636e\u63a5\u6536\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Socket.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Socket",permalink:"/zh-CN/docs/connector-v2/sink/Socket",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Socket.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Snowflake",permalink:"/zh-CN/docs/connector-v2/sink/Snowflake"},next:{title:"SQL Server",permalink:"/zh-CN/docs/connector-v2/sink/SqlServer"}},c={},u=[{value:"\u652f\u6301\u5f15\u64ce",id:"\u652f\u6301\u5f15\u64ce",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"Sink \u9009\u9879",id:"sink-\u9009\u9879",level:2},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u66f4\u6539\u65e5\u5fd7",id:"\u66f4\u6539\u65e5\u5fd7",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],p={toc:u},g="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"socket"},"Socket"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Socket \u6570\u636e\u63a5\u6536\u5668")),(0,a.yg)("h2",{id:"\u652f\u6301\u5f15\u64ce"},"\u652f\u6301\u5f15\u64ce"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Spark",(0,a.yg)("br",null),"\nFlink",(0,a.yg)("br",null),"\nSeaTunnel Zeta",(0,a.yg)("br",null))),(0,a.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,a.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"\u7528\u4e8e\u5411Socket Server\u53d1\u9001\u6570\u636e\u3002\u4e24\u8005\u90fd\u652f\u6301\u6d41\u5a92\u4f53\u548c\u6279\u5904\u7406\u6a21\u5f0f\u3002"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u4f8b\u5982\uff0c\u5982\u679c\u6765\u81ea\u4e0a\u6e38\u7684\u6570\u636e\u662f","[",(0,a.yg)("inlineCode",{parentName:"p"},"age:12\uff0cname:jared"),"]","\uff0c\u5219\u53d1\u9001\u5230Socket\u670d\u52a1\u5668\u7684\u5185\u5bb9\u5982\u4e0b\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},'{"name"\uff1a"jared"\uff0c"age"\uff1a17}'))),(0,a.yg)("h2",{id:"sink-\u9009\u9879"},"Sink \u9009\u9879"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u4f20"),(0,a.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"host"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"socket \u670d\u52a1\u5668\u4e3b\u673a")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"port"),(0,a.yg)("td",{parentName:"tr",align:null},"Integer"),(0,a.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"socket \u670d\u52a1\u5668\u7aef\u53e3")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,a.yg)("td",{parentName:"tr",align:null},"Integer"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,a.yg)("td",{parentName:"tr",align:null},"3"),(0,a.yg)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8bb0\u5f55\u7684\u91cd\u8bd5\u5931\u8d25\u6b21\u6570")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6e90\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8be6\u89c1","[Source common Options]","\uff08../sink common-Options.md\uff09")))),(0,a.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u8fd9\u662f\u5199\u5165Socket\u7aef\u7684\u968f\u673a\u751f\u6210\u6570\u636e")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n}\n\nsource {\n  FakeSource {\n    plugin_output = "fake"\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\nsink {\n  Socket {\n    host = "localhost"\n    port = 9999\n  }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u542f\u52a8\u7aef\u53e3\u4fa6\u542c")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"nc -l -v 9999\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u542f\u52a8SeaTunnel\u4efb\u52a1")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Socket \u670d\u52a1\u5668\u63a7\u5236\u53f0\u6253\u5370\u6570\u636e"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},'{"name":"jared","age":17}\n')),(0,a.yg)("h2",{id:"\u66f4\u6539\u65e5\u5fd7"},"\u66f4\u6539\u65e5\u5fd7"),(0,a.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6dfb\u52a0Socket \u6570\u636e\u63a5\u6536\u5668")))}y.isMDXComponent=!0}}]);