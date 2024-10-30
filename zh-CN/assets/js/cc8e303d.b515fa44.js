"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[79048],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>c});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),u=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(g.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),y=a,c=m["".concat(g,".").concat(y)]||m[y]||s[y]||l;return n?r.createElement(c,i(i({ref:t},p),{},{components:n})):r.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},60152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const l={},i="Prometheus",o={unversionedId:"connector-v2/source/Prometheus",id:"connector-v2/source/Prometheus",title:"Prometheus",description:"Prometheus \u6570\u636e\u6e90\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/source/Prometheus.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Prometheus",permalink:"/zh-CN/docs/connector-v2/source/Prometheus",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/source/Prometheus.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"PostgreSQL",permalink:"/zh-CN/docs/connector-v2/source/PostgreSQL"},next:{title:"Apache Pulsar",permalink:"/zh-CN/docs/connector-v2/source/Pulsar"}},g={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u6e90\u9009\u9879",id:"\u6e90\u9009\u9879",level:2},{value:"url String",id:"url-string",level:3},{value:"query String",id:"query-string",level:3},{value:"query_type String",id:"query_type-string",level:3},{value:"params Map",id:"params-map",level:3},{value:"poll_interval_millis int",id:"poll_interval_millis-int",level:3},{value:"retry int",id:"retry-int",level:3},{value:"retry_backoff_multiplier_ms int",id:"retry_backoff_multiplier_ms-int",level:3},{value:"retry_backoff_max_ms int",id:"retry_backoff_max_ms-int",level:3},{value:"format String",id:"format-string",level:3},{value:"schema Config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"common options",id:"common-options",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Instant:",id:"instant",level:3},{value:"Range",id:"range",level:3},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],p={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"prometheus"},"Prometheus"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Prometheus \u6570\u636e\u6e90\u8fde\u63a5\u5668")),(0,a.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"\u7528\u4e8e\u8bfb\u53d6prometheus\u6570\u636e\u3002"),(0,a.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u6279\u5904\u7406")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u6d41\u5904\u7406")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u5e76\u884c"))),(0,a.yg)("h2",{id:"\u6e90\u9009\u9879"},"\u6e90\u9009\u9879"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"url"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"query"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"query_type"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"Instant")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"content_field"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"$.data.result.*")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"schema.fields"),(0,a.yg)("td",{parentName:"tr",align:null},"Config"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"format"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"json")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"params"),(0,a.yg)("td",{parentName:"tr",align:null},"Map"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"poll_interval_millis"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"retry"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"100")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"retry_backoff_max_ms"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"10000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"enable_multi_lines"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"config"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("h3",{id:"url-string"},"url ","[String]"),(0,a.yg)("p",null,"http \u8bf7\u6c42\u8def\u5f84\u3002"),(0,a.yg)("h3",{id:"query-string"},"query ","[String]"),(0,a.yg)("p",null,"Prometheus \u8868\u8fbe\u5f0f\u67e5\u8be2\u5b57\u7b26\u4e32"),(0,a.yg)("h3",{id:"query_type-string"},"query_type ","[String]"),(0,a.yg)("p",null,"Instant/Range"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Instant : \u7b80\u5355\u6307\u6807\u7684\u5373\u65f6\u67e5\u8be2\u3002"),(0,a.yg)("li",{parentName:"ol"},"Range : \u4e00\u6bb5\u65f6\u95f4\u5185\u6307\u6807\u6570\u636e\u3002")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/api/"},"https://prometheus.io/docs/prometheus/latest/querying/api/")),(0,a.yg)("h3",{id:"params-map"},"params ","[Map]"),(0,a.yg)("p",null,"http \u8bf7\u6c42\u53c2\u6570"),(0,a.yg)("h3",{id:"poll_interval_millis-int"},"poll_interval_millis ","[int]"),(0,a.yg)("p",null,"\u6d41\u6a21\u5f0f\u4e0b\u8bf7\u6c42HTTP API\u95f4\u9694(\u6beb\u79d2)"),(0,a.yg)("h3",{id:"retry-int"},"retry ","[int]"),(0,a.yg)("p",null,"The max retry times if request http return to ",(0,a.yg)("inlineCode",{parentName:"p"},"IOException")),(0,a.yg)("h3",{id:"retry_backoff_multiplier_ms-int"},"retry_backoff_multiplier_ms ","[int]"),(0,a.yg)("p",null,"\u8bf7\u6c42http\u8fd4\u56de\u5230' IOException '\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570"),(0,a.yg)("h3",{id:"retry_backoff_max_ms-int"},"retry_backoff_max_ms ","[int]"),(0,a.yg)("p",null,"http\u8bf7\u6c42\u5931\u8d25\uff0c\u6700\u5927\u91cd\u8bd5\u56de\u9000\u65f6\u95f4(\u6beb\u79d2)"),(0,a.yg)("h3",{id:"format-string"},"format ","[String]"),(0,a.yg)("p",null,"\u4e0a\u6e38\u6570\u636e\u7684\u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3ajson\u3002"),(0,a.yg)("h3",{id:"schema-config"},"schema ","[Config]"),(0,a.yg)("p",null,"\u6309\u7167\u5982\u4e0b\u586b\u5199\u4e00\u4e2a\u56fa\u5b9a\u503c"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'    schema = {\n        fields {\n            metric = "map<string, string>"\n            value = double\n            time = long\n            }\n        }\n\n')),(0,a.yg)("h4",{id:"fields-config"},"fields ","[Config]"),(0,a.yg)("p",null,"\u4e0a\u6e38\u6570\u636e\u7684\u6a21\u5f0f\u5b57\u6bb5"),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"\u6e90\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/source-common-options"},"Source Common Options")," \u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f"),(0,a.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.yg)("h3",{id:"instant"},"Instant:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Prometheus {\n    result_table_name = "http"\n    url = "http://mockserver:1080"\n    query = "up"\n    query_type = "Instant"\n    content_field = "$.data.result.*"\n    format = "json"\n    schema = {\n        fields {\n            metric = "map<string, string>"\n            value = double\n            time = long\n            }\n        }\n    }\n}\n')),(0,a.yg)("h3",{id:"range"},"Range"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Prometheus {\n    result_table_name = "http"\n    url = "http://mockserver:1080"\n    query = "up"\n    query_type = "Range"\n    content_field = "$.data.result.*"\n    format = "json"\n    start = "2024-07-22T20:10:30.781Z"\n    end = "2024-07-22T20:11:00.781Z"\n    step = "15s"\n    schema = {\n        fields {\n            metric = "map<string, string>"\n            value = double\n            time = long\n            }\n        }\n    }\n  }\n')),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"next-version"},"next version"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6dfb\u52a0Prometheus\u6e90\u8fde\u63a5\u5668"),(0,a.yg)("li",{parentName:"ul"},"\u51cf\u5c11\u914d\u7f6e\u9879")))}s.isMDXComponent=!0}}]);